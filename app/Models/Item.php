<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded=['id'];
    public function categories ():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function transaction() : HasMany {
        return $this->HasMany(Transaction::class);
    }
}
