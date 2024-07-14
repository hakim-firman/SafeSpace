import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const {data,setData,post,errors,reset}= useForm({
        name:'',

    })
    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('categories.save'))
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create New Category
                </h2>
            }
        >
            <Head title="Create Category" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                             
                                    <div className="w-full mb-[2rem]">
                                        <InputLabel
                                            htmlFor="name"
                                            value="Category Name"
                                        />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange ={(e)=>setData('name',e.target.value)}
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Insert Category Name Here"
                                        />

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                 
                                    </div>
                                    
                              
                                <div className="flex flex-row gap-2 justify-end">

                                    <PrimaryButton className=" mr-2">Save</PrimaryButton>
                                    <SecondaryButton onClick={()=>router.get(route('categories'))}>Cencel</SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
