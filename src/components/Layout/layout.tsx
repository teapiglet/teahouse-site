import React from "react";
import "./layout.css";
import { Content } from '../Content/content';

type LayoutProps = {
    children: JSX.Element
}
export default function Layout({children}: LayoutProps) {
    return (
        <div>
            <Content></Content>
            {/* display the child prop */}
            {children}
        </div>
    );
}