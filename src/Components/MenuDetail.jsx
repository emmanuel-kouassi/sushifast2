import { useParams, Link } from 'react-router-dom';
import menus from '../Data/boxes.json';

export default function MenuDetail(){
  const { id } = useParams();
  const menu = menus.find(m => m.id === Number(id));
  if(!menu) return <div>Menu non trouvé</div>;

  return (
    <div>
      <Link to="/">← Retour</Link>
      <h2>{menu.nom}</h2>
      <p>Pièces: {menu.pieces} — Prix: {menu.prix}€</p>
      <h4>Aliments</h4>
      <ul>
        {menu.aliments.map((a, i) => <li key={i}>{a.nom} — {a.quantite}</li>)}
      </ul>
      <h5>Saveurs: {menu.saveurs?.join(', ')}</h5>
    </div>
  );
}
