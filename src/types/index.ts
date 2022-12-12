export type ChildrenProp = JSX.Element | JSX.Element[]

export interface PageContainerProps {
  onClick: () => void
  children: ChildrenProp
}

export type DragProps = {
  position: ElementStyle["position"]
  onDrag: (position: ElementStyle["position"]) => void
  children: ChildrenProp
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
  children: ChildrenProp
}

export type ResizeProps = {
  children: ChildrenProp
  selected: boolean
  onResize: (style: ElementStyle) => void
} & ElementStyle
