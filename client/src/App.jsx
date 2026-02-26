import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Technical from './pages/Technical';
import Product from './pages/Product';
import Games from './pages/Games';
import ThreeD from './pages/ThreeD';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/technical" element={<Technical/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/games" element={<Games />} />
      <Route path="/3d" element={<ThreeD />} />
    </Routes>
  );
}

export default App;