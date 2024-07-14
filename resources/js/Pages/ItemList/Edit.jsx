import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

export default function Edit({ auth ,categories,item}) {
    const {data,setData,put,errors,reset}= useForm({
        code:item.code||'',
        name:item.name||'',
        stock:item.stock||'',
        categories_id:item.category.id||'',

    })
    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('items.update',item.id))
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Item <span className="text-primary">{item.name}</span>
                </h2>
            }
        >
            <Head title="Create Item" />
          
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col sm:flex-row  sm:gap-4">
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor="code"
                                            value="Code"
                                        />

                                        <TextInput
                                            id="code"
                                            type="text"
                                            name="code"
                                            value={data.code}
                                            onChange ={(e)=>setData('code',e.target.value)}
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Insert Code Item Here"
                                            pressed="true"
                                            disabled
                                        />

                                        <InputError
                                            message={errors.code}
                                            className="mt-2"
                                        />
                                        <InputLabel
                                            htmlFor="name"
                                            value="Item name"
                                        />
                                        <TextInput
                                            id="name"
                                            type="text"
                                            
                                            name="name"
                                            value={data.name}
                                            onChange ={(e)=>setData('name',e.target.value)}
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Insert Item Name  Here"
                                        />
                                          <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-full">
                                      
                                        <InputLabel
                                            htmlFor="stock"
                                            value="Stock"
                                        />

                                        <TextInput
                                            id="stock"
                                            type="number"
                                            name="stock"
                                            value={data.stock}
                                            onChange ={(e)=>setData('stock',e.target.value)}
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Insert Stock Item Here"
                                        />

                                        <InputError
                                            message={errors.stock}
                                            className="mt-2"
                                        />
                                        <InputLabel
                                            htmlFor="cotegories_id"
                                            value="Category"
                                        />

                                  

                                        <SelectInput id="categories_id" name="categories_id" value={data.categories_id} onChange ={(e)=>setData('categories_id',e.target.value)}  >
                                            <option disabled selected value="">Select Category</option>
                                            {categories.data.map((c)=>(
                                                <option value={c.id}>{c.name}</option>
                                            ))}
                                            
                                        </SelectInput>
                                        <InputError
                                             message={errors.categories_id}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 justify-end">

                                    <PrimaryButton className=" mr-2">Update</PrimaryButton>
                                    <SecondaryButton onClick={()=>router.get(route('items'))}>Cencel</SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
