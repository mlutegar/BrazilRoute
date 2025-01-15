import styled from "styled-components";

const OurServicesStyle = styled.div`
    .secao {
        padding: 40px 20px;
        background-color: #f9f9f9;
        text-align: center;
    }

    .titulo {
        font-size: 1.8em;
        font-weight: bold;
        margin: 45px 0;
    }

    .grupo {
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
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
        margin-right: 8px;
        font-weight: bold;
    }

    .link-icone {
        width: 16px;
        height: 16px;
    }

    .grupo-cards {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`;

export default OurServicesStyle;