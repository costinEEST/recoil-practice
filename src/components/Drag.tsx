import {DraggableCore} from "react-draggable"

import type {DragProps} from "../types"

export const Drag: React.FC<DragProps> = ({position, onDrag, children}) => {
  return (
    <DraggableCore
      onDrag={(e: any) => {
        onDrag({
          left: e.movementX + position.left,
          top: e.movementY + position.top,
        })
      }}
    >
      {children}
    </DraggableCore>
  )
}
