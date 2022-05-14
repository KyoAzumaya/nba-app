import React, { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import DeletePlayer from "./DeletePlayer";
import UpdatePlayer from "./UpdatePlayer";

const UsingFetch = () => {
  const [players, setPlayers] = useState([]);

  const fetchData = () => {
    fetch("https://crudcrud.com/api/6ff2dd20d6cf4b90ba07f581d6ef2468/players")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlayers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container text-center">
      <h2>List of Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <b>{player.name}</b>{" "}
            <UpdatePlayer playerId={player._id} fetchData={fetchData} />
            <DeletePlayer playerId={player._id} fetchData={fetchData} />
            <hr></hr>
          </li>
        ))}
      </ul>
      <AddPlayer fetchData={fetchData} />
    </div>
  );
};

export default UsingFetch;
