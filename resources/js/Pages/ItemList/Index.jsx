import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import {
    BadgeCheck,
    Camera,
    CircleEllipsis,
    Ellipsis,
    RefreshCw,
    SquarePlus,
    SquareX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TableItems from "./Partials/TableItems";
import CardItems from "./Partials/CardItems";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import FilterItems from "./Partials/FilterItems";
// import { Camera } from 'lucide-react';
export default function Index({
    auth,
    items,
    queryParams = null,
    categories,
    success,
}) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const [itemDelete, setItemDelete] = useState();
    const [itemDeleteName, setItemDeleteName] = useState();
    const [show, setShow] = useState(false);
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

    const confirmDeletion = (e, item, name) => {
        e.preventDefault();
        setConfirmingDeletion(true);
        setItemDelete(item);
        setItemDeleteName(name);
    };

    const delteItem = (e) => {
        e.preventDefault();

        destroy(route("items.delete", itemDelete), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => alert("error"),
            onFinish: () => reset(),
        });
        closeModal();
    };

    const closeModal = () => {
        setConfirmingDeletion(false);
        setItemDelete("");
        setItemDeleteName("");
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
        router.get(route("items"), queryParams);
    };
    const onKeyPress = (name, e) => {
        if (e.key != "Enter") return;

        searchFieldChanged(name, e.target.value);
    };
    const resetFilter = () => {
        router.get(route("items"));
    };
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
            router.get(route("items"), queryParams);
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
            router.get(route("items"), queryParams);
        }
    };
    useEffect(()=>{
        console.log(success)
        if (success) {
            setShow(true)
        }
    },[items])
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center ">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Item List
                    </h2>
                    <div className="flex gap-4">
                        <div className="hidden md:block ">
                            <FilterItems
                                queryParams={queryParams}
                                searchFieldChanged={searchFieldChanged}
                                onKeyPress={onKeyPress}
                                categories={categories}
                                resetFilter={resetFilter}
                            />
                        </div>

                        <PrimaryButton
                            onClick={() => router.get(route("items.create"))}
                        >
                            <SquarePlus className="" />
                        </PrimaryButton>
                    </div>
                </div>
            }
        >
            <Head title="Items" />

            <div className="py-12">
                <div className="lg:max-w-7xl mx-[1rem] md:mx-auto sm:px-6 lg:px-8 ">
                    <div className="flex flex-col gap-6 ">
                        {show &&(
                              <div className="bg-primary w-full   shadow-sm sm:rounded-lg brutalism p-[1rem]  text-white flex flex-row gap-2 justify-between items-center">
                              <div className="flex flex-row gap-2 items-center">
                                
                              <BadgeCheck size={30} />
                              {success}
                              </div>
                              <SquareX strokeWidth={1.25} onClick={()=>setShow(false)} />
                          </div>
                        )}
                      
                        <div className="bg-white w-full dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                            <div className=" brutalism rounded-sm ">
                                <TableItems
                                    items={items}
                                    confirmDeletion={confirmDeletion}
                                    sortChanged={sortChanged}
                                    queryParams={queryParams}
                                />
                            </div>
                            <Pagination links={items.meta.links} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        <div className="bg-white w-full flex flex-row items-center p-[1rem] mt-0 justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white">
                            <FilterItems
                                queryParams={queryParams}
                                searchFieldChanged={searchFieldChanged}
                                onKeyPress={onKeyPress}
                                categories={categories}
                                resetFilter={resetFilter}
                            />
                        </div>
                        <CardItems
                            items={items}
                            confirmDeletion={confirmDeletion}
                        />
                        <div className="bg-white w-full flex flex-row items-center pb-[1rem] justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white ">
                            <Pagination links={items.meta.links} />
                        </div>
                    </div>
                    <Modal
                        show={confirmingDeletion}
                        onClose={closeModal}
                        className=""
                    >
                        <form onSubmit={delteItem} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                Are you sure you want to delete{" "}
                                <span className="font-bold text-destructive">
                                    {itemDeleteName}
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
                                    Delete Items
                                </DangerButton>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
