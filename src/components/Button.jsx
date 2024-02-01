import React from "react";
import '../css/Button.css';

function Button ({children, eventClick}) {

    const isOperator = valor => {
        return isNaN(valor) && (valor!== '.') && (valor !== '=');
    };

    return (
        <div className={`button${isOperator(children)?' operator':''}`} onClick={() => eventClick(children)}>
            {children}
        </div>
    );
}

export default Button;