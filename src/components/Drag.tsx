import {DraggableCore} from "react-draggable"

import type {DragProps} from "../types"

export const Drag = ({position, onDrag, children}: DragProps) => {
  return (
    <DraggableCore
      onDrag={(e: any) =>
        onDrag({
          left: e.movementX + position.left,
          top: e.movementY + position.top,
        })
      }
    >
      {children}
    </DraggableCore>
  )
}
