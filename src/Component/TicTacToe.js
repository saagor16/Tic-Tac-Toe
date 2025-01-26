import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [playerX, setPlayerX] = useState("Player X");
  const [playerO, setPlayerO] = useState("Player O");
  const [isDraw, setIsDraw] = useState(false);

  const renderSquare = (index) => (
    <button
      className={`square ${winner?.combination.includes(index) ? "winner-square" : ""}`}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner({ player: newBoard[winnerCombination[0]], combination: winnerCombination });
      return;
    }

    if (newBoard.every((cell) => cell)) {
      setIsDraw(true);
    }
  };

  const checkWinner = (newBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combinations[i];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="player-info">
        <input
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
          placeholder="Enter Player X Name"
        />
        <input
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
          placeholder="Enter Player O Name"
        />
      </div>
      <div className="board">
        {board.map((_, index) => renderSquare(index))}
      </div>
      {winner && (
        <div className="winner-message animated-text">
          🎉 Winner: {winner.player === "X" ? playerX : playerO}!
        </div>
      )}
      {isDraw && <div className="draw-message animated-text">😅 It's a Draw!</div>}
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
