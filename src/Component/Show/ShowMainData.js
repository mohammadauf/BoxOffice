import React from "react";
import { Star } from "../styled";

const ShowMainData = ({ image, name, rate, summary, tags, language }) => {
  return (
    <>
      <div>
        <img src={image} alt="show-cover" />
        <div>
          <div>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rate}</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />

          <div>
            <div>
              {tags.map((tag, i) => (
                <span key={i}>Tags:{`${tag}`}</span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ShowMainData;
