import React, {ReactNode} from "react";

const Passage: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <p className={"text-md leading-8 text-neutral-300"}>
            {children}
        </p>
    );
}

export { Passage };