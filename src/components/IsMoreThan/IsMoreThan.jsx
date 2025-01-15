import {Link} from "react-router-dom";
import {IsMoreThanStyle} from "./Style";
import {LetsTalkButtomStyle} from "../LetsTalkButtom/Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";

const BolinhaDireitaSvg = () => (
    <svg width="173" height="273" viewBox="0 0 173 273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <path
                d="M132.576 273C130.098 272.174 121.808 273 109.035 273C96.2613 273 85.5091 272.174 85.4933 273C85.4933 260.455 96.2613 253.589 109.035 253.589C121.808 253.589 132.576 260.455 132.576 273Z"
                fill="#4C6A9F"/>
            <ellipse cx="109.861" cy="109.448" rx="109.861" ry="109.448" fill="#4C6A9F"/>
            <ellipse cx="109.861" cy="109.448" rx="63.6036" ry="62.3172" fill="#FFFECD"/>
        </g>
    </svg>
)

const BolinhaEsquerdaSvg = () => (
    <svg width="150" height="273" viewBox="0 0 150 273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <circle cx="45.5" cy="168.5" r="104.5" fill="#FAFFCA"/>
            <ellipse cx="45.5" cy="168.5" rx="60.5" ry="59.5" fill="#4C9F7E"/>
            <circle cx="45.5" cy="14.5" r="14.5" fill="#4C9F7E"/>
        </g>
    </svg>
);

const IsMoreThan = () => (
    <IsMoreThanStyle>
        <div>
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