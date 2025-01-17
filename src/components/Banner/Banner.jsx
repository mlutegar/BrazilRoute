import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";

const Banner = () => (
    <BannerStyle>
        <Texto>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    Launch Your Tech Business in Brazil. The Easier, Faster, and Most Confident Way.
                    Brazilroute.
                </div>

                <div className={"Subtitulo"}>
                    Your trusted partner for <b>seamless market entry</b> and <b>accelerated growth.</b>
                </div>
            </div>
        </Texto>
    </BannerStyle>
)

export default Banner;