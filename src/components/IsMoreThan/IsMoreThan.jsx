import {Link} from "react-router-dom";
import {IsMoreThanStyle} from "./Style";
import {LetsTalkButtomStyle} from "../LetsTalkButtom/Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";

const IsMoreThan = () => (
    <IsMoreThanStyle>
        <div>
            <div className={"Titulo"}>
                Brazilroute Is More Than a Consultancy <br/>
                We Are Your Strategic Partner <br/>
            </div>

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