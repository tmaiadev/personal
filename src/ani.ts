type Frame = (frameIndex: number) => void;

export default class Ani {
  public fps = 24;
  public started = false;
  public ended = false;
  public paused = true;
  public loop = false;
  public frames: (Frame | null)[] = [];
  public runFrameOnce = false;
  public neverSkipFrame = false;
  private startTime = -1;
  private framesRan: number[] = [];

  /* Playback methods */
  start() {
    this.started = true;
    this.paused = false;
    this.startTime = Date.now();
  }

  pause() {
    this.paused = true;
  }

  stop() {
    this.started = false;
    this.ended = false;
    this.paused = true;
  }

  /* Frame building methods */
  schedule(ms: number, cb: Frame) {
    const frameDurMs = 1000 / this.fps;
    const keyframe = Math.ceil(ms / frameDurMs);
    this.frames[keyframe] = cb;
  }

  ease(durationMs: number, cb: (t: number) => void) {
    const frameDurMs = 1000 / this.fps;
    const nFrames = Math.ceil(durationMs / frameDurMs);
    const indexStart = this.frames.length;

    for (let i = 0; i < nFrames; i++) {
      this.frames[indexStart + i] = cb.bind(cb, i / (nFrames - 1));
    }
  }

  /* Lifecycle Methods */
  update() {
    if (!this.started || this.paused || this.ended) return;

    const elapsedTime = Date.now() - this.startTime;
    const frameDurMs = 1000 / this.fps;
    let frameIndex = Math.floor(elapsedTime / frameDurMs);

    if (frameIndex >= this.frames.length) {
      if (this.loop) {
        const totalDur = this.frames.length * frameDurMs;
        const overtime = elapsedTime - totalDur;
        this.startTime = Date.now() - overtime;
        frameIndex = Math.floor(overtime / frameDurMs);
        this.framesRan = [];
      } else {
        this.ended = true;
        this.paused = true;
        return;
      }
    }

    const frame = this.frames[frameIndex];
    if (!frame) return;

    if (this.runFrameOnce) {
      const hasNotRan = this.framesRan.indexOf(frameIndex) === -1;
      if (hasNotRan) {
        this.framesRan.push(frameIndex);
        frame(frameIndex);
      }
    } else if (this.neverSkipFrame) {
      for (let i = 0; i <= frameIndex; i++) {
        const hasNotRan = this.framesRan.indexOf(i) === -1;
        if (hasNotRan) {
          this.framesRan.push(i);
          this.frames[i]?.(i);
        }
      }
    } else {
      frame(frameIndex);
    }
  }
}
