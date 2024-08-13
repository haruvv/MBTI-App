<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MBTIController;
use App\Http\Controllers\HomeController;

Route::get('/mbti', [MBTIController::class, 'index']);
Route::post('/mbti', [MBTIController::class, 'store']);

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test-error', function () {
    throw new Exception('Test error');
});

Route::get('/mbti', [MbtiController::class, 'index'])->name('mbti.test');
Route::post('/mbti', [MbtiController::class, 'store'])->name('mbti.result');

require __DIR__.'/auth.php';
