import styled from "styled-components";

const WhatsSetsCardStyle = styled.div`
    padding: 20px;
    text-align: center;
    color: #fff;
    width: 600px;
    height: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: zoomIn 0.5s ease;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
    border-radius: 1.25rem;
    background: #4C6A9F;
    z-index: 20;
    
    &:hover {
        transform: translateY(-10px);
        background: #6991D7;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .icon {
        width: 189px;
        height: 189px;
        flex-shrink: 0;
        object-fit: cover;
    }

    .title {
        color: #faffca;
        text-align: left;
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }

    .text {
        color: #fff;
        text-align: left;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    svg {
        width: 189px;
        height: 189px;
        flex-shrink: 0;
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

    @media (max-width: 768px) {
        width: auto;
        height: auto;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
        
        .content{
            justify-content: center;
        }
    }
`;

export { WhatsSetsCardStyle };
