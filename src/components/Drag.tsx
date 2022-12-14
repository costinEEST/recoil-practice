import {DraggableCore} from "react-draggable"

import type {FC} from "react"
import type {DragProps} from "../types"

export const Drag: FC<DragProps> = ({position, onDrag, children}) => {
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
