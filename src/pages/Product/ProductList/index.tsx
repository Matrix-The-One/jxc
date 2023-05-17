import { Space } from 'antd'
import type { ProTableProps } from '@ant-design/pro-components'
import data from './_mock'
import { generateColumns } from './columns'
import CreateButton from './components/CreateButton'
import Title from './components/Title'
import ProTable from '@/components/ProTable'

const getList = async () =>
  await new Promise<any>(r => {
    setTimeout(() => r(data), 500)
  })

interface ProductProps extends ProTableProps<any, any> {
  scene?: 'select'
}

const Product: React.FC<ProductProps> = ({ scene, ...rest }) => {
  const isSelect = scene === 'select'
  const columns = generateColumns({ scene })

  return (
    <ProTable
      scrollAuto
      size='small'
      columns={columns}
      headerTitle={!isSelect && <Title />}
      rowSelection={{}}
      tableAlertRender={({
        selectedRowKeys,
        selectedRows,
        onCleanSelected,
      }) => {
        console.log(selectedRowKeys, selectedRows)

        return (
          <Space>
            <span>已选 {selectedRowKeys.length} 项</span>
            <a onClick={onCleanSelected}>取消选择</a>
          </Space>
        )
      }}
      toolBarRender={() => [<CreateButton key='create' />]}
      tableAlertOptionRender={() => {
        return (
          <Space>
            <a>批量上架</a>
            <a>批量下架</a>
            <a>批量调价</a>
            <a>批量删除</a>
          </Space>
        )
      }}
      request={getList}
      {...rest}
    />
  )
}

export default Product
