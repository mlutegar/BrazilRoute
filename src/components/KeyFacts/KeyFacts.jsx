import {Link} from "react-router-dom";
import {IsMoreThanStyle} from "./Style";
import {LetsTalkButtomStyle} from "../LetsTalkButtom/Style";
import LetsTalkButtom from "../LetsTalkButtom/LetsTalkButtom";
import KeyFactsCard from "../KeyFactsCard/KeyFactsCard";

const BolinhaDireitaSvg = () => (
    <svg width="173" height="273" viewBox="0 0 173 273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <path
                d="M132.576 273C130.098 272.174 121.808 273 109.035 273C96.2613 273 85.5091 272.174 85.4933 273C85.4933 260.455 96.2613 253.589 109.035 253.589C121.808 253.589 132.576 260.455 132.576 273Z"
                fill="#4C6A9F"/>
            <ellipse cx="109.861" cy="109.448" rx="109.861" ry="109.448" fill="#4C6A9F"/>
            <ellipse cx="109.861" cy="109.448" rx="63.6036" ry="62.3172" fill="#FFFECD"/>
        </g>
    </svg>)

const BolinhaEsquerdaSvg = () => (
    <svg width="150" height="273" viewBox="0 0 150 273" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <circle cx="45.5" cy="168.5" r="104.5" fill="#FAFFCA"/>
            <ellipse cx="45.5" cy="168.5" rx="60.5" ry="59.5" fill="#4C9F7E"/>
            <circle cx="45.5" cy="14.5" r="14.5" fill="#4C9F7E"/>
        </g>
    </svg>);

const KeyFacts = () => (<IsMoreThanStyle>
    <div>
        <div className="circulo-esquerda">
            <BolinhaEsquerdaSvg/>
        </div>
        <div className="circulo-direita">
            <BolinhaDireitaSvg/>
        </div>
        <div className="titulo-superior">
            {" "}About Brazil's Tech Market
            <span className="titulo-destaque">Key Facts</span>
        </div>
        <div className={"Conteudo"}>
            <div className={"Coluna1"}>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="189" height="189" viewBox="0 0 189 189"
                             fill="none">
                            <g opacity="0.5">
                                <path
                                    d="M51.1876 141.75V141.045C51.1868 134.229 51.186 127.978 51.8696 122.894C52.6223 117.295 54.3933 111.378 59.2605 106.51C64.1276 101.643 70.0453 99.8723 75.6441 99.1195C80.7282 98.4359 86.9786 98.4367 93.7952 98.4375H95.2048C102.021 98.4367 108.272 98.4359 113.356 99.1195C118.955 99.8723 124.872 101.643 129.74 106.51C134.607 111.378 136.378 117.295 137.131 122.894C137.804 127.903 137.813 134.044 137.812 140.744C158.072 136.412 173.25 118.597 173.25 97.2791C173.25 77.8139 160.595 61.2694 142.971 55.243C140.467 33.0255 121.4 15.75 98.2501 15.75C73.3972 15.75 53.25 35.6601 53.25 60.2206C53.25 65.6529 54.2356 70.8577 56.0398 75.6698C53.9241 75.2592 51.7374 75.0441 49.5 75.0441C30.8604 75.0441 15.75 89.9766 15.75 108.397C15.75 126.817 30.8604 141.75 49.5 141.75H51.1876Z"
                                    fill="#FFFECD"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M94.5 110.25C79.6509 110.25 72.2261 110.25 67.6131 114.863C63 119.476 63 126.901 63 141.75C63 156.599 63 164.024 67.6131 168.637C72.2261 173.25 79.6509 173.25 94.5 173.25C109.349 173.25 116.774 173.25 121.387 168.637C126 164.024 126 156.599 126 141.75C126 126.901 126 119.476 121.387 114.863C116.774 110.25 109.349 110.25 94.5 110.25ZM108.712 134.538L98.2123 124.038C96.1624 121.988 92.8376 121.988 90.7877 124.038L80.288 134.538C78.2374 136.588 78.2374 139.912 80.288 141.963C82.3379 144.012 85.6619 144.012 87.7125 141.963L89.2497 140.425V155.75C89.2497 158.65 91.6004 161 94.5 161C97.3996 161 99.7503 158.65 99.7503 155.75V140.425L101.287 141.963C103.338 144.012 106.662 144.012 108.712 141.963C110.763 139.912 110.763 136.588 108.712 134.538Z"
                                  fill="#FFFECD"/>
                        </svg>
                    }
                    title={"Cloud Computing"}
                    text={"Brazil's cloud computing market is growing rapidly, driven by increasing demand for data storage and processing."}>
                </KeyFactsCard>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171"
                             fill="none">
                            <path opacity="0.5"
                                  d="M85.8677 14.25C97.8391 14.2499 107.322 14.2498 114.743 15.265C122.38 16.3097 128.562 18.511 133.437 23.471C138.312 28.4311 140.476 34.7207 141.503 42.4914C142.5 50.0419 142.5 59.6898 142.5 71.8699V99.1301C142.5 111.31 142.5 120.958 141.503 128.509C140.476 136.279 138.312 142.569 133.437 147.529C128.562 152.489 122.38 154.69 114.743 155.735C107.322 156.75 97.8391 156.75 85.8684 156.75H85.1323C73.1609 156.75 63.6782 156.75 56.2572 155.735C48.6197 154.69 42.438 152.489 37.5629 147.529C32.6879 142.569 30.5244 136.279 29.4976 128.509C28.4999 120.958 28.4999 111.31 28.5 99.1301V71.8699C28.4999 59.6897 28.4999 50.0419 29.4976 42.4914C30.5244 34.7207 32.6879 28.4311 37.5629 23.471C42.438 18.511 48.6197 16.3097 56.2572 15.265C63.6783 14.2498 73.1609 14.2499 85.1323 14.25H85.8677Z"
                                  fill="#FFFECD"/>
                            <path
                                d="M61.0704 131.893C61.0704 129.147 63.2578 126.921 65.9561 126.921H105.042C107.74 126.921 109.927 129.147 109.927 131.893C109.927 134.638 107.74 136.863 105.042 136.863H65.9561C63.2578 136.863 61.0704 134.638 61.0704 131.893Z"
                                fill="#FFFECD"/>
                        </svg>
                    }
                    title={"Smartphone Penetration"}
                    text={"Brazil has one of the highest smartphone penetration rates in Latin America, providing a large and engaged mobile user base."}>
                </KeyFactsCard>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171"
                             fill="none">
                            <path
                                d="M21.375 71.25C21.375 57.815 21.375 51.0974 25.5488 46.9238C29.7224 42.75 36.44 42.75 49.875 42.75H121.125C134.56 42.75 141.277 42.75 145.451 46.9238C149.625 51.0974 149.625 57.815 149.625 71.25V99.75C149.625 113.185 149.625 119.902 145.451 124.076C141.277 128.25 134.56 128.25 121.125 128.25H49.875C36.44 128.25 29.7224 128.25 25.5488 124.076C21.375 119.902 21.375 113.185 21.375 99.75V71.25Z"
                                fill="#A6B4B6"/>
                            <path
                                d="M42.75 114C46.685 114 49.875 110.81 49.875 106.875C49.875 102.94 46.685 99.75 42.75 99.75C38.815 99.75 35.625 102.94 35.625 106.875C35.625 110.81 38.815 114 42.75 114Z"
                                fill="#FFFECD"/>
                            <path d="M149.625 64.125H21.375V78.375H149.625V64.125Z" fill="#FFFECD"/>
                        </svg>
                    }
                    title={" Digital Payments"}
                    text={"The adoption of digital payments is rapidly increasing, creating opportunities for fintech companies.t"}>
                </KeyFactsCard>
            </div>
            <div className={"Coluna2"}>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="246" height="246" viewBox="0 0 246 246"
                             fill="none">
                            <path opacity="0.5"
                                  d="M47.3127 62.0481C44 66.768 44 80.7973 44 108.857V122.675C44 172.148 81.1969 196.157 104.535 206.352C110.865 209.117 114.031 210.5 122.975 210.5C131.919 210.5 135.084 209.117 141.415 206.352C164.753 196.157 201.95 172.148 201.95 122.675V108.857C201.95 80.7973 201.95 66.768 198.637 62.0481C195.325 57.3283 182.133 52.8129 155.75 43.782L150.724 42.0614C136.971 37.3538 130.095 35 122.975 35C115.855 35 108.979 37.3538 95.226 42.0614L90.1996 43.7819C63.8168 52.8129 50.6254 57.3283 47.3127 62.0481Z"
                                  fill="#FFFECD"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M76.3595 103.441C73.8238 109.563 72.5187 116.124 72.5187 122.75C72.5187 129.376 73.8238 135.937 76.3595 142.059C78.8952 148.181 82.6117 153.743 87.2971 158.428C91.9823 163.113 97.5446 166.83 103.666 169.366C109.788 171.902 116.349 173.206 122.975 173.206C129.601 173.206 136.162 171.902 142.284 169.366C148.406 166.83 153.967 163.113 158.653 158.428C163.338 153.743 167.054 148.181 169.59 142.059C172.126 135.937 173.431 129.376 173.431 122.75C173.431 116.124 172.126 109.563 169.59 103.441C167.054 97.3198 163.338 91.7575 158.653 87.0723C153.967 82.387 148.406 78.6704 142.284 76.1347C136.162 73.599 129.601 72.2939 122.975 72.2939C116.349 72.2939 109.788 73.599 103.666 76.1347C97.5446 78.6704 91.9823 82.387 87.2971 87.0723C82.6117 91.7575 78.8952 97.3198 76.3595 103.441ZM122.482 85.6111C122.786 85.4594 122.936 85.4564 122.975 85.4564C123.014 85.4564 123.164 85.4594 123.468 85.6111C123.796 85.774 124.307 86.1138 124.957 86.7867C126.297 88.1743 127.835 90.5731 129.275 94.1701C130.693 97.7163 131.875 102.079 132.696 107.036C133.181 109.962 133.529 113.028 133.732 116.169H112.218C112.421 113.028 112.769 109.962 113.254 107.036C114.075 102.079 115.257 97.7163 116.675 94.1701C118.115 90.573 119.653 88.1743 120.993 86.7867C121.643 86.1138 122.154 85.774 122.482 85.6111ZM100.268 104.884C99.6647 108.526 99.2511 112.317 99.0309 116.169H86.2665C86.7382 113.538 87.4924 110.959 88.52 108.479C90.3942 103.954 93.1413 99.8425 96.6044 96.3796C98.7992 94.1847 101.254 92.2774 103.91 90.6977C102.335 94.9606 101.116 99.7695 100.268 104.884ZM86.2665 129.331H99.0309C99.2511 133.184 99.6647 136.974 100.268 140.616C101.116 145.731 102.335 150.54 103.91 154.803C101.254 153.223 98.7992 151.315 96.6044 149.121C93.1413 145.658 90.3942 141.546 88.52 137.022C87.4924 134.541 86.7382 131.962 86.2665 129.331ZM159.683 116.169C159.212 113.538 158.458 110.959 157.43 108.479C155.556 103.954 152.809 99.8426 149.346 96.3796C147.151 94.1847 144.696 92.2774 142.04 90.6977C143.615 94.9606 144.834 99.7696 145.682 104.884C146.285 108.526 146.699 112.317 146.919 116.169H159.683ZM146.919 129.331H159.683C159.212 131.962 158.458 134.541 157.43 137.022C155.556 141.546 152.809 145.658 149.346 149.121C147.151 151.315 144.696 153.223 142.04 154.803C143.615 150.54 144.834 145.731 145.682 140.616C146.285 136.974 146.699 133.184 146.919 129.331ZM133.732 129.331C133.529 132.472 133.181 135.538 132.696 138.464C131.875 143.421 130.693 147.784 129.275 151.33C127.835 154.927 126.297 157.326 124.957 158.714C124.307 159.387 123.796 159.726 123.468 159.89C123.164 160.041 123.014 160.044 122.975 160.044C122.936 160.044 122.786 160.041 122.482 159.89C122.154 159.726 121.643 159.387 120.993 158.714C119.653 157.326 118.115 154.927 116.675 151.33C115.257 147.784 114.075 143.421 113.254 138.464C112.769 135.538 112.421 132.472 112.218 129.331H133.732Z"
                                  fill="#FFFECD"/>
                        </svg>
                    }
                    title={"Government Digital Transformation"}
                    text={"The Brazilian government is investing heavily in digital transformation, with initiatives like gov.br, offering a wide range of online public services."}>
                </KeyFactsCard>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="173" height="173" viewBox="0 0 173 173"
                             fill="none">
                            <path
                                d="M129.75 84.626C129.48 83.6478 129.007 82.7377 128.361 81.9551C127.715 81.1726 126.911 80.5352 126.002 80.0847L101.565 67.9747L108.125 22.6343C108.341 21.0629 108.032 19.4643 107.247 18.0862C106.462 16.708 105.244 15.6272 103.783 15.0114C102.321 14.3955 100.697 14.2789 99.1623 14.6797C97.6277 15.0804 96.2681 15.9762 95.2942 17.2281L44.8358 82.1031C44.151 82.9777 43.6775 83.9988 43.4524 85.0867C43.2273 86.1745 43.2567 87.2997 43.5383 88.3743C43.8565 89.4494 44.4096 90.4404 45.1576 91.2756C45.9055 92.1108 46.8297 92.7695 47.8633 93.2039L78.6429 105.53L72.0833 150.366C71.8603 151.975 72.1875 153.613 73.0118 155.013C73.8361 156.413 75.1092 157.493 76.6246 158.079C77.4693 158.429 78.3774 158.601 79.2917 158.583C80.4789 158.577 81.6463 158.278 82.69 157.712C83.7338 157.146 84.6216 156.331 85.2746 155.34L128.525 90.4647C129.134 89.6354 129.558 88.6852 129.77 87.6781C129.981 86.671 129.974 85.6303 129.75 84.626Z"
                                fill="#FFFECD"/>
                        </svg>
                    }
                    title={"Energy"}
                    text={"The energy sector is experiencing rapid technological advancements, with a strong focus on renewable energy integration, smart grids, and digital oilfields."}>
                </KeyFactsCard>
                <KeyFactsCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="173" height="173" viewBox="0 0 173 173"
                             fill="none">
                            <path
                                d="M129.75 84.626C129.48 83.6478 129.007 82.7377 128.361 81.9551C127.715 81.1726 126.911 80.5352 126.002 80.0847L101.565 67.9747L108.125 22.6343C108.341 21.0629 108.032 19.4643 107.247 18.0862C106.462 16.708 105.244 15.6272 103.783 15.0114C102.321 14.3955 100.697 14.2789 99.1623 14.6797C97.6277 15.0804 96.2681 15.9762 95.2942 17.2281L44.8358 82.1031C44.151 82.9777 43.6775 83.9988 43.4524 85.0867C43.2273 86.1745 43.2567 87.2997 43.5383 88.3743C43.8565 89.4494 44.4096 90.4404 45.1576 91.2756C45.9055 92.1108 46.8297 92.7695 47.8633 93.2039L78.6429 105.53L72.0833 150.366C71.8603 151.975 72.1875 153.613 73.0118 155.013C73.8361 156.413 75.1092 157.493 76.6246 158.079C77.4693 158.429 78.3774 158.601 79.2917 158.583C80.4789 158.577 81.6463 158.278 82.69 157.712C83.7338 157.146 84.6216 156.331 85.2746 155.34L128.525 90.4647C129.134 89.6354 129.558 88.6852 129.77 87.6781C129.981 86.671 129.974 85.6303 129.75 84.626Z"
                                fill="#FFFECD"/>
                        </svg>
                    }
                    title={"Agribusiness"}
                    text={"Brazil is at the forefront of agritech adoption, with a focus on precision agriculture, IoT for livestock management, and blockchain for supply chain traceability"}>
                </KeyFactsCard>
            </div>
        </div>
    </div>
</IsMoreThanStyle>)

export default KeyFacts;