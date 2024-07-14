<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Http\Resources\ItemResource;
use App\Http\Resources\TransactionResource;
use App\Models\Item;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $query = Transaction::with(['items' => function ($query) {
            $query->withTrashed();
        }])
            ->join('items', 'items.id', '=', 'transactions.items_id')
            ->select('transactions.id as transaction_id', 'items.id as item_id', 'transactions.*', 'items.*');
        $sortFields = request('sort_field', 'date');
        $sortDirection = request('sort_direction', 'desc');
        // query filter
        if (request("items_name")) {
            $query->where('items.name', 'like', '%' . request("items_name") . '%');
        }
        if (request("type")) {
            $query->where('type', request("type"));
        }
        $transactions = $query->orderBy($sortFields, $sortDirection)->paginate(10)->onEachSide(1);
        return Inertia::render('Transaction/Index', [
            'transactions' => TransactionResource::collection($transactions),
            'queryParams' => request()->query() ?: Null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $item = Item::all();
        return Inertia::render('Transaction/Create', [
            'items' => ItemResource::collection($item)
            // 'items' => ItemResource::collection($items),
            // 'queryParams'=> request()->query()?:Null,
            // 'categories'=>CategoryResource::collection($categories)
        ]);
        // $transactionNumber = Transaction::generateTransactionNumber();

        // $transaction = new Transaction();
        // $transaction->transaction_number = $transactionNumber;
        // $transaction->user_id = $request->user()->id;
        // $transaction->amount = $request->amount;
        // $transaction->save();

        // return response()->json(['transaction_number' => $transactionNumber], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTransactionRequest $request)
    {
        $data = $request->validated();
        $item = Item::find($data['items_id']);
        if ($data['type'] == 'outcome') {
            $item->stock = $item->stock - $data['quantity'];
            $item->save();
        } else  if ($data['type'] == 'income') {
            $item->stock = $item->stock + $data['quantity'];
            $item->save();
        } 
        $result = Transaction::create($data);

        return to_route('transactions')->with('success','Transaction Was Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        dd("erdit coi");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        dd("delete coi");
    }
}
