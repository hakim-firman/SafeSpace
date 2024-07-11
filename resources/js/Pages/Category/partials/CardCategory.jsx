import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
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
                                            {category.name}
                                        </div>
                                    
                                    </div>
                                    <div className="flex items-center justify-center gap-2  ">
                                    
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
                                                                href={route('categories.edit',category.id)}
                                                            >
                                                                Edit
                                                            </Dropdown.Link>
                                                         
                                                           
                                                        </Dropdown.Content>
                                                    </Dropdown>
                                    </div>
                                </div>

                      
                            </div>
                        ))}
    </>
  )
}

export default CardCategory