import React from "react";
import { Link } from "react-router-dom";
const ShowCard = ({ id, name, language, image, summary }) => {
    const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 15).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>Langauge :{language}</h3>
      <div>
      <img src={image} alt="" />
      </div>
      <p>{summaryAsText}</p>
      <div>
          <Link to={`/show${id}`}>readMore</Link>
          <button type="button">Starred</button>
      </div>
    </div>
  );
};

export default ShowCard;
