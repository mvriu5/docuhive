"use client";

import React, {ReactNode, useState} from "react";
import {ChevronDown, ChevronRight} from "lucide-react";
import {useRouter} from "next/navigation";
import {cn} from "@/utils/cn";

type PageItem = {
    title: string;
    href: string;
}

interface DrawerMenuProps {
    title: string;
    icon?: ReactNode;
    items: PageItem[];
    open?: boolean;
    openPage?: string | null;
    onToggleMenu?: (title: string) => void;
    onSetOpenPage?: (href: string) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ title, icon, items, open, openPage, onSetOpenPage, onToggleMenu }) => {
    const [isOpen, setIsOpen] = useState(open);
    const router = useRouter();

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
        onToggleMenu && onToggleMenu(title);
    }

    const handlePageClick = (href: string) => {
        onSetOpenPage && onSetOpenPage(href);
        router.push(href);
    }

    return (
        <div className={"w-full flex flex-col space-y-2"}>
            <div className={"flex flex-row space-x-4 items-center justify-between p-2 hover:bg-neutral-800 rounded-md cursor-pointer"}
                 onClick={handleMenuToggle}
            >
                <div className={cn("flex flex-row space-x-4", isOpen ? "text-amber-300" : "text-white")}>
                    {icon}
                    <span className={"text-sm text-white truncate"}>{title}</span>
                </div>
                {isOpen ? <ChevronDown size={20}/> : <ChevronRight size={20}/>}
            </div>

            {isOpen &&
                <div className={"flex flex-col pl-4 border-l-2 border-neutral-800 space-y-2 ml-4"}>
                    {items.map((item, index) => (
                        <div key={index} className={cn("px-4 py-1 rounded-md cursor-pointer",
                            openPage === item.href ? "bg-neutral-800 text-white" : "hover:bg-neutral-800 text-neutral-300"
                        )}
                             onClick={() => handlePageClick(item.href)}
                        >
                            <span className={"text-sm truncate"}>{item.title}</span>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export { DrawerMenu };
export type { DrawerMenuProps }