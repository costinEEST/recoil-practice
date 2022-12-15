import {atom, atomFamily, useRecoilState} from "recoil"

import {Drag} from "../Drag"
import {RectangleContainer} from "./RectangleContainer"
import {RectangleInner} from "./RectangleInner"
import {Resize} from "../Resize"

import type {Element, RectangleProp} from "../../types"

export const elementState = atomFamily<Element, number>({
  key: "element",
  default: {
    style: {
      position: {top: 100, left: 100},
      size: {width: 200, height: 200},
    },
  },
})

export const selectedElementState = atom<number | null>({
  key: "selectedElement",
  default: null,
})

export const Rectangle = ({id}: RectangleProp) => {
  const [element, setElement] = useRecoilState(elementState(id))
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState)

  const isSelected = selectedElement === id

  return (
    <RectangleContainer
      position={element.style.position}
      size={element.style.size}
      onSelect={() => {
        setSelectedElement(id)
      }}
    >
      <Resize
        selected={isSelected}
        position={element.style.position}
        size={element.style.size}
        onResize={(style) => setElement({...element, style})}
      >
        <Drag
          position={element.style.position}
          onDrag={(position) => {
            setElement({
              style: {
                ...element.style,
                position,
              },
            })
          }}
        >
          <div>
            <RectangleInner selected={isSelected} />
          </div>
        </Drag>
      </Resize>
    </RectangleContainer>
  )
}
