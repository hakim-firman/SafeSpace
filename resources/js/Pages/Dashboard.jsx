import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AlignStartVertical, CandlestickChart, Tag } from 'lucide-react';

export default function Dashboard({ auth,transaction,item,category}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex w-full gap-3">
                    <div className="bg-white w-full dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900   dark:text-gray-100">
                            <div className='text-3xl font-extrabold flex gap-2 items-center text-primary'>
                            <CandlestickChart size={40} /> Transaction
                            </div>
                            <div className='text-xl'>
                                {transaction}
                            </div>
                        </div>
                      
                    </div>
                  
                    <div className="bg-white w-full dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900   dark:text-gray-100">
                        <div className='text-3xl font-extrabold flex gap-2 items-center text-primary'>
                        <AlignStartVertical size={40} /> Item
                            </div>
                            <div className='text-xl'>
                            {item}
                            </div>
                        </div>
                      
                    </div>
                  
                    <div className="bg-white w-full dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900   dark:text-gray-100">
                        <div className='text-3xl font-extrabold flex gap-2 items-center text-primary'>
                        <Tag size={40} /> Category
                            </div>
                            <div className='text-xl'>
                                {category}
                            </div>
                        </div>
                      
                    </div>
                  
                    </div>
                  
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
