<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemsRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ItemResource;
use App\Http\Resources\ItemTransactionResource;
use App\Http\Resources\TransactionResource;
use App\Models\Category;
use App\Models\Item;
use App\Models\Transaction;
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
        // $query = Item::with('categories')->withTrash();
        $query = Item::with(['categories' => function($query) {
            $query->withTrashed();
        }]);
        $sortFields = request('sort_field','created_at');
        $sortDirection = request('sort_direction','desc');

        if (request("name")) {
             $query->where('name','like','%'.request("name").'%');
        }
        if (request("categories_id")) {
          $query->where('categories_id',request("categories_id"));
        }
        $items=$query->orderBy($sortFields,$sortDirection)->paginate(10)->onEachSide(1);


        return Inertia::render('ItemList/Index', [
            'items' => ItemResource::collection($items),
            'queryParams'=> request()->query()?:Null,
            'categories'=>CategoryResource::collection($categories),
            'success'=>session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('ItemList/Create', [
            'categories'=>CategoryResource::collection($categories)
            // 'items' => ItemResource::collection($items),
            // 'queryParams'=> request()->query()?:Null,
            // 'categories'=>CategoryResource::collection($categories)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemsRequest $request)
    {
        $data=$request->validated();
        // dd($data);
        
        $result = Item::create($data);
        // dd($result);
        return to_route('items')->with('success','Items Was Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        $transactions = Transaction::where('items_id', $item->id)->paginate(10);
        return Inertia::render('ItemList/Show',[
            'item'=> new ItemResource($item),
            'transactions' => ItemTransactionResource::collection($transactions),
            // 'queryParams' => request()->query() ?: Null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        $categories=Category::all();
        $item = Item::with(['categories' => function($query) {
            $query->withTrashed();
        }])->findOrFail($item->id);
        // $data=($item);
        return Inertia::render('ItemList/Edit',[
            'item'=> new ItemResource($item),
            'categories'=>CategoryResource::collection($categories)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        $data=$request->validated();
        $item->update($data);
        return to_route('items')->with('success',"Item \"$item->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();
        return to_route('items')->with('success','Items Was Deleted');
    }
}
