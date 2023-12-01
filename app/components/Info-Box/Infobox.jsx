import style from "./Infobox.module.css"
import TxtInfo from "../TxtInfo/TxtInfo"

export default function Infobox () {
    return(
        <div className={style.Container}>
            <h2>Um Pouco Sobre Mim:</h2>
            <div className={style.Infobox}>
                
                <div className={style.Linha}>
                    <TxtInfo
                        Titulo={'Programador Python:'}
                        Conteudo={'Entusiasta no desenvolvimento de aplicações e automações voltadas ao mercado financeiro e finanças pessoais, bem como aplicações para otimazação de trabalhos cotidianos.'}
                    />
                    <TxtInfo
                        Titulo={'Desenvolvedor MT5:'}
                        Conteudo={'Desenvolvedor de Inicadores e Operadores automaticos para a Plataforma de investimentos MT5.'}
                    />
                </div>

                <div className={style.Linha}>
                    <TxtInfo
                        Titulo={'Desenvolvedor Web:'}
                        Conteudo={'Desenvolvedor de aplicações web utilizando Next.js e mantenedor de paginas institucionais, empregando tecnologias que garantam velocidade, estabilidade e segurança de acesso.'}
                    />
                    <TxtInfo 
                        Titulo={'Formação'} 
                        Conteudo={'Tecnico em informática formado pelo Instituto Paula Sousa na turma de 2016 com ênfase em desenvolvimento de softwares. Estudante de Engenharia da computação Pela UNIVESP, Turma de 2018'}
                    />
                </div>
            </div>
        </div>
    )
}