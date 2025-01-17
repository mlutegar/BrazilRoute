// noinspection CssUnknownTarget

import styled from "styled-components"

export const WhyBrazilStyle = styled.header`
    background: #4C6A9F;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
    position: relative;
    overflow: hidden;

    .conteudo-brazil {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        position: relative;
        padding:  4em 150px;
        gap: 100px;
        flex-wrap: wrap;
    }

    .pngBrasil {
        position: absolute;
        top: -50px;
        left: -150px;
    }

    .textContent {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
    }

    .Titulo {
        color: #FFFECD;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        padding-bottom: 1.5em;
        z-index: 1;
    }

    .Texto {
        color: #FFFECD;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        max-width: 385px;
    }

    .CardsContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }

    .grupo-card {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        .conteudo-brazil {
            padding: 4em 10px 3em;
            gap: 50px;
        }

        .Titulo, .Texto {
            text-align: center;
        }
    }
`

export const DivConteudoTexto = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;

`