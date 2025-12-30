import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Technical from './pages/Technical';
import Games from './pages/Games';
import Product from './pages/Product';
import Creative from './pages/Creative';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tech" element={<Technical title="Technical" />} />
        <Route path="/games" element={<Games title="Games & 3D" />} />
        <Route path="/product" element={<Product title="Product" />} />
        <Route path="/creative" element={<Creative title="Creative" />} />
      </Routes>
    </Router>
  );
}

export default App;