import type {ResizeHandle} from "react-resizable"

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

export interface PropertyProps {
  label: string
  value: number
  onChange: (value: number) => void
}

export type DragProps = {
  position: ElementStyle["position"]
  onDrag: (position: ElementStyle["position"]) => void
  children: ChildrenProp
}

export interface HandleProps {
  placement: ResizeHandle
  visible: boolean
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

export interface RectangleInnerProp {
  selected: boolean
}

export interface RectangleProp {
  id: number
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
