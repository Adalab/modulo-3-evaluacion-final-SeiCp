import CharacterCard from './CharacterCard';

function CharacterList({ pcharactersList= [] }) {
    if (pcharactersList.length === 0) {
        return (
          <p className="no-results">
            El mago que está buscando está apagado o fuera de cobertura. ¡Vuelva a intentarlo!
          </p>
        );
      }

    return (
      <ul className="character__list">
        {pcharactersList.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    );
  }

export default CharacterList;  