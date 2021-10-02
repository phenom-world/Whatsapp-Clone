import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./SearchBar.css";

function SearchBar({ placeholder }) {
  const [showArrowIcon, setShowArrowIcon] = useState(false);
  const [search, setSearch] = useState("");
  const displaySearchIcon = () => {
    setShowArrowIcon(false);
  };

  const displayArrowIcon = () => {
    setShowArrowIcon(true);
  };

  return (
    <div
      className={`search ${showArrowIcon === true && "search__bgColorChange"}`}
    >
      <div className="search__container">
        <span className={`${showArrowIcon === true ? "arrow" : ""}`}>
          {showArrowIcon ? <ArrowForwardIcon /> : <SearchOutlinedIcon />}
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={placeholder}
          required
          onFocus={displayArrowIcon}
          onBlur={displaySearchIcon}
        />
      </div>
    </div>
  );
}

export default SearchBar;
