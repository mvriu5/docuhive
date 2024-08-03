"use client";

import {useEffect, useState} from "react";

type Header = {
    id: number,
    text: string,
    level: string
}

const useHeadersCollector = () => {
    const [headers, setHeaders] = useState<Header[]>([]);


    useEffect(() => {
        const collectedHeaders: Header[] = [];
        const headerElements = document.querySelectorAll('[data-header]');

        headerElements.forEach((header, index) => {
            if (header.textContent) {
                collectedHeaders.push({
                    id: index + 1,
                    text: header.textContent,
                    level: header.getAttribute('data-header') || ''
                });
            }
        });

        setHeaders(collectedHeaders);
    }, []);

    return headers;
};

export { useHeadersCollector };
export type { Header };