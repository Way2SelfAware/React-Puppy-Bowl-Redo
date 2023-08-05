import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlayerDetails = () => {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    const getSinglePlayerById = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players/${id}`;

    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(getSinglePlayerById);
        const result = await response.json();
        console.log(result);
        setPlayerDetails(result.data.player);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayerDetails();
  }, [id]);

  if (!playerDetails) {
    return <div>Loading player details...</div>;
  }

  return (
    <div>
      <h2>{playerDetails.name}'s Details</h2>
      <img src={playerDetails.imageUrl} alt={playerDetails.name} />
      <p>Name: {playerDetails.name}</p>
      <p>Breed: {playerDetails.breed}</p>
      <p>ID: {playerDetails.id}</p>
      <p>Status: {playerDetails.status}</p>
      <p>Team ID: {playerDetails.teamId}</p>
      <p>Cohort ID: {playerDetails.cohortId}</p>
      <p>Created At: {playerDetails.createdAt}</p>
      <p>Updated At: {playerDetails.updatedAt}</p>
    </div>
  );
};
