import React from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import "./style.css";

function Search(props) {
  return (
    <>
      <SearchBar />
      <SearchList />
    </>
  );
}

export default Search;
