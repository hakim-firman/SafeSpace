import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Camera, CircleEllipsis, Ellipsis } from "lucide-react";
import { useRef, useState } from "react";
import TableItems from "./Partials/TableItems";
import CardItems from "./Partials/CardItems";
// import { Camera } from 'lucide-react';
export default function Dashboard({ auth, items }) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmDeletion = (e) => {
        e.preventDefault();
        setConfirmingDeletion(true);
    };

    const delteItem = (e) => {
        e.preventDefault();

        // destroy(route('profile.destroy'), {
        //     preserveScroll: true,
        //     onSuccess: () => closeModal(),
        //     onError: () => passwordInput.current.focus(),
        //     onFinish: () => reset(),
        // });
        closeModal()
    };

    const closeModal = () => {
        setConfirmingDeletion(false);

        reset();
    };

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
                <div className="lg:max-w-7xl mx-[1rem] md:mx-auto sm:px-6 lg:px-8 bg-red-300">
                    <div className="flex gap-2 bg-slate-400">
                        <div className="bg-white dark:bg-gray-800 w-fit  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                            <PrimaryButton>ssdd</PrimaryButton>
                            <PrimaryButton>sdsd</PrimaryButton>
                            <PrimaryButton>sdsd</PrimaryButton>
                        </div>
                        <div className="bg-white w-full dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                            <div className=" brutalism ">
                                <TableItems items={items} confirmDeletion={confirmDeletion}/>
                                <pre>
                                    {JSON.stringify(items.data, undefined, 1)}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                       <CardItems  items={items} confirmDeletion={confirmDeletion}/>
                    </div>

                    <Modal
                        show={confirmingDeletion}
                        onClose={closeModal}
                        className=""
                    >
                        <form onSubmit={delteItem} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                Are you sure you want to delete This Items?
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
