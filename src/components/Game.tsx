import GuessInput from "./GuessInput";
import React from "react";
import GuessList from "./GuessList";
import { Guess } from "../model/guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { words } from "../data";
import { checkGuess, pickAnswer } from "../utils";
import { Alert, Button, Snackbar } from "@mui/material";

type AlertState = {
  severity: "success" | "warning";
  message: string;
} | null;

function Game() {
  const [answer, setAnswer] = React.useState<string>(() => pickAnswer(words));
  const [currentGuesses, setCurrentGuesses] = React.useState<Guess[]>([]);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [alert, setAlert] = React.useState<AlertState>(null);

  function reset() {
    setAnswer(pickAnswer(words));
    setCurrentGuesses([]);
    setIsPlaying(true);
    setAlert(null);
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
        >
          <Alert
            action={
              <Button
                onClick={reset}
                variant="outlined"
                color="inherit"
                size="small"
              >
                restart
              </Button>
            }
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
