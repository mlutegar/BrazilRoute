import {KeyBenefitsStyle} from "./Style";

const KeyBenefits = () => (
    <KeyBenefitsStyle>
        <div>
            <div className="Titulo">Key Benefits of Working with Brazilroute</div>
            <div className={"linha"}></div>

            <div className={"conteudolinha"}>
                <div className={"numero"}>1</div>
                <div className={"texto"}>
                    <div className={"Subtitulo"}>Accelerated Time-to-Market</div>
                    <a>We help you expedite your entry into the Brazilian market</a>
                </div>
            </div>
            <div className={"conteudolinha"}>
                <div className={"numero"}>2</div>
                <div className={"texto"}>
                    <div className={"Subtitulo"}>Increased Market Share</div>
                    <a>We help you achieve your growth objectives and gain a competitive edge.</a>
                </div>
            </div>
            <div className={"conteudolinha-ultimo"}>
                <div className={"numero"}>3</div>
                <div className={"texto"}>
                    <div className={"Subtitulo"}>Reduced Risk</div>
                    <a>Our expertise mitigates potential risks associated with doing business in a new market.</a>
                </div>
            </div>
        </div>
    </KeyBenefitsStyle>
)

export default KeyBenefits;