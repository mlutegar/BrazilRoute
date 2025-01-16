// noinspection CssUnknownTarget

import styled from "styled-components"

const IsMoreThanStyle = styled.header`
    background: #204838;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    
    .container {
        width: 100%;
        margin: 0 auto;
        max-width: 1440px;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .circulo-direita, .circulo-esquerda {
        position: absolute;
    }

    .circulo-direita {
        bottom: 0;
        right: 0;
    }
    
    .circulo-esquerda {
        top: 0;
        left: 0;
    }

    .titulo {
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 10px;
        line-height: 1.4;
        color: #fffecd;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 45px;
        animation: fadeIn 2s ease forwards;
        opacity: 0; /* Inicialmente invisível */
        animation-delay: 1s;

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    .titulo-superior,
    .titulo-inferior {
        margin-bottom: 5px;
    }

    .titulo-destaque {
        color: #AAF5D7;
        font-weight: bold;
    }

    .Subtitulo {
        display: flex;
        padding-bottom: 2em;
        color: #FFF;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        animation: fadeIn 2s ease forwards;
        opacity: 0; /* Inicialmente invisível */
        animation-delay: 1.5s;
    }

    .botao {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 4em;
        animation: fadeIn 2s ease forwards;
        opacity: 0; /* Inicialmente invisível */
        animation-delay: 2s;
    }
    
    @media screen and (max-width: 768px) {
        .circulo-direita, .circulo-esquerda {
            display: none;
        }
    }
`
export {IsMoreThanStyle}