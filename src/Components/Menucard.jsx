// src/components/MenuCard.jsx
import React from 'react';

function MenuCard({ menu }) {
  // NOTE: Les images sont mockées ici, car elles ne sont pas fournies.
  // Utilisez le chemin réel des images une fois qu'elles sont dans votre dossier 'public'.
  const imageUrl = `/images/${menu.image}.jpg`; 

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={`Image du menu ${menu.nom}`} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{menu.nom}</h5>
        <p className="card-text">
          **Prix:** {menu.prix.toFixed(2)} € | **Pièces:** {menu.pieces} [cite: 13]
        </p>
        
        {/* Présentation des saveurs [cite: 14] */}
        <h6>Saveurs:</h6>
        <p>
          {menu.saveurs.map(s => <span key={s} className="badge bg-info text-dark me-1">{s}</span>)}
        </p>
        
        {/* Liste des aliments [cite: 16] */}
        <h6>Aliments:</h6>
        <ul className="list-group list-group-flush small">
          {menu.aliments.map((aliment, index) => (
            <li key={index} className="list-group-item p-1">
              {aliment.quantite}x {aliment.nom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuCard;