import React from "react";
import { Link } from "react-router-dom";
// import { SearchCard } from "../styled";
import {StyleShowCard} from "./ShowCard.styled"

const ShowCard = ({ id, name, language, image, summary }) => {
    const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 15).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyleShowCard>
      <img className="img-wrapper" src={image} alt="" />
      <h2>Name:{name}</h2>
      <h3>Langauge :{language}</h3>
      <div>
      </div>
      <p>{summaryAsText}</p>
      <div>
          <Link to={`/show${id}`}>readMore</Link>
          <button type="button">Starred</button>
      </div>
    </StyleShowCard>
  );
};

export default ShowCard;