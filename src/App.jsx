import { Routes, Route, useLocation } from 'react-router-dom';
import Banner from './components/Banner';
import LabIntro from './components/LabIntro';
import TabbedSection from './components/TabbedSection';
import PersonDetail from './components/PersonDetail';
import './styles/global.css';

function App() {
  const location = useLocation();
  const isPersonDetailPage = location.pathname.startsWith('/people/') && location.pathname !== '/people';

  return (
    <div className="App">
      <Banner />
      {!isPersonDetailPage && <LabIntro />}
      <Routes>
        <Route path="/" element={<TabbedSection />} />
        <Route path="/people/:id" element={<PersonDetail />} />
      </Routes>
    </div>
  );
}

export default App;

