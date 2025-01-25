import React from "react";

const TicTacToe = () => {
  const renderSquare = () => {
    return <button>x</button>;
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};

export default TicTacToe;
