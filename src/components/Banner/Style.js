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
    color: #FFFECD;
    font-size: 52px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    padding-top: 2em;
    padding-bottom: 1em;
}
.Subtitulo {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    padding-bottom: 4em;
}

b {
    color: #FFFECD;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
`

export {BannerStyle}