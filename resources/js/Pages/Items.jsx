import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
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
                <div className="max-w-7xl mx-[2rem] md:mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                        <div className="overflow-auto brutalism ">
                            <table class=" w-full  p-[2rem]">
                                <thead className="bg-primary">
                                    <tr>
                                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                                            No
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            City
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            State
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            date
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            abount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-black ">
                                    <tr>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            Indiana
                                        </td>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            Indianapolsdsd
                                        </td>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            <span className="p-1.5 font-medium uppercase tracking-wider text-yellow-200 bg-yellow-800 rounded-lg bg-opacity-50">
                                                waiting
                                            </span>
                                        </td>
                                        <td class="p-3 text-sm ">16/10/2024</td>
                                        <td class="p-3 text-sm whitespace-nowrap">
                                            30000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        <div className="bg-white dark:bg-gray-800  space-y-4 shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white ">
                            <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2   text-sm">
                                <div>
                                    <a
                                        href=""
                                        className="text-blue-500 font-bold hover:underline"
                                    >
                                        #1000
                                    </a>
                                </div>
                                <div className="text-gray-300">10/10/2024</div>
                                <div>
                                    {" "}
                                    <span className="p-1 font-medium uppercase tracking-wider text-yellow-200 bg-yellow-800 rounded-lg bg-opacity-50">
                                        waiting
                                    </span>
                                </div>
                            </div>
                            <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {/* {user.name} */}
                                                <Camera/>
                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                          

                            <div className="text-md text-gray-200 font-normal">sdfdsfsdfsfsdfsdfsdfsdfsdf</div>
                            <div className=" text-lg font-bold text-primary">Rp 30.000</div>
                            {/* <div>Status</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
