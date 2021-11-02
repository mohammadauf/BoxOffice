import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from "../Component/Show/Cast";
import Details from "../Component/Show/Details";
import Season from "../Component/Show/Season";
import ShowMainData from "../Component/Show/ShowMainData";
import { apiGet } from "../misc/config";
import Not_found_Img from "../misc/Image/404.jpg";
import {ShowPageWrapper} from "./Show.styled"

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }

    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: results });
          console.log(results);
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }
  return (
    <>
    <ShowPageWrapper>
      <ShowMainData
        name={show.name}
        image={show.image ? show.image.medium : Not_found_Img}
        language={show.language}
        rate={show.rating ? show.rating.average : "N/A"}
        summary={show.summary}
        tags={show.genres ? show.genres : "N/A"}
      />
      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          premiered={show.premiered}
          network={show.network}
        />
      </div>
      <div>
        <h2>Sesions</h2>

        <Season
          // eslint-disable-next-line no-undef
          seasons={show._embedded.seasons}
        />
        <div>
          <h2>Cast</h2>
          <Cast caste={show._embedded.cast} />
        </div>
      </div>
      </ShowPageWrapper>
    </>
  );
};

export default Show;
