import { useParams, useNavigate } from "react-router";

function CharacterDetail({ pcharactersList }){
 
    const { id } = useParams();
    const navigate = useNavigate();

    const character = pcharactersList.find(item => item.id === id)

    return (

        <section className="detail">

        <div className="detail__card">
          <button className="btn-back" onClick={() => navigate(-1)}>← Volver</button>
          
          <img src={character.image} alt={character.name} />
          <div className="detail__info">
            <h2> {character.name}</h2>
            <p> Status: {character.alive ? 'Vivo' : 'Muerto'}</p>
            <p> Especie: {character.species}</p>
            <p> Género: {character.gender}</p>
            <p> Casa: {character.house || 'Desconocida'}</p>

            {character.house && (
            <img
              src={`/images/${character.house.toLowerCase()}.png`}
              alt={`Escudo de ${character.house}`}
              className="detail__house-icon"
            />
          )}


          </div>
        </div>
      </section>
    );

}


export default CharacterDetail;  