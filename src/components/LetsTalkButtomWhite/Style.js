import styled from "styled-components"

const LetsTalkButtomWhiteStyle = styled.header`
    button {
        width: 278px;
        height: 48px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background: #FFFECD;
        border-style: none;

        &:hover {
            background: #8A8A7A; 
            transform: scale(1.05); 
        }
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
    }
    
`
export {LetsTalkButtomWhiteStyle}