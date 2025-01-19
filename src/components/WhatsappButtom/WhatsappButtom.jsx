import {Link} from "react-router-dom";
import {WhatsappButtomStyle} from "./Style";

const WhatsappButtom = ({temTexto = true}) => {
    const handleClick = () => {
        window.open("https://api.whatsapp.com/send?phone=5521996855481", "_blank")
    }

    return (
        <WhatsappButtomStyle temTexto={temTexto}>
            <button onClick={handleClick}>
                {temTexto && <a>Whatsapp</a>}
                <div className={"icon"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_1_435)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M23.7315 21.1816C23.37 22.2049 21.933 23.0515 20.787 23.2991C20.0025 23.4656 18.9795 23.5974 15.5325 22.1689C11.661 20.565 6.285 14.8515 6.285 11.0493C6.285 9.11373 7.401 6.85986 9.3525 6.85986C10.2915 6.85986 10.4985 6.87817 10.8075 7.61938C11.169 8.49265 12.051 10.6442 12.156 10.8647C12.5895 11.7695 11.715 12.2992 11.0805 13.0869C10.878 13.324 10.6485 13.5804 10.905 14.0215C11.16 14.4536 12.042 15.8911 13.338 17.0449C15.012 18.5364 16.3695 19.0125 16.8555 19.2151C17.217 19.3651 17.649 19.3302 17.913 19.0481C18.2475 18.6865 18.663 18.0865 19.086 17.4954C19.3845 17.0722 19.764 17.0194 20.1615 17.1694C20.43 17.2625 23.8425 18.8473 23.9865 19.1008C24.093 19.2854 24.093 20.1583 23.7315 21.1816ZM15.003 0H14.9955C6.72599 0 0 6.72803 0 15C0 18.28 1.05751 21.323 2.85601 23.7913L0.987007 29.365L6.75151 27.5229C9.12301 29.0924 11.9535 30 15.003 30C23.2725 30 30 23.272 30 15C30 6.72803 23.2725 0 15.003 0Z"
                                  fill="#333333"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_435">
                                <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </button>
        </WhatsappButtomStyle>
    )
}

export default WhatsappButtom