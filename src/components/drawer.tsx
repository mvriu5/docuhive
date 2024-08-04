"use client";

import React, {ReactNode, useState} from "react";
import {DrawerMenuProps} from "@/components/drawermenu";

interface DrawerProps {
    children: ReactNode[];
}


const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const [openPage, setOpenPage] = useState<string | null>(null);
    const [openMenus, setOpenMenus] = useState<string[]>([]);

    const handleToggleMenu = (title: string) => {
        setOpenMenus((prevOpenMenus) =>
            prevOpenMenus.includes(title)
                ? prevOpenMenus.filter((menuTitle) => menuTitle !== title)
                : [...prevOpenMenus, title]
        );
    };

    const handleSetOpenPage = (href: string) => {
        setOpenPage(href);
    };

    return (
        <div className={"h-screen w-[25%] bg-neutral-950 py-12 px-8 space-y-2"}>
            {React.Children.map(children, (menu) => {
                if (React.isValidElement<DrawerMenuProps>(menu)) {
                    return React.cloneElement(menu, {
                        open: openMenus.includes(menu.props.title),
                        openPage: openPage,
                        onToggleMenu: handleToggleMenu,
                        onSetOpenPage: handleSetOpenPage
                    });
                }
                return menu;
            })}
        </div>
    );
}


export { Drawer };