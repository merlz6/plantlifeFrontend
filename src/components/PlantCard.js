import React from 'react';




function PlantCard(props) {

  const {plant} = props





  return (

    <div className="plantCard">
    <div className="plantCardSizer">
      <img className="plantcardimage" src={plant.image_url} alt="Image Unavailable" />
      <p>{plant.common_name} </p>
      <p><i>({plant.scientific_name})</i></p>


      <button onClick={()=>{props.showSinglePlant(plant)}}>Show Me More </button>
      </div>
    </div>

  );
}

export default PlantCard;
