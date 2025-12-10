import menus from '../data/boxes.json';

export default function Saveurs(){
  return (
    <div>
      <h2>Saveurs par menu</h2>
      <ul>
        {menus.map(m => <li key={m.id}><strong>{m.nom}</strong>: {m.saveurs?.join(', ')}</li>)}
      </ul>
    </div>
  );
}
