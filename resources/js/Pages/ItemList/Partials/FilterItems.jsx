import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { RefreshCw } from "lucide-react";
import React from "react";


const FilterItems = ({  queryParams,searchFieldChanged,onKeyPress ,categories,resetFilter }) => {
    return (
        <>
            <div className="flex flex-row gap-2 items-center justify-center">
                <TextInput
                    id="search"
                    type="search"
                    name="password"
                    placeholder="Item name"
                    defaultValue={queryParams.name}
                    className=" block w-full"
                    onBlur={(e) => searchFieldChanged("name", e.target.value)}
                    onKeyPress={(e) => onKeyPress("name", e)}
                />
                <SelectInput
                    defaultValue={queryParams.categories_id}
                    onChange={(e) =>
                        searchFieldChanged("categories_id", e.target.value)
                    }
                >
                    <option disabled selected value="">
                        Category
                    </option>
                    {categories.data.map((category) => (
                        <option value={category.id}>{category.name}</option>
                    ))}
                </SelectInput>
                <PrimaryButton onClick={resetFilter}>
                    <RefreshCw size={24} />
                </PrimaryButton>
            </div>
        </>
    );
};

export default FilterItems;
