import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

// Pages
import Home from './Pages/Home.jsx';
import Saveurs from './Pages/Saveurs.jsx';  
import Statistiques from './Pages/Statistiques.jsx';

// Components
import MenuDetail from './Components/MenuDetail.jsx';
export default function App() {
  return (
    <Router>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/saveurs" element={<Saveurs />} />
          <Route path="/stats" element={<Statistiques />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}