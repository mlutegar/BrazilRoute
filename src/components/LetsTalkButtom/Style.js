import styled from "styled-components"

const LetsTalkButtomStyle = styled.header`
    button {
        width: 278px;
        height: 48px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background: #4C6A9F;
        border-style: none;

        &:hover {
            background: #3A5480; 
            transform: scale(1.05); 
        }
    }

    a {
        color: #FFFECD;
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
export {LetsTalkButtomStyle}