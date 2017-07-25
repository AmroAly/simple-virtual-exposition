<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BookStandRequest;
use App\Stand;
use App\Company;

class BookStandController extends Controller
{

    public function update(BookStandRequest $request, $id)
    {
        $data = $request->only('email', 'admin', 'marketing_document', 'logo');
        $marketing_document_path = str_replace('public', '', $request->marketing_document->store('public/marketing_documents'));
        $logo_path = str_replace('public', '', $request->logo->store('public/logos'));
        $company = Company::create([
            'email' => $data['email'],
            'admin' => $data['admin'],
            'marketing_document' => $marketing_document_path,
            'logo' => $logo_path
        ]);

        $stand = Stand::where('id', $id)
                ->update([
                    'booked' => true,
                    'company_id' => $company->id
                ]);

        return Stand::where('id', $id)->first()->event->id;
    }
}
