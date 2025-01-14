import {Link} from "react-router-dom";
import {FooterStyle} from "./Style";

const Footer = () => (
    <FooterStyle>
        <Link to="/">Home</Link>
        <Link to="/fotos">Fotos</Link>
        <Link to="/atletas">Atletas</Link>
    </FooterStyle>
)

export default Footer;