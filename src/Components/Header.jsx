import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none"><h3>SushiFast</h3></Link>
        <nav>
          <Link to="/" className="text-white me-3">Menus</Link>
          <Link to="/saveurs" className="text-white me-3">Saveurs</Link>
          <Link to="/stats" className="text-white">Stats</Link>
        </nav>
      </div>
    </header>
  );
}
