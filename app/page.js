import Heder from "./components/Heder/Heder";
import Card from "./components/card/Card";

export default function Page() {
    return (
        <main>
            <Heder />
            <div className='corpo'>
                <h1>Bem vindo ao Meu Portifólio</h1>
                <div className='lista'></div>
                <Card 
                    Titulo='Stock Portfolio'
                    Descricao='Gerador de Carteira de Investimento'
                    html_url='https://github.com/EbonyWizard4/Stock_Portfolio'
                />

            </div>
        </main>

    )
}