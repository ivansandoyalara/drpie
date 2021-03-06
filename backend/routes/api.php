<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//open API routes
Route::get('branches', 'BranchController@indexAPI');
Route::get('employees', 'EmployeeController@indexAPI');
Route::get('questions', 'QuestionController@indexAPI');
Route::get('report/{employee_code}', 'EmployeeController@reportAPI');
Route::post('visitors', 'VisitorController@storeAPI');
