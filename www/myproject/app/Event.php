<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['name', 'city', 'coordinates', 'date'];

    public $timestamps = false;

    public function stands()
    {
        return $this->hasMany(Stand::class);
    }
}
