import React from "react";
import '../css/Clear.css';

const Clear = ({children, eventClear}) => (
    <div className="clear" onClick={eventClear}>
        {children}
    </div>
);

export default Clear;