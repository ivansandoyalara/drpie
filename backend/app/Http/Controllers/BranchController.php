<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Branch;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->input('name', '');

        $branches = Branch::where('name', 'LIKE', '%'.$name.'%')
                    ->paginate(20);

        return view('branch.index', compact(
            'name', 
            'branches'
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('branch.create');
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
        ]);

        DB::transaction(function() use($request) {
            $branch = new Branch();
            $branch->name = $request->name;
            $branch->save();
        });

        return redirect('branches')->with('ok', 'ok');
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
        $branch = Branch::findOrFail($id);

        return view('branch.edit', compact(
            'branch'
        ));
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
        ]);

        DB::transaction(function() use($request, $id) {
            $branch = Branch::findOrFail($id);
            $branch->name = $request->name;
            $branch->save();
        });

        return redirect('branches')->with('ok', 'ok');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $branch = Branch::findOrFail($id);
        if($branch->visitors()->count() > 0)
            return redirect('branches')->with('error', 'error');

        DB::transaction(function() use($branch) {
            $branch->delete();
        });

        return redirect('branches')->with('ok', 'ok');
    }

    public function updateStatus($id, $status)
    {
        $branch = Branch::findOrFail($id);
        DB::transaction(function() use($branch, $status){
            $branch->status = $status;
            $branch->save();
        });

        return "Status Updated OK";
    }

    public function indexAPI()
    {
        $branches = Branch::select('id', 'name')
                    ->where('status', '=', '1')
                    ->get();

        return response()
                ->json($branches)
                ->header('Access-Control-Allow-Origin', '*');
    }
}
