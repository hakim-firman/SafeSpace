import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white">
                        <table class="border-collapse border border-slate-400 table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="border border-slate-300 ...">
                                        State
                                    </th>
                                    <th class="border border-slate-300 ...">
                                        City
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-300 ...">
                                        Indiana
                                    </td>
                                    <td class="border border-slate-300 ...">
                                        Indianapolis
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300 ...">
                                        Ohio
                                    </td>
                                    <td class="border border-slate-300 ...">
                                        Columbus
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300 ...">
                                        Michigan
                                    </td>
                                    <td class="border border-slate-300 ...">
                                        Detroit
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
