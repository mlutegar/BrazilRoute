import React, {useState} from "react";
import OurServicesCard from "../OurServicesCard/OurServicesCard";
import {GrupoCards, OurServicesStyle} from "./OurServicesStyle";

const ArrowSvgBlueAtivo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <path opacity="0.1"
              d="M1.125 22.5C1.125 4.89769 4.89769 1.125 22.5 1.125C40.1023 1.125 43.875 4.89769 43.875 22.5C43.875 40.1023 40.1023 43.875 22.5 43.875C4.89769 43.875 1.125 40.1023 1.125 22.5Z"
              fill="#4C6A9F"/>
        <path
            d="M1.125 22.5C1.125 4.89769 4.89769 1.125 22.5 1.125C40.1023 1.125 43.875 4.89769 43.875 22.5C43.875 40.1023 40.1023 43.875 22.5 43.875C4.89769 43.875 1.125 40.1023 1.125 22.5Z"
            stroke="#4C6A9F" strokeWidth="2"/>
        <path d="M32 22.5H13" stroke="#4C6A9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.875 29.625L31.7934 22.7066C31.9074 22.5926 31.9074 22.4074 31.7934 22.2934L24.875 15.375"
              stroke="#4C6A9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowSvgBlueDesativado = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <path opacity="0.1"
              d="M1 22.375C1 4.77269 4.77269 1 22.375 1C39.9773 1 43.75 4.77269 43.75 22.375C43.75 39.9773 39.9773 43.75 22.375 43.75C4.77269 43.75 1 39.9773 1 22.375Z"
              fill="#4C6A9F"/>
        <path
            d="M1 22.375C1 4.77269 4.77269 1 22.375 1C39.9773 1 43.75 4.77269 43.75 22.375C43.75 39.9773 39.9773 43.75 22.375 43.75C4.77269 43.75 1 39.9773 1 22.375Z"
            stroke="#4C6A9F" strokeWidth="2"/>
        <path d="M14 31L32 13" stroke="#4C6A9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 13L32 31" stroke="#4C6A9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowSvgGreen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <path opacity="0.1"
              d="M1.125 22.5C1.125 4.89769 4.89769 1.125 22.5 1.125C40.1023 1.125 43.875 4.89769 43.875 22.5C43.875 40.1023 40.1023 43.875 22.5 43.875C4.89769 43.875 1.125 40.1023 1.125 22.5Z"
              fill="#4C9F7E"/>
        <path
            d="M1.125 22.5C1.125 4.89769 4.89769 1.125 22.5 1.125C40.1023 1.125 43.875 4.89769 43.875 22.5C43.875 40.1023 40.1023 43.875 22.5 43.875C4.89769 43.875 1.125 40.1023 1.125 22.5Z"
            stroke="#4C9F7E" strokeWidth="2"/>
        <path d="M32 22.5H13" stroke="#4C9F7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.875 29.625L31.7934 22.7066C31.9074 22.5926 31.9074 22.4074 31.7934 22.2934L24.875 15.375"
              stroke="#4C9F7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const OurServices = () => {
    const [marketAtivo, setMarketAtivo] = useState(false);
    const [regulatoryAtivo, setRegulatoryAtivo] = useState(false);

    const handleMarketClick = () => {
        setMarketAtivo(!marketAtivo);
        setRegulatoryAtivo(false);
    }

    const handleRegulatoryClick = () => {
        setRegulatoryAtivo(!regulatoryAtivo);
        setMarketAtivo(false);
    }

    return (
        <OurServicesStyle>
            <section className="secao">
                <div className="titulo">Our Services for Tech Companies</div>

                <div className={`grupo ${marketAtivo ? "ativo" : ""} ${regulatoryAtivo ? "desativado" : ""}`}>
                    <div className={"link" + (marketAtivo ? " ativo" : "")}>
                        <span>Market Entry</span>
                        <div onClick={handleMarketClick}>
                            {marketAtivo ? <ArrowSvgBlueDesativado/> : <ArrowSvgBlueAtivo/> }
                        </div>
                    </div>
                    <GrupoCards>
                        <OurServicesCard ativo={marketAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                                     viewBox="0 0 89 89"
                                                     fill="none">
                                             <g clip-path="url(#clip0_15_340)">
                                                 <path
                                                     d="M37.6409 54.329C32.1467 53.1072 27.2267 50.3519 23.3442 46.5254C17.0239 49.6262 13.9009 54.2026 13.9009 60.5133V81.9313C16.9389 83.3451 24.7677 86.527 35.6547 87.6899L33.1098 85.6545C32.3069 85.0137 31.9276 83.9753 32.137 82.9687L37.6409 54.329Z"
                                                     fill="#EDEDED"/>
                                                 <path
                                                     d="M44.0287 49.5789C57.3304 49.5789 68.1557 38.6783 68.1557 25.284C68.1557 11.8896 57.3304 0.990967 44.0287 0.990967C30.7348 0.990967 19.9191 11.8896 19.9191 25.284C19.9191 38.6783 30.7338 49.5789 44.0287 49.5789Z"
                                                     fill="#EDEDED"/>
                                                 <path
                                                     d="M43.0318 55.272L37.8329 82.4293L44.2527 87.5626L50.6598 82.4332L45.3837 55.272H43.0318Z"
                                                     fill="#FFFECD"/>
                                                 <path
                                                     d="M64.7442 46.5071C60.9389 50.2661 56.1241 52.9818 50.7582 54.2432L56.3586 82.962C56.5699 83.9724 56.1926 85.0109 55.3916 85.6555L52.9827 87.5818C59.6968 86.7808 66.9725 85.0263 74.5986 81.8309V60.5133C74.5986 54.1949 71.3395 49.6127 64.7442 46.5071Z"
                                                     fill="#EDEDED"/>
                                             </g>
                                             <defs>
                                                 <clipPath id="clip0_15_340">
                                                     <rect width="87.8223" height="87.8223" fill="white"
                                                           transform="translate(0.590515 0.283447)"/>
                                                 </clipPath>
                                             </defs>
                                         </svg>}
                                         titulo="Company Formation in Brazil"
                                         descricao="We guide you through the process of establishing a legal entity specifically tailored for technology companies."
                                         cor="#4876A6"
                        />
                        <OurServicesCard ativo={marketAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                                     viewBox="0 0 89 89"
                                                     fill="none">
                                             <g clipPath="url(#clip0_15_330)">
                                                 <path
                                                     d="M63.0664 27.7419C56.7573 27.7419 51.6242 22.6078 51.6242 16.2968V1.69336H11.9882V88.428H72.7975C76.0993 88.428 78.7856 85.7417 78.7856 82.4389V27.7419H63.0664Z"
                                                     fill="white"/>
                                                 <path
                                                     d="M63.0664 22.282H74.7218L57.0811 5.36255V16.2967C57.0811 19.5957 59.7664 22.282 63.0664 22.282Z"
                                                     fill="#FFFECD"/>
                                             </g>
                                             <defs>
                                                 <clipPath id="clip0_15_330">
                                                     <rect width="88.2178" height="88.2178" fill="white"
                                                           transform="translate(0.390991 0.75)"/>
                                                 </clipPath>
                                             </defs>
                                         </svg>}
                                         titulo="Regulatory Compliance"
                                         descricao="We ensure compliance with Brazil's specific regulations for technology businesses, including data privacy and cybersecurity laws."
                                         cor="#4876A6"
                        />
                        <OurServicesCard ativo={marketAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                                     viewBox="0 0 89 89"
                                                     fill="none">
                                             <path
                                                 d="M6.38098 87.5635H76.3695C79.7116 87.5635 82.4351 84.8419 82.4351 81.496V20.9565H6.38098V87.5635ZM37.2143 72.4127C38.2489 73.4492 38.2489 75.1303 37.2143 76.1678C36.6941 76.686 36.0157 76.9427 35.3372 76.9427C34.6588 76.9427 33.9784 76.686 33.4582 76.1659L28.0885 70.7904L22.7169 76.1639C22.1967 76.6822 21.5202 76.9427 20.8398 76.9427C20.1614 76.9427 19.481 76.6822 18.9647 76.1639C17.9262 75.1294 17.9262 73.4482 18.9647 72.4107L24.3382 67.0372L18.9647 61.6617C17.9262 60.6232 17.9262 58.944 18.9647 57.9066C20.0012 56.8701 21.6804 56.8701 22.7178 57.9066L28.0895 63.282L33.4592 57.9085C34.4995 56.872 36.1769 56.872 37.2162 57.9085C38.2508 58.943 38.2508 60.6242 37.2162 61.6617L31.8427 67.0372L37.2143 72.4127ZM62.3459 77.2757H60.4911C59.0241 77.2757 57.8352 76.0886 57.8352 74.6217C57.8352 73.1548 59.0241 71.9678 60.4911 71.9678H62.3459C63.8129 71.9678 65.0038 73.1548 65.0038 74.6217C65.0038 76.0886 63.8119 77.2757 62.3459 77.2757ZM52.9268 36.5426H69.9006C71.3675 36.5426 72.5584 37.7296 72.5584 39.1965C72.5584 40.6635 71.3675 41.8505 69.9006 41.8505H52.9268C51.4637 41.8505 50.2747 40.6635 50.2747 39.1965C50.2747 37.7296 51.4637 36.5426 52.9268 36.5426ZM65.0038 59.4294C65.0038 60.8964 63.8129 62.0853 62.3459 62.0853H60.4911C59.0241 62.0853 57.8352 60.8964 57.8352 59.4294C57.8352 57.9645 59.0241 56.7755 60.4911 56.7755H62.3459C63.8119 56.7755 65.0038 57.9654 65.0038 59.4294ZM52.9268 64.3813H69.9006C71.3675 64.3813 72.5584 65.5683 72.5584 67.0352C72.5584 68.5022 71.3675 69.6892 69.9006 69.6892H52.9268C51.4637 69.6892 50.2747 68.5022 50.2747 67.0352C50.2747 65.5683 51.4637 64.3813 52.9268 64.3813ZM19.6055 36.5426H25.4317V30.7145C25.4317 29.2475 26.6206 28.0605 28.0856 28.0605C29.5525 28.0605 30.7396 29.2475 30.7396 30.7145V36.5426H36.5754C38.0385 36.5426 39.2294 37.7296 39.2294 39.1965C39.2294 40.6635 38.0385 41.8505 36.5754 41.8505H30.7396V47.6825C30.7396 49.1494 29.5525 50.3384 28.0856 50.3384C26.6206 50.3384 25.4317 49.1494 25.4317 47.6825V41.8505H19.6055C18.1385 41.8505 16.9476 40.6635 16.9476 39.1965C16.9476 37.7296 18.1385 36.5426 19.6055 36.5426Z"
                                                 fill="white"/>
                                             <path d="M82.436 1.37207H6.38098V15.6466H82.436V1.37207Z" fill="#FFFECD"/>
                                         </svg>}
                                         titulo="Tax Incentives for Tech"
                                         descricao="We help you take advantage of the various tax incentives and benefits available to technology companies in Brazil."
                                         cor="#4876A6"
                        />
                    </GrupoCards>
                </div>

                <div className="grupo">
                    <div className="link">
                        <span>Business Growth</span>
                        <div onClick={handleRegulatoryClick}>
                            <ArrowSvgGreen/>
                        </div>
                    </div>
                    <GrupoCards>
                        <OurServicesCard ativo={regulatoryAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="88"
                                                     viewBox="0 0 89 88"
                                                     fill="none">
                                             <g clipPath="url(#clip0_15_393)">
                                                 <path
                                                     d="M29.4358 55.8894V12.7551C13.4937 17.2292 1.76697 31.883 1.76697 49.2313C1.76697 70.1233 18.7649 87.1222 39.6599 87.1222C57.0612 87.1222 71.7516 75.3222 76.1746 59.3057H32.8522C30.9635 59.3057 29.4358 57.7771 29.4358 55.8894Z"
                                                     fill="#FFFECD"/>
                                                 <path
                                                     d="M75.1255 46.8148H42.0774V13.7608C42.0774 12.4241 40.9936 11.3423 39.6589 11.3423C36.1161 11.3423 32.69 11.8412 29.4348 12.7552V55.8884C29.4348 57.7761 30.9625 59.3048 32.8512 59.3048H76.1736C77.0605 56.095 77.544 52.7191 77.544 49.2313C77.544 47.8966 76.4603 46.8148 75.1255 46.8148Z"
                                                     fill="#E1D885"/>
                                                 <path
                                                     d="M84.4096 52.4547H39.5749C37.8387 52.4547 36.4326 51.0486 36.4326 49.3115V4.4758C36.4326 2.74155 37.8387 1.3335 39.5749 1.3335C66.0306 1.3335 87.5519 22.8577 87.5519 49.3124C87.5519 51.0486 86.1439 52.4547 84.4096 52.4547Z"
                                                     fill="white"/>
                                             </g>
                                             <defs>
                                                 <clipPath id="clip0_15_393">
                                                     <rect width="87.8223" height="87.8223" fill="white"
                                                           transform="translate(0.590515 0.143555)"/>
                                                 </clipPath>
                                             </defs>
                                         </svg>}
                                         titulo="Go-to-Market Strategy"
                                         descricao="We develop a tailored go-to-market strategy to help you effectively launch and scale your products or services in Brazil."
                                         cor="#4DAE89"
                        />
                        <OurServicesCard ativo={regulatoryAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                                     viewBox="0 0 89 89"
                                                     fill="none">
                                             <g clipPath="url(#clip0_15_380)">
                                                 <path
                                                     d="M69.8203 16.8027C59.6414 16.8027 51.3576 25.0865 51.3576 35.2713C51.3576 45.4541 59.6414 53.7398 69.8203 53.7398C80.0071 53.7398 88.2928 45.4541 88.2928 35.2713C88.2928 25.0855 80.0071 16.8027 69.8203 16.8027ZM77.3295 37.8606H72.0578V43.1333C72.0578 44.476 70.9691 45.5627 69.6284 45.5627C68.2877 45.5627 67.2009 44.476 67.2009 43.1333V37.8606H61.9282C60.5875 37.8606 59.4989 36.7739 59.4989 35.4312C59.4989 34.0905 60.5875 33.0038 61.9282 33.0038H67.2009V27.734C67.2009 26.3933 68.2877 25.3065 69.6284 25.3065C70.9691 25.3065 72.0578 26.3933 72.0578 27.734V33.0038H77.3295C78.6702 33.0038 79.757 34.0905 79.757 35.4312C79.757 36.7739 78.6702 37.8606 77.3295 37.8606Z"
                                                     fill="#FFFECD"/>
                                                 <path
                                                     d="M25.1172 54.1235L20.8323 76.5037L26.1206 80.7333L31.403 76.5066L27.0541 54.1235H25.1172Z"
                                                     fill="#FFFECD"/>
                                                 <path
                                                     d="M43.0079 46.8994C39.8709 49.9948 35.9059 52.2371 31.4824 53.2744L36.0969 76.94C36.2714 77.7728 35.9621 78.6307 35.302 79.159L33.3137 80.7479C38.8481 80.0868 44.846 78.6443 51.1269 76.0084V58.4443C51.1269 53.2375 48.4416 49.4616 43.0079 46.8994Z"
                                                     fill="white"/>
                                                 <path
                                                     d="M20.6733 53.3491C16.1461 52.34 12.0891 50.0715 8.89286 46.917C3.68219 49.4714 1.11127 53.2425 1.11127 58.4444V76.0929C3.61627 77.2571 10.063 79.8814 19.034 80.8392L16.9381 79.1621C16.277 78.6318 15.9668 77.7777 16.1374 76.9489L20.6733 53.3491Z"
                                                     fill="white"/>
                                                 <path
                                                     d="M25.9354 49.4297C36.8986 49.4297 45.8144 40.4509 45.8144 29.413C45.8144 18.3751 36.8977 9.39526 25.9354 9.39526C14.9818 9.39526 6.06989 18.3741 6.06989 29.412C6.06989 40.4499 14.9818 49.4297 25.9354 49.4297Z"
                                                     fill="white"/>
                                             </g>
                                             <defs>
                                                 <clipPath id="clip0_15_380">
                                                     <rect width="88.2178" height="88.2178" fill="white"
                                                           transform="translate(0.390991 0.627686)"/>
                                                 </clipPath>
                                             </defs>
                                         </svg>}
                                         titulo="Partner Ecosystem"
                                         descricao="We connect you with key partners, investors, and customers to accelerate your growth."
                                         cor="#4DAE89"
                        />
                        <OurServicesCard ativo={regulatoryAtivo}
                                         icone={<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                                     viewBox="0 0 89 89"
                                                     fill="none">
                                             <path
                                                 d="M57.7468 77.7607H43.5901C42.2414 77.7607 41.1498 76.671 41.1498 75.3223V12.9083C41.1498 11.5616 42.2414 10.468 43.5901 10.468H57.7468C59.0955 10.468 60.1871 11.5616 60.1871 12.9083C60.1871 14.255 59.0955 15.3466 57.7468 15.3466H46.0284V72.8821H57.7468C59.0955 72.8821 60.1871 73.9756 60.1871 75.3223C60.1861 76.671 59.0945 77.7607 57.7468 77.7607Z"
                                                 fill="#E1D885"/>
                                             <path
                                                 d="M57.7468 46.5541H31.6009C30.2522 46.5541 29.1606 45.4625 29.1606 44.1139C29.1606 42.7652 30.2522 41.6755 31.6009 41.6755H57.7468C59.0954 41.6755 60.187 42.7652 60.187 44.1139C60.187 45.4625 59.0945 46.5541 57.7468 46.5541Z"
                                                 fill="#E1D885"/>
                                             <path
                                                 d="M67.9042 63.5408C61.4033 63.5408 56.1167 68.8284 56.1167 75.3254C56.1167 81.8224 61.4043 87.108 67.9042 87.108C74.4032 87.108 79.6908 81.8224 79.6908 75.3254C79.6908 68.8284 74.4032 63.5408 67.9042 63.5408Z"
                                                 fill="#FFFECD"/>
                                             <path
                                                 d="M67.9042 32.4443C61.4033 32.4443 56.1167 37.73 56.1167 44.229C56.1167 50.724 61.4043 56.0097 67.9042 56.0097C74.4032 56.0097 79.6908 50.724 79.6908 44.229C79.6908 37.73 74.4032 32.4443 67.9042 32.4443Z"
                                                 fill="#FFFECD"/>
                                             <path
                                                 d="M67.9042 24.6901C74.4032 24.6901 79.6908 19.4044 79.6908 12.9094C79.6908 6.4104 74.4032 1.1228 67.9042 1.1228C61.4033 1.1228 56.1167 6.4104 56.1167 12.9094C56.1167 19.4054 61.4033 24.6901 67.9042 24.6901Z"
                                                 fill="#FFFECD"/>
                                             <path
                                                 d="M31.6 28.8384H10.6872C9.3405 28.8384 8.2489 29.9319 8.2489 31.2787V57.1733C8.2489 58.52 9.3405 59.6135 10.6872 59.6135H31.601C32.9477 59.6135 34.0393 58.52 34.0393 57.1733V31.2787C34.0383 29.9319 32.9467 28.8384 31.6 28.8384Z"
                                                 fill="white"/>
                                         </svg>}
                                         titulo="Digital Marketing and Sales"
                                         descricao="We implement effective digital marketing campaigns and sales strategies to reach your target audience."
                                         cor="#4DAE89"
                        />
                    </GrupoCards>
                </div>
            </section>
        </OurServicesStyle>
    );
};

export default OurServices;