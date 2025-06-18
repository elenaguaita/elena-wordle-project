import { Box, Grid, Typography } from "@mui/material";
import { range } from "../utils";
import GuessBox from "./GuessBox";

interface Props {
  word: string;
}

function GuessRow({ word }: Props) {
  const letters = word.split("");

  return (
    <Grid container spacing={2} justifyContent="center">
      {range(5).map((index) => (
        <Grid key={index}>
          <GuessBox content={letters[index] || ""} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GuessRow;
