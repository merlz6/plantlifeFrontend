import React from 'react';




function PlantCard(props) {

  const {plant} = props





  return (

    <div className="plantCard">
      <img className="plantcardimage" src={plant.image_url} alt={plant.common_name} />
      <p>{plant.common_name} </p>
    </div>

  );
}

export default PlantCard;
