import React from "react";

interface BreadcrumbProps {
    menuTitle: string;
    pageTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ menuTitle, pageTitle }) => {

    return (
        <div className={"flex flex-row space-x-2 text-md"}>
            <span className={"text-neutral-400 font-normal"}>
                {menuTitle + " /"}
            </span>
            <span className={"text-amber-300 font-medium"}>
                {pageTitle}
            </span>
        </div>
    );
}

export { Breadcrumb };