import styled from "styled-components";

const OurServicesCardStyle = styled.div`
    background-color: ${(props) => props.cor || "#ffffff"};
    border-radius: 8px;
    padding: 20px;
    width: 200px;
    height: 300px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .icone {
        margin-bottom: 15px;
        font-size: 40px;
        color: #ffffff;
    }

    .tituloCard {
        color: #FFFECD;
        text-align: center;
        font-family: Inter;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        height: 43px;
    }

    .descricao {
        font-size: 0.9em;
        color: #ffffff;
    }
`;

export default OurServicesCardStyle;