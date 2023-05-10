import AvatarDropdown from './AvatarDropdown'
import FullScreen from './FullScreen'
import ScanCode from './ScanCode'

const RightContent = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FullScreen />
      <div style={{ width: 12 }} />
      <ScanCode />
      <div style={{ width: 12 }} />
      <AvatarDropdown />
    </div>
  )
}

export default RightContent
