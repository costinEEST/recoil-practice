import {Box} from "@chakra-ui/react"

import type {RectangleContainerProps} from "../../types"

export const RectangleContainer = ({children, size, position, onSelect}: RectangleContainerProps) => {
  return (
    <Box
      position="absolute"
      style={{...size, ...position}}
      onMouseDown={() => onSelect()}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </Box>
  )
}
