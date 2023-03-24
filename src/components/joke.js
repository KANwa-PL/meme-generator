import React from "react";

function Joke(props) {
  let message = props.isShown === true ? "Hide punchline" : "Show punchline";
  return (
    <div>
      {props.setup && <h2>Setup: {props.setup}</h2>}
      {props.isShown && <h2>Punchline: {props.punchline}</h2>}
      <button onClick={() => props.handleToggle(props.id)}>{message}</button>
      <hr />
    </div>
  );
}

export default Joke;
