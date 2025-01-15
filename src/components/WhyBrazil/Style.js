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
    
    .conteudo-brazil{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        position: relative;
        padding-left: 150px;
    }
    
    .pngBrasil{
        position: absolute;
        top: -50px;
        left: -150px;
    }
    
    .textContent{
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
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto);
        column-gap: 100px;
        row-gap: 50px;
        justify-content: center;
        padding-bottom: 3.8em;
        padding-top: 5em;
    }
`
export {WhyBrazilStyle}