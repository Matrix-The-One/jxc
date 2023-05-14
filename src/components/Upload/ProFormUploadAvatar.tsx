import type { ProFormItemProps } from '@ant-design/pro-components'
import { ProForm } from '@ant-design/pro-components'
import UploadAvatar from './UploadAvatar'
import type { UploadAvatarProps } from './UploadAvatar'

type ProFormUploadAvatarProps = ProFormItemProps & {
  fieldProps?: UploadAvatarProps
}

const ProFormUploadAvatar: React.FC<ProFormUploadAvatarProps> = ({
  fieldProps,
  children,
  ...rest
}) => {
  return (
    <ProForm.Item {...rest}>
      <UploadAvatar children={children} {...fieldProps} />
    </ProForm.Item>
  )
}

export default ProFormUploadAvatar
