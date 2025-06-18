import { Box, Typography } from "@mui/material";

interface Props {
  content: string;
}

function GuessBox({ content }: Props) {
  return (
    <Box
      width={50}
      height={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={1}
      borderRadius={1}
      borderColor="gray"
      bgcolor="white"
    >
      <Typography variant="h6" fontWeight="medium">
        {content}
      </Typography>
    </Box>
  );
}

export default GuessBox;
