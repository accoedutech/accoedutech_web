import React from "react";
import "./styles/Title.scss";

const Title = ({ children, fontSize }) => {
    return (
        <div className="title_container">
            <div className="dash"></div>
        <h1 style={{fontSize: fontSize}}>{children}</h1>
        </div>
    );
};

    export default Title;