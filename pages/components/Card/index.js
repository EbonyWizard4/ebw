import styles from './Card.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'


function Card({ titulo, descricao, html_url }) {
    return(
        <section className={styles.card}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                    
                </div>
                <a href={html_url} className={styles.botao}>
                    <BsArrowRight />
                </a>
            </div>
        </section>

    )
}

export default Card
