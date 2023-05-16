import type { ProColumns } from '@ant-design/pro-components'
import Operation from './components/Operation'
import { StatusEnum } from './constants'
import type { IList } from './interface'
import { dateRanges } from '@/constant/date'
import { isMobile } from '@/utils/browser'

export const generateColumns = (): Array<ProColumns<IList>> => [
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '角色描述',
    dataIndex: 'desc',
    width: 120,
  },
  {
    title: '是否启用',
    dataIndex: 'enable',
    valueType: 'select',
    valueEnum: StatusEnum,
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: (a, b) => a.time - b.time,
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    valueType: 'dateRange',
    hideInTable: true,
    fieldProps: { ranges: dateRanges, inputReadOnly: isMobile() },
    colSize: 2,
  },
  {
    title: '操作',
    fixed: 'right',
    hideInSearch: true,
    width: 120,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} />
    ),
  },
]
