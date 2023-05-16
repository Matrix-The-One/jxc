import { Space } from 'antd'
import CurrentStockButton from '../CurrentStockButton'
import InventoryButton from '../InventoryButton'
import ModelNoStockButton from '../ModelNoStockButton'
import StockDistributionButton from '../StockDistributionButton'

const Title = () => {
  return (
    <Space>
      <CurrentStockButton />
      <ModelNoStockButton />
      <StockDistributionButton />
      <InventoryButton />
    </Space>
  )
}

export default Title
