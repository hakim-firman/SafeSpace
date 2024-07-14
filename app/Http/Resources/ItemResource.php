<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    public static $wrap =false;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */

    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'code'=>$this->code,
            'name'=>$this->name,
            'stock'=>$this->stock,
            'created_at'=>(new Carbon($this->created_at))->format('d-m-Y'),
            'update_at'=>(new Carbon($this->update_at))->format('d-m-Y'),
            'category'=>$this->categories,
        ];
    }
}
