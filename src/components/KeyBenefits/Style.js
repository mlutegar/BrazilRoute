// noinspection CssUnknownTarget

import styled from "styled-components"

const KeyBenefitsStyle = styled.header`
    background: #4C9F7E;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    padding-left: 150px;
    justify-content: flex-start;
    position: relative;

    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }

    .Titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        width: 494px;
        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-bottom: 1.5em;
        
    }

    .Subtitulo {
        color: #FFFECD;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .conteudolinha {
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .conteudolinha-ultimo {
        padding-top: 50px;
        padding-bottom: 150px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .linha {
        border-top: 2px solid #E1D885;
        margin: 0;
        padding-left: 150px;
        padding-right: 150px;
        padding-bottom: 30px;
    }

    .numero {
        width: 144px;
        color: #FFFECD;
        font-size: 128px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-right: 50px;
    }

    a {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`
export {KeyBenefitsStyle}