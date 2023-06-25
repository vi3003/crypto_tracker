import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchComponent({ search, onChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchComponent;