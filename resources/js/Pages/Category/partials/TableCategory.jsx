import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TableHeading from "@/Components/TableHeading";
import { Link } from "@inertiajs/react";
import { ChevronDown, ChevronUp, CircleEllipsis } from "lucide-react";
import React from "react";

const TableCategory = ({
    categories,
    confirmDeletion,
    sortChanged,
    queryParams,
}) => {
    return (
        <table className=" w-full  p-[2rem]">
            <thead className="border-b-2 border-black">
                <tr>
                    <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
                        #
                    </th>
                    <TableHeading
                        name="name"
                        className=""
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                    >
                        Name
                    </TableHeading>

                    <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y-[1px] divide-black ">
                {categories.data.map((category, index) => (
                    <tr
                        key={index}
                        className=" dark:hover:bg-slate-900 hover:bg-slate-100"
                    >
                        <td className="p-3 text-sm whitespace-nowrap text-green-500 font-bold">
                            {index + 1}
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap ">
                            <Link className="hover:border-b-2 border-primary" href={'/items?categories_id='+category.id}>{category.name}</Link>
                        </td>

                        <td className="p-3 text-sm whitespace-nowrap">
                            <Dropdown>
                                <Dropdown.Trigger className="bg-green-500">
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400  hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <CircleEllipsis />
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        ro
                                        href={route(
                                            "categories.edit",
                                            category.id
                                        )}
                                    >
                                        Edit
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableCategory;
