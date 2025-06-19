import { Grid } from "@mui/material";
import GuessBox from "./GuessBox";
import { StatusValue } from "../model/status";

interface Props {
  word: string;
  statusArray: StatusValue[];
}

function GuessRow({ word, statusArray }: Props) {
  const letters = word.split("");

  return (
    <Grid container spacing={2}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Grid key={index}>
          <GuessBox
            content={letters[index] || " "}
            status={statusArray[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GuessRow;
