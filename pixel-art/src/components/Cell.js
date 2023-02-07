import React from "react";

export const Cell = ({value, onCellClick}) => {
    return (
            <button className="pixel" onClick={onCellClick}>{value}</button>
    )
}