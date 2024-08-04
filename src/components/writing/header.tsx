import React from "react";

interface HeaderProps {
    title: string;
}

const BigHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
        <span data-header={"big"} className={"text-wrap text-5xl text-pretty"}>{title}</span>
    )
}

const MediumHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
        <span data-header={"medium"} className={"text-wrap text-3xl text-pretty"}>{title}</span>
    )
}

const SmallHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
        <span data-header={"small"} className={"text-wrap text-xl text-pretty"}>{title}</span>
    )
}

export { BigHeader, MediumHeader, SmallHeader };