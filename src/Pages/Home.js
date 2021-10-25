import React, { useState } from "react";
import MainPageLayout from "../Component/MainPageLayout";
import {apiGet} from "../misc/config"

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResult] = useState(null);
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((data) => {
      setResult(data);
      console.log(data);
    });
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeySearch = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const RenderResult = () => {
    if (results && results.length === 0) {
      return <div>No Result Found</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((items) => {
            return <div key={items.show.id}>{items.show.name}</div>;
          })}
        </div>
      );
    }
    // return null;
  };
  return (
    <>
      <MainPageLayout />
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeySearch}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {RenderResult()}
    </>
  );
};

export default Home;
