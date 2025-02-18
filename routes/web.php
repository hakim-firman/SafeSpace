<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Models\Category;
use App\Models\Item;
use App\Models\Transaction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Auth/Login', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/', function () {
//     return Route::has('login');
// });



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware(['auth','verified'])->group(function () {
    // Route::get('/items', function () {

    // })->name('items');

    Route ::resource('items',ItemController::class)->names([
        'index'=>'items',
        'create'=>'items.create',
        'store'=>'items.save',
        'show'=>'items.show',
        'update'=>'items.update',
        'edit'=>'items.edit',
        'destroy'=>'items.delete',
    ]);
    Route::resource('categories',CategoryController::class)->names([
    'index'=>'categories',
    'create'=>'categories.create',
    'store'=>'categories.save',
    'update'=>'categories.update',
    'edit'=>'categories.edit',
    'destroy'=>'categories.delete',
    ]);
    Route::resource('transactions',TransactionController::class)->names([
        'index'=>'transactions',
        'create'=>'transactions.create',
        'store'=>'transactions.save',
        'update'=>'transactions.update',
        'edit'=>'transactions.edit',
        'destroy'=>'transactions.delete',
        ]);
    Route::get('/dashboard', function () {
        $transaction=Transaction::query()->count();
        $item=Item::query()->count();
        $category=Category::query()->count();
        return Inertia::render('Dashboard',[
            'transaction'=>$transaction,
            'item'=>$item,
            'category'=>$category,
        ]);
    })->name('dashboard');
});

require __DIR__.'/auth.php';
