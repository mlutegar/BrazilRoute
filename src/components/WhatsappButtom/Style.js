import styled from "styled-components"

const WhatsappButtomStyle = styled.header`
    button {
        width: ${(props) => props.temTexto ? "278px" : "auto"};
        height: 48px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background: #FFFECD;
        border-style: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        cursor: pointer;
    }
    

    button:hover {
        background: #8A8A7A; 
        transform: scale(1.1); 
    }
    

    button:active {
        transform: scale(0.95); 
        box-shadow: 0 4px 10px rgb(99, 99, 89); 
    }


    a {
        color: #333;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    
    .icon {
        padding-left: 10px;
        width: 36.192px;
        height: 36.192px;
        flex-shrink: 0;
    ${({temTexto}) => !temTexto ? `
        padding: 0;
    ` : ""
    }
    
`
export {WhatsappButtomStyle}