export type ChildrenProp = JSX.Element | JSX.Element[]

export type Element = {style: ElementStyle}

export type ElementStyle = {
  position: {top: number; left: number}
  size: {width: number; height: number}
}

export interface PageContainerProps {
  onClick: () => void
  children: ChildrenProp
}

export type DragProps = {
  position: ElementStyle["position"]
  onDrag: (position: ElementStyle["position"]) => void
  children: ChildrenProp
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

export interface RectangleProp {
  element: Element
  index: number
}

export type ResizeProps = {
  children: ChildrenProp
  selected: boolean
  onResize: (style: ElementStyle) => void
} & ElementStyle

export type ElementsContextType = {
  elements: Element[]
  addElement: () => void
  setElement: SetElement
}

export type SetElement = (indexToSet: number, newElement: Element) => void

export type SelectedElementContextType = {
  selectedElement: number | null
  setSelectedElement: (index: number) => void
}
