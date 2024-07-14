import Bedge from "@/Components/Bedge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import TableTransaction from "../Transaction/Partials/TableTransaction";
import { useEffect, useRef, useState } from "react";
import CardTransaction from "../Transaction/Partials/CardTransaction";
import  DangerButton  from '@/Components/DangerButton';
import  SecondaryButton  from '@/Components/SecondaryButton';
import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";

const Show = ({ auth, item, transactions, queryParams = null }) => {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const [transactionDelete, setTransactionDelete] = useState();
    const [transactionDeleteName, setTransactionDeleteName] = useState();
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmDeletion = (e, transaction, name) => {
        e.preventDefault();
        setConfirmingDeletion(true);
        setTransactionDelete(transaction);
        setTransactionDeleteName(name);
       
    };

    const delteTransaction = (e) => {
        e.preventDefault();
        destroy(route("transactions.delete", transactionDelete), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => alert("error"),
            onFinish: () => reset(),
        });
        closeModal();
    };

    const closeModal = () => {
        setConfirmingDeletion(false);
        setTransactionDelete("");
        setTransactionDeleteName("");
        reset();
    };
    queryParams = queryParams || { 'id':item.id};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        console.log(queryParams);
        router.get(router("items.show"), queryParams);
    };
    const onKeyPress = (name, e) => {
        if (e.key != "Enter") return;

        searchFieldChanged(name, e.target.value);
    };
    const resetFilter = () => {
        router.get(route("items.show"));
    };
    const sortChanged = (name) => {
        console.log(queryParams)
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
            router.get(route("items.show"), queryParams);
        } else {
            console.log(queryParams)
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
            router.get(route("items.show"), queryParams);
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{`Item "${item.name}"`}</h2>
            }
        >
            <Head title={`Item "${item.name}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg brutalism">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                          
                            <div className="grid gap-2 grid-cols-2">
                                <div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg"
                                        >
                                            Item Code
                                        </label>
                                        <p>{item.code}</p>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg"
                                        >
                                            Item Name
                                        </label>
                                        <p>{item.name}</p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg"
                                        >
                                            Created Date
                                        </label>
                                        <p>{item.created_at}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg"
                                        >
                                            Stock
                                        </label>
                                        <p>{item.stock}</p>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg block"
                                        >
                                            Category
                                        </label>
                                        <Bedge className="">
                                            {item.category.name}
                                        </Bedge>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-lg"
                                        >
                                            Update Date
                                        </label>
                                        <p>{item.update_at}</p>
                                    </div>
                                </div>
                            </div>
                      
                            <div className=" mt-2 flex flex-col gap-2 ">
                             
                                <CardTransaction
                                    transactions={transactions}
                                    confirmDeletion={confirmDeletion}
                                    sortChanged={sortChanged}
                                    queryParams={queryParams}
                                />
                                <Pagination links={transactions.meta.links} />
                            </div>
                        </div>
                    </div>
                    <Modal
                        show={confirmingDeletion}
                        onClose={closeModal}
                        className=""
                    >
                        <form onSubmit={delteTransaction} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                Are you sure you want to delete{" "}
                                <span className="font-bold text-destructive">
                                    {transactionDeleteName}
                                </span>
                                ?
                            </h2>

                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Once your account is deleted, all of its
                                resources and data will be permanently deleted.
                                Please enter your password to confirm you would
                                like to permanently delete your account.
                            </p>

                            {/* <div className="mt-6">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="sr-only"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="Password"
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div> */}

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <DangerButton
                                    className="ms-3"
                                    disabled={processing}
                                >
                                    Delete Transaction
                                </DangerButton>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default Show;
