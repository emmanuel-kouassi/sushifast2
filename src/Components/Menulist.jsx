import MenuCard from './MenuCard.jsx';

export default function MenuList({ menus }) {
  return (
    <div className="row g-3">
      {menus.map(menu => (
        <div className="col-12 col-md-6 col-lg-4" key={menu.id}>
          <MenuCard menu={menu} />
        </div>
      ))}
    </div>
  );
}
