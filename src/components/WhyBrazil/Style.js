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

    
    .textContent{
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        padding-left: 150px;
    }
    .Titulo {
        color: #FFFECD;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        padding-top: 3em;
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
        padding-bottom: 5em;
        padding-top: 5em;
        padding-right: 150px;
    }
`
export {WhyBrazilStyle}