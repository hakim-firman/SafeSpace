import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { RefreshCw } from "lucide-react";
import React from "react";


const FilterCategory = ({  queryParams,searchFieldChanged,onKeyPress ,categories,resetFilter }) => {
    return (
        <>
            <div className="flex flex-row gap-2 items-center justify-center">
                <TextInput
                    id="search"
                    type="search"
                    name="password"
                    placeholder="Category name"
                    defaultValue={queryParams.name}
                    className=" block w-full"
                    onBlur={(e) => searchFieldChanged("name", e.target.value)}
                    onKeyPress={(e) => onKeyPress("name", e)}
                />
               
                <PrimaryButton onClick={resetFilter}>
                    <RefreshCw size={24} />
                </PrimaryButton>
            </div>
        </>
    );
};

export default FilterCategory;
