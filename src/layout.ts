type column = (string|undefined)[];
type row = column[];

class Layout {
  private data: row = [[]];

  constructor() {

  }

  static getInstance() {
    return new Layout();
  }

  isColFilled(col: number) {
    return this.data.find(row => !!row?.[col]);
  }

  getWriting(x: number, y: number): string | null {
    return this.data[y]?.[x] ?? null;
  }

  write(str: string, x: number, y: number) {
    str.split("").forEach((char, index) => {
      if (!this.data[y]) this.data[y] = [];
      this.data[y][x + index] = char;
    });
  }

  get(x = 0, y = 0) {
    return this.data[y][x];
  }
}

export default Layout.getInstance();
