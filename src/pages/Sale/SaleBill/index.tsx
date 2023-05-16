import { Space } from 'antd'
import data from './_mock'
import { generateColumns } from './columns'
import CreateButton from './components/CreateButton'
import Title from './components/Title'
import ProTable from '@/components/ProTable'

const getList = async () =>
  await new Promise<any>(r => {
    setTimeout(() => r(data), 500)
  })

const SaleBill = () => {
  const columns = generateColumns()

  return (
    <ProTable
      size='small'
      columns={columns}
      scroll={{ y: 350 }}
      scrollAutoParams={{ enable: true }}
      // headerTitle={<Title />}
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
      toolBarRender={() => [<CreateButton key='create' />]}
      request={getList}
    />
  )
}

export default SaleBill
