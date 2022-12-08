export interface PageContainerProps {
  onClick: () => void
  children: JSX.Element | JSX.Element[]
}

export type DragProps = {
  position: ElementStyle["position"]
  onDrag: (position: ElementStyle["position"]) => void
  children: JSX.Element
}

export type ElementStyle = {
  position: {top: number; left: number}
  size: {width: number; height: number}
}

export type Position = {
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
}

export type RectangleContainerProps = {
  position: ElementStyle["position"]
  size: ElementStyle["size"]
  onSelect: () => void
  children: JSX.Element
}

export type ResizeProps = {
  children: JSX.Element
  selected: boolean
  onResize: (style: ElementStyle) => void
} & ElementStyle
