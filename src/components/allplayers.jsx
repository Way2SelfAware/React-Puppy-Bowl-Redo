import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Searchbar } from "./searchbar";

export const Allplayers = () => {
  // State Management
  const [displayPlayers, setDisplayPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // GET to Display all players
  const getAllPlayers =
    "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players";
  const fetchDisplayPlayers = async () => {
    try {
      const response = await fetch(getAllPlayers);
      const result = await response.json();
      console.log(result);
      setDisplayPlayers(result.data.players);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  // Call fetch function
  useEffect(() => {
    fetchDisplayPlayers();
  }, []);

  // Filter players by name
  const filteredPlayers = displayPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        {/* Search Bar */}
        <Searchbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          className="search-bar"
        />

        {/* Display All Players */}
        <div className="all-players">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <p>Name: {player.name}</p>
              <img src={player.imageUrl} alt={player.name} />
              <p>Breed: {player.breed}</p>
              <p>Number: {player.id}</p>
              <p>Position: {player.status}</p>
              <Link to={`/playerdetails/${player.id}`}>
                <button>More Stats</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
