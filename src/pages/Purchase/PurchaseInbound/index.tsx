import { useRef, useState } from 'react'
import { Button, Col, Image, Row, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {
  EditableProTable,
  FooterToolbar,
  ProForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components'
import type {
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components'
import SelectProductList from './components/SelectProductList'
import dayjs from 'dayjs'
import { produce } from 'immer'
import { omit } from 'lodash'
// import ProFormUploadButton from '@/components/Upload/ProFormUploadButton'
import { isMobile } from '@/utils/browser'

const PurchaseInbound = () => {
  const form = useRef<ProFormInstance>()
  const editableFormRef = useRef<EditableFormInstance>()
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([])

  const columns: ProColumns<any>[] = [
    {
      title: '图片',
      dataIndex: 'pic',
      fixed: 'left',
      width: 80,
      renderFormItem: (_, { record: { pic } }) => {
        return pic ? (
          <Image src={pic} width={50} />
        ) : (
          <Image
            width={50}
            src='error'
            preview={false}
            fallback='data:image/png;base64,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'
          />
        )
      },
    },
    {
      title: '货品',
      key: 'state',
      dataIndex: 'state',
      width: 120,
      renderFormItem: (_, { record: { id } }) => (
        <SelectProductList
          onChange={value => {
            const rowData = editableFormRef.current.getRowData(id)
            editableFormRef.current.setRowData(id, {
              ...rowData,
              ...omit(value, 'id'),
            })
          }}
        />
      ),
    },
    {
      title: '颜色',
      dataIndex: 'color',
      width: 100,
    },
    {
      title: '尺码',
      dataIndex: 'size',
      width: 100,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      width: 100,
    },
    {
      title: '单价',
      dataIndex: 'price',
      width: 100,
    },
    {
      title: '小计',
      dataIndex: 'total',
      width: 100,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 100,
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 100,
    },
  ]

  return (
    <ProForm
      grid
      formRef={form}
      onValuesChange={console.log}
      layout='horizontal'
      labelCol={{ flex: '0 1 auto' }}
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
      <Col span={6} style={{ display: 'flex', paddingInline: 0 }}>
        <ProFormText
          label='厂商'
          name='p1'
          colProps={{ flex: '0 1 auto' }}
          rules={[{ required: true }]}
        />
        <Button
          type='primary'
          style={{ height: 31.6, paddingInline: 8, marginInlineEnd: 4 }}
        >
          <PlusOutlined style={{ marginBlockEnd: 8 }} />
        </Button>
      </Col>
      <ProFormText
        label='店员'
        name='p2'
        colProps={{ span: 6 }}
        rules={[{ required: true }]}
      />
      <ProFormDigit
        label='结余'
        name='p3'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='微信'
        name='p4'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDatePicker
        label='日期'
        name='p5'
        colProps={{ span: 6 }}
        rules={[{ required: true }]}
        fieldProps={{ inputReadOnly: isMobile(), style: { width: '100%' } }}
      />
      <ProFormText
        label='核销'
        name='p6'
        colProps={{ span: 6 }}
        rules={[{ required: true }]}
      />
      <ProFormDigit
        label='现金'
        name='p7'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='支付宝'
        name='p8'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormTextArea
        label='备注'
        name='p9'
        colProps={{ span: 12 }}
        fieldProps={{ rows: 1 }}
        placeholder='先设置颜色尺码，再录入库存'
      />
      <ProFormDigit
        label='应付'
        name='p10'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='实付'
        name='p11'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='总数'
        name='p12'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='汇款'
        name='p13'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='刷款'
        name='p14'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProFormDigit
        label='结余'
        name='p15'
        colProps={{ span: 6 }}
        fieldProps={{ precision: 2 }}
        min={0}
      />
      <ProForm.Item name='dataSource' trigger='onValuesChange'>
        <EditableProTable
          rowKey='id'
          size='small'
          columns={columns}
          editableFormRef={editableFormRef}
          toolBarRender={false}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            record: () => ({
              id: Date.now(),
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete]
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
  )
}

export default PurchaseInbound
