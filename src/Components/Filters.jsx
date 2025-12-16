export default function Filters({
  aliments,
  selectedAliments,
  onToggle,
  show,
  onToggleShow
}) {
  return (
    <div className="mb-4">
      <button className="btn btn-beige mb-3" onClick={onToggleShow}>
        Filtrer
      </button>

     
      {show && (
        <div className="card p-3">
          <h5>Aliments</h5>


          {aliments.map(aliment => (
            <div className="form-check" key={aliment}>
              <input className="form-check-input" type="checkbox" id={aliment} checked={selectedAliments.includes(aliment)} onChange={() => onToggle(aliment)}/>
              <label className="form-check-label" htmlFor={aliment}>
                {aliment}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}