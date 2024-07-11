import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const TableHeading = ({
    name,
    className,
    sortable=true,
    sort_field=null,
    sort_direction=null,
    sortChanged,
    children

 }) => {
    return (
        <th
            onClick={(e) => sortChanged(name)}
            className={" p-3 text-sm font-semibold tracking-wide text-left "+className}
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
        </th>
    );
};

export default TableHeading;
