import React from "react";
import PropTypes from "prop-types";
import { WhatsSetsCardStyle } from "./Style";

const KeyFactsCard = ({ icon, title, text }) => {
    return (
        <WhatsSetsCardStyle>
            <div className="icon">{icon}</div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="text">{text}</p>
            </div>
        </WhatsSetsCardStyle>
    );
};

KeyFactsCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default KeyFactsCard;

