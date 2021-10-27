import React from "react";
import ShowCard from "../Show/ShowCard";
import Not_found_Img from "../../misc/Image/404.jpg";
import { FlexGrid } from "../styled";
const ShowGrid = ({ data }) => {
  return(
    <FlexGrid>
    {data.map(({ show }) => (
      <ShowCard
        key={show.id}
        image={show.image ? show.image.medium : Not_found_Img}
        name={show.name}
        id={show.id}
        language={show.language}
        summary={show.summary}
      />
    ))};
    </FlexGrid>
  );
};

export default ShowGrid;
