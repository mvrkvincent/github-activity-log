import React, { useState } from "react";
import "./searchBar.css"

const SearchBar = () =>{
  const [term, addTerm] = useState("")

  let searchTerm = (e) => {
    e.preventDefault();
    let user = e.target.value
    if (user !== ""){
      addTerm(user)
    } else {
      addTerm("")
    }
  }
  return (
    <div className="searchMain">
      <p className="searchLable">Search:</p>
      <input type="text" name="search" id="search" onChange={searchTerm} />
    </div>
  );
}

export default SearchBar