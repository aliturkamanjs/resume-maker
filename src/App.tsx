import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TemplateListPage } from "./pages/TemplateListPage";
import { BuildResumePage } from "./pages/BuildResume";
import Layout from "./layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplateListPage />} />
          <Route path="/build" element={<BuildResumePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
