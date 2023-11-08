import styles from './Card.module.css'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'

export default function Card({Titulo, Descricao, html_url}){
    return(
        <section className={styles.card}>
            <h2>{Titulo}</h2>
            <p>{Descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaPython />
                </div>
                <a 
                    className={styles.card_button}
                    href={html_url}
                    target='_blank'
                >
                    <BsArrowRight/>
                </a>
            </div>
        </section>
    )
}
