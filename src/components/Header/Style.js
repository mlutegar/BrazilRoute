import styled from "styled-components"

const Top = styled.header`
    padding: .5em 150px;
    display: flex;
    flex-direction: row;
    margin: 0;
    height: 98px;
    border-bottom: 3px solid #e1d885;
    background: white;
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
`

export {Top}