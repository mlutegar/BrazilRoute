import React from "react";
import CardStyle from "./OurServicesCardStyle";

const OurServicesCard = ({ icone, titulo, descricao, cor }) => {
  return (
    <CardStyle cor={cor}>
      <div className="icone">{icone}</div>
      <h3 className="titulo">{titulo}</h3>
      <p className="descricao">{descricao}</p>
    </CardStyle>
  );
};

export default OurServicesCard;