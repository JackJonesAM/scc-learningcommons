<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEquipmentRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Equipment;
use App\Http\Controllers\Controller;
use App\Http\Resources\EquipmentResource;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Equipment::query();

        $equipments = $query->paginate(10)->onEachSide(1);

        return inertia("Equipment/Index", ["equipments" => EquipmentResource::collection($equipments),]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Equipment/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEquipmentRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        Equipment::create($data);

        return to_route('equipment.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $equipments = Equipment::find($id);
        return Inertia::render('Equipment/Show', [
            'equipments' => $equipments
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $equipments = Equipment::find($id);
        return Inertia::render('Equipment/Edit', [
            'equipments' => $equipments
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $equipments = Equipment::findOrFail($id);
        $equipments->update($request->all());
        return redirect()->route('equipments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Equipment::destroy($id);
        return redirect()->route('equipments.index');
    }
}
