import {useContext} from "react"

import {ElementsContext, SelectedElementContext} from "../../Canvas"
import {Drag} from "../Drag"
import {RectangleContainer} from "./RectangleContainer"
import {RectangleInner} from "./RectangleInner"

import type {RectangleProp} from "../../types"

export const Rectangle = ({element, index}: RectangleProp) => {
  const {selectedElement, setSelectedElement} = useContext(SelectedElementContext)
  const {setElement} = useContext(ElementsContext)

  return (
    <Drag
      position={element.style.position}
      onDrag={(position) => {
        setElement(index, {
          style: {
            ...element.style,
            position,
          },
        })
      }}
    >
      <div>
        <RectangleContainer
          position={element.style.position}
          size={element.style.size}
          onSelect={() => {
            setSelectedElement(index)
          }}
        >
          <RectangleInner selected={index === selectedElement} />
        </RectangleContainer>
      </div>
    </Drag>
  )
}
