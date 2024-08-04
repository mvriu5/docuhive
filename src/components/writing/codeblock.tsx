import React, {useEffect} from "react";
import {CopyButton} from "@/components/writing/copybutton";
import TextareaAutosize from 'react-textarea-autosize';
import Prism from "prismjs";


interface CodeBlockProps {
    title: string;
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={"h-max w-full bg-neutral-950 rounded-md border border-neutral-800"}>
            <div className={"w-full flex flex-row items-center justify-between px-2 py-1 bg-neutral-800 border-b border-neutral-800 rounded-t-md"}>
                <span className={"text-xs text-neutral-400"}>{title}</span>
                <CopyButton copyText={""}/>
            </div>
            <TextareaAutosize
                className={"p-2 w-full h-auto font-mono text-sm text-neutral-400 bg-neutral-950 overflow-hidden resize-none focus:outline-none rounded-b-md"}
                value={""}
                readOnly
            />
            <pre>
                <code className={`language-typescript`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}

export {CodeBlock};