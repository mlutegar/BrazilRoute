import styled from "styled-components";

export const MenuMobileStyle = styled.header`
    display: flex;
    background-color: #333333;
    position: fixed;
    top: 0;
    left: ${(props) => props.ativo ? "0" : "100%"};
    width: 100%;
    height: 100vh;
    z-index: 2000;
    transition: all 0.5s;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ConteudoMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 2.5em 50px 0;

    @media (max-width: 330px) {
        padding: 2.5em 10px 0;
    }
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
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 3.75em;

    a {
        color: white;
        text-decoration: none;
    }
`;

export const BotoesStyle = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
`;

export const ImagemStyle = styled.div`
    width: 100%;
    object-fit: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 3em;
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