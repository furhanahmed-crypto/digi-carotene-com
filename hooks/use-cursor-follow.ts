"use client"

import * as React from "react"

type CursorFollowState = {
  visible: boolean
  src: string
  x: number
  y: number
}

export function useCursorFollow() {
  const [state, setState] = React.useState<CursorFollowState>({
    visible: false,
    src: "",
    x: 0,
    y: 0,
  })

  const show = React.useCallback((src: string, event: React.MouseEvent) => {
    setState({
      visible: true,
      src,
      x: event.clientX,
      y: event.clientY,
    })
  }, [])

  const move = React.useCallback((event: React.MouseEvent) => {
    setState((current) =>
      current.visible
        ? { ...current, x: event.clientX, y: event.clientY }
        : current
    )
  }, [])

  const hide = React.useCallback(() => {
    setState((current) => ({ ...current, visible: false }))
  }, [])

  return { state, show, move, hide }
}
