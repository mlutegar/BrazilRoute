import styled from "styled-components"

const FooterStyle = styled.header`
    padding: .5em 2em;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    margin: 0;

    a {
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        min-width: 5em;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .menu a:hover {
        color: #fffecd;
        transform: scale(1.1);
    }

    .imagem {
        display: flex;
        justify-content: center;
        padding: 1em;
        margin: 0;
    }

    .menu {
        display: flex;
        justify-content: center;
        padding: 1.5em;
        margin: 0;
    }

    .linha {
        border-top: 1px solid #FFFFFF;
        margin: 0;
        width: 100%;
    }
    

`

export {FooterStyle}