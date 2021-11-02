import React from "react";
import Not_found_Img from "../../misc/Image/404.jpg";

const Cast = ({ caste }) => {
  return (
    <div>
      {caste.map(({ person, character }) => {
        return (
          <>
            <div>
              <img src={person.image ? person.image.medium :Not_found_Img} alt="caste-Images" />
            </div>
            <p>
              {person.name} | {character.name}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Cast;
