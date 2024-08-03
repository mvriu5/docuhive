import React, {ReactNode} from "react";

interface DrawerProps {
    drawerMenus: ReactNode[];
}


const Drawer: React.FC<DrawerProps> = ({ drawerMenus }) => {

    return (
        <div className={"h-screen w-[25%] bg-neutral-950 py-12 px-8 space-y-2"}>
            {drawerMenus.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
}


export { Drawer };