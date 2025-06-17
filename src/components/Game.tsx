import { JSX } from "react";
import GuessInput from "./GuessInput";
import React from "react";
import GuessList from "./GuessList";
import { Guess } from "../model/guess";

function Game(): JSX.Element {
  const [currentGuesses, setCurrentGuesses] = React.useState<Guess[]>([]);

  function addNewGuess(guess: string) {
    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
    };
    const nextCurrentGuesses = [...currentGuesses, newGuess];
    setCurrentGuesses(nextCurrentGuesses);
  }

  return (
    <div className="game-wrapper">
      <GuessList currentGuesses={currentGuesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </div>
  );
}

export default Game;
