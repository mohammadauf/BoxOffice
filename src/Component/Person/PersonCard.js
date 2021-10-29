import React from "react";
import { StyledPersonCard } from "./PersonCard.styled";

const PersonCard = ({ name, country, birthday, image, deathday }) => {
  return (
      <StyledPersonCard>
      <div>
        <img className="img-wrapper" src={image} alt="ActorImage" />
      </div>
      <h2>Name :{name}</h2>
      <h3>Country :{country}</h3>
      <p>Date of birth :{birthday}</p>
      <p className="deathday">{deathday}</p>
    </StyledPersonCard>
  );
};

export default PersonCard;
