import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Velha(){
  const [board, setBoard] = useState();
  return <div className={styles.container}>Velha</div>
}