<?php

use App\Models\Category;
use App\Models\User;

it('create category', function () {
    $user = User::factory()->create();
    
    $res = $this->actingAs($user)->post('/categories', [
        "name" => 'category',
    ]);

    $res->assertRedirect(route('categories'));
});

it('update category', function () {
    $user     = User::factory()->create();
    $category = Category::first();
    
    $res = $this->actingAs($user)->put("/categories/$category->id", [
        "name" => 'category new'
    ]);
    
    $res->assertRedirect(route('categories'));
    
});

it('delete category', function () {
    $user     = User::factory()->create();
    $category = Category::first();
    
    $res = $this->actingAs($user)->delete("/categories/$category->id");
    
    $this->assertSoftDeleted('categories',[
        'id' => $category->id
    ]);

    $res->assertRedirect(route('categories'));

});
