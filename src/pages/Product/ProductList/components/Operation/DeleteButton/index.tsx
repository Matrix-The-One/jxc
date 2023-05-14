import { Button, Popconfirm } from 'antd'

const DeleteButton = () => {
  return (
    <Popconfirm
      title='确定要删除此商品么？'
      okText='确认'
      cancelText='取消'
      placement='topRight'
    >
      <Button type='link' size='small' style={{ padding: 0 }}>
        删除
      </Button>
    </Popconfirm>
  )
}

export default DeleteButton
