import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const SortButton = ({
    name,
    className,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged,
    children,
}) => {
    return (
        <button
            className={
                `inline-flex items-center px-2 py-1 bg-white dark:bg-gray-500 border border-black rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-100 dark:hover:text-black  brutalism brutalism-active disabled:opacity-25 transition ease-in-out duration-150 ` + className
            }
            onClick={(e) => sortChanged(name)}
        >
                         <div className="flex items-center gap-2  cursor-pointer">
                 {sortable &&(
                 <div className=" ">
                     <ChevronUp
                         size={18}
                         className={
                             sort_field === name &&
                             sort_direction == "asc"
                                 ? "text-primary"
                                 : ""
                         }
                     />{" "}
                     <ChevronDown
                         size={18}
                         className={
                             " -mt-2" +
                             (sort_field === name &&
                             sort_direction == "desc"
                                 ? " text-primary "
                                 : "")
                         }
                     />
                 </div>

                 )}
                 {children}
                 </div>
        </button>
    );
};

export default SortButton;
