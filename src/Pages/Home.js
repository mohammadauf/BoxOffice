import React, { useState } from "react";
import MainPageLayout from "../Component/MainPageLayout";
import { apiGet } from "../misc/config";
import ShowGrid from "../Component/Show/ShowGrid";
import PersonGrid from "../Component/Person/PersonGrid";
// import { NavLink } from "react-router-dom";
const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const checked = searchOption === "shows";
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((data) => {
      setResult(data);
      // console.log(data);
    });
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
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
      return results[0].show ? <ShowGrid data={results} /> : <PersonGrid  data={results}/>;
    }
    return null;
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
          Show
          <input
            id="show-search"
            type="radio"
            value="shows"
            onChange={onRadioChange}
            checked={checked}
          />
        </label>
        <label htmlFor="show-people">
          Actor
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
