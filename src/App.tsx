import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { TemplateListPage } from "./pages/TemplateListPage"
import { BuildResumePage } from "./pages/BuildResume"

import { StickyContainer } from "react-sticky"
import { AboutPage } from "./pages/AboutPage"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <StickyContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/templates"
            element={<TemplateListPage />}
          />
          <Route
            path="/build"
            element={<BuildResumePage />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </StickyContainer>
    </Provider>
  )
}

export default App
