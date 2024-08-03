import { AlignLeft } from "lucide-react";
import React from "react";

interface PageStoryProps {
    headers?: string[];
}

const PageStory: React.FC<PageStoryProps> = ({headers}) => {

    return (
        <div className={"flex flex-col space-y-2"}>
            <div className={"flex flex-row space-x-2"}>
                <AlignLeft size={18}/>
                <span className={"text-sm"}>On this page</span>
            </div>
            {headers?.map((header, index) => (
                <div key={index}>
                    <span className={"text-xs text-neutral-300 cursor-pointer hover:text-amber-300"}>
                        {header}
                    </span>
                </div>
            ))}
        </div>
    );
}

export { PageStory };