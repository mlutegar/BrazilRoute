import React from "react";
import OurServicesCardStyle from "./OurServicesCardStyle";

const OurServicesCard = ({ icone, titulo, descricao, cor, tipo, ativo}) => {
  return (
    <OurServicesCardStyle cor={cor} ativo={ativo} tipo={tipo}>
        <div className={`ContainerCard ${ativo ? "ativo" : ""}`}>
            <div className="icone">{icone}</div>
            <h3 className="tituloCard">{titulo}</h3>
            <p className="descricao">{descricao}</p>
        </div>
    </OurServicesCardStyle>
  );
};

export default OurServicesCard;