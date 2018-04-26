<?php

namespace App\Http\Controllers;

use App\Visitor;
use App\Branch;
use App\Employee;
use App\Question;
use App\Response;
use App\Option;
use App\Mail\VisitorStored;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Validator;

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
        //
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

    public function storeAPI(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_code' => 'required',
            'branch_id' => 'required',
            'name' => 'required',
            'surname' => 'required',
            'legal_id' => 'required_if:cf,false|min:10',
            'email' => 'required|email',
        ]);

        if($validator->fails())
        {
            //return a response when validator fails
            return response()
                ->json(array('status' => 'STORE_VISITOR_FAIL'))
                ->header('Access-Control-Allow-Origin', '*');
        }

        DB::transaction(function() use($request) {
            //determine if it is children or foreign 
            $cf = $request->cf;
            $legal_id = $request->legal_id;
            if($cf)
            {
                $secuential = Visitor::count() + 1;
                if($request->nationality == 1)
                    $legal_id = "N".$secuential;
                else
                    $legal_id = "E".$secuential;
            }
            //get employee
            $employee = Employee::where('code', '=', $request->employee_code)->first();
            $employee_id = null;
            if(count($employee) > 0)
                $employee_id = $employee->id;

            //update or create visitor record
            $visitor_item = Visitor::updateOrCreate([
                'legal_id' => $request->legal_id
            ], [
                'name' => $request->name,
                'surname' => $request->surname,
                'legal_id' => $legal_id,
                'email' => $request->email,
                'gender' => $request->gender,
                'phone' => $request->phone,
                'footprint' => $request->footprint,
                'branch_id' => $request->branch_id,
                'employee_id' => $employee_id,
            ]);

            //increment by 1 the number of visits for that visitor
            $visitor_item->visits += 1;
            $visitor_item->save();

            //get responses
            $inputs = $request->all();
            foreach($inputs as $key => $value)
            {
                if($value === false)
                    continue;
                //retrieve inputs starting with "q"
                if(substr($key, 0, 1) == "q")
                {
                    $key = explode("_", $key);
                    if(count($key) > 1)
                    {
                        $question_id = $key[1];
                        //retrieve question record
                        $question = Question::where('id', '=', $question_id)->first();
                        if(count($question) > 0)
                        {
                            //valid question
                            if($question->type == '1')
                                //single option question
                                $option_id = $value;
                            if($question->type == '2')
                                //multi options question
                                $option_id = $key[2];

                            //retrieve option record
                            $option = Option::where('id', '=', $option_id)->first();
                            $option_value = 'N/A';
                            if(count($option) > 0)
                                $option_value = $option->value;

                            $response = new Response();
                            $response->question = $question->question;
                            $response->response = $option_value;
                            $response->visitor_id = $visitor_item->id;
                            $response->save();
                        }
                    }
                }
            }

            // handle async email sending
            Mail::to($visitor_item->email)
                ->queue(new VisitorStored($visitor_item));
        });

        return response()
                ->json(array('status' => 'STORE_VISITOR_OK'))
                ->header('Access-Control-Allow-Origin', '*');
    }
}
