<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\StoreItemsRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Category::query();
        $sortFields = request('sort_field','id');
        $sortDirection = request('sort_direction','asc');
        if (request("name")) {
             $data->where('name','like','%'.request("name").'%');
        }

        $categories = $data->orderBy($sortFields,$sortDirection)->paginate(10)->onEachSide(1);

        return Inertia::render('Category/Index',[
            'categories' => CategoryResource::collection($categories),
            'queryParams'=> request()->query()?:Null,
            'success'=>session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
       
       

        $data=$request->validated();
 
        $result = Category::create($data);
   
        return to_route('categories')->with('success','Category Was Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit',[
            'category'=> new CategoryResource($category),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data=$request->validated();
        $category->update($data);
        return to_route('categories')->with('success',"Item \"$category->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return to_route('categories')->with('success','Categories Was Deleted');
    }
}
