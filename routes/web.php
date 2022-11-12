<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('test');
});

Route::post('/add', [CustomerController::class,'add']);
Route::get('/customers',[CustomerController::class,'table']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

route::delete('delete/{id}',[CustomerController::class,'delete']);
route::get('/edit/{id}',[CustomerController::class,'edit']);
route::post('/edit/{id}',[CustomerController::class,'update']);
