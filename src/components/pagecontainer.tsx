import React, {ReactNode} from "react";
import {PageStory} from "@/components/pagestory";

interface PageContainerProps {
    children: ReactNode;
    headers: string[];
}

const PageContainer: React.FC<PageContainerProps> = ({headers, children}) => {

    return (
        <div className={"w-full flex flex-row justify-between"}>
            {children}
            <div className={"h-screen bg-neutral-950 p-12"}>
                <PageStory headers={headers || null}/>
            </div>
        </div>
    );
}

export { PageContainer };