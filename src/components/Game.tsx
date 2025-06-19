import GuessInput from "./GuessInput";
import React from "react";
import GuessList from "./GuessList";
import { Guess } from "../model/guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { words } from "../data";
import { checkGuess, pickAnswer } from "../utils";
import { Alert, Snackbar } from "@mui/material";

type AlertState = {
  severity: "success" | "warning" | "info";
  message: string;
} | null;

function Game() {
  const [answer, setAnswer] = React.useState<string>(() => pickAnswer(words));
  const [currentGuesses, setCurrentGuesses] = React.useState<Guess[]>([]);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [alert, setAlert] = React.useState<AlertState>(null);

  function restartGame() {
    if (alert?.severity === "info") setAlert(null);
    else {
      setAlert({
        severity: "info",
        message: "Refresh the page to play again.",
      });
    }
  }

  function addNewGuess(guess: string) {
    if (!isPlaying) {
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
      setAlert({
        severity: "success",
        message: "Congrats! You've guessed the word!",
      });
    }

    if (!isCorrect && currentGuesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setIsPlaying(false);
      setAlert({
        severity: "warning",
        message: `No more guesses left.\nThe answer was ${answer}.`,
      });
    }
  }

  return (
    <div className="game-wrapper">
      <GuessList currentGuesses={currentGuesses} />
      <GuessInput addNewGuess={addNewGuess} isPlaying={isPlaying} />
      {alert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={true}
          onClose={restartGame}
        >
          <Alert
            onClose={restartGame}
            severity={alert?.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alert?.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default Game;
