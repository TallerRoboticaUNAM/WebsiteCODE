import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Nosotros } from './pages/Nosotros';
import { Publicaciones } from './pages/Publicaciones';
import { Galeria } from './pages/Galeria';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Router>
  );
};

export default App;
