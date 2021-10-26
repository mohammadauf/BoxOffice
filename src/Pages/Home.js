import React, { useState } from "react";
import MainPageLayout from "../Component/MainPageLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const checked = searchOption === "shows";
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((data) => {
      setResult(data);
      console.log(data);
    });
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  // console.log(searchOption);
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
      return results[0].show
        ? results.map((curElem) => (
            <div key={curElem.show.id}>{curElem.show.name}</div>
          ))
        : results.map((curElem) => (
            <div key={curElem.person.id}>{curElem.person.name}</div>
          ));
    }
    // return null;
  };

  return (
    <>
      <MainPageLayout />
      <input
        type="text"
        placeholder="Search a Movie or an Actor"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeySearch}
      />
      <div>
        <label htmlFor="show-search">
          show
          <input
            id="show-search"
            type="radio"
            value="shows"
            onChange={onRadioChange}
            checked={checked}
          />
        </label>
        <label htmlFor="show-people">
          People
          <input
            type="radio"
            id="show-people"
            value="people"
            checked={!checked}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {RenderResult()}
    </>
  );
};

export default Home;
