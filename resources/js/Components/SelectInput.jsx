import {  forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ type = 'text', className = '',children, ...props }, ref) {
    const input = ref ? ref : useRef();

    // useEffect(() => {
    //     if (isFocused) {
    //         input.current.focus();
    //     }
    // }, []);

    return (
        <>

        <select
            {...props}
            type={type}
            className={
                'border-gray-300  dark:bg-gray-900 dark:text-gray-300 brutalism brutalism-focus outline-none w-full focus:border-primary rounded-md shadow-sm ' +
                className
            }
            ref={input}
            
        >
            {children}
        </select>

        </>
    );
});
