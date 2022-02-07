import Leagues from './pages/Leagues';
import { Route, Routes } from 'react-router-dom';
import Countries from './pages/Countries';
import Standings from './pages/Standings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:country/leagues" element={<Leagues />} />
      <Route path="/standings" element={<Standings />} />
    </Routes>
  );
}

export default App;
