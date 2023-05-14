import type { UploadProps } from 'antd'
import { message } from 'antd'
import { lookup } from 'mime-types'
// import { UploadImage } from '@/services/pusheng/OtherService'

export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
  })
}

export const customRequest: UploadProps['customRequest'] = ({
  file,
  filename,
  onSuccess,
  onProgress,
  onError,
}) => {
  const formData = new FormData()
  formData.append(filename!, file)
  onSuccess?.(file)
  // UploadImage(formData, {
  //   onUploadProgress: onProgress,
  // })
  //   .then(({ data }) => onSuccess?.(data?.[0]))
  //   .catch(onError)
}

type GenerateBeforeUpload = (params?: {
  fileType?: string[] | null
  fileSize?: number | null
}) => UploadProps['beforeUpload']

export const generateBeforeUpload: GenerateBeforeUpload = ({
  fileType,
  fileSize,
} = {}) => {
  return ({ type, size }) => {
    if (fileType?.length && !fileType.some(i => type === lookup(i))) {
      message.warning(`仅支持${fileType.join('、')}图片类型`)
      return false
    }

    if (fileSize && size > fileSize * 1024 * 1024) {
      message.warning(`图片大小不能超过${fileSize}M`)
      return false
    }

    return true
  }
}
