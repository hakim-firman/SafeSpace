import ActionButton from "@/Components/ActionButton";
import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { CircleEllipsis } from "lucide-react";
import React from 'react'

const CardItems = ({items,confirmDeletion}) => {
  return (
    <>
 {items.data.map((item, index) => (
                            <div className="bg-white dark:bg-gray-800  space-y-2 rounded-lg brutalism p-[1rem] dark:text-white ">
                                <div className="flex  justify-between items-center ">
                                    <div className="flex items-center gap-4   text-sm">
                                        {/* <div>
                                        <a
                                            href=""
                                            className="text-blue-500 font-bold hover:underline"
                                        >
                                            Stock: #1000
                                        </a>
                                    </div> */}
                                        <div className="text-xl dark:text-gray-200 font-normal">
                                            {item.name}
                                        </div>
                                        {/* <div className="text-gray-300">
                                        10/10/2024
                                    </div> */}
                                        <div>
                                            {" "}
                                            <Bedge>{item.category.name}</Bedge>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-2  ">
                                        <div className="hidden sm:block">
                                            <a
                                                href=""
                                                className="text-primary font-bold hover:underline"
                                            >
                                                Stock: {item.stock}
                                            </a>
                                        </div>
                                        <ActionButton url="items.edit" dataId={item.id} dataName={item.name} confirmDeletion={confirmDeletion}/>
                                    </div>
                                </div>

                                {/* <div className="text-xl text-gray-200 font-normal">
                                Sarimi
                            </div> */}
                                <div className="block sm:hidden text-lg font-bold text-primary">
                                    Stock : {item.stock}
                                </div>
                                {/* <div>Status</div> */}
                            </div>
                        ))}
    </>
  )
}

export default CardItems