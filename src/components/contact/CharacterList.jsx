import CharacterCard from './CharacterCard';

function CharacterList({ pcharactersList= [] }) {
    return (
      <ul className="character__list">
        {pcharactersList.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    );
  }

export default CharacterList;  