// noinspection CssUnknownTarget

import styled from "styled-components"

const BannerStyle = styled.header`
    background: url("imagens/banner1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #FFFECD;
    padding-left: 150px;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;

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
}
.Subtitulo {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    padding-bottom: 4em;
}
`

export {BannerStyle}