// noinspection CssUnknownTarget

import styled from "styled-components"

const KeyBenefitsStyle = styled.header`
    background: #4C9F7E;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    padding: 0 150px;
    justify-content: flex-start;
    position: relative;

    .svg {
        position: absolute;
        right: 0;
        top: 20px;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }

    .Titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-bottom: 1.5em;

    }

    .Subtitulo {
        color: #FFFECD;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .conteudolinha {
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: zoomIn 0.5s ease;

        &:hover {
            transform: translateY(-10px);
        }
    }

    .conteudolinha-ultimo {
        padding-top: 50px;
        padding-bottom: 150px;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: zoomIn 0.5s ease;

        &:hover {
            transform: translateY(-10px);
        }
    }

    .linha {
        border-top: 2px solid #E1D885;
        margin: 0;
        padding-left: 150px;
        padding-right: 150px;
        padding-bottom: 30px;
    }

    .numero {
        width: 144px;
        color: #FFFECD;
        font-size: 128px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-right: 50px;
    }

    a {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media screen and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
        
        .linha {
            padding: 0;
        }


        .svg {
            display: none;
        }
        
        .conteudolinha-ultimo {
            padding-bottom: 50px;
        }
    }

`
export {KeyBenefitsStyle}