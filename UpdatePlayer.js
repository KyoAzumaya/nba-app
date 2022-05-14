import React from "react";
import { useState } from "react";

export default function UpdatePlayer(props) {
  const URL =
    "https://crudcrud.com/api/6ff2dd20d6cf4b90ba07f581d6ef2468/players";
  const [editPlayer, setEditPlayer] = useState("");
  const updatePlayer = () => {
    console.log(props.playerId);
    fetch(`${URL}/${props.playerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editPlayer,
      }),
    }).then(() => {
      props.fetchData();
    });
  };

  return (
    <div>
      <input
        value={editPlayer}
        onChange={(event) => setEditPlayer(event.target.value)}
        placeholder="Update Player"
      ></input>
      <div>
        <button onClick={updatePlayer}>Update Player</button>
      </div>
    </div>
  );
}
