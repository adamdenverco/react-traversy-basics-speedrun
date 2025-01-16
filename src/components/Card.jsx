import React from "react";

const Card = ({ backgroundColor = "bg-gray-100", children }) => {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    );
};

export default Card;
