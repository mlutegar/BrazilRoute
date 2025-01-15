import styled from "styled-components";

const WhyChooseCardStyle = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: zoomIn 0.5s ease;

    &:hover {
        transform: translateY(-10px); 
    }

    .icon {
        width: 74px;
        height: 74px;
        flex-shrink: 0;
        padding-right: 40px
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .title {
        display: flex;
        justify-content: flex-start;
        color: #333;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 400px;
    }

    .text {
        display: flex;
        justify-content: flex-start;
        color: #333;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 400px;
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

export { WhyChooseCardStyle };