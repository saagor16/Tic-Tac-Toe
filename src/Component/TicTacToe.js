import React from "react";

const TicTacToe = () => {
  const renderSquare = (index) => {
    return <button className="square" onClick={()=>handleClick(index)}></button>;
  };
  const handleClick =(index)=>{
    console.log(index)
  }
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacToe;
