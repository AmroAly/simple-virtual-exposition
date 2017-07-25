<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;

class EventsController extends Controller
{
    public function index()
    {
        return Event::all();
    }

    public function show($id)
    {
        $event = Event::with('stands.company')->where('id', $id)->first();

        return $event ?: response()->json("The event was not found", 404);;
    }
}
