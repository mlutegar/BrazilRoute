import styled from "styled-components";

const OurServicesStyle = styled.div`
    padding: 40px 150px;
    background-color: #f9f9f9;
    
    .secao {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        max-width: 1440px;
    }

    .titulo {
        font-size: 1.8em;
        font-weight: bold;
        margin: 45px 0;
    }

    .grupo {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .link {
        font-size: 1.2em;
        color: #333333;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        flex-direction: column;
        margin-right: 20px;
    }

    .link span {
        font-weight: bold;
        padding-bottom: 30px;
    }

    .link-icone {
        width: 16px;
        height: 16px;
    }
    
    .link svg {
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }

    .grupo-cards {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`;

export default OurServicesStyle;