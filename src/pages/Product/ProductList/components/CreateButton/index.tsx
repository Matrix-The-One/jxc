import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { history } from '@umijs/max'

const CreateButton = () => {
  return (
    <Button
      type='primary'
      icon={<PlusOutlined />}
      onClick={() => history.push('/product/create')}
    >
      新增货品
    </Button>
  )
}

export default CreateButton
