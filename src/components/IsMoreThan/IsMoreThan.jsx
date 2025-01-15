import {Link} from "react-router-dom";
import {IsMoreThanStyle} from "./Style";
import {LetsTalkButtomStyle} from "../LetsTalkButtom/Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";

const BolinhaDireitaSvg = () => (
    <svg width="220" height="301" viewBox="0 0 220 301" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="109" cy="277.5" rx="23" ry="23.5" fill="#799174"/>
        <ellipse cx="109.861" cy="109.448" rx="109.861" ry="109.448" fill="#325661"/>
        <ellipse cx="109.861" cy="109.448" rx="63.6036" ry="62.3172" fill="#799174"/>
    </svg>
)

const BolinhaEsquerdaSvg = () => (

    <svg width="209" height="273" viewBox="0 0 209 273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <circle cx="104.5" cy="168.5" r="104.5" fill="#FAFFCA"/>
            <ellipse cx="104.5" cy="168.5" rx="60.5" ry="59.5" fill="#4C9F7E"/>
            <circle cx="104.5" cy="14.5" r="14.5" fill="#4C9F7E"/>
        </g>
    </svg>

);

const IsMoreThan = () => (
    <IsMoreThanStyle>
        <div className={"container"}>
            <div className="circulo-esquerda">
                <BolinhaEsquerdaSvg/>
            </div>
            <div className="circulo-direita">
                <BolinhaDireitaSvg/>
            </div>
            <h2 className="titulo">
                <div className="titulo-superior">
                    Brazilroute Is More Than a{" "}
                    <span className="titulo-destaque">Consultancy</span>
                </div>
                <div className="titulo-inferior">
                    We Are Your{" "}
                    <span className="titulo-destaque">Strategic Partner</span>
                </div>
            </h2>
            <div className={"Subtitulo"}>
                Brazilroute offers a comprehensive and customized solution for technology <br/>
                companies looking to expand their business in Brazil. <br/>
            </div>
            <div className={"botao"}>
                <LetsTalkButtom/>
            </div>
        </div>
    </IsMoreThanStyle>
)

export default IsMoreThan;