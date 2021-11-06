/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import ShowGrid from "../Component/Show/ShowGrid";
import MainPageLayout from "../Component/MainPageLayout";
import { useShows } from "../misc/Custom-Hooks";
import { apiGet } from "../misc/config";

const Starred = () => {
  const [starredShows] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starredShows && starredShows.length > 0) {
      const promises = starredShows.map((showId) => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starredShows]);

  return (
    <MainPageLayout>
      <>
        {isLoading && <div>Shows are still loading</div>}
        {error && <div>Error occured: {error}</div>}
        {!isLoading && !shows && <div>No shows were added</div>}
        {!isLoading && !error && shows && <ShowGrid data={shows} />}
        {console.log(shows)}
      </>
    </MainPageLayout>
  );
};

export default Starred;
