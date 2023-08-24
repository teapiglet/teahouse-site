import React from 'react';
import './content.css';
import Header from "../Header/header";
import {Body} from "../Body/body";
import {Footer} from "../Footer/footer";

export function Content() {
    return (
        <div className="Content">
            <Header color={"#ffffff30"}/>
            <Body color={"#ffffff30"}/>
            <Footer color={"#ffffff30"}/>
        </div>
    )
}