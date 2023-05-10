import { useState } from 'react'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullScreen(!isFullScreen)
  }

  return isFullScreen ? (
    <FullscreenExitOutlined
      onClick={toggleFullScreen}
      style={{ fontSize: 20 }}
    />
  ) : (
    <FullscreenOutlined onClick={toggleFullScreen} style={{ fontSize: 20 }} />
  )
}

export default FullScreen
