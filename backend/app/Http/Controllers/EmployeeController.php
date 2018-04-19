<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use App\Visitor;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->input('name', '');

        $employees = Employee::where('name', 'LIKE', '%'.$name.'%')
                    ->paginate(20);

        return view('employee.index', compact(
            'name', 
            'employees'
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('employee.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'code' => 'required|unique:employees,code',
        ]);

        DB::transaction(function() use($request) {
            $employee = new Employee();
            $employee->name = $request->name;
            $employee->code = $request->code;
            $employee->save();
        });

        return redirect('employees')->with('ok', 'ok');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $employee = Employee::findOrFail($id);

        return view('employee.edit', compact('employee'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'code' => 'required|unique:employees,code,'.$id
        ]);

        DB::transaction(function() use($request, $id) {
            $employee = Employee::findOrFail($id);
            $employee->name = $request->name;
            $employee->code = $request->code;
            $employee->save();
        });

        return redirect('employees')->with('ok', 'ok');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        if($employee->visitors()->count() > 0)
            return redirect('employees')->with('error', 'error');

        DB::transaction(function() use($employee) {
            $employee->delete();
        });

        return redirect('employees')->with('ok', 'ok');
    }

    public function updateStatus($id, $status) 
    {
        $employee = Employee::findOrFail($id);
        DB::transaction(function() use($employee, $status){
            $employee->status = $status;
            $employee->save();
        });

        return "Status Updated OK";
    }

    public function indexAPI()
    {
        $employees = Employee::select('id', 'name', 'code')
                    ->where('status', '=', '1')
                    ->get();

        return $employees;
    }

    public function reportAPI($employee_code)
    {
        $employee = Employee::where('code', '=', $employee_code)
            ->first();

        if(count($employee) == 0)
            return null;

        $count = Visitor::whereMonth('created_at', date('m'))
                    ->where('employee_id', '=', $employee->id)
                    ->count();

        $month = "";
        if(date('m') == '01')
            $month = "Enero";
        if(date('m') == '02')
            $month = "Febrero";
        if(date('m') == '03')
            $month = "Marzo";
        if(date('m') == '04')
            $month = "Abril";
        if(date('m') == '05')
            $month = "Mayo";
        if(date('m') == '06')
            $month = "Junio";
        if(date('m') == '07')
            $month = "Julio";
        if(date('m') == '08')
            $month = "Agosto";
        if(date('m') == '09')
            $month = "Septiembre";
        if(date('m') == '10')
            $month = "Octubre";
        if(date('m') == '11')
            $month = "Noviembre";
        if(date('m') == '12')
            $month = "Diciembre";

        $response = array(
            "employee" => $employee,
            "count" => $count,
            "month" => $month,
        );

        return response()
                ->json($response)
                ->header('Access-Control-Allow-Origin', '*');
    }
}
