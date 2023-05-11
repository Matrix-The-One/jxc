import { Button, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {
  FooterToolbar,
  PageContainer,
  ProCard,
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components'
import ScanCode from '@/components/ScanCode'

const getColRatio = (colSpan: number, span: number) => {
  return `0 0 calc((24 / ${colSpan}) * ${span} / 24 * 100%)`
}

const ProductEdit = () => {
  return (
    <PageContainer>
      <ProForm
        grid
        // layout='inline'
        // labelCol={{ flex: '0 1 80px' }}
        layout='horizontal'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        submitter={{
          render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        }}
      >
        <ProCard>
          <ProFormText
            label='款号'
            name='p1'
            rules={[{ required: true }]}
            placeholder='KKL901(品牌+款号)等'
          />
          <ProFormText
            label='名称'
            name='p2'
            rules={[{ required: true }]}
            placeholder='豹纹打底衫等'
          />
          <Row wrap={false}>
            <ProFormSelect
              label='品牌'
              name='p3'
              colProps={{ span: 20 }}
              labelCol={{ flex: getColRatio(20, 4) }}
              wrapperCol={{ flex: getColRatio(20, 16) }}
              valueEnum={{
                Adidas: '阿迪达斯',
                Nike: '耐克',
              }}
              fieldProps={{ showSearch: true }}
            />
            <Button
              type='primary'
              icon={<PlusOutlined />}
              style={{ marginLeft: 10 }}
            >
              新增
            </Button>
          </Row>
          <ProFormText
            label='颜色'
            name='p4'
            rules={[{ required: true }]}
            placeholder='均色均码不填'
          />
          <ProFormText
            label='尺码'
            name='p5'
            rules={[{ required: true }]}
            placeholder='均色均码不填'
          />
          <Row wrap={false}>
            <ProFormText
              label='条码'
              name='p6'
              colProps={{ span: 20 }}
              labelCol={{ flex: getColRatio(20, 4) }}
              wrapperCol={{ flex: getColRatio(20, 16) }}
            />
            <ScanCode
              style={{ marginLeft: 10, marginBlockEnd: 24, color: '#1890ff' }}
            />
          </Row>
        </ProCard>
      </ProForm>
    </PageContainer>
  )
}

export default ProductEdit
