// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuList from './pages/MenuList';
import Filters from './pages/Filters';
import Stats from './pages/Stats';

// Importez vos données JSON
import data from './data/boxes.json';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="container my-4 flex-grow-1">
          <Routes>
            {/* 1. Affichage de tous les menus (Page d'accueil)  */}
            <Route path="/" element={<MenuList menus={data} />} />
            
            {/* 2. Page pour les filtres complexes [cite: 15, 17] */}
            <Route path="/filtres" element={<Filters menus={data} />} />
            
            {/* 3. Page pour les statistiques/calculs [cite: 18, 19] */}
            <Route path="/statistiques" element={<Stats menus={data} />} />
            
            {/* Route 404 simple */}
            <Route path="*" element={<h2>Page non trouvée</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;