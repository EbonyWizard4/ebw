import { useState } from 'react';
import styles from '../styles/Velha.module.css';

export default function Velha(){
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setcurrentPlayer] = useState('o');
  const handleCellClick = (index) => {
    if (board[index] !== "") return null;
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
    setcurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  }
  return(
    <div >
      
      <main >
        <a href="/" className={styles.btHome}>Home</a>
        <h1 className={styles.title}>Velha</h1>

        <div className={styles.board}>
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
      </main>
      
      <style jsx global>{`
        :root{
          --O-color: #2196f3;
          --X-color: #f44336;
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
        .x, .o{
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}