import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '',pressed, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>

        <input
            {...props}
            type={type}
            className={
                `border-gray-300  dark:bg-gray-900 dark:text-gray-300  brutalism brutalism-focus  ${pressed?' brutalism-pressed bg-slate-300  ':'brutalism-focus'}  outline-none w-full focus:border-primary rounded-md shadow-sm ` +
                className 
            }
            
            ref={input}
        />

        </>
    );
});
