import { GameContainer } from "./components/GameContainer";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [player1Turn, setPlayer1Turn] = useState(true);

  function changeTurn() {
    setPlayer1Turn(!player1Turn);
  }
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <GameContainer changeTurn={changeTurn} player1Turn={player1Turn} />
    </div>
  );
}
