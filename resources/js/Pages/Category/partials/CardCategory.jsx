import ActionButton from "@/Components/ActionButton";
import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import { CircleEllipsis } from "lucide-react";
import React from 'react'

const CardCategory = ({categories,confirmDeletion}) => {
  return (
    <>
 {categories.data.map((category, index) => (
                            <div className="bg-white dark:bg-gray-800  space-y-2 rounded-lg brutalism p-[1rem] dark:text-white ">
                                <div className="flex  justify-between items-center ">
                                    <div className="flex items-center gap-4   text-sm">
                                    
                                        <div className="text-xl dark:text-gray-200 font-normal">
                                        <Link className="border-b-2 border-primary" href={'/items?categories_id='+category.id}>{category.name}</Link>
                                        </div>
                                    
                                    </div>
                                    <div className="flex items-center justify-center gap-2  ">
                                    
                                    <ActionButton url="categories.edit" dataId={category.id} dataName={category.name} confirmDeletion={confirmDeletion}/>
                                    </div>
                                </div>

                      
                            </div>
                        ))}
    </>
  )
}

export default CardCategory