import React from 'react';

interface ButtonProps {
    selector?: string;
    name?: string;
    title?: string;
    link?: string;
    icon?: any;
}

const LinkButton = (props: ButtonProps) => {

    return (
        <a href={props.link}>
            <button className={props.selector} title={props.title}>
                {props.icon}
                {props.name}
            </button>
        </a>
    )
}

export default LinkButton;