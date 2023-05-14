import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Button, Row, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {
  FooterToolbar,
  ProForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components'
import type { ProFormInstance } from '@ant-design/pro-components'
import dayjs from 'dayjs'
import ScanCode from '@/components/ScanCode'
import ProFormUploadButton from '@/components/Upload/ProFormUploadButton'
import { isMobile } from '@/utils/browser'

const getColFlex = (colSpan: number, span: number) => {
  const width = (((24 / colSpan) * span) / 24) * 100
  return `0 0 ${width}%`
}

const ProductEdit = () => {
  const formRef = useRef<ProFormInstance>()

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to='/product'>货品管理</Link>,
          },
          {
            title: '新增货品',
          },
        ]}
        style={{ marginBlockEnd: 10 }}
      />
      <ProForm
        grid
        formRef={formRef}
        // layout='inline'
        // labelCol={{ flex: '0 1 80px' }}
        layout='horizontal'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        autoFocusFirstInput={false}
        initialValues={{ p8: dayjs(), p9: dayjs().year(), p13: 10 }}
        submitter={{
          render: (_, dom) => (
            <Row justify='center' style={{ marginBlockStart: 10 }}>
              <Space>{dom}</Space>
            </Row>
          ),
        }}
        style={{ background: '#fff', padding: '12px 24px', borderRadius: 6 }}
      >
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
        <ProFormSelect
          label='品牌'
          name='p3'
          colProps={{ span: 20 }}
          labelCol={{ flex: getColFlex(20, 4) }}
          wrapperCol={{ flex: getColFlex(20, 16) }}
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
        <ProFormSelect
          mode='tags'
          label='颜色'
          name='p4'
          rules={[{ required: true }]}
          valueEnum={{
            红色: '红色',
            绿色: '绿色',
            黄色: '黄色',
          }}
          placeholder='均色均码不填'
        />
        <ProFormSelect
          mode='tags'
          label='尺码'
          name='p5'
          rules={[{ required: true }]}
          valueEnum={{
            S: 'S',
            M: 'M',
            L: 'L',
            XL: 'XL',
            XXL: 'XXL',
          }}
          placeholder='均色均码不填'
        />
        <ProFormText
          label='条码'
          name='p6'
          colProps={{ span: 20 }}
          labelCol={{ flex: getColFlex(20, 4) }}
          wrapperCol={{ flex: getColFlex(20, 16) }}
        />
        <ScanCode
          style={{ marginLeft: 10, marginBlockEnd: 8, color: '#1890ff' }}
        />
        <ProFormTextArea
          label='库存录入'
          name='p7'
          placeholder='先设置颜色尺码，再录入库存'
        />
        <ProFormDatePicker
          label='上架日期'
          name='p8'
          rules={[{ required: true }]}
          fieldProps={{ inputReadOnly: isMobile(), style: { width: '100%' } }}
        />
        <ProFormDigit
          label='年份'
          name='p9'
          min={0}
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          label='进货价'
          name='p10'
          min={0}
          fieldProps={{ precision: 2 }}
        />
        <ProFormDigit
          label='零售价'
          name='p11'
          min={0}
          fieldProps={{ precision: 2 }}
        />
        <ProFormDigit
          label='打包价'
          name='p12'
          min={0}
          fieldProps={{ precision: 2 }}
        />
        <ProFormDigit
          label='产品折扣'
          name='p13'
          min={0}
          max={10}
          fieldProps={{ precision: 2 }}
        />
        <ProFormSelect
          label='季节'
          name='p14'
          valueEnum={{
            SPRING: '春',
            SUMMER: '夏',
            AUTUMN: '秋',
            WINTER: '冬',
          }}
        />
        <ProFormSelect
          label='风格'
          name='p15'
          valueEnum={{
            1: '中国风',
            2: '韩式潮流',
            3: '日式简约',
            4: '美式嘻哈',
          }}
        />
        <ProFormSelect
          label='面料'
          name='p16'
          valueEnum={{
            SPRING: '纯棉',
            SUMMER: '纤维',
            AUTUMN: '涤纶',
            WINTER: '羊毛',
          }}
        />
        <ProFormTextArea label='备注' name='p17' />
        <ProFormUploadButton
          label='图片/视频'
          name='p18'
          max={5}
          fieldProps={{ multiple: true, maxCount: 5 }}
        />
      </ProForm>
    </>
  )
}

export default ProductEdit
