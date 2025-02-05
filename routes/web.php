<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AccountsController;
use app\Http\Controllers\ClothesController;
use App\Http\Controllers\OutfitsController;
use App\Http\Controllers\WoredrobesController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



    
    Route::get('/',function (){
        return Inertia::render('HomePage');
    });




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/CreateOutfit', function () {
        return Inertia::render('CreateOutfit');
    })->name('CreateOutfit');
    Route::get('/Wardrobe', function () {
        return Inertia::render('Wardrobe');
    })->name('wardrobe');
});

Route::get('/Home', function () {
    return Inertia::render('HomePage');
});
Route::get('/account/{id}', [AccountsController::class, 'getaccountoutfits']);

Route::get('/create-outfit',function (){
    return Inertia::render('CreateOutfit');
});
Route::get('/select-items/{id}',[AccountsController::class, 'getaccountclothes']);


require __DIR__.'/auth.php';
