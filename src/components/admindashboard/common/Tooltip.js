import React, { useState } from "react";

const Tooltip = (props) => {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setTimeout(() => {
            setActive(true);
        },200);
    }
    const handleMouseOut = () => {
        setTimeout(() => {
            setActive(false);
        },200); 
    }

    return (
    <div className="Tooltip-Wrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        {props.children}
        {active && (
            <div className={`Tooltip-Tip ${props.direction || "bottom"}`}>
                {props.content}
            </div>
        )}
    </div>
    );
};

export default Tooltip;
