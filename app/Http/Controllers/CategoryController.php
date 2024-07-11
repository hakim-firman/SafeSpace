<?php

namespace App\Http\Controllers;

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

        return Inertia::render('Category/Category',[
            'categories' => CategoryResource::collection($categories),
            'queryParams'=> request()->query()?:Null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
