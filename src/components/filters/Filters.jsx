function Filters({ filterName, handleFilterName, phouse, psetFilterHouse, pfilterhouse }) {
    
    const handleInput = (ev) => {
        ev.preventDefault();
        handleFilterName(ev.target.value);
      };
    
    const handleHouse = (ev) =>{
        ev.preventDefault();
        psetFilterHouse(ev.target.value);
    };
    

    return (
        <form className="filters">
            <label>
                Busca por personaje:
                <input 
                type="text" 
                placeholder="Harry, Hermione..." 
                value={filterName} 
                onChange={handleInput}
            />
            </label>
        
            <label>
                Selecciona la casa:
                <select 
                name="house" 
                id="house"
                value={pfilterhouse}
                onChange={handleHouse}
                >
                <option value="">Todas</option>
                {phouse.map((house, index)=> (
                <option key={index} value={house}> {house} </option>
                ))}
                </select>
            </label>
        </form>
    );
}

export default Filters;