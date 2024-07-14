<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemTransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'code'=>$this->code,
            'items'=>$this->items,
            'quantity'=>$this->quantity,
            'type'=>$this->type,
            'note'=>$this->note,
            'date'=>(new Carbon($this->created_at))->format('d-m-Y'),
        ];
    }
}
