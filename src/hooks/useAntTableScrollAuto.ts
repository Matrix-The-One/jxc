import { useEffect, useRef } from 'react'
import { isObject } from 'lodash'

export interface ScrollAutoParams {
  /**
   * @name 最小高度
   * @default 0
   */
  minHeight?: number
  /**
   * @name 包裹容器选择器
   * @desc 当页面中有多个Table时使用
   */
  wrapperSelector?: string
  /**
   * @name 全屏包裹容器选择器
   * @default body
   */
  screenSelector?: string
  /**
   * @name antd类名前缀
   * @default ant
   */
  prefixCls?: string
  /**
   * @name Drawer容器
   * @desc 为true时会设置drawer-wrapper-body的height为auto
   */
  drawer?: boolean
}

export type UseAntTableScrollAutoParams = ScrollAutoParams | true

const useAntTableScrollAuto = (params: UseAntTableScrollAutoParams = {}) => {
  const {
    minHeight = 0,
    screenSelector,
    wrapperSelector = 'body',
    prefixCls = 'ant',
    drawer,
  } = params === true ? ({} as ScrollAutoParams) : params
  const preWindowHeight = useRef<number>()
  const preContainerHeight = useRef<number>()

  const getScreenContainer = () => {
    const outContainer =
      screenSelector && document.querySelector(screenSelector)
    const drawerContainer =
      drawer && document.querySelector(`.${prefixCls}-drawer-wrapper-body`)
    return (outContainer || drawerContainer || document.body) as HTMLElement
  }

  const getWrapperContainer = () => {
    return document.querySelector(wrapperSelector) as HTMLElement
  }

  const updateHeight = (
    screenContainer: HTMLElement,
    wrapperContainer: HTMLElement,
  ) => {
    const antTableBody = wrapperContainer.querySelector(
      `.${prefixCls}-table-body`,
    ) as HTMLDivElement
    const antTableTBody = wrapperContainer.querySelector(
      `.${prefixCls}-table-tbody`,
    ) as HTMLDivElement
    const antTablePlaceholder = wrapperContainer.querySelector(
      `.${prefixCls}-table-placeholder`,
    ) as HTMLDivElement
    const containerHeight = screenContainer.scrollHeight
    if (!antTableBody || !antTableTBody) return
    if (containerHeight === window.innerHeight) return

    const tableBodyHeight = (antTableBody || antTableTBody).offsetHeight
    const comHeight = tableBodyHeight - (containerHeight - window.innerHeight)
    const height = comHeight < minHeight ? minHeight : comHeight
    if (antTableBody) {
      antTableBody.style.maxHeight = `${height}px`
    }
    if (antTablePlaceholder) {
      antTablePlaceholder.style.height = `${height}px`
    }
  }

  const modifyDrawerHeight = () => {
    const drawerWrapperBody = document.querySelector(
      `.${prefixCls}-drawer-wrapper-body`,
    ) as HTMLElement

    if (drawerWrapperBody) {
      drawerWrapperBody.style.height = 'auto'
    }
  }

  useEffect(() => {
    if (params !== true && !isObject(params)) return
    const screenContainer = getScreenContainer()
    const wrapperContainer = getWrapperContainer()
    if (!screenContainer || !wrapperContainer) return
    if (screenContainer && drawer) modifyDrawerHeight()

    const ro = new ResizeObserver(([container]) => {
      const offsetHeight = (container.target as HTMLElement).offsetHeight
      if (offsetHeight !== preContainerHeight.current) {
        preContainerHeight.current = offsetHeight
        updateHeight(screenContainer, wrapperContainer)
      }
    })
    if (screenContainer) ro.observe(screenContainer)

    const onresize = () => {
      if (window.innerHeight !== preWindowHeight.current) {
        preWindowHeight.current = window.innerHeight
        updateHeight(screenContainer, wrapperContainer)
      }
    }
    window.addEventListener('resize', onresize)

    return () => {
      ro.unobserve(screenContainer)
      window.removeEventListener('resize', onresize)
    }
  }, [])
}

export default useAntTableScrollAuto
