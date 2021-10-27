import React from "react";

const PersonCard = ({ name, country, birthday, image, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h2>Name :{name}</h2>
      <h3>Country :{country}</h3>
      <p>Date of birth :{birthday}</p>
      <p>{deathday}</p>
    </div>
  );
};

export default PersonCard;
