import React, { useState } from "react";
 
const TicTacToe = () => {
  const[board,setBoard]=useState(Array(9).fill(null));
  const[isXTrun,setIsXTrun]=useState(true);

  const renderSquare = (index) => {
    return <button className="square" onClick={()=>handleClick(index)}>{board[index]}</button>;
  };
  const handleClick =(index)=>{
    console.log(index)
    const newBoard =[...board];
    newBoard[index]= isXTrun ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTrun(!isXTrun)
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
