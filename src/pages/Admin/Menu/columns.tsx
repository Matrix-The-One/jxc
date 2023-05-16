import type { ProColumns } from '@ant-design/pro-components'
import Operation from './components/Operation'
import { ShowEnum } from './constants'
import type { IList } from './interface'

export const generateColumns = (): Array<ProColumns<IList>> => [
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '路径',
    dataIndex: 'path',
    width: 160,
  },
  {
    title: '组件',
    dataIndex: 'component',
    width: 100,
  },
  {
    title: '图标',
    dataIndex: 'icon',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '是否显示',
    dataIndex: 'show',
    valueType: 'select',
    valueEnum: ShowEnum,
    width: 80,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    hideInSearch: true,
    sorter: (a, b) => a.sort - b.sort,
    width: 80,
  },
  {
    title: '操作',
    fixed: 'right',
    hideInSearch: true,
    width: 100,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} />
    ),
  },
]
