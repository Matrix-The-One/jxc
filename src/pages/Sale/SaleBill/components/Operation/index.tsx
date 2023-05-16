import { Space } from 'antd'
import type { OperationProps } from '../../interface'
import CopyButton from './CopyButton'
import DeleteButton from './DeleteButton'
import DetailButton from './DetailButton'
import EditButton from './EditButton'
import OfflineButton from './OfflineButton'
import OnlineButton from './OnlineButton'

const Operation: React.FC<OperationProps> = ({ record: { status }, scene }) => {
  if (scene === 'select') return <DetailButton />

  return (
    <Space wrap size='small'>
      <DetailButton />
      {status === 3 && <EditButton />}
      {/* <CopyButton /> */}
      {/* {
        {
          ONLINE: <OfflineButton />,
          OFFLINE: <OnlineButton />,
        }[status as string]
      } */}
      <DeleteButton />
    </Space>
  )
}

export default Operation
