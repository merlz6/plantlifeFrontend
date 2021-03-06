import React from 'react';




function ShowPlant(props) {

  const {plant} = props





  return (

    <div className="plantCard">
    <div className="plantCardSizer">
      <img className="plantcardimage" src={plant.image_url} alt="Image Unavailable" />
      <p>{plant.common_name} </p>
      <i>{plant.scientific_name}</i>
      <button onClick={()=> {props.showPlantList()} } > Back to List </button>
      </div>
    </div>

  );
}

export default ShowPlant;
