<?php

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

Route::get('/', 'BackendController@login');
Route::post('login', 'BackendController@processLogin');
Route::get('logout', 'BackendController@logout');
Route::get('evaluacion-de-pisada/{legal_id}', 'VisitorController@confirm');

Route::middleware(['customAuth'])->group(function () {

    Route::resource('visitors', 'VisitorController');
    Route::get('visitors-excel', 'VisitorController@excel');

    Route::resource('branches', 'BranchController');
    Route::get('branches/{id}/status/{status}', 'BranchController@updateStatus');

    Route::resource('employees', 'EmployeeController');
    Route::get('employees/{id}/status/{status}', 'EmployeeController@updateStatus');

    Route::resource('users', 'UserController');
    Route::get('users/{id}/status/{status}', 'UserController@updateStatus');

    Route::resource('questions', 'QuestionController');
});
