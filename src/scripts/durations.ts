import { entryDuration, yearsSince } from '../lib/duration';

function updateDurations(): void {
  const now = new Date();

  document.querySelectorAll<HTMLElement>('[data-duration-start]').forEach((el) => {
    const start = el.dataset.durationStart;
    const end = el.dataset.durationEnd ?? 'present';
    if (!start) return;
    el.textContent = entryDuration(start, end, now);
  });

  document.querySelectorAll<HTMLElement>('[data-years-since]').forEach((el) => {
    const start = el.dataset.yearsSince;
    if (!start) return;
    el.textContent = String(yearsSince(start, now));
  });

  document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((el) => {
    el.textContent = String(now.getFullYear());
  });
}

updateDurations();
