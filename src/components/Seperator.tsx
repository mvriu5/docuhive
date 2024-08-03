import React, {HTMLAttributes} from "react";
import {cn} from "@/utils/cn";


const Seperator: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

    return (
        <div className={cn("w-full h-px my-1 border-b border-neutral-700", className)} {...props}/>
    );
}

export {Seperator};