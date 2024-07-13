import Bedge from "@/Components/Bedge";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Camera, CircleEllipsis, Ellipsis, RefreshCw } from "lucide-react";
import { useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableCategory from "./partials/TableCategory";
import FilterCategory from "./partials/FilterCategory";
import CardCategory from "./partials/CardCategory";
import TableHeading from "@/Components/TableHeading";
// import { Camera } from 'lucide-react';
export default function Index({
    auth,
    categories,
    queryParams = null,

}) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const [categoryDelete, setCategoryDelete] = useState();
    const [categoryDeleteName, setCategoryDeleteName] = useState();
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

    const confirmDeletion = (e, category, name) => {
        e.preventDefault();
        setConfirmingDeletion(true);
        setCategoryDelete(category);
        setCategoryDeleteName(name);
        console.log(category);
    };

    const delteItem = (e) => {
        e.preventDefault();
        destroy(route("category.delete", categoryDelete), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => alert("error"),
            onFinish: () => reset(),
        });
        closeModal();
    };

    const closeModal = () => {
        setConfirmingDeletion(false);
        setCategoryDelete("");
        setCategoryDeleteName("");
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
        router.get(route("categories"), queryParams);
    };
    const onKeyPress = (name, e) => {
        if (e.key != "Enter") return;

        searchFieldChanged(name, e.target.value);
    };
    const resetFilter = () => {
        router.get(route("categories"));
    };
    const sortChanged = (name)=>{
        if (name === queryParams.sort_field){
            if(queryParams.sort_direction === 'asc'){
                queryParams.sort_direction ='desc'
            }else{
                 queryParams.sort_direction ='asc'
            }
            router.get(route("categories"), queryParams);
        }else{
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
            router.get(route("categories"), queryParams);

        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center ">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Category List
                    </h2>
                    <div className="hidden md:block">
                    <FilterCategory
                        queryParams={queryParams}
                        searchFieldChanged={searchFieldChanged}
                        onKeyPress={onKeyPress}
                        categories={categories}
                        resetFilter={resetFilter}
                    />
                    </div>

                </div>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="lg:max-w-3xl mx-[1rem] md:mx-auto sm:px-6 lg:px-8 ">
                    <div className="flex gap-6 ">
                        {/* <div className="bg-white  dark:bg-gray-800 w-fit  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl">Filter</h2>
                                <div className="flex gap-1 flex-wrap">
                                    <PrimaryButton>Name</PrimaryButton>
                                    <PrimaryButton>Category</PrimaryButton>
                                    <div className="flex flex-row gap-2">
                                        <TextInput
                                            id="search"
                                            type="search"
                                            name="password"
                                            placeholder="search here"
                                            className="mt-1 block w-full"
                                        />
                                        <SecondaryButton>
                                            Search
                                        </SecondaryButton>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="bg-white w-full dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism p-[2rem] dark:text-white hidden md:block">
                            <div className=" brutalism rounded-sm ">
                                <TableCategory
                                    categories={categories}
                                    confirmDeletion={confirmDeletion}
                                    sortChanged ={sortChanged }
                                    queryParams={queryParams}
                                />
                            </div>
                            <Pagination links={categories.meta.links} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        <div className="bg-white w-full flex flex-row items-center p-[1rem] mt-0 justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white">
                            <FilterCategory
                                queryParams={queryParams}
                                searchFieldChanged={searchFieldChanged}
                                onKeyPress={onKeyPress}
                                categories={categories}
                                resetFilter={resetFilter}
                            />
                            
                        </div>
                        <CardCategory
                            categories={categories}
                            confirmDeletion={confirmDeletion}
                        />
                        <div className="bg-white w-full flex flex-row items-center pb-[1rem] justify-center dark:bg-gray-800  shadow-sm sm:rounded-lg brutalism  dark:text-white ">
                            <Pagination links={categories.meta.links} />
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
