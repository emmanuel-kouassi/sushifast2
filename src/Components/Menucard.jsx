import { Link } from 'react-router-dom';

export default function MenuCard({menu}){
  return (
    <div className="card h-100">
      <img src={`/images/${menu.image}.jpg`} className="card-img-top" alt={menu.nom} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{menu.nom}</h5>
        <p className="mb-1">Pièces: {menu.pieces}</p>
        <p className="mb-1">Prix: {menu.prix ? menu.prix.toFixed(2) + '€' : '—'}</p>
        <div className="mt-auto">
          <Link to={`/menu/${menu.id}`} className="btn btn-primary w-100">Voir</Link>
        </div>
      </div>
    </div>
  );
}
