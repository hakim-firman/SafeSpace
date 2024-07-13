import React from 'react'
import Dropdown from "@/Components/Dropdown";
import { CircleEllipsis } from 'lucide-react';
const ActionButton = ({url,dataId,dataName,confirmDeletion}) => {
  return (
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
            
            href={route(url, dataId)}
        >
            Edit
        </Dropdown.Link>
        <Dropdown.Link
            onClick={(e) =>
                confirmDeletion(
                    e,
                    dataId,
                    dataName
                )
            }
            as="button"
        >
            Delete
        </Dropdown.Link>
    </Dropdown.Content>
</Dropdown>
  )
}

export default ActionButton
