// noinspection CssUnknownTarget

import styled from "styled-components"

const BannerStyle = styled.header`
    background: url("imagens/banner1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #FFFECD;
    padding: 0 150px;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;

    animation: fadeIn 1.5s ease-in-out;

    .conteudo-banner {
        max-width: 1440px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    a {
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        min-width: 5em;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            background-color: var(--destaque);
            color: var(--secundaria);
        }
    }

    .Titulo {
        font-size: 48px;
        font-weight: 900;
        margin: 0;
        padding-top: 2em;
        padding-bottom: 1em;

        animation: slideIn 1.5s ease-out;

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }

    .Subtitulo {
        font-size: 24px;
        font-weight: normal;
        margin: 0;
        padding-bottom: 4em;

        animation: slideIn 1.5s ease-out;

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`

export {BannerStyle}
