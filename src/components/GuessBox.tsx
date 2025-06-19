import { Box, Typography } from "@mui/material";
import { StatusValue } from "../model/status";

interface Props {
  content: string;
  status: StatusValue;
}

function GuessBox({ content, status }: Props) {
  return (
    <Box
      width={50}
      height={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={`cell ${status}`}
    >
      <Typography variant="h6" fontWeight="medium">
        {content}
      </Typography>
    </Box>
  );
}

export default GuessBox;
