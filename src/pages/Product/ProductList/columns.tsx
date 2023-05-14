import type { ProColumns } from '@ant-design/pro-components'
import Operation from './components/Operation'
import {
  BrandEnum,
  CategoryEnum,
  ColorEnum,
  SeasonEnum,
  SizeEnum,
  StatusEnum,
} from './constants'
import type { IList } from './interface'
import UserSearch from '@/components/UserSearch'
import { dateRanges } from '@/constant/date'
import { isMobile } from '@/utils/browser'

interface GenerateColumnsParams {
  scene?: 'select'
}

export const generateColumns = ({
  scene,
}: GenerateColumnsParams): Array<ProColumns<IList>> => [
  {
    title: '厂商',
    dataIndex: 'manufacturer',
    fixed: 'left',
    width: 100,
  },
  {
    title: '类别',
    dataIndex: 'category',
    valueType: 'select',
    valueEnum: CategoryEnum,
    width: 80,
  },
  {
    title: '图',
    dataIndex: 'pic',
    valueType: 'image',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '是否有图',
    dataIndex: 'isPic',
    valueType: 'select',
    valueEnum: { true: '有', false: '无' },
    hideInTable: true,
    width: 80,
  },
  {
    title: '款号',
    dataIndex: 'modelNo',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '名称',
    dataIndex: 'name',
    hideInSearch: true,
    width: 160,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: StatusEnum,
    width: 80,
  },
  {
    title: '进货价',
    dataIndex: 'purchasePrice',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '零批价',
    dataIndex: 'retailPrice',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '打包',
    dataIndex: 'packPrice',
    valueType: 'digit',
    hideInSearch: true,
    width: 80,
  },
  {
    title: '颜色',
    dataIndex: 'color',
    valueType: 'select',
    valueEnum: ColorEnum,
    width: 80,
  },
  {
    title: '尺码',
    dataIndex: 'size',
    valueType: 'select',
    valueEnum: SizeEnum,
    width: 80,
  },
  {
    title: '经办人',
    dataIndex: 'operator',
    valueType: 'select',
    renderFormItem: () => <UserSearch />,
    width: 100,
  },
  {
    title: '品牌',
    dataIndex: 'brand',
    valueType: 'select',
    valueEnum: BrandEnum,
    width: 100,
  },
  {
    title: '季节',
    dataIndex: 'season',
    valueType: 'select',
    valueEnum: SeasonEnum,
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: (a, b) => a.time - b.time,
    width: 160,
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
    width: scene === 'select' ? 70 : 150,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} scene={scene} />
    ),
  },
]
