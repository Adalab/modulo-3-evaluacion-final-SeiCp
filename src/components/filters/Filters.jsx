function Filters({ psearchName, psetSearchName, pcities, psetFilterLocation, pfilterLocation }) {


    const handleName = (ev) => {
        ev.preventDefault();
        psetSearchName(ev.target.value);

    }

    const handleLocation = (ev) => {
        ev.preventDefault();
        psetFilterLocation(ev.target.value)
    }

    return (
        <form>
            <input
                className="header__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Filtrar contactos por nombre"
                value={psearchName}
                onChange={handleName}
            />

            <select
                name="cities" id="cities"
                value={pfilterLocation}
                onChange={handleLocation}>
                <option value="">Todos</option>
                {pcities.map((city, index) =>
                    <option key={index} value={city}> {city}</option>
                )}
            </select>


        </form>
    )

}
export default Filters;  