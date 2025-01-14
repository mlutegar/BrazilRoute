import {Link} from "react-router-dom";
import {Top} from "./Style";

const Header = () => (
    <Top>
        <div className={"imagem"}>
            <svg fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M50.455 102.855c0 25.177 39.647 105.629 77.265 105.629h.001c37.619 0 77.397-76.894 77.397-108.531 0-20.003-18.606-52.373-77.62-52.373-59.013 0-77.043 35.758-77.043 55.275zm50.039 5.634C86.402 93.277 77.656 77.857 77.656 77.857s14.41-7.175 23.824-9.091c.802-.163 1.62-.338 2.458-.516 8.997-1.916 20.189-4.298 36.328 1.496 33.579 12.056 47.896 34.606 47.896 34.606s-21.609-17.401-45.404-20.895c-13.707-2.013-39.203 6.152-39.203 6.152s8.862 9.38 16.075 23.114c1.137 2.165 2.245 4.147 3.306 6.045 5.668 10.137 9.974 17.838 9.974 37.93 0 14.659-11.08 36.443-11.08 36.443s6.223-28.383 1.204-50.825c-3.627-16.223-6.425-18.719-13.02-24.603-2.528-2.255-5.615-5.008-9.52-9.224z"></path>
                </g>
            </svg>
        </div>

        <div className={"menu"}>
            <a>Contact</a>
            <a>Services</a>
            <a>About us</a>
        </div>
    </Top>
)

export default Header;