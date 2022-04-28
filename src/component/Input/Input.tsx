import React, { FC, HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLElement>{
    size?: 'small' | 'medium' | 'large';
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    color?: string
    classes?: string
    type?: 'text' | 'number' | 'password' | 'email' | 'checkbox'
    value?: string;
}

export const Input: FC<InputProps> = ({
    size = 'medium',
    color,
    children,
    onChange,
    classes,
    type,
    value,
    ...props
}: InputProps) => {
    return(
        <input
        type={type}
        className={[classes].join(' ')}
        onChange={onChange}
        value={value}
        {...props}
        >
            {children}
        </input>
    )
}

