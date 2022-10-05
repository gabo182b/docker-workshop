import React from "react";
import './square.css'

const Square = (props) => {
    return (
        <div
            className="square"
            style={{ background: props.color }}
        >
            <div>{props.number}</div>
        </div>
    )
}

export { Square }