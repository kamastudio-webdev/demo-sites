// The federal filing deadline: April 15, moved to the next business day
// when it lands on a weekend or on Emancipation Day (a Washington, DC holiday).

const DAY = 86_400_000;

function addDays(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

function isWeekend(d: Date) {
  return d.getDay() === 0 || d.getDay() === 6;
}

function sameDay(a: Date, b: Date) {
  return a.toDateString() === b.toDateString();
}

export function deadlineFor(year: number) {
  let holiday = new Date(year, 3, 16);
  if (holiday.getDay() === 6) holiday = new Date(year, 3, 15);
  if (holiday.getDay() === 0) holiday = new Date(year, 3, 17);
  let d = new Date(year, 3, 15);
  while (isWeekend(d) || sameDay(d, holiday)) d = addDays(d, 1);
  return d;
}

export function extensionFor(year: number) {
  let d = new Date(year, 9, 15);
  while (isWeekend(d)) d = addDays(d, 1);
  return d;
}

export function nextDeadline(today = new Date()) {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let year = start.getFullYear();
  if (deadlineFor(year) < start) year += 1;
  const due = deadlineFor(year);
  return {
    due,
    extension: extensionFor(year),
    taxYear: year - 1,
    days: Math.round((due.getTime() - start.getTime()) / DAY),
  };
}

export const longDate = (d: Date) =>
  d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
