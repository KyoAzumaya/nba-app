import React from "react";

export default function DeletePlayer(props) {
  const URL =
    "https://crudcrud.com/api/6ff2dd20d6cf4b90ba07f581d6ef2468/players";

  const deletePlayer = () => {
    console.log(props.playerId);
    fetch(`${URL}/${props.playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      props.fetchData();
    });
  };

  return (
    <div>
      <button onClick={deletePlayer}>Delete Player</button>
    </div>
  );
}
