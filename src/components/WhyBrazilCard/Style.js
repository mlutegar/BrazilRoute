import styled from "styled-components";

const WhyBrazilCardStyle = styled.div`
    border-radius: 10px;
    background: #4C9F7E;
    padding: 20px;
    text-align: center;
    width: 264px;
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: zoomIn 0.5s ease;
    box-shadow: 30px 30px 0px #FFFECD;
    z-index: 10;

    &:hover {
        transform: translateY(-10px); 
    }

    .icon {
        width: 70px;
        height: 70px;
        flex-shrink: 0;
    }

    .title {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: start;
        padding-top: 20px;
    }

    .text {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: start;
    }

    /* Animação ao carregar o card */
    @keyframes zoomIn {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

export { WhyBrazilCardStyle };
