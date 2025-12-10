// src/pages/Home.jsx
import React from 'react';
import { menus } from '../info/boxes.json'; // Importation des données
import MenuCard from './Menucard.jsx';

const Home = () => {
  return (
    <div>
      <h1 className="mb-4 text-center">Tous nos Menus SushiFast 🍣</h1>
      
      {/* Utilisation de la grille Bootstrap */}
      <div className="row">
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};
export default Home;