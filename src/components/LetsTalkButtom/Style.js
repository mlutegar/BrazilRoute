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
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        cursor: pointer;
    }

    button:hover {
        background: #4C6EA3; 
        transform: scale(1.1); 
        box-shadow: 0 8px 20px rgba(74, 144, 226, 0.5); 
    }

   
    button:active {
        transform: scale(0.95); 
        box-shadow: 0 4px 10px rgba(74, 144, 226, 0.3); 
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