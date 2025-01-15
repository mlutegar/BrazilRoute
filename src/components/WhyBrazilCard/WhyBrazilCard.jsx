import React from "react";
import PropTypes from "prop-types";
import { WhyBrazilCardStyle } from "./Style";

const WhyBrazilCard = ({ icon, title, text }) => {
    return (
        <WhyBrazilCardStyle>
            <div className="icon">{icon}</div>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </WhyBrazilCardStyle>
    );
};

WhyBrazilCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default WhyBrazilCard;

