import React, {ReactNode} from "react";
import {PageStory} from "@/components/pagestory";
import {Breadcrumb} from "@/components/breadcrumb";
import {BigHeader} from "@/components/header";
import {Header} from "@/hooks/useHeaderCollector";

interface PageContainerProps {
    children: ReactNode;
    pageTitle: string;
    menuTitle: string;
    headers: Header[];
}

const PageContainer: React.FC<PageContainerProps> = ({headers, children, pageTitle, menuTitle}) => {

    return (
        <div className={"w-full flex flex-row justify-between"}>
            <div className={"w-[75%] flex flex-col p-16 space-y-4"}>
                <div className={"flex flex-col space-y-12"}>
                    <Breadcrumb menuTitle={menuTitle} pageTitle={pageTitle}/>
                    <BigHeader title={pageTitle}/>
                </div>
                {children}
            </div>
            <div className={"h-screen w-[25%] bg-neutral-950 p-12"}>
                <PageStory headers={headers || null}/>
            </div>
        </div>
    );
}

export { PageContainer };