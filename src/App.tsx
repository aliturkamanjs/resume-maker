import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { TemplateListPage } from "./pages/TemplateListPage"
import { BuildResumePage } from "./pages/BuildResume"

import { StickyContainer } from "react-sticky"
import { AboutPage } from "./pages/AboutPage"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <Provider store={store}>
      <StickyContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplateListPage />} />
          <Route path="/build" element={<BuildResumePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Toaster />
      </StickyContainer>
    </Provider>
  )
}

export default App
