import React from 'react';




function ShowPlant(props) {

  const {plant} = props


  return (

    <div className="showplantCard">
    <div className="plantCardSizer">
      <img className="plantcardimage" src={plant.image_url} alt="Image Unavailable" />
      <div className="showCardBody">
      <div style={{'border-right':'1px solid black'}}>
      <p>Common Name: </p>
      <p>Scientific Name:</p>
      <p>Family Name:  </p>
      <p>Genus: </p>
      <p>Year Discovered: </p>
      </div>
      <div>
      <p>{plant.common_name} </p>
      <p><i>{plant.scientific_name}</i></p>
      <p> {plant.family} </p>
      <p>{plant.genus}  </p>
      <p> {plant.year} </p>
      </div>

      </div>
      <button onClick={()=> {props.showPlantList()} } > Back to List </button>

      </div>
    </div>

  );
}

export default ShowPlant;
