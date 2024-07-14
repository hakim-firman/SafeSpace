import ActionButton from "@/Components/ActionButton";
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
                            {/* <ActionButton url="transactions.edit" dataId={transaction.id} dataName={transaction.items.name} confirmDeletion={confirmDeletion}/> */}
                            
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
