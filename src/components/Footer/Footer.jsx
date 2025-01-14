import {Link} from "react-router-dom";
import {FooterStyle} from "./Style";

const Footer = () => (
    <FooterStyle>
        <div className={`${"imagem"}  `}>
            <img src="imagens/logo-white.png" alt={"Logo"}/>
        </div>

        <div className={"menu"}>
            <Link to="/">Contact</Link>
            <Link to="/fotos">Services</Link>
            <Link to="/atletas">About Us</Link>
        </div>

        <div className={"linha"}></div>

        <div className={"menu"}>
            <Link to="/">Copyrights</Link>
        </div>

    </FooterStyle>
)

export default Footer;