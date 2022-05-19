import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { TemplateListPage } from './pages/TemplateListPage';
import { BuildResumePage } from './pages/BuildResume';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplateListPage />} />
        <Route path="/build" element={<BuildResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
