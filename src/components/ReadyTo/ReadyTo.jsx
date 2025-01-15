import {Link} from "react-router-dom";
import {ReadToStyle} from "./Style";
import LetsTalkButtomWhite from "../LetsTalkButtomWhite/LetsTalkButtomWhite";
import WhatsappButtom from "../WhatsappButtom/WhatsappButtom";


const ReadTo = () => (
    <ReadToStyle>
        <div>
            <div className="Titulo">
                Ready to Expand Your Tech Business in Brazil?
            </div>
            <div className={"Subtitulo"}>
                Contact us today to discuss your specific needs and learn how Brazilroute can be your partner for success.
            </div>
            <div className={"botoes"}>
                <div className={"botaolets"}><LetsTalkButtomWhite/></div>
                <div className={"botaowhats"}><WhatsappButtom/></div>
                </div>
            </div>
    </ReadToStyle>
)

export default ReadTo;