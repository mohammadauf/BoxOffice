import React from "react";
import { StyledShowCard } from "./ShowCard.styled";
import { Link } from "react-router-dom";
import { Star } from "../styled";
const ShowCard = ({
  id,
  name,
  language,
  image,
  summary,
  onStarClick,
  isStarred
 
}) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 15).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StyledShowCard>
      <div>
        <img className="img-wrapper" src={image} alt="" />
      </div>
      <h2>Name:{name}</h2>
      <h3>Langauge :{language}</h3>
      <p>{summaryAsText}</p>
      <div>
        <Link to={`show${id}`}>readMore</Link>
        <button
          type="button"
          className="btns"
          id="btn"
          onClick={onStarClick}
        >
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
