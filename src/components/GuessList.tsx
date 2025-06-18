import { List, ListItemText } from "@mui/material";
import { Guess } from "../model/guess";

interface Props {
  currentGuesses: Guess[];
}

function GuessList({ currentGuesses }: Props) {
  return (
    <List>
      {currentGuesses.map((guess) => (
        <ListItemText key={guess.id} primary={guess.text} />
      ))}
    </List>
  );
}

export default GuessList;
