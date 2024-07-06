import React from "react";

const Bedge = ({children}) => {
    return (
        <span className="p-1 font-medium uppercase tracking-wider text-yellow-800 bg-yellow-400 dark:text-yellow-200 dark:bg-yellow-800 rounded-lg bg-opacity-50">
            {children}
        </span>
    );
};

export default Bedge;
