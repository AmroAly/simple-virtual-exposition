<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;

class CompanyController extends Controller
{
    public function create($data)
    {
        return $data;
        $marketing_document_path = $data['marketing_document']->store('public/marketing_documents');
        $logo_path = $data['logo']->store('public/logos');
        $company = Company::create([
            'email' => $data['email'],
            'admin' => $data['admin'],
            'marketing_document' => $marketing_document_path,
            'logo' => $logo_path
        ]);
        return $data;
    }
}
