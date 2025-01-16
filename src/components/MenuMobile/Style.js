import styled from "styled-components";

export const MenuMobileStyle = styled.header`
    display: ${(props) => props.ativo ? "flex" : "none"};
    background-color: #333333;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2000;
`;

export const ConteudoMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 0.5em 50px;
`;

export const MenuHamburguerStyle = styled.div`
    height: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        opacity: 0.8;
    }
    
    &:active {
        opacity: 0.6;
    }
`;

export const MenuStyle = styled.div`
    margin-top: 7.59em;
    display: flex;
    flex-direction: column;
    gap: 3.75em;
    
    a {
        color: white;
        text-decoration: none;
    }
`;

export const BotoesStyle = styled.div`
    margin-top: 7.56em;
    display: flex;
    flex-direction: column;
    gap: 3.1em;
    align-items: center;
    width: 100%;
`;

export const ImagemStyle = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ArteStyle = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5; 
`;