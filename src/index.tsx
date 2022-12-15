import {ChakraProvider} from "@chakra-ui/react"
import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RecoilRoot} from "recoil"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Canvas} from "./Canvas"
import {Atoms} from "./components/Atoms"
import {Selectors} from "./components/Selectors"

import "./index.css"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Canvas />} />
            <Route path="/atoms" element={<Atoms />} />
            <Route path="/selectors" element={<Selectors />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </StrictMode>,
)
