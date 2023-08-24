import React from 'react';
import './header.css'

type HeaderProps = {
    color: string;
}
export default function Header(props: HeaderProps) {
    return (
        <div className="Header" style={{backgroundColor: props.color}}>
            <div className="header-title">
                <span className="teahouse-name">
                    Header
                </span>
            </div>
        </div>
    )
}