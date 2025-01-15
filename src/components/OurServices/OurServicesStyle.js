import styled from "styled-components";

const Style = styled.div`
  .secao {
    padding: 40px 20px;
    background-color: #f9f9f9;
    text-align: center;
  }

  .titulo {
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .grupo {
    margin-bottom: 40px;
  }

  .link {
    font-size: 1.2em;
    color: #333333;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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

export default Style;