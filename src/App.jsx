import './styles/App.scss';
import Header from './components/layout/Header';
import ListContacts from './components/contact/ListContacts';
import Filters from './components/filters/Filters';
import DetailContact from './components/contact/DetailContact';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Landing from './components/layout/Landing';

function App() {

  const [contactsList, setContactsList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterLocation, setFilterLocation] = useState("");


  useEffect(() => {
    //que quiero que hagas
    fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/contacts-v2/contacts.json")
      .then(response => response.json())
      .then(data => {
        setContactsList(data);
      })
  }, [])

  const cities = [...new Set(contactsList.map(item => item.location))];
  console.log(cities);

  //Filtro sobre mi listado 
  const filteredList = contactsList
    .filter(
      item => item.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter(
      item => item.location === filterLocation || filterLocation === "")
    ;


  return (
    <div className="page">
      <Header />
      <Routes>
        <Route index element={
          <>
            {/*  <Landing psearchName={searchName} psetSearchName={setSearchName} pcities={cities} pfilterLocation={filterLocation} psetFilterLocation={setFilterLocation} pcontactsList={filteredList} > </Landing> */}
            <Filters psearchName={searchName} psetSearchName={setSearchName} pcities={cities} pfilterLocation={filterLocation} psetFilterLocation={setFilterLocation} />
            <ListContacts pcontactsList={filteredList} />          </>

        } />
        <Route path="/detail/:name" element={<DetailContact pcontactsList={contactsList}></DetailContact>} />
        <Route path='*' element={<h1>Página no encontrada</h1>} />
      </Routes>


    </div>
  );
}

export default App;