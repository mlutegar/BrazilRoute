import {useContext, useEffect} from "react";
import {MenuContext} from "../../context/MenuContext";
import {
    ArteStyle,
    BotoesStyle,
    ConteudoMenu,
    ImagemStyle,
    MenuHamburguerStyle,
    MenuMobileStyle,
    MenuStyle
} from "./Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";
import WhatsappButtom from "../WhatsappButtom/WhatsappButtom";
import LetsTalkButtomWhite from "../LetsTalkButtomWhite/LetsTalkButtomWhite";

const MenuHamburguerSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M1.59351 28.0076L28.6011 1" stroke="white" strokeWidth="2"/>
        <path d="M1 1.50378L28.0076 28.5113" stroke="white" strokeWidth="2"/>
    </svg>
);

const ArteSVG = () => (
    <svg width="141" height="368" viewBox="0 0 141 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="-0.135529" cy="227.136" r="140.864" fill="#FAFFCA"/>
        <ellipse cx="-0.135483" cy="227.136" rx="81.5531" ry="80.2051" fill="#4C9F7E"/>
        <circle cx="-0.135487" cy="19.5458" r="19.5458" fill="#4C9F7E"/>
    </svg>
);

const MenuMobile = () => {
    const {menuAberto, toggleMenu} = useContext(MenuContext);

    useEffect(() => {
        if (menuAberto) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuAberto]);

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

                <ImagemStyle>
                    <img src="imagens/logo-white.png" alt="Logo"/>
                </ImagemStyle>
            </ConteudoMenu>

            <ArteStyle>
                <ArteSVG/>
            </ArteStyle>

        </MenuMobileStyle>
    )
};

export default MenuMobile;
