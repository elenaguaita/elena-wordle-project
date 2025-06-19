import { Stack } from "@mui/material";
import { Guess } from "../model/guess";
import GuessRow from "./GuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

interface Props {
  currentGuesses: Guess[];
}

function GuessList({ currentGuesses }: Props) {
  return (
    <Stack spacing={2}>
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, index) => (
        <GuessRow
          key={
            currentGuesses[index] ? currentGuesses[index].id : `empty-${index}`
          }
          word={currentGuesses[index] ? currentGuesses[index].text : ""}
          statusArray={
            currentGuesses[index]
              ? currentGuesses[index].statusArray
              : Array(5).fill("unknown")
          }
        />
      ))}
    </Stack>
  );
}

export default GuessList;
