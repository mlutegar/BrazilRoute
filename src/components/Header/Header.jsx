import {useState, useEffect, useContext} from "react";
import { Top } from "./Style";
import {MenuContext} from "../../context/MenuContext";

const MenuHamburguerSVG = () => (
    <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H38.1944" stroke="#333333" strokeWidth="2"/>
        <path d="M0 26H38.1944" stroke="#333333" strokeWidth="2"/>
        <path d="M0 13.5H38.1944" stroke="#333333" strokeWidth="2"/>
    </svg>
);

const Header = () => {
    const {toggleMenu} = useContext(MenuContext);
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Top isScrolled={isScrolled}>
            <div className={"conteudo-header"}>
                <div className="imagem">
                    <img src="imagens/logo.png" alt="Logo"/>
                </div>

                <div className="menu">
                    <a href="#about-us">About us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className={"svg-hamburguer"} onClick={toggleMenu}>
                    <MenuHamburguerSVG/>
                </div>
            </div>
        </Top>
    );
};

export default Header;
