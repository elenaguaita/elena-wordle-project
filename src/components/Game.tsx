import GuessInput from "./GuessInput";
import React from "react";
import GuessList from "./GuessList";
import { Guess } from "../model/guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

function Game() {
  const [currentGuesses, setCurrentGuesses] = React.useState<Guess[]>([]);

  function addNewGuess(guess: string) {
    if (currentGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      const newGuess = {
        id: crypto.randomUUID(),
        text: guess,
      };
      const nextCurrentGuesses = [...currentGuesses, newGuess];
      setCurrentGuesses(nextCurrentGuesses);
    } else alert("You've reached the maximum number of guesses allowed.");
  }

  return (
    <div className="game-wrapper">
      <GuessList currentGuesses={currentGuesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </div>
  );
}

export default Game;
