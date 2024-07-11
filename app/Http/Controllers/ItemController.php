<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ItemResource;
use App\Models\Category;
use App\Models\Item;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        $query = Item::with('categories');
        $sortFields = request('sort_field','created_at');
        $sortDirection = request('sort_direction','desc');

        if (request("name")) {
             $query->where('name','like','%'.request("name").'%');
        }
        if (request("categories_id")) {
          $query->where('categories_id',request("categories_id"));
        }
        $items=$query->orderBy($sortFields,$sortDirection)->paginate(10)->onEachSide(1);


        return Inertia::render('ItemList/Items', [
            'items' => ItemResource::collection($items),
            'queryParams'=> request()->query()?:Null,
            'categories'=>CategoryResource::collection($categories)
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
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        dd("erdit coi");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        dd("berhasil hapus");
    }
}
