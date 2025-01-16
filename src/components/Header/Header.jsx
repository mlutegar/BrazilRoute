import { useState, useEffect } from "react";
import { Top } from "./Style";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                    <img src="imagens/logo.png" alt="Logo" />
                </div>

                <div className="menu">
                    <a href="#about-us">About us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </Top>
    );
};

export default Header;
