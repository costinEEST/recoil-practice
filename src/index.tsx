import {ChakraProvider} from "@chakra-ui/react"
import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Canvas from "./Canvas"

import "./index.css"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
