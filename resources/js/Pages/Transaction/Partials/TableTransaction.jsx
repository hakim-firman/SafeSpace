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

const TableTransaction = ({ transactions, confirmDeletion, sortChanged, queryParams }) => {
    return (
        <>
            <table className=" w-full  p-[2rem]  ">
                <thead className="border-b-2 border-black">
                    <tr>
                        <TableHeading
                            name="transactions.code"
                            className="w-25"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Code
                        </TableHeading>
                        <TableHeading
                            name="items.name"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Items Name
                        </TableHeading>
                        <TableHeading
                        className={" w-0"}
                            name="type"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Type
                        </TableHeading>
                        <TableHeading
                        className={'w-1'}
                            name="quantity"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Qty
                        </TableHeading>
                        <TableHeading
                            name="note"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Note
                        </TableHeading>
                        <TableHeading
                            name="date"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                        >
                            Date
                        </TableHeading>


                        <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y-[1px] divide-black ">

                    {transactions.data.map((transaction, index) => (
                        <tr key={index} className=" dark:hover:bg-slate-900 hover:bg-slate-100">
                            <td className="p-3 text-sm whitespace-nowrap text-green-500 font-bold">
                                {transaction.code}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {transaction.items.name}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                <Bedge>{transaction.type}</Bedge>
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {transaction.quantity}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {transaction.note}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                                {transaction.date}
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">
                            {/* <ActionButton url="transactions.edit" dataId={transaction.id} dataName={transaction.items.name} confirmDeletion={confirmDeletion}/> */}
                                <Dropdown className="z-50">
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
                                            
                                            href={route("transactions.edit", transaction.id)}
                                        >
                                            Edit
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            onClick={(e) =>
                                                confirmDeletion(
                                                    e,
                                                    transaction.id,
                                                    transaction.items.name
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

export default TableTransaction;
