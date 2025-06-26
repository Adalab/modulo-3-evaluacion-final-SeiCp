import { Link } from "react-router";

function CharacterCard({character}) {

    return (
        <Link to={`/detail/${character.id}`}>
          <li className="character__card">
            <img
              src={
                character.image ||
                `https://placehold.co/300x400/cccccc/555555?text=${encodeURIComponent(character.name)}`
              }
              alt={character.name}
              className="character__image"
            />
            <div className="character__info">
                <h3 className="character__name">{character.name}</h3>
                <p className="character__species">{character.species}</p>
            </div>
          </li>
        </Link>
      );
}

export default CharacterCard; 