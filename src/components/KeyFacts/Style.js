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
        padding-top: 65px;
    }
    
    .Conteudo{
        display: flex;
        margin: 60px 0;
        gap: 60px;
    }

    .titulo-superior {
        color: #FAFFCA;
    }

    .titulo-destaque {
        color: #AAF5D7;
        font-weight: bold;
    }
    
    .Coluna1, .Coluna2{
        display: flex;
        flex-direction: column;
        gap: 60px;
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