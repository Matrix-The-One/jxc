import React, { useState } from 'react'
import { Upload } from 'antd'
import type { UploadProps } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { customRequest, generateBeforeUpload, getBase64 } from './utils'

export type UploadAvatarProps = UploadProps & {
  /**
   * @name 图片链接
   */
  value?: string
  onChange?: (url: string) => void
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
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({
  value,
  onChange,
  fileType = ['jpg', 'png', 'webp'],
  fileSize = 5,
  children,
  ...rest
}) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | undefined>(value)

  const handleChange: UploadProps['onChange'] = async ({ file }) => {
    const { status, originFileObj, response } = file
    if (status === 'uploading') {
      setLoading(true)
    }

    if (status === 'done') {
      const url = await getBase64(originFileObj!)
      setLoading(false)
      setImageUrl(url)
      onChange?.(response)
    }
  }

  return (
    <Upload
      listType='picture-card'
      showUploadList={false}
      customRequest={customRequest}
      beforeUpload={generateBeforeUpload({ fileType, fileSize })}
      onChange={handleChange}
      {...rest}
    >
      {React.Children.toArray(children).length ? (
        React.cloneElement(children as JSX.Element, { loading, imageUrl })
      ) : imageUrl ? (
        <img src={imageUrl} alt={imageUrl} style={{ width: '100%' }} />
      ) : (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      )}
    </Upload>
  )
}

export default UploadAvatar
