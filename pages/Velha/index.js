import { useState, useEffect } from 'react';
import styles from './Velha.module.css';

export default function Velha(){
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setcurrentPlayer] = useState('o');
  const [winner, setWinner] = useState(null);
  const gameOver = winner ? "gameOver" : "";

  const handleCellClick = (index) => {
    if (winner) return null;
    if (board[index] !== "") return null;
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
    setcurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  }

  const checkWiner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[6], board[4], board[2]],
    ];
    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === "o")) setWinner("o");
      if (cells.every(cell => cell === "x")) setWinner("x");

    })

    checkDraw();
  }

  const checkDraw = () => {
    if (board.every(item => item !== "")){
      setWinner("e");
    }
  }

  useEffect(checkWiner, [board]);
  const resetGame = () => {
    setcurrentPlayer("o");
    setBoard(emptyBoard);
    setWinner(null);

  }

  return(
    <div >
      
      <main >
        <a href="/" className={styles.btHome}>Home</a>
        <h1 className={styles.title}>Velha</h1>

        <div className={winner ? styles.board + " " + styles.gameOver : styles.board }>
          {board.map((item, index) => (
            <div 
              key={index} 
              className={styles.cell +" "+ item }
              onClick={() => handleCellClick(index)}
            >
            {item}
          </div>
          ))}
        </div>
        {winner &&
          <footer>
            {winner === "e" ? 
                <h2 className={styles.winnerMessage }>
                  <div className={ winner}> Empatou! </div>
                </h2>
              :
                <h2 className={styles.winnerMessage }>
                  <div className={ winner}>"{winner}" venceu </div>
                </h2>
            }
            <button onClick={resetGame}>Recomessar</button>

          </footer>
        }
      </main>
      
      <style jsx global>{`
        :root{
          --O-color: #2196f3;
          --X-color: #f44336;
          --E-color: #777;

        }
        
        html,
        body {
          display grid;
          align: center;
          justify: center;

          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #eee;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        main{
          display: grid;
          align-items: center;
          justify-content: center;

        }
        .x{
          background-color: var(--X-color);
        }
        .o{
          background-color: var(--O-color);
        }
        .e{
          background-color: var(--E-color);
        }
        .x, .o {
          cursor: not-allowed;
        }
        footer{
          text-align: center;
        }
        .winnerMessageo{
          background-color: #222;
        }

        button{
          padding: 0.8rem 1.5rem;
          border: none;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.6);
          background-color: #4caf50;
          color: white;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  )
}