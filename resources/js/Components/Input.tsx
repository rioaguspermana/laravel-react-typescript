import React, { useEffect, useRef } from 'react';

interface PropsInput {
    type?: string;
    name: string;
    value: string;
    className: string;
    autoComplete?: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<PropsInput> = (props) => {
    // destruct props
    const { type, name, value, className, autoComplete, required, isFocused, handleChange } = props;

    // set ref input to set focus
    const input = useRef() as React.MutableRefObject<HTMLInputElement>;

    // use effect check on initial render if is focused set as true
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    // return main component
    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Input;