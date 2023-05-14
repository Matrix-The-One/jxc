import { useEffect, useRef } from 'react'

export interface UseAntTableScrollAutoParams {
  /**
   * @name 是否启用
   */
  enable?: boolean
  /**
   * @name 最小高度
   * @default 0
   */
  minHeight?: number
  /**
   * @name 全屏包裹容器选择器
   * @desc 默认为 body 或 AntdPro 中的 '.ant-pro-layout-container'
   */
  selector?: string
  /**
   * @name antd类名前缀
   * @default ant
   */
  prefixCls?: string
}

const useAntTableScrollAuto = (params: UseAntTableScrollAutoParams = {}) => {
  const { enable, minHeight = 0, selector, prefixCls = 'ant' } = params
  const preWindowHeight = useRef<number>()
  const preContainerScrollHeight = useRef<number>()

  const getContainer = () => {
    const outContainer = selector && document.querySelector(selector)
    const proLayoutContainer = document.querySelector(
      `.${prefixCls}-pro-layout-container`,
    )
    return outContainer || proLayoutContainer || document.body
  }

  const updateHeight = () => {
    const antTableBody = document.querySelector(
      `.${prefixCls}-table-body`,
    ) as HTMLDivElement
    const antTableTBody = document.querySelector(
      `.${prefixCls}-table-tbody`,
    ) as HTMLDivElement
    const antTablePlaceholder = document.querySelector(
      `.${prefixCls}-table-placeholder`,
    ) as HTMLDivElement
    const containerHeight = getContainer().scrollHeight
    if (!(antTableBody || antTableTBody)) return
    const tableBodyHeight = (antTableBody || antTableTBody).clientHeight

    if (containerHeight === window.innerHeight) return
    const height = tableBodyHeight - (containerHeight - window.innerHeight)
    if (antTableBody) {
      antTableBody.style.height = `${height < minHeight ? minHeight : height}px`
      antTableBody.style.maxHeight = `${
        height < minHeight ? minHeight : height
      }px`
    }
    if (antTablePlaceholder) {
      antTablePlaceholder.style.height = `${
        height < minHeight ? minHeight : height
      }px`
    }
  }

  useEffect(() => {
    if (!enable) return
    const ro = new ResizeObserver(([container]) => {
      const scrollHeight = container.target.scrollHeight
      if (scrollHeight !== preContainerScrollHeight.current) {
        preContainerScrollHeight.current = scrollHeight
        updateHeight()
      }
    })
    const container = getContainer()
    if (container) ro.observe(container)

    window.onresize = () => {
      if (window.innerHeight !== preWindowHeight.current) {
        preWindowHeight.current = window.innerHeight
        updateHeight()
      }
    }

    return () => {
      ro.unobserve(container)
    }
  }, [])
}

export default useAntTableScrollAuto
