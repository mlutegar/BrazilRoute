import {useContext} from "react";
import {MenuContext} from "../../context/MenuContext";
import {BotoesStyle, ConteudoMenu, MenuHamburguerStyle, MenuMobileStyle, MenuStyle} from "./Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";
import WhatsappButtom from "../WhatsappButtom/WhatsappButtom";
import LetsTalkButtomWhite from "../LetsTalkButtomWhite/LetsTalkButtomWhite";

const MenuHamburguerSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M1.59351 28.0076L28.6011 1" stroke="white" strokeWidth="2"/>
        <path d="M1 1.50378L28.0076 28.5113" stroke="white" strokeWidth="2"/>
    </svg>
);

const MenuMobile = () => {
    const {menuAberto, toggleMenu} = useContext(MenuContext);

    return (
        <MenuMobileStyle
            ativo={menuAberto}
        >
            <ConteudoMenu>
                <MenuHamburguerStyle onClick={toggleMenu}>
                    <MenuHamburguerSVG/>
                </MenuHamburguerStyle>

                <MenuStyle>
                    <a href="#about-us">About us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </MenuStyle>

                <BotoesStyle>
                    <LetsTalkButtomWhite/>
                    <WhatsappButtom/>
                </BotoesStyle>

                <img src="imagens/logo-white.png" alt="Logo"/>
            </ConteudoMenu>
        </MenuMobileStyle>
    )
};

export default MenuMobile;
