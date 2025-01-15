// noinspection CssUnknownTarget

import styled from "styled-components"

const ReadToStyle = styled.header`
    background: url("imagens/image 3.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: center;
    position: relative;

    .Titulo {
        color: #E9E0BA;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        padding-top: 5em;
        padding-bottom: 1em;
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
        width: 751px;
    }

    .botoes {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 9em;
        padding-top: 1em;
    }
    
    .botaolets {
        padding-right:3em;
    }
    
    .botaowhats{
        padding-left:3em;
    }
`
export {ReadToStyle}