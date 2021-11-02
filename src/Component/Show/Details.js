import React from "react";
import { DetailsWrapper } from "./Detailed.styled";

const Details = ({ status, premiered, network }) => {
  return (
    <>
      <DetailsWrapper>
        <p>Staus:{status}</p>
        <p>
          Premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </DetailsWrapper>
    </>
  );
};

export default Details;
