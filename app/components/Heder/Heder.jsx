import { FaLinkedin } from 'react-icons/fa'
import styles from './Heder.module.css'

export default function Heder(){
    return(
        <header >
            <div className={styles.container}>
                <div className={styles.logo}>Ebw</div>
                <a 
                    href='www.linkedin.com/in/antoniojhone' 
                    className={styles.perfil}
                    target='_blank'
                >
                    <FaLinkedin />
                    Perfil
                </a>

            </div>
        </header>
    
    )
}