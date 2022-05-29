import Layout from "./layout/layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TemplateListPage } from "./pages/TemplateListPage";
import { BuildResumePage } from "./pages/BuildResume";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplateListPage />} />
        <Route path="/build" element={<BuildResumePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
