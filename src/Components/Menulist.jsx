// src/pages/MenuList.jsx
import React from 'react';
import MenuCard from '../components/MenuCard';

function MenuList({ menus }) {
  return (
    <div>
      <h2 className="mb-4">Tous les Menus Proposés</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus.map(menu => (
          <div key={menu.id} className="col">
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;