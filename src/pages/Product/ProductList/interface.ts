import type { ActionType } from '@ant-design/pro-components'

export type IList = any

export interface OperationProps {
  record: IList
  action?: ActionType
}
