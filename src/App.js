import React, { useState, useEffect } from 'react';
import './App.css';
import PlantCardHolder from './components/PlantCardHolder.js'
import { Route, Switch } from 'react-router-dom'
import PlantCard from './components/PlantCard.js'

function App() {

  let [plants, setPlants] = useState([])
  let [page, setPage] = useState(1)


   useEffect(()=> {
     getAllPlants()

  })

  function getAllPlants(){
    fetch(`http://localhost:3000/plant/${page}`)
    .then((data) => data.json())
    .then(response =>setPlants(response.data))
  }


  function getNextPlants(){
    setPlants([])
    setPage(page + 1)
    console.log(page)
    getAllPlants()
  }

if(!plants.length > 1 ){
  return null
}

  return (
    <div className="App">
    <h1>React App</h1>

       <PlantCardHolder plants={plants}/>
       <button onClick={getNextPlants}> Get More </button>


    </div>
  );
}

export default App;
