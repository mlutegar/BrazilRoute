import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";

const Banner = () => (
    <BannerStyle>
        <Texto>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    Launch Your Tech Business in Brazil.
                </div>
                <div className={"Subtitulo"}>
                    The Easier, Faster, and Most Confident Way.
                    Brazilroute.
                </div>
            </div>
        </Texto>
    </BannerStyle>
)

export default Banner;