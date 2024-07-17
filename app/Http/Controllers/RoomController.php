<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\RoomResource;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = \App\Models\Room::query();
        $rooms = $query->paginate(10)->onEachSide(1);
        return Inertia::render("Room/Index", ['rooms' => RoomResource::collection($rooms)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Room/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
        Room::create($request->all());
        return redirect()->route('rooms.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $rooms = Room::find($id);
        return Inertia::render('Room/Show', [
            'rooms' => $rooms
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $rooms = Room::find($id);
        return Inertia::render('Room/Edit', [
            'rooms' => $rooms
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $rooms = Room::findOrFail($id);
        $rooms->update($request->all());
        return redirect()->route('rooms.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Room::destroy($id);
        return redirect()->route('rooms.index');
    }
}
