import './styles/App.scss';
import Header from './components/layout/Header';
import CharacterList from './components/contact/CharacterList';
import Filters from './components/filters/Filters';
import CharacterDetail from './components/contact/CharacterDetail';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

function App(){

  const [charactersList, setCharactersList] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState ('');


  useEffect(()=>{
    //lo que necesito que hagas cuando pinto el componente
    fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data=>{
      setCharactersList(data);
    })

  }, [])

  const house = [...new Set ( charactersList.map(item => item.house))];
  console.log (house)
  
  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase()))
    .filter(
      item => item.house === filterHouse || filterHouse === "")
  ; //devuelve la casa que seleccione o filtra por nada

  

  return(

    <div className="app">
    <Header />
    
    <Routes>
      <Route index element= {
        <>
        
        <main>
          <Filters filterName={filterName} handleFilterName={setFilterName} 
          phouse = {house} pfilterHouse={setFilterHouse} psetFilterHouse={setFilterHouse}/>
          <CharacterList pcharactersList={filteredCharacters}/>
       </main> 
        </>

      }>

      </Route>
      <Route path="/detail/:id" element={<CharacterDetail pcharactersList={charactersList} ></CharacterDetail>} ></Route>  
      <Route path='*' element={<h1>¡Alerta muggle! Está página no existe</h1>}></Route>

    </Routes>



  </div>

  );

}


export default App;