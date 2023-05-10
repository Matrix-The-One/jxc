import { Space } from 'antd'
import data from './_mock'
import { generateColumns } from './columns'
import Title from './components/Title'
import ProTable from '@/components/ProTable'

const getList = async () =>
  await new Promise<any>(r => {
    setTimeout(() => r(data), 500)
  })

const Product = () => {
  const columns = generateColumns()

  return (
    <ProTable
      size='small'
      columns={columns}
      scroll={{ y: 350 }}
      headerTitle={<Title />}
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
      tableAlertOptionRender={() => {
        return (
          <Space>
            <a>批量调价</a>
            <a>批量删除</a>
          </Space>
        )
      }}
      request={getList}
    />
  )
}

export default Product
