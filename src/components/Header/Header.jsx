import {Link} from "react-router-dom";
import {Top} from "./Style";

const Header = () => (
    <Top>
        <div className={`${"imagem"}  `}>
            <img src="imagens/logo.png" alt={"Logo"}/>
        </div>

        <div className={"menu"}>
            <a>Contact</a>
            <a>Services</a>
            <a>About us</a>
        </div>
    </Top>
)

export default Header;