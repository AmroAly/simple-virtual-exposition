<?php

use Illuminate\Http\Request;

Route::post('/book-stand/{id}', 'BookStandController@update');
Route::post('/register-company', 'CompanyController@create');
Route::get('/events', 'EventsController@index');
Route::get('/events/{id}', 'EventsController@show');
