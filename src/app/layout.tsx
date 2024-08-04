import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import {Drawer} from "@/components/drawer";
import {DrawerMenu} from "@/components/drawermenu";
import {BookCopy, FolderGit2, LayoutDashboard, SquareChartGantt, Wrench} from "lucide-react";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
    title: "DocuHive",
    description: "React components for building beautiful documentation sites",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                    <div className={"flex flex-row bg-neutral-950"}>
                        <Drawer>
                            <DrawerMenu key={1}
                                        title={"Getting Started"}
                                        icon={<BookCopy size={20}/>}
                                        items={[
                                            {title: "Installation", href: "install"},
                                            {title: "Configuration", href: "config"},
                                            {title: "Usage", href: "usage"}
                                        ]}
                            />
                            <DrawerMenu key={2}
                                        title={"Components"}
                                        icon={<LayoutDashboard size={20}/>}
                                        items={[
                                            {title: "Drawer", href: "drawer"},
                                            {title: "DrawerMenu", href: "drawer-menu"},
                                            {title: "DrawerMenuItem", href: "drawer-menu-item"}
                                        ]}
                            />
                            <DrawerMenu key={3}
                                        title={"Utilities"}
                                        icon={<Wrench size={20}/>}
                                        items={[
                                            {title: "Colors", href: "colors"},
                                            {title: "Typography", href: "typography"},
                                            {title: "Layout", href: "layout"}
                                        ]}
                            />
                            <DrawerMenu key={4}
                                        title={"Examples"}
                                        icon={<SquareChartGantt size={20}/>}
                                        items={[
                                            {title: "Blog", href: "blog-example"},
                                            {title: "E-commerce", href: "ecommerce-example"},
                                            {title: "Portfolio", href: "portfolio-example"}
                                        ]}
                            />
                            <DrawerMenu key={5}
                                        title={"Resources"}
                                        icon={<FolderGit2 size={20}/>}
                                        items={[
                                            {title: "GitHub", href: "https://github.com/your-repo"},
                                            {title: "Discord", href: "https://discord.gg/your-server"},
                                            {title: "Documentation", href: "docs"}
                                        ]}
                            />
                        </Drawer>
                        {children}
                    </div>
            </body>
      </html>
    );
}
