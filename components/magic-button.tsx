import React from "react";

const MagicButton = ({
    title,
    icon,
    handleClick,
    otherClasses
}: MagicButtonParams) => {
    return (
        <div className="magic-button-container" onClick={handleClick}>
            <button className="magic-button">
                <span className="magic-button-border"/>
                <span className={`magic-button-content ${otherClasses}`}>{title} {icon}</span>
            </button>
        </div>
    );
};

export default MagicButton;