import React from 'react';

interface PropsButton {
    forInput?: string;
    value?: string;
    className?: string;
    children?: React.ReactNode;
}

const Label: React.FC<PropsButton> = (props) => {
    // destruct props
    const { forInput, value, className, children } = props;

    // return main component
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}

export default Label;
