<?php

use App\Models\Category;
use App\Models\User;
// use function Pest\Laravel\{post};
    
test('can create an item', function () {
    $user = User::factory()->create();
    Category::factory()->create();
    $category = Category::first();

    $res = $this->actingAs($user)->post('/items', [
        "code" => '123',
        "name" => '123',
        "stock" => 1,
        "categories_id" => $category->id
    ]);

    $res->assertRedirect(route('items'));

});
