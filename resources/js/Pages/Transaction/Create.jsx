import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

export default function Create({ auth, items }) {
    const { data, setData, post, errors, reset } = useForm({
        code: "",
        items_id: "",
        type: "",
        quantity: "",
        note: "",
        date: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("transactions.save"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create New Item
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
                                            onChange={(e) =>
                                                setData("code", e.target.value)
                                            }
                                            className="mt-1 block w-3/4"
                                            isFocused
                                            placeholder="Insert Code Item Here"
                                        />

                                        <InputError
                                            message={errors.code}
                                            className="mt-2"
                                        />
                                        <InputLabel
                                            htmlFor="type"
                                            value="type"
                                        />
                                        <SelectInput
                                            id="type"
                                            name="type"
                                            onChange={(e) =>
                                                setData("type", e.target.value)
                                            }
                                        >
                                            <option disabled selected value="">
                                                Select Type{" "}
                                            </option>

                                            <option value="income">
                                                Income
                                            </option>
                                            <option value="outcome">
                                                Outcome
                                            </option>
                                        </SelectInput>
                                        <InputError
                                            message={errors.type}
                                            className="mt-2"
                                        />

                                       
                                    </div>
                                    <div className="w-full mb-2">
                                        <InputLabel
                                            htmlFor="item_id"
                                            value="Item Name"
                                        />

                                        <SelectInput
                                            id="items_id"
                                            name="items_id"
                                            onChange={(e) =>
                                                setData(
                                                    "items_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option disabled selected value="">
                                                Select Item{" "}
                                            </option>
                                            {items.data.map((c) => (
                                                <option value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.items_id}
                                            className="mt-2"
                                        />

                                        <InputLabel
                                            htmlFor="quantity"
                                            value="Quantity"
                                        />

                                        <TextInput
                                            id="quantity"
                                            type="number"
                                            name="quantity"
                                            value={data.quantity}
                                            onChange={(e) =>
                                                setData(
                                                    "quantity",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-3/4"
                                            placeholder="Insert Quantity Here"
                                        />

                                        <InputError
                                            message={errors.quantity}
                                            className="mt-2"
                                        />
                                 

                                     

                                     
                                    </div>
                                  
                                </div>
                                <InputLabel
                                            htmlFor="date"
                                            value="Date"
                                        />

                                        <TextInput
                                            id="date"
                                            type="date"
                                            name="date"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData(
                                                    "date",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-3/4"
                                            placeholder="Insert Quantity Here"
                                        />

                                        <InputError
                                            message={errors.date}
                                            className="mt-2"
                                        />
                                               <InputLabel
                                            htmlFor="note"
                                            value="Note"
                                        />
                                <TextInput
                                            id="note"
                                            type="text"
                                            name="Note"
                                            value={data.note}
                                            onChange={(e) =>
                                                setData(
                                                    "note",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-3/4"
                                            placeholder="Insert Note Here"
                                        />

                                        <InputError
                                            message={errors.note}
                                            className="mt-2"
                                        />
                                <div className="flex flex-row gap-2 justify-end mt-2 ">
                                            <PrimaryButton className=" mr-2">
                                                Save
                                            </PrimaryButton>
                                            <SecondaryButton
                                                onClick={() =>
                                                    router.get(route("items"))
                                                }
                                            >
                                                Cencel
                                            </SecondaryButton>
                                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
