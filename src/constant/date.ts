import moment from 'moment'

export enum Date_Range_Enum {
  TODAY = '今天',
  YESTERDAY = '昨天',
  WEEK = '本周',
  LAST_WEEK = '上周',
  MONTH = '本月',
  LAST_MONTH = '上月',
  QUARTER = '本季度',
  LAST_QUARTER = '上季度',
  YEAR = '今年',
  LAST_YEAR = '去年',
}

export const dateRanges = {
  [Date_Range_Enum.TODAY]: [moment(), moment()],
  [Date_Range_Enum.YESTERDAY]: [
    moment().subtract(1, 'day'),
    moment().subtract(1, 'day'),
  ],
  [Date_Range_Enum.WEEK]: [moment().startOf('week'), moment()],
  [Date_Range_Enum.LAST_WEEK]: [
    moment().subtract(1, 'week').startOf('week'),
    moment().subtract(1, 'week').endOf('week'),
  ],
  [Date_Range_Enum.MONTH]: [moment().startOf('month'), moment()],
  [Date_Range_Enum.LAST_MONTH]: [
    moment().subtract(1, 'month').startOf('month'),
    moment().subtract(1, 'month').endOf('month'),
  ],
  [Date_Range_Enum.QUARTER]: [moment().startOf('quarter'), moment()],
  [Date_Range_Enum.LAST_QUARTER]: [
    moment().subtract(1, 'quarter').startOf('quarter'),
    moment().subtract(1, 'quarter').endOf('quarter'),
  ],
  [Date_Range_Enum.YEAR]: [moment().startOf('year'), moment()],
  [Date_Range_Enum.LAST_YEAR]: [
    moment().subtract(1, 'year').startOf('year'),
    moment().subtract(1, 'year').endOf('year'),
  ],
}
