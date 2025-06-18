import { JSX } from "react";
import GuessInput from "./GuessInput";

function Game(): JSX.Element {
  return (
    <div className="game-wrapper">
      <GuessInput />
    </div>
  );
}

export default Game;
