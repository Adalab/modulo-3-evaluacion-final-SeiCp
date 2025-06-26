import './styles/App.scss';
import Header from './components/layout/Header';
import CharacterList from './components/contact/CharacterList';
import Filters from './components/filters/Filters';
import CharacterDetail from './components/contact/CharacterDetail';
import { useState, useEffect } from 'react';

function App(){

  const [charactersList, setCharactersList] = useState([]);

  useEffect(()=>{
    //lo que necesito que hagas cuando pinto el componente
    fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data=>{
      setCharactersList(data);
    })

  }, [])

  const [filterName, setFilterName] = useState('');

  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase())
  );


  return(

    <div className="app">
    <Header />
    <main>
      <Filters 
      filterName={filterName}
      handleFilterName={setFilterName}
      />
      <CharacterList pcharactersList={filteredCharacters}/>
    </main>
  </div>

  );

}


export default App;