import React from "react";
import PersonCard from "../Person/PersonCard";
import Not_found_Img from "../../misc/Image/notfound.jpg";


const PersonGrid = ({ data }) => {
  return data.map(({person}) => <PersonCard  key={person.id} name={person.name} country={person.country ? person.country.name : "Unknown"} birthday={person.birthday ? person.birthday :"Not defiend"} image={person.image ? person.image.medium :Not_found_Img} deathday={person.deathday ? `died ${person.deathday}`  :"Alive"}/>);
};

export default PersonGrid;
