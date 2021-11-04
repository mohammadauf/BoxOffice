import React from "react";
import Not_found_Img from "../../Image/404.jpg";
import { CastList } from "./Cast.styled";

const Cast = ({ caste }) => {
  return (
    <CastList>
      {caste.map(({ person, character, id }) => {
        return (
          <>
            <div key={id} className="cast-item ">
              <div className="pic-wrapper">
                <img
                  src={person.image ? person.image.medium : Not_found_Img}
                  alt="caste-Images"
                />
              </div>
              <div className="actor">
                <p>
                  <span className="bold">
                    {person.name} | {character.name}
                  </span>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </CastList>
  );
};

export default Cast;
