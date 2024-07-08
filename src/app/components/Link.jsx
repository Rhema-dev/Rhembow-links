    import React from "react";

    const Link = ({icon, social, link}) => {
    return (
        
        <a href={link}>
        <div className="flex-col items-center justify-center hover:bg-purple-800 active:bg-purple-400 bg-purple-950 m-5 rounded-md">
            <div className="flex items-center justify-center p-5">
                {icon}
                <div className="px-5">{social}</div>
            </div>
            
        </div>
        </a>
    );
    };

    export default Link;
