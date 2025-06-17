import { List, ListItemText } from "@mui/material";
import { JSX } from "react";
import { Guess } from "../model/guess";

interface Props {
  currentGuesses: Guess[];
}

function GuessList({ currentGuesses }: Props): JSX.Element {
  return (
    <List>
      {currentGuesses.map((guess) => (
        <ListItemText key={guess.id} primary={guess.text} />
      ))}
    </List>
  );
}

export default GuessList;
