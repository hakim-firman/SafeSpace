<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "code"=>'required|unique:Transactions',
            "items_id"=>'required',
            "type"=>'required',
            "date"=>'date',
            "note"=>'required',
            "quantity"=>'required|min:1 |integer',
            
        ];
    }
}
