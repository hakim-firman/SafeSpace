import Bedge from "@/Components/Bedge";
import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Camera, CircleEllipsis, Ellipsis } from "lucide-react";
// import { Camera } from 'lucide-react';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Item List
                </h2>
            }
        >
            <Head title="Items" />

            <div className="py-12">
                <div className="max-w-7xl mx-[1rem] md:mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                        <div className=" brutalism ">
                            <table class=" w-full  p-[2rem]">
                                <thead className="bg-primary">
                                    <tr>
                                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                                            No
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Category
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Stock
                                        </th>

                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-black ">
                                    <tr>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            Indiana
                                        </td>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            Sarimi
                                        </td>
                                        <td class="p-3 text-sm whitespace-nowrap">

                                            <Bedge>Waiting</Bedge>
                                        </td>

                                        <td class="p-3 text-sm whitespace-nowrap">
                                            30000
                                        </td>
                                        <td class="p-3 text-sm whitespace-nowrap">
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
                                                        href={route(
                                                            "profile.edit"
                                                        )}
                                                    >
                                                        Edit
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Delete
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
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
                                        Sarimi
                                    </div>
                                    {/* <div className="text-gray-300">
                                        10/10/2024
                                    </div> */}
                                    <div>
                                        {" "}
                                        <Bedge>Waiting</Bedge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2  ">

                                 <div className="hidden sm:block">
                                        <a
                                            href=""
                                            className="text-primary font-bold hover:underline"
                                        >
                                            Stock: #1000
                                        </a>
                                    </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                               <Ellipsis strokeWidth={2.25} />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Edit
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
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
                            <div className="block sm:hidden text-lg font-bold text-primary">
                                Stock : 20
                            </div>
                            {/* <div>Status</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
