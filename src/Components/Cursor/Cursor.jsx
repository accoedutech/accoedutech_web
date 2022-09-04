import React from "react";
import "./Cursor.scss";

const Cursor = ({ mousePosition}) => {

    return (
        <div style={{left: mousePosition.x, top: mousePosition.y}} className="cursor">
        
        </div>
    );
    };

export default Cursor;