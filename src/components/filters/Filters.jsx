function Filters({ filterName, handleFilterName, phouse, psetFilterHouse, pfilterHouse }) {
    
    const handleInput = (ev) => {
        ev.preventDefault();
        handleFilterName(ev.target.value);
      };
    
    const handleHouse = (ev) =>{
        ev.preventDefault();
        psetFilterHouse(ev.target.value);
    };
    

    return (
        <form className="filters" onSubmit={(ev) => ev.preventDefault()}>
        <div className="filters__group">
          <label className="filters__label">Busca a tu mago fav:</label>
          <input
            type="text"
            className="filters__input"
            value={filterName}
            onChange={(ev) => handleFilterName(ev.target.value)}
          />
        </div>
      
        <div className="filters__group">
          <label className="filters__label">Selecciona la casa:</label>
          <select
            className="filters__input"
            value={pfilterHouse}
            onChange={(ev) => psetFilterHouse(ev.target.value)}
          >
            <option value="">Todas</option>
            {phouse.map((house, index) => (
              <option key={index} value={house}>
                {house}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
}

export default Filters;