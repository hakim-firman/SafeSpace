import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { CircleEllipsis } from "lucide-react";
import React from 'react'

const TableItems = ({items,confirmDeletion}) => {
  return (
    <>
        <table className=" w-full  p-[2rem]">
                                    <thead className="border-b-2 border-black">
                                        <tr>
                                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                                                No
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Name
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Category
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Stock
                                            </th>

                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-black ">
                                        {items.data.map((item, index) => (
                                            <tr key={index}>
                                                {" "}
                                                {/* Gunakan index sebagai key */}
                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    {index + 1}{" "}
                                                    {/* Tambahkan 1 karena index dimulai dari 0 */}
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    <Bedge>
                                                        {item.category.name}
                                                    </Bedge>
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    {item.stock}
                                                </td>
                                                <td className="p-3 text-sm whitespace-nowrap">
                                                    <Dropdown>
                                                        <Dropdown.Trigger>
                                                            <span className="inline-flex rounded-md">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                                >
                                                                    <CircleEllipsis />
                                                                </button>
                                                            </span>
                                                        </Dropdown.Trigger>
                                                        <Dropdown.Content>
                                                            <Dropdown.Link
                                                                href={`/items/edit/${item.id}`}
                                                            >
                                                                Edit
                                                            </Dropdown.Link>
                                                            <Dropdown.Link
                                                               onClick={confirmDeletion}
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
  )
}

export default TableItems