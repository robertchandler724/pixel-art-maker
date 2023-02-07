import React from "react";
import {Cell} from './Cell';

export const Board = () => {
    return (
        <div className="board-row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
    )
}