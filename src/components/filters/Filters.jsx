function Filters({ filterName, handleFilterName }){
    
    const handleInput = (ev) => {
        handleFilterName(ev.target.value);
      };
    
    return (
    <form className="filters">
        <label>
            Busca por personaje:
            <input type="text" placeholder="Harry, Hermione..." 
            value={filterName} onChange={handleInput}
            />
        </label>
        
        <label>
        Selecciona la casa:
        <select>
          <option value="">Todas</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </label>
    
    </form>

    );

}

export default Filters;