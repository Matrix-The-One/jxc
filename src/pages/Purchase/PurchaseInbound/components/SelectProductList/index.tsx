import { useState } from 'react'
import { Button, Drawer, Input, Space } from 'antd'
import ProductList from '@/pages/Product/ProductList'

interface SelectProductListProps {
  value?: any
  onChange?: (p: any) => void
}

const SelectProductList: React.FC<SelectProductListProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false)
  const [selectProduct, setSelectProduct] = useState()

  return (
    <>
      <Input
        value={value?.name}
        onClick={() => setOpen(true)}
        onFocus={e => e.target.blur()}
        placeholder='选择货品'
      />
      <Drawer
        open={open}
        title='选择货品'
        destroyOnClose
        maskClosable={false}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>取消</Button>
            <Button
              onClick={() => {
                onChange?.(selectProduct)
                setOpen(false)
              }}
              type='primary'
            >
              确认
            </Button>
          </Space>
        }
        width={800}
        onClose={() => setOpen(false)}
      >
        <ProductList
          scene='select'
          rowSelection={{
            type: 'radio',
            onChange: (_, selectedRows) => setSelectProduct(selectedRows[0]),
          }}
          tableAlertRender={void 0}
          tableAlertOptionRender={void 0}
        />
      </Drawer>
    </>
  )
}

export default SelectProductList
