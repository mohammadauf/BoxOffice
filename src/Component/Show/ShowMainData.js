import React from "react";
import { Star } from "../styled";
import { Headline, MainDataWrapper } from "./ShowMainData.styled";

const ShowMainData = ({ image, name, rate, summary, tags, language }) => {
  return (
    <>
      <MainDataWrapper>
        <img src={image} alt="show-cover" />
        <div className="text-side">
          <Headline>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rate}</span>
            </div>
          </Headline>
          <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />

          <div>
            <div>
              {tags.map((tag, i) => (
                <span key={i}>Tags:{`${tag}`}</span>
              ))}
            </div>
          </div>
          
        </div>
      </MainDataWrapper>
    </>
  );
};

export default ShowMainData;
