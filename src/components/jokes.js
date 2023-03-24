import { useState } from "react";
import jokeData from "../data/jokes";
import Joke from "./joke.js";

function Jokes() {
  const [jokes, setJokes] = useState(jokeData);

  function toggle(key) {
    setJokes(() => {
      return jokes.map((joke) => {
        return joke.key === key ? { ...joke, isShown: !joke.isShown } : joke;
      });
    });
  }
  const jokKkes = jokes.map((joke) => {
    return (
      <Joke
        key={joke.key}
        id={joke.key}
        setup={joke.setup}
        punchline={joke.punchline}
        handleToggle={toggle}
        isShown={joke.isShown}
      />
    );
  });
  return jokKkes;
}
export default Jokes;
