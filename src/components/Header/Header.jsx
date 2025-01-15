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
            <div className="imagem">
                <img src="imagens/logo.png" alt="Logo" />
            </div>

            <div className="menu">
                <a href="/contact">Contact</a>
                <a href="/services">Services</a>
                <a href="/about-us">About us</a>
            </div>
        </Top>
    );
};

export default Header;
