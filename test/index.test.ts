import { getCalendar } from '../src'

test('calendar 01.02.2020', () => {
  expect(getCalendar(new Date(2020, 1))).toEqual({
      before: [27, 28, 29, 30, 31],
      count: 29,
    }
  )
})

test('calendar 01.10.2012', () => {
  expect(getCalendar(new Date(2012, 9))).toEqual({
      before: [],
      count: 31,
    }
  )
})
