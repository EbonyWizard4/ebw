import style from "./TxtInfo.module.css"

export default function TxtInfo({Titulo, Conteudo}){
    return(
        <div className={style.TxtInfo}>
            <h3>{Titulo}</h3>
            <p>{Conteudo}</p>
        </div>
    )
}