import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PlantCard from './PlantCard'



function PlantCardHolder(props) {
  const {plants} = props



  let plantItems = plants.map((plant, index) => {
    // console.log(plant)
    return (

    <PlantCard plant={plant} key={index} showPlantList={props.showPlantList} showSinglePlant={props.showSinglePlant}/>


    )
  })

  return (
    <div className="plantCardHolder">

    {plantItems}

    </div>
  );
}

export default PlantCardHolder;
