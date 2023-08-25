import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './header.css'

type HeaderProps = {
    color: string;
}
export default function Header(props: HeaderProps) {
    return (
        <div>
            <Menu>
                <a id="home" className="menu-item" href="/">Teas Offered</a>
                <a id="about" className="menu-item" href="/about">History</a>
                <a id="contact" className="menu-item" href="/contact">Events</a>
                <a id="about" className="menu-item" href="/about">Shop</a>
                <a id="contact" className="menu-item" href="/contact">Contact Us</a>
            </Menu>
            <div className="Header" style={{backgroundColor: props.color}}>
                <div className="header-title">
                <span className="teahouse-name">
                    Tea House Piglet
                </span>
                </div>
            </div>
        </div>

    )
}