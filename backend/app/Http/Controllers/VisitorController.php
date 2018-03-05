<?php

namespace App\Http\Controllers;

use App\Visitor;
use App\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class VisitorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name_email = $request->input('name_email', '');
        $since = $request->input('since', '');
        $since_query = "1900-01-01";
        if($since != "")
            $since_query = $since;
        $until = $request->input('until', '');
        $until_query = "2999-12-31";
        if($until != "")
            $until_query = $until;
        $branch_id = $request->input('branch_id', '');
        if($branch_id == "")
            $branch_id = "%%";

        $visitors = Visitor::select('visitors.id', 'visitors.name', 'visitors.surname',
                            'visitors.email', 'visitors.created_at', 'visitors.branch_id')
                    ->whereBetween('visitors.created_at', [$since_query.' 00:00:00', $until_query.' 23:59:59'])
                    ->where('visitors.branch_id', 'LIKE', $branch_id)
                    ->where(function($query) use($name_email) {
                        $query->where('visitors.name', 'LIKE', '%'.$name_email.'%')
                        ->orWhere('visitors.surname', 'LIKE', '%'.$name_email.'%')
                        ->orWhere('visitors.email', 'LIKE', '%'.$name_email.'%');
                    })
                    ->orderBy('visitors.created_at', 'DESC')
                    ->paginate(20);

        //dd($visitors);

        //get all branches
        $branches = Branch::all();

        return view('visitors', compact(
            'name_email',
            'since',
            'until',
            'branch_id',
            'visitors',
            'branches'
        ));
    }

    public function excel(Request $request)
    {
        $name_email = $request->input('name_email', '');
        $since = $request->input('since', '');
        $since_query = "1900-01-01";
        if($since != "")
            $since_query = $since;
        $until = $request->input('until', '');
        $until_query = "2999-12-31";
        if($until != "")
            $until_query = $until;
        $branch_id = $request->input('branch_id', '');
        if($branch_id == "")
            $branch_id = "%%";

        $visitors = Visitor::select('visitors.id', 'visitors.name', 'visitors.surname',
                            'visitors.email', 'visitors.created_at', 'visitors.branch_id', 'visitors.employee_id')
                    ->whereBetween('visitors.created_at', [$since_query.' 00:00:00', $until_query.' 23:59:59'])
                    ->where('visitors.branch_id', 'LIKE', $branch_id)
                    ->where(function($query) use($name_email) {
                        $query->where('visitors.name', 'LIKE', '%'.$name_email.'%')
                        ->orWhere('visitors.surname', 'LIKE', '%'.$name_email.'%')
                        ->orWhere('visitors.email', 'LIKE', '%'.$name_email.'%');
                    })
                    ->orderBy('visitors.created_at', 'DESC')
                    ->get();

        $filename = "visitantes".date('YmdHis');
        $excel = App::make('excel');
        $excel->create($filename, function($excel) use($visitors ) {
            $excel->sheet('Visitantes', function($sheet) use($visitors ) {
                $sheet->loadView('visitors_excel', array('visitors' => $visitors));
            });
        })->download('xlsx');

        return 'Downloading file '.$filename.'.xlsx ...';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'surname' => 'required',
            'legal_id' => 'required',
            'email' => 'required|email',
        ]);

        DB::transaction(function() use($request) {
            Visitor::createOrUpdate([
                'legal_id' => $request->legal_id
            ], [
                'name' => $request->name,
                'surname' => $request->surname,
                'legal_id' => $request->legal_id,
                'email' => $request->email,
            ]);
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $visitor = Visitor::findOrFail($id);

        return view('response', compact('visitor'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
