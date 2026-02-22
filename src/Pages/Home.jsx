import { useState } from 'react';
import menus from '../Data/boxes.json';
import MenuList from '../Components/Menulist.jsx';
import Filters from '../Components/Filters.jsx';

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAliments, setSelectedAliments] = useState([]);

  const alimentsDisponibles = [
    'Saumon',
    'Thon',
    'Avocat',
    'Crevette'
  ];

  function toggleAliment(aliment) {
    setSelectedAliments(prev =>
      prev.includes(aliment)
        ? prev.filter(a => a !== aliment)
        : [...prev, aliment]
    );
  }

  const menusFiltres = menus.filter(menu =>
    selectedAliments.length === 0 ||
    menu.aliments.some(a =>
      selectedAliments.includes(a.nom)
    )
  );

  return (
    <div>
      <h1>Nos menus</h1>

      <Filters
        aliments={alimentsDisponibles}
        selectedAliments={selectedAliments}
        onToggle={toggleAliment}
        show={showFilters}
        onToggleShow={() => setShowFilters(!showFilters)}
      />

      <MenuList menus={menusFiltres} />
    </div>
  );
}
