import React, { useState } from "react";
import MainPageLayout from "../Component/MainPageLayout";
const Home = () => {
  const [input, setInput] = useState("");
  const onSearch = () => {
    const API = `https://api.tvmaze.com/search/shows?q=${input}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeySearch = (ev) => {
    if (ev.keyCode ===13) {
      onSearch()
    }
    // console.log(ev.keyCode);
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
    </>
  );
};

export default Home;
