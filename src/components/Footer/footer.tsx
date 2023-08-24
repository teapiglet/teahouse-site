import React from 'react';
import './footer.css';

type FooterProps = {
    color: string;
}
export function Footer(props: FooterProps) {
    return (
        <div className="Footer" style={{backgroundColor: props.color}}>
            Footer
        </div>
    )
}