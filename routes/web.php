<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\usercontroller;

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

Route::post('/insertmaster', [CustomerController::class,'insertmaster']);
Route::get('/zipmaster',[CustomerController::class,'zipmaster']);

Route::get('/zipchild',[CustomerController::class,'zipchild']);

Route::post('/insertchild',[CustomerController::class,'insertchild']);


// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

route::delete('delete/{id}',[CustomerController::class,'delete']);
route::delete('deletechild/{id}',[CustomerController::class,'deletechild']);

route::get('/edit/{id}',[CustomerController::class,'edit']);
route::post('/edit/{id}',[CustomerController::class,'update']);

route::get('/editchild/{id}',[CustomerController::class,'editchild']);
route::post('/editchild/{id}',[CustomerController::class,'updatechild']);

route::get('/showchild/{id}',[CustomerController::class,'showchild']);
route::get('/showmaster/{id}',[CustomerController::class,'showmaster']);

route::post('/signup',[usercontroller::class,'signup']);


// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//route::post('/login',[usercontroller::class,'login']);


// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/logindata',[usercontroller::class,'logindata']);
Route::post('/change',[usercontroller::class,'change']);
Route::get('/profile/{email}',[usercontroller::class,'profile']);
Route::post('/profile/{email}',[usercontroller::class,'changeprofile']);

Route::post('/searchChild',[CustomerController::class,'searchChild']);
Route::post('/childsearch',[CustomerController::class,'childsearch']);
