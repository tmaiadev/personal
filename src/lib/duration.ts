export function parseMonth(value: string): Date {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, (month ?? 1) - 1, 1);
}

export function monthsBetween(start: Date, end: Date): number {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  if (parts.length === 0) return '0 mos';
  return parts.join(' ');
}

export function entryDuration(start: string, end: string | 'present', now: Date = new Date()): string {
  const startDate = parseMonth(start);
  const endDate = end === 'present' ? now : parseMonth(end);
  return formatDuration(monthsBetween(startDate, endDate));
}

export function yearsSince(start: string, now: Date = new Date()): number {
  return Math.floor(monthsBetween(parseMonth(start), now) / 12);
}

export function formatMonthYear(value: string): string {
  return parseMonth(value).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}
