import React, { useState } from "react";

export const Searchbar = () => {
  // Search State Management
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch from API
  const fetchData = (value) => {
    const getAllPlayers =
      "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players";
    fetch(getAllPlayers)
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSearchResults([]);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);

//Debug
console.log("searchResults type:", typeof searchResults);
  };

  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for a Player"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div>
          {searchResults.map((player) => (
            <div key={player.id}>
              <p>Name: {player.name}</p>
              <img src={player.imageUrl} alt={player.name} />
              <p>Breed: {player.breed}</p>
              <p>Number: {player.id}</p>
              <p>Position: {player.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
