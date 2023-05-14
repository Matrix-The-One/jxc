import { useState } from 'react'
import { Modal } from 'antd'
import type { UploadProps } from 'antd'
import type { ModalProps } from 'antd'
import { ProFormUploadButton as AntProFormUploadButton } from '@ant-design/pro-components'
import type { ProFormUploadButtonProps as AntProFormUploadButtonProps } from '@ant-design/pro-components'
import { customRequest, generateBeforeUpload, getBase64 } from './utils'
import { saveAs } from 'file-saver'

type ProFormUploadButtonProps = AntProFormUploadButtonProps & {
  /**
   * @name 上传图片类型
   * @default ['jpg', 'png', 'webp']
   */
  fileType?: string[] | null
  /**
   * @name 限制上传图片大小
   * @desc 单位：M
   * @default 5
   */
  fileSize?: number | null
  fieldProps?: UploadProps
  /**
   * @name 图片预览对话框
   */
  modalProps?: ModalProps
}

const ProFormUploadButton: React.FC<ProFormUploadButtonProps> = ({
  fileType = ['jpg', 'png', 'webp'],
  fileSize = 5,
  fieldProps,
  modalProps,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const [previewImg, setPreviewImg] = useState<string>()

  const onPreview: UploadProps['onPreview'] = async file => {
    if (file.type?.startsWith('image')) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj!)
      }
      setPreviewImg(file.url || file.preview)
      setOpen(true)
    } else {
      saveAs(file.originFileObj as File, file.originFileObj?.name)
    }
  }

  const onChange: UploadProps['onChange'] = ({ fileList }) => {
    return fileList.map(file => {
      if (!file.status) file.status = 'error'
      return file
    })
  }

  const beforeUpload = generateBeforeUpload({ fileType, fileSize })

  return (
    <>
      <AntProFormUploadButton
        max={1}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
          customRequest,
          beforeUpload,
          onPreview,
          onChange,
          ...fieldProps,
        }}
        {...rest}
      />

      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width='50%'
        {...modalProps}
      >
        <img src={previewImg} alt={previewImg} style={{ width: '100%' }} />
      </Modal>
    </>
  )
}

export default ProFormUploadButton
