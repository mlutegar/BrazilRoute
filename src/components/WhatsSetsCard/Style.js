import styled from "styled-components";

const WhatsSetsCardStyle = styled.div`
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #fff;
    width: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: zoomIn 4s ease;

    &:hover {
        transform: translateY(-10px); 
    }

    .icon {
        font-size: 36px;
        margin-bottom: 16px;
    }

    .title {
        color: #faffca;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }

    .text {
        color: #fff;
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
    
    @media screen and (max-width: 460px) {
        width: auto;
    }
`;

export { WhatsSetsCardStyle };
