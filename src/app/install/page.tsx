"use client";

import React from "react";
import {PageContainer} from "@/components/pagecontainer";
import {MediumHeader, SmallHeader} from "@/components/writing/header";
import {useHeadersCollector} from "@/hooks/useHeaderCollector";
import {Passage} from "@/components/writing/passage";
import {Seperator} from "@/components/writing/Seperator";
import {CodeBlock} from "@/components/writing/codeblock";


export default function Page() {
    const headers = useHeadersCollector();
    const page = "Install";
    const menu = "Getting Started"

    return (
    <PageContainer
        headers={headers}
        menuTitle={menu}
        pageTitle={page}
    >
        <div className={"flex flex-col space-y-2"}>
            <Seperator/>
            <MediumHeader title={"Medium Header"}/>
            <SmallHeader title={"This is a smaller header"}/>
            <Passage>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Passage>
            <CodeBlock title={"component.tsx"}
                       code={'<div></div>'}
            />

        </div>
    </PageContainer>
    );
}