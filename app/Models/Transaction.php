<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;
    protected $guarded =['id'];

    public function items ():BelongsTo
    {
        return $this->belongsTo(Item::class);
    }

    public static function generateTransactionNumber()
    {
        $date = Carbon::now()->format('Ymd');
        $lastTransaction = self::whereDate('created_at', Carbon::today())
            ->orderBy('id', 'desc')
            ->first();

        $lastNumber = $lastTransaction ? intval(substr($lastTransaction->transaction_number, -4)) : 0;
        $nextNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);

        return 'TR-' . $date . '-' . $nextNumber;
    }
}
