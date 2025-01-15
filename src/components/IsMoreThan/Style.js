// noinspection CssUnknownTarget

import styled from "styled-components"

const IsMoreThanStyle = styled.header`
    background: #204838;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: center;
    position: relative;

    .circulo-esquerda-grande,
    .circulo-esquerda-pequeno {
        position: absolute;
        border-radius: 50%;
        background-color: #326b54;
    }

    .circulo-esquerda-grande {
        border: 40px solid #779172;
        top: 20%;
        left: 0;
        width: 100px;
        height: 100px;
    }

    .circulo-esquerda-pequeno {
        top: 5%;
        left: 5%;
        width: 40px;
        height: 40px;
    }

    .circulo-direita-grande,
    .circulo-direita-pequeno {
        position: absolute;
        border-radius: 50%;
        background-color: #779172;;
    }

    .circulo-direita-grande {
        bottom: 20%;
        right: 0;
        width: 100px;
        height: 100px;
        border: 40px solid #325661;
    }

    .circulo-direita-pequeno {
        bottom: 5%;
        right: 5%;
        width: 40px;
        height: 40px;
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
    }

    .botao {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 4em;
    }
`
export {IsMoreThanStyle}