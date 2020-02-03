import { getCalendar } from '../src'

test('calendar 01.03.2020', () => {
  expect(getCalendar(new Date(2020, 2))).toEqual({
      before: { start: 24, count: 6 },
      now: { end: 31 },
    }
  )
})

test('calendar 01.02.2020', () => {
  expect(getCalendar(new Date(2020, 1))).toEqual({
      before: { start: 27, count: 5 },
      now: { end: 29 },
    }
  )
})

test('calendar 01.10.2012', () => {
  expect(getCalendar(new Date(2012, 9))).toEqual({
      before: { start: 0, count: 0 },
      now: { end: 31 },
    }
  )
})
