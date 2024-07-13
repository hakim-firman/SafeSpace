import ActionButton from "@/Components/ActionButton";
import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TableHeading from "@/Components/TableHeading";
import { ChevronDown, ChevronUp, CircleEllipsis } from "lucide-react";
import React from "react";

const TableItems = ({ items, confirmDeletion, sortChanged, queryParams }) => {
  
    return (
        <>
            <table className=" lg:w-full  p-[2rem]">
                <thead className="border-b-2 border-black">
                    <tr>
                        <TableHeading
                            name="code"
                            className="w-25"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Code
                        </TableHeading>
                        <TableHeading
                            name="name"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Name
                        </TableHeading>
                        <TableHeading
                            name="categories_id"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Category
                        </TableHeading>
                        <TableHeading
                            name="stock"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Stock
                        </TableHeading>
                        <TableHeading
                            name="created_at"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Created Date
                        </TableHeading>


                        <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y-[1px] divide-black ">
                    {items.data.map((item, index) => (
                        <tr key={index} className=" dark:hover:bg-slate-900 hover:bg-slate-100">
                            <td className="p-3 text-sm whitespace-nowrap text-green-500 font-bold">
                                {item.code}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {item.name}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                <Bedge>{item.category.name}</Bedge>
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {item.stock}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {item.created_at}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {/* <ActionButton url="items.edit" dataId={item.id} dataName={items.name} confirmDeletion={confirmDeletion}/> */}
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
                                            href={route("items.edit", item.id)}
                                        >
                                            Edit
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            onClick={(e) =>
                                                confirmDeletion(
                                                    e,
                                                    item.id,
                                                    item.name
                                                )
                                            }
                                            as="button"
                                        >
                                            Delete
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TableItems;
