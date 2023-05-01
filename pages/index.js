import { useState } from "react"
function Home(){
    return(
        <div style="background-color: #f0f0f0; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
          <h1 style="color: #0078d4; font-size: 36px;">Bem-vindo à minha página!</h1>
          <p style="color: #333333; font-size: 18px;">Esta é uma demonstração de como criar um painel de apresentação de página usando HTML e CSS.</p>
          <p style="color: #333333; font-size: 18px;">Fui feito pela ia do bing.</p>
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
