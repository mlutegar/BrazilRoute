import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";

const Banner = () => (
    <BannerStyle>
        <Texto>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    Scale Your Tech Business in Brazil with Brazilroute
                </div>

                <div className={"Subtitulo"}>
                    Your trusted partner for <b>seamless market entry</b> and <b>accelerated growth.</b>
                </div>
            </div>
        </Texto>
    </BannerStyle>
)

export default Banner;