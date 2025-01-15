import React from "react";
import PropTypes from "prop-types";
import { WhyChooseCardStyle } from "./Style";

const WhyChooseCard = ({ icon, title, text }) => {
    return (
        <WhyChooseCardStyle>
            <div className="icon">{icon}</div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="text">{text}</p>
            </div>
        </WhyChooseCardStyle>
    );
};

WhyChooseCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default WhyChooseCard;

