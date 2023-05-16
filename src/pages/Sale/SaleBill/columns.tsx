import type { ProColumns } from '@ant-design/pro-components'
import { ProFormDigitRange } from '@ant-design/pro-components'
import Operation from './components/Operation'
import { ShopEnum, StatusEnum } from './constants'
import type { IList } from './interface'
import UserSearch from '@/components/UserSearch'
import { dateRanges } from '@/constant/date'
import { isMobile } from '@/utils/browser'

export const generateColumns = (): Array<ProColumns<IList>> => [
  {
    title: '批次',
    dataIndex: 'batch',
    fixed: 'left',
    width: 100,
    renderFormItem: () => (
      <ProFormDigitRange fieldProps={{ controls: false, min: 0 }} />
    ),
  },
  {
    title: '门店',
    dataIndex: 'shop',
    valueType: 'select',
    valueEnum: ShopEnum,
    fixed: 'left',
    width: 80,
  },
  {
    title: '日期',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: (a, b) => a.time - b.time,
    width: 160,
  },
  {
    title: '客户',
    dataIndex: 'client',
    width: 100,
  },
  {
    title: '店员',
    dataIndex: 'clerk',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: StatusEnum,
    width: 120,
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '现金',
    dataIndex: 'cash',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '刷卡',
    dataIndex: 'creditCard',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '汇款',
    dataIndex: 'remittance',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '配货',
    dataIndex: 'distribution',
    width: 100,
  },
  {
    title: '配货员',
    dataIndex: 'stockist',
    valueType: 'select',
    renderFormItem: () => <UserSearch />,
    width: 100,
  },
  {
    title: '日期',
    dataIndex: 'time',
    valueType: 'dateRange',
    hideInTable: true,
    fieldProps: { ranges: dateRanges, inputReadOnly: isMobile() },
    colSize: 2,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 120,
  },
  {
    title: '操作',
    fixed: 'right',
    hideInSearch: true,
    width: 130,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} />
    ),
  },
]
