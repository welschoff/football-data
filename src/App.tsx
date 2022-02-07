import Leagues from './pages/Leagues';
import { Route, Routes } from 'react-router-dom';
import Countries from './pages/Countries';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:country/leagues" element={<Leagues />} />
    </Routes>
  );
}

export default App;
