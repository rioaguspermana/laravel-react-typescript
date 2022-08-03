import React, { ReactNode } from 'react';

interface PropsButton {
    type?: "submit" | "button" | "reset";
    className?: string;
    processing: boolean;
    children: ReactNode;
}

const Button: React.FC<PropsButton> = (props) => {
    // destruct props
    const { type, className, processing, children } = props;

    // return main component
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 
                ${processing && 'opacity-25'} ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}

export default Button;
