import style from "./Infobox.module.css"

export default function Infobox () {
    return(
        <div className={style.Container}>
            <h2>Um Pouco Sobre Mim:</h2>
            <div className={style.Infobox}>
                
                <div className={style.Linha}>
                    <div className={style.Infocard}>texto1</div>
                    <div className={style.Infocard}>texto2</div>
                </div>

                <div className={style.Linha}>
                    <div className={style.Infocard}>texto3</div>
                    <div className={style.Infocard}>texto4</div>
                </div>
            </div>
        </div>
    )
}