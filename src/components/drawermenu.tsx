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
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ title, icon, items }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div className={"w-full flex flex-col space-y-2"}>
            <div className={"flex flex-row space-x-4 items-center justify-between p-2 hover:bg-neutral-800 rounded-md cursor-pointer"}
                 onClick={() => setOpen(!open)}
            >
                <div className={cn("flex flex-row space-x-4", open ? "text-amber-300" : "text-white")}>
                    {icon}
                    <span className={"text-sm text-white truncate"}>{title}</span>
                </div>
                {open ? <ChevronDown size={20}/> : <ChevronRight size={20}/>}
            </div>

            {open &&
                <div className={"flex flex-col pl-4 border-l-2 border-neutral-800 space-y-2 ml-4"}>
                    {items.map((item, index) => (
                        <div key={index} className={"px-4 py-1 rounded-md cursor-pointer hover:bg-neutral-800"}
                             onClick={() => router.push(item.href)}
                        >
                            <span className={"text-sm text-neutral-300 truncate"}>{item.title}</span>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export { DrawerMenu };