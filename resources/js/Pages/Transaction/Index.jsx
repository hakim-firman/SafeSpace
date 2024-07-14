import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Camera, CircleEllipsis, Ellipsis, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TableTransaction from "./Partials/TableTransaction";
import CardTransaction from "./Partials/CardTransaction";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import FilterTransaction from "./Partials/FilterTransaction";
import SortButton from "@/Components/SortButton";
import TableHeading from "@/Components/TableHeading";
// import { Camera } from 'lucide-react';
export default function Index({ auth, transactions, queryParams = null }) {
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
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        console.log(queryParams);
        router.get(route("transactions"), queryParams);
    };
    const onKeyPress = (name, e) => {
        if (e.key != "Enter") return;

        searchFieldChanged(name, e.target.value);
    };
    const resetFilter = () => {
        router.get(route("transactions"));
    };
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
            router.get(route("transactions"), queryParams);
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
            router.get(route("transactions"), queryParams);
        }
    };

    useEffect(() => {
        console.log("this is transaction:", transactions);
    });
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center ">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Transaction List
                    </h2>
                    <div className="hidden md:block">
                        <FilterTransaction
                            queryParams={queryParams}
                            searchFieldChanged={searchFieldChanged}
                            onKeyPress={onKeyPress}
                            resetFilter={resetFilter}
                        />
                    </div>
                </div>
            }
        >
            <Head title="Transactions" />

            <div className="py-12">
                <div className="lg:max-w-7xl mx-[1rem] md:mx-auto sm:px-6 lg:px-8 ">
                    <div className="flex gap-6 ">
                        <div className="bg-white w-full dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden xl:block">
                            <div className=" brutalism rounded-sm  ">
                                <TableTransaction
                                    transactions={transactions}
                                    confirmDeletion={confirmDeletion}
                                    sortChanged={sortChanged}
                                    queryParams={queryParams}
                                />
                            </div>
                            <Pagination links={transactions.meta.links} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 xl:hidden">
                        <div className="bg-white md:hidden w-full flex flex-row items-center p-[1rem] mt-0 justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white">
                            <FilterTransaction
                                queryParams={queryParams}
                                searchFieldChanged={searchFieldChanged}
                                onKeyPress={onKeyPress}
                                resetFilter={resetFilter}
                            />
                        </div>
                        <div className="bg-white  flex   flex-row flex-wrap gap-2 items-center p-[1rem] mt-0 justify-end  dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white">
                          
                            <SortButton
                                name="transactions.code"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Code
                            </SortButton>
                            <SortButton
                                name="items.name"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Items
                            </SortButton>
                            <SortButton
                                name="items.name"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Type
                            </SortButton>
                            <SortButton
                                name="items.name"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Qty
                            </SortButton>
                            <SortButton
                                name="items.name"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Note
                            </SortButton>
                            <SortButton
                                name="items.name"
                                className="w-25"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Date
                            </SortButton>
                        </div>
                        <CardTransaction
                            transactions={transactions}
                            confirmDeletion={confirmDeletion}
                        />
                        <div className="bg-white w-full flex flex-row items-center pb-[1rem] justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white ">
                            <Pagination links={transactions.meta.links} />
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
}
