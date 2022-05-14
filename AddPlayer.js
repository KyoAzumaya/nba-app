import React from "react";
import { useState } from "react";

export default function AddPlayer(props) {
  const [addPlayer, setAddPlayer] = useState("");
  const createPlayer = (event) => {
    event.preventDefault();
    const URL =
      "https://crudcrud.com/api/6ff2dd20d6cf4b90ba07f581d6ef2468/players";

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addPlayer,
      }),
    }).then(() => {
      props.fetchData();
    });
  };

  return (
    <div className="text-center">
      <input
        value={addPlayer}
        onChange={(event) => setAddPlayer(event.target.value)}
      ></input>
      <div>
        <button onClick={createPlayer}>Add Player:</button>
      </div>
    </div>
  );
}
