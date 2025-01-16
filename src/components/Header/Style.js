import styled from "styled-components";

const Top = styled.header`
    padding: 0.5em 150px;
    border-bottom: 3px solid #e1d885;
    background: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    opacity: ${(props) => (props.isScrolled ? 0.8 : 1)};
    transition: opacity 0.3s ease;

    .conteudo-header {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
    }
    
    .menu a {
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        min-width: 5em;
        text-decoration: none !important;
        color: #000;;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        transition: color 0.3s ease, transform 0.3s ease; 
    }

    .menu a:hover {
        color: #4C6A9F; 
        transform: scale(1.1); 
    }
`;

export {Top};
