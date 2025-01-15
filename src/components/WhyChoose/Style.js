// noinspection CssUnknownTarget

import styled from "styled-components"

const WhyChooseStyle = styled.header`
    background: #EDEDED;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: center;
    position: relative;

    .container {
        width: 100%;
        margin: 0 150px;
    }

    .Titulo {
        padding-top: 2em;
        padding-bottom: 1em;
        display: flex;
        color: #333;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        justify-content: center;
    }

    .CardsContainer {
        padding: 50px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        padding-bottom: 5em;
        flex-direction: column;
    }
    
    .svg{
        position: absolute;
        right: 0;
        bottom: 0;
    }
`
export {WhyChooseStyle}