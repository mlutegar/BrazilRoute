import styled from "styled-components";

const CardStyle = styled.div`
  background-color: ${(props) => props.cor || "#ffffff"};
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .icone {
    margin-bottom: 15px;
    font-size: 40px;
    color: #ffffff;
  }

  .titulo {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .descricao {
    font-size: 0.9em;
    color: #ffffff;
  }
`;

export default CardStyle;