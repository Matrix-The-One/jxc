import { ScanOutlined } from '@ant-design/icons'
import { Html5QrcodeScanner } from 'html5-qrcode'

const ScanCode = () => {
  return (
    <ScanOutlined
      // onClick={async () => {
      //   navigator.mediaDevices.getUserMedia({ video: true })
      // }}
      // onClick={() => {
      //   function onScanSuccess(decodedText, decodedResult) {
      //     // handle the scanned code as you like, for example:
      //     console.log(`Code matched = ${decodedText}`, decodedResult)
      //   }

      //   function onScanFailure(error) {
      //     // handle scan failure, usually better to ignore and keep scanning.
      //     // for example:
      //     console.warn(`Code scan error = ${error}`)
      //   }

      //   const html5QrcodeScanner = new Html5QrcodeScanner(
      //     'reader',
      //     { fps: 10, qrbox: { width: 250, height: 250 } },
      //     /* verbose= */ false,
      //   )
      //   html5QrcodeScanner.render(onScanSuccess, onScanFailure)
      // }}
      style={{ fontSize: 20 }}
    />
  )
}

export default ScanCode
