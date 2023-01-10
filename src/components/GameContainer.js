import React from "react";
import { useState } from "react";
import { Squares } from "./Squares";
import { data } from "./data";

function GameContainer(props) {
  const [boxes, setBoxes] = useState(data);
  const { changeTurn, player1Turn } = props;
  const [gameOver, setGameOver] = useState(false);

  let winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function findWinner() {
    for (let i = 0; i < winningArrays.length; i++) {
      let [a, b, c] = winningArrays[i];
      console.log(boxes[a], boxes[b], boxes[c]);
      if (
        boxes[a].value &&
        boxes[a].value === boxes[b].value &&
        boxes[a].value === boxes[c].value
      ) {
        return player1Turn ? "Player 2 Won" : "Player 1 Won";
      }
    }
  }

  function markBox(id) {
    if (findWinner()) return;
    let copy = [...boxes];
    if (!copy[id].selected) {
      copy[id].selected = true;
      player1Turn ? (copy[id].value = "X") : (copy[id].value = "O");
      setBoxes(copy);
      changeTurn();
    }
    findWinner();
  }
  function restart() {
    let copy = [...boxes];
    for (let i = 0; i < boxes.length; i++) {
      copy[i].value = "";
      copy[i].selected = false;
    }
    if (!player1Turn) changeTurn();
    setBoxes(copy);
  }

  let boxElements = boxes.map((ele, index) => (
    <Squares
      id={index}
      key={index}
      selected={ele.selected}
      current={ele.current}
      markBox={markBox}
      value={ele.value}
    />
  ));

  return (
    <div>
      <div className="gameContainer">{boxElements}</div>
      <h2>{player1Turn ? "Player 1 Turn" : "Player 2 Turn"}</h2>
      <h1>{findWinner()}</h1>
      {findWinner() && <button onClick={restart}>Start Again</button>}
    </div>
  );
}

export { GameContainer };
