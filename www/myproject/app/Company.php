<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['email', 'marketing_document', 'admin', 'logo'];

    public $timestamps = false;
}
