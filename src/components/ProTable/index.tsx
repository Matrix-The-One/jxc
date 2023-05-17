import { useRef } from 'react'
import { ProTable as AntProTable } from '@ant-design/pro-components'
import type { ActionType, ProTableProps } from '@ant-design/pro-components'
import type { IProps, ParamsType, RequiredPick } from './interface'
import { generateParams, safeGetValue } from './utils'
import useAntTableScrollAuto from '@/hooks/useAntTableScrollAuto'
import styles from './index.less'

const defaultConvertParams = {
  current: 'current',
  pageSize: 'pageSize',
  data: 'data',
  total: 'total',
  success: 'success',
}

const ProTable = <
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>({
  request,
  actionRef,
  convertParams,
  filterNullValues = true,
  scrollAuto,
  ...rest
}: ProTableProps<DataType, Params, ValueType> &
  RequiredPick<ProTableProps<DataType, Params, ValueType>, 'request'> &
  IProps) => {
  useAntTableScrollAuto(scrollAuto)
  const innerActionRef = useRef<ActionType>()
  const proActionRef =
    (actionRef as ReturnType<typeof useRef<ActionType>>) || innerActionRef

  return (
    <AntProTable<DataType, Params, ValueType>
      rowKey='id'
      cardBordered
      defaultSize='large'
      dateFormatter='string'
      actionRef={proActionRef}
      scroll={scrollAuto ? { y: 0, ...rest.scroll } : rest.scroll }
      search={{ span: { xs: 12, sm: 12, md: 8, lg: 6, xl: 6, xxl: 6 } }}
      form={{ ignoreRules: false, layout: 'inline', labelWidth: 'auto' }}
      editable={{ type: 'multiple' }}
      pagination={{ defaultPageSize: 20 }}
      request={async (params, ...restParams) => {
        const mergeParams = { ...defaultConvertParams, ...convertParams }
        const { success, data, total } = mergeParams
        const gParams = generateParams(
          params,
          mergeParams,
          filterNullValues,
        ) as Params

        const res = await request(gParams, ...restParams)
        const safeData = safeGetValue<DataType[]>(res, data, [])

        // 删除最后一项自动翻页
        if (!safeData.length && (params.current || 1) > 1) {
          proActionRef.current!.pageInfo!.current -= 1
        }

        return {
          data: safeData,
          total: safeGetValue<number>(res, total, safeData.length),
          success: safeGetValue<boolean>(res, success, false),
        }
      }}
      className={styles.container}
      {...rest}
    />
  )
}

export default ProTable
