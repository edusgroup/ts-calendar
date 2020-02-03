export type TCalendarResult = {
  before: {
    count: number
    start: number
  },
  now: {
    end: number
  }
}

function getWeekDay (day: number) {
  return day === 0 ? 7 : day
}

/**
 * Возвращет модель месяца
 *
 * @param date Для какого года и месяца построить модель
 */
export function getCalendar (date: Date): TCalendarResult {
  const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDayPreMonth = new Date(date.getFullYear(), date.getMonth(), 0)
  const countOfPrevDaysOfCurrentMonthInWeek = getWeekDay(firstDayOfCurrentMonth.getDay()) - 1

  return {
    before: {
      start: countOfPrevDaysOfCurrentMonthInWeek <= 0 ? 0 : (lastDayPreMonth.getDate() - countOfPrevDaysOfCurrentMonthInWeek + 1),
      count: countOfPrevDaysOfCurrentMonthInWeek,
    },
    now: {
      end: lastDayOfCurrentMonth.getDate()
    }
  }
}
