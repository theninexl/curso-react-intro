import React from "react";
import "./TodoSearch.css";

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    
    return (
      <input 
      className="css-input" 
      placeholder="search task"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}/>
    );
  }

export { TodoSearch }; 