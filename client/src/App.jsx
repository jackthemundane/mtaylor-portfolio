import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Technical from './pages/Technical';
import Product from './pages/Product';
import Creative from './pages/Creative';
import Games from './pages/Games';
import ThreeD from './pages/ThreeD'; // <--- 1. Import this

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/product" element={<Product />} />
      <Route path="/creative" element={<Creative />} />
      <Route path="/games" element={<Games />} />
      <Route path="/3d" element={<ThreeD />} /> {/* <--- 2. Add this route */}
    </Routes>
  );
}

export default App;