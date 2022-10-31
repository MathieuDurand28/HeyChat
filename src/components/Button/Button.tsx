import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
    title: string;
    type: string;
}

export const Button = ({title, type=""}:ButtonProps) => {
    return (
        <p className={"button button-"+type}>{title}</p>
    )
}