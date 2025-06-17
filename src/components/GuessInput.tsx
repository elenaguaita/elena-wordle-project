import { TextField } from "@mui/material";
import React, { JSX } from "react";

function GuessInput(): JSX.Element {
  const [inputGuess, setInputGuess] = React.useState<string>("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log({ guess: inputGuess });
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
        label="Guess (5-letter-word)"
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
