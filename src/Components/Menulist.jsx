import menus from '../data/boxes.json';
import MenuCard from './Menucard';

export default function MenuList({filterFn = () => true}){
  const filtered = menus.filter(filterFn);
  return (
    <div className="row g-3">
      {filtered.map(menu => (
        <div className="col-12 col-md-6 col-lg-4" key={menu.id}>
          <MenuCard menu={menu} />
        </div>
      ))}
    </div>
  );
}
