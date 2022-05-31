import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { TemplateListPage } from "./pages/TemplateListPage"
import { BuildResumePage } from "./pages/BuildResume"

import { StickyContainer } from "react-sticky"

function App() {
  return (
    <StickyContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplateListPage />} />
        <Route path="/build" element={<BuildResumePage />} />
      </Routes>
    </StickyContainer>
  )
}

export default App
