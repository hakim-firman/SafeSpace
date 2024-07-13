import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { CircleEllipsis } from "lucide-react";
import React from "react";

const CardTransaction = ({ transactions, confirmDeletion }) => {
    return (
        <>
            {transactions.data.map((transaction, index) => (
                <div className="bg-white dark:bg-gray-800  space-y-2 rounded-lg brutalism p-[1rem] dark:text-white ">
                    <div className="flex  justify-between items-center ">
                        <div className="flex items-center gap-4   text-sm">
                            <div>
                                <a
                                    href=""
                                    className="text-blue-500 font-bold hover:underline"
                                >
                                    {transaction.code}
                                </a>
                            </div>

                            <div className="dark:text-gray-300 text-slate-600">10/10/2024</div>
                            <div>Quantity: {transaction.quantity}</div>
                        </div>
                        <div className="flex items-center justify-center gap-2  ">
                            <div className="hidden sm:block">
                                <a
                                    href=""
                                    className="text-primary font-bold hover:underline"
                                >
                                    <Bedge>{transaction.type}</Bedge>
                                </a>
                            </div>
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
                                        href={`/transactions/edit/${transaction.id}`}
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
                        </div>
                    </div>

                    {/* <div className="text-xl text-gray-200 font-normal">
                                Sarimi
                            </div> */}
                    <div className="text-xl dark:text-gray-200 font-normal">
                        {transaction.items.name}
                    </div>
                    <div>{transaction.note}</div>
                    <div className="block sm:hidden text-xs font-bold text-primary">
                    <Bedge>{transaction.type}</Bedge>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardTransaction;
