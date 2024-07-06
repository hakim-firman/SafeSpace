export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-primary brutalism brutalism-active dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:bg-primary dark:hover:bg-white ${
                    disabled && 'brutalism-pressed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
