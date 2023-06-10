import { useState } from "react"
function Home(){
    return(
        <div >
          <h1 >Bem-vindo à minha página!</h1>
          <p >Esta é uma demonstração de como criar um painel de apresentação de página usando HTML e CSS.</p>
          <p >Fui feito pela ia do bing.</p>
        </div>
    )
}
export default Home

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1)
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
