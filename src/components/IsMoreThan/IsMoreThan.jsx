import {Link} from "react-router-dom";
import {IsMoreThanStyle} from "./Style";
import {LetsTalkButtomStyle} from "../LetsTalkButtom/Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";

const IsMoreThan = () => (
    <IsMoreThanStyle>
        <div>
            <div className="circulo-esquerda-grande"></div>
            <div className="circulo-esquerda-pequeno"></div>
            <div className="circulo-direita-grande"></div>
            <div className="circulo-direita-pequeno"></div>

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