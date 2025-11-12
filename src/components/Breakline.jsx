import React from 'react';
import './Breakline.css';

function BreakLine() {
    return (
        <div className="break-line">
            <span className="line"></span>
            <img src="/src/assets/green-flower.svg" alt={"Oma's Pantry Logo"} className="break-line-logo" />
            <span className="line"></span>
        </div>
    );
}

export default BreakLine;