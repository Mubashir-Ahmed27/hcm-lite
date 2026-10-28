import { DateTime } from 'luxon';
export const round2 = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;
export const localDate = (at: Date, zone: string) => DateTime.fromJSDate(at).setZone(zone).toISODate()!;
export const isWorkingDay = (date: string, weekendDays: number[], zone = 'Asia/Karachi') => !weekendDays.includes(DateTime.fromISO(date, { zone }).weekday);
export const workingDates = (start: string, end: string, weekendDays: number[], holidays: string[] = []) => { const dates: string[]=[]; for(let d=DateTime.fromISO(start); d<=DateTime.fromISO(end); d=d.plus({days:1})) { const v=d.toISODate()!; if(isWorkingDay(v,weekendDays) && !holidays.includes(v)) dates.push(v); } return dates; };
