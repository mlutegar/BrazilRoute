import styled from "styled-components";

const OurServicesCardStyle = styled.div`
    .ContainerCard {
        background-color: ${(props) => props.cor || "#ffffff"};
        border-radius: 8px;
        padding: 20px;
        width: 200px;
        height: 300px;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: zoomIn 0.5s ease;
        z-index: 10;
        
        &:hover {
            transform: translateY(-10px);
        }
    }
    
    .ContainerCard.ativo {
        transform: translateY(+10px) scale(1.05);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .icone {
        padding-top: 20px;
        margin-bottom: 15px;
        font-size: 40px;
        color: #ffffff;
    }

    .tituloCard {
        color: #FFFECD;
        text-align: center;
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