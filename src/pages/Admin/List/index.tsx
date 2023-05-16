import data from './_mock'
import { generateColumns } from './columns'
import CreateButton from './components/CreateButton'
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
      toolBarRender={() => [<CreateButton key='create' />]}
      request={getList}
    />
  )
}

export default SaleBill
