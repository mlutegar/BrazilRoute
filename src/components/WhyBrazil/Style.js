// noinspection CssUnknownTarget

import styled from "styled-components"

const WhyBrazilStyle = styled.header`
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
        padding: 100px 150px;
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
        line-height: normal;
        padding-top: 4.5em;
        padding-bottom: 1.5em;

    }

    .Texto {
        color: #FFFECD;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 385px;
    }

    .CardsContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }
    
    .grupo-card{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
`
export {WhyBrazilStyle}