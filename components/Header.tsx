import Image from 'react-bootstrap/Image';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export function Header() {
    return (
        <aside id="header">
            <section className="profile">
                <Image src="" rounded />
                <h1>Jhone Antonio</h1>
                <div className="social-links mt-4 text-center">
                    <FaLinkedin />
                    <FaGithub />
                    <FaInstagram />
                </div>
            </section>


        <nav id="navbar" className="nav-menu">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a aria-current="page" href="#" className="nav-link active"><i
                            className="bi bi-house" aria-hidden="true"></i>
                        Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="#sobre" className="nav-link"><i className="bi bi-person"
                            aria-hidden="true"></i> Sobre</a>
                </li>
                <li className="nav-item">
                    <a href="#habilidades" className="nav-link"><i
                            className="bi bi-list-check" aria-hidden="true"></i>
                        Habilidades</a>
                </li>
                <li className="nav-item">
                    <a href="#curriculo" className="nav-link"><i
                            className="bi bi-file-emark" aria-hidden="true"></i>
                        Currículo</a>
                </li>
                <li className="nav-item">
                    <a href="#portifolio" className="nav-link"><i
                            className="bi bi-collection" aria-hidden="true"></i>
                        Portifólio</a>
                </li>
                <li className="nav-item">
                    <a href="#contato" className="nav-link"><i
                            className="bi bi-envelope" aria-hidden="true"></i>
                        Contato</a>
                </li>
            </ul>

        </nav>
        </aside>
    )
}