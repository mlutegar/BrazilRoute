import {KeyBenefitsStyle} from "./Style";

const EsltiloSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="197" height="163" viewBox="0 0 197 163" fill="none">
        <rect width="185.56" height="68.6316" rx="34.3158"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 197 48.0264)" fill="#4C6A9F"/>
        <rect width="185.56" height="68.6316" rx="34.3158"
              transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 197 96.3228)" fill="#FAFFCA"/>
    </svg>
)

const KeyBenefits = () => (
    <KeyBenefitsStyle>
        <div className={"container"}>
            <div className={"svg"}>
                <EsltiloSVG/>
            </div>

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