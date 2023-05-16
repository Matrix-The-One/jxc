import { Space } from 'antd'
import type { OperationProps } from '../../interface'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import OfflineButton from './OfflineButton'
import OnlineButton from './OnlineButton'

const Operation: React.FC<OperationProps> = ({ record: { enable } }) => {
  return (
    <Space wrap size='small'>
      <EditButton />
      {
        {
          true: <OfflineButton />,
          false: <OnlineButton />,
        }[enable as string]
      }
      <DeleteButton />
    </Space>
  )
}

export default Operation
