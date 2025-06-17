import { JSX } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Game from "./Game";

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <div className="wrapper">
        <Game />
      </div>
      ;
    </>
  );
}

export default App;
