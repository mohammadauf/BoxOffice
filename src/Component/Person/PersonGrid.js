import React from "react";
import PersonCard from "../Person/PersonCard";
import Not_found_Img from "../../Image/404.jpg";
import { FlexGrid } from "../styled";

const PersonGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <PersonCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : "Unknown"}
          birthday={person.birthday ? person.birthday : "Not defiend"}
          image={person.image ? person.image.medium : Not_found_Img}
          deathday={person.deathday ? `died ${person.deathday}` : "Alive" 
        }

        />
      ))}
    </FlexGrid>
  );
};

export default PersonGrid;
