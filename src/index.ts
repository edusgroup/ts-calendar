function getWeekDay (day: number) {
  return day === 0 ? 7 : day
}

export function getCalendar (date: Date) {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const tmpDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const beforeDates = []
  let count = getWeekDay(tmpDate.getDay()) - 1
  if (count > 0) {
    const lastDayPreMonth = new Date(date.getFullYear(), date.getMonth(), -count)
    let time = lastDayPreMonth.getTime()
    for (let dateIndex = 1; dateIndex <= count; dateIndex += 1) {
      lastDayPreMonth.setTime(time + dateIndex * 24 * 60 * 60 * 1000)
      beforeDates.push(lastDayPreMonth.getDate())
    }
  }

  return {
    before: beforeDates, count: lastDay.getDate()
  }
}
