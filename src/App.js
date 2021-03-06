import React, { useState, useEffect } from 'react';
import './App.css';
import PlantCardHolder from './components/PlantCardHolder.js'
import { Route, Switch } from 'react-router-dom'
import PlantCard from './components/PlantCard.js'
import ShowPlant from './components/ShowPlant.js'
import SearchForm from './components/SearchForm';

function App() {

  let [plants, setPlants] = useState([])
  let [page, setPage] = useState(1)
  let [showPlant, setShowPlant] = useState({})
  let [hideList, setHideList] = useState(false)
  let [searchString, setSearchString] = useState('');


   useEffect(()=> {
     getAllPlants()


  })

  function getAllPlants(){
    if(plants.length < 2){
      fetch(`http://localhost:3000/plant/${page}`)
      .then((data) => data.json())
      .then(response => setPlants(response.data))
    }

  }


  function getNextPlants(){
    // setPlants([])
    setPage(page + 1)
    console.log(page)
    getAllPlants()
  }

  function getPrevPlants(){
    // setPlants([])
    if(page > 1){
      setPage(page - 1)
      console.log(page)
      getAllPlants()
    }
  }

function showSinglePlant(plant){
  setShowPlant(plant)
  setHideList(true)
}
function showPlantList(){
  setShowPlant({})
  setHideList(false)
}

function searchByCommon(search){
  fetch(`http://localhost:3000/plant/plant/${search}`)
  .then((data) => data.json())
  .then(response =>setPlants(response.data))

}


function handleChange(event) {
  setSearchString(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  searchByCommon(searchString);
}





if(!plants.length > 1 ){
  return null
}

  return (
    <div className="App">
    <SearchForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      searchString={searchString}
    />
    
    {!hideList ?
      <div className="main">
        <button onClick={getPrevPlants}> Previous Page </button>
         <PlantCardHolder showSinglePlant={showSinglePlant} showPlantList={showPlantList} plants={plants}/>
         <button onClick={getNextPlants}> Next Page </button>
      </div> : ''}

    {showPlant.common_name ? <ShowPlant plant={showPlant} showPlantList={showPlantList} /> : ''}

    </div>
  );
}

export default App;
