import React, { FC, HTMLAttributes } from "react";

export interface ButtonProp extends HTMLAttributes<HTMLElement>{
    primary?: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large';
    type?: 'submit' | 'button'
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: string
    classes?: string
}

export const Button: FC<ButtonProp> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    color,
    children,
    type= 'button',
    onClick,
    classes,
    ...props
}: ButtonProp) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
    return(
        <button
        type={type}
        className={[classes, 'storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{backgroundColor, color}}
        onClick={onClick}
        {...props}
        >
            {children}
        </button>
    )
}

