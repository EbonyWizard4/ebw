import styles from '../styles/Velha.module.css';

export default function Velha(){
  return(
    <div className='container'>
      <main >
        <div className={styles.grid}>
        <h1>Velha</h1>
          
        </div>
        
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #eee;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}