import { TextField } from "@mui/material";
import React from "react";

interface Props {
  addNewGuess: (guess: string) => void;
}

function GuessInput({ addNewGuess }: Props) {
  const [inputGuess, setInputGuess] = React.useState<string>("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        addNewGuess(inputGuess);
        setInputGuess("");
      }}
    >
      <TextField
        id="outlined-basic"
        slotProps={{
          htmlInput: {
            required: true,
            maxLength: "5",
            pattern: "[A-Z]{5}",
          },
        }}
        label="Enter a 5-letter word"
        variant="outlined"
        value={inputGuess}
        onChange={(event) => {
          const formattedGuess = event.target.value.toUpperCase().trim();
          setInputGuess(formattedGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
