import styles from "./Banner.module.css"

export default function Banner (){
    return(
        <div className={styles.Banner}>
            <div className={styles.Overlay}></div>
                <div className={styles.Glass}>
                    <div className={styles.Texto}>
                        <h1>Ebw.Dev</h1>
                        <p>Desenvolvimento de softwares por demanda!</p>
                        <p>CEO: Jhone Antonio</p>
                    </div>
                </div>
            
        </div>
    )
}