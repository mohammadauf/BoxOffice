import React from "react";
import ShowCard from "../Show/ShowCard";
import Not_found_Img from "../../misc/Image/notfound.jpg";

const ShowGrid = ({ data }) => {
  return data.map(({ show }) => (
    <ShowCard
      key={show.id}
      id={show.id}
      name={show.name}
      language={show.language}
      image={show.image ? show.image.medium : Not_found_Img}
      summary={show.summary}
    />
  ));
};

export default ShowGrid;
