import GuessInput from "./GuessInput";
import React from "react";
import GuessList from "./GuessList";
import { Guess } from "../model/guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { words } from "../data";
import { checkGuess, pickAnswer } from "../utils";

function Game() {
  const [answer, setAnswer] = React.useState<string>(() => pickAnswer(words));
  const [currentGuesses, setCurrentGuesses] = React.useState<Guess[]>([]);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

  function addNewGuess(guess: string) {
    if (!isPlaying) {
      alert("Refresh the page to play again.");
      return;
    }

    const statusArray = checkGuess(guess, answer);
    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
      statusArray,
    };

    const nextCurrentGuesses = [...currentGuesses, newGuess];
    setCurrentGuesses(nextCurrentGuesses);

    const isCorrect = statusArray.every((status) => status === "correct");
    if (isCorrect) {
      setIsPlaying(false);
      console.log("You've guessed the word!");
    }

    if (!isCorrect && currentGuesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setIsPlaying(false);
      console.log("You've reached the maximum number of guesses allowed.");
    }
  }

  return (
    <div className="game-wrapper">
      <GuessList currentGuesses={currentGuesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </div>
  );
}

export default Game;
