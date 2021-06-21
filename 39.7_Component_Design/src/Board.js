import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = .5 }) {
  const [board, setBoard] = useState(createBoard(nrows, ncols));
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows, ncols) {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      let row = []
      initialBoard.push(row)
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < chanceLightStartsOn ? true : false)
      }
    }
    return initialBoard;
  }
  
  function hasWon(stateBoard) {
    // TODO: check the board in state to determine whether the player has won.
    // checks if every val is true, else return false
    for (let rows of stateBoard) {
      let allTrue = rows.every((val) => {
        return val === true
      })
      return allTrue
    }
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
      
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const copyOldBoard = [...board]
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, copyOldBoard)
      
      flipCell(y + 1, x, copyOldBoard)
      flipCell(y - 1, x, copyOldBoard)
      flipCell(y, x + 1, copyOldBoard)
      flipCell(y, x - 1, copyOldBoard)

      // TODO: return the copy
      return copyOldBoard
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon(board)) {
    return (
      <>
        <h1>You Won!</h1>
        <button onClick={() => setBoard(createBoard(nrows, ncols)) }>Play Again?</button>
      </>      
    )

  }

  // make table board
  let tableBoard = [];
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`
      row.push(
        <Cell
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      )
    }
    tableBoard.push(<tr key={y}>{row}</tr>)
  }


  return (
    <table className="Board-table">
      <tbody>
        {tableBoard}
      </tbody>      
    </table>
  )

}

export default Board;


//newBoard is technically a new array but it references oldBoard. Because row points to an array in oldBoard, if you were to change a value of the array in oldBoard, it would affect newBoard too
//So you need to make a deep copy -- meaning that recreate the board all the way down to the boolean values