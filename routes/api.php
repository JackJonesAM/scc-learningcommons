use App\Http\Controllers\EquipmentController;

Route::post('/equipments', [EquipmentController::class, 'store'])->name('equipment.store');