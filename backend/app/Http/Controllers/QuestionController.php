<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use App\Option;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = Question::all();

        return view('question.index', compact('questions'));
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
            'question' => 'required',
            'type' => 'required',
        ]);

        DB::transaction(function() use($request) {
            $question = new Question();
            $question->question = $request->question;
            $question->type = $request->type;
            $question->save();
        });

        return redirect('questions')->with('ok', 'ok');
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
        $this->validate($request, [
            'question' => 'required',
            'type' => 'required',
        ]);

        DB::transaction(function() use($request, $id) {
            $question = Question::findOrFail($id);
            $question->question = $request->question;
            $question->type = $request->type;
            $question->save();
            
            if($question->type != "3")
            {
                //update options
                $question->options()->delete();
                $options = $request->options;
                foreach($options as $key => $option_value)
                {
                    $option = new Option();
                    $option->value = $option_value;
                    $question->options()->save($option);
                }
            }
        });

        return redirect('questions')->with('ok', 'ok');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::transaction(function() use($id) {
            $question = Question::findOrFail($id);
            // first delete question options
            $question->options()->delete();

            //then delete question
            $question->delete();
        });

        return redirect('questions')->with('ok', 'ok');
    }

    public function indexAPI()
    {
        $questions = Question::with('options')
                    ->select('id', 'question', 'type')
                    ->get();
        
        $questions_res = array();
        foreach($questions as $question)
        {
            //preapare options
            $options_res = array();
            foreach($question->options as $option)
            {
                $new_options_item = array(
                    "id" => $option->id,
                    "value" => $option->value,
                );
                array_push($options_res, $new_options_item);
            }
            $new_item = array(
                "id" => $question->id,
                "question" => $question->question,
                "type" => $question->type,
                "options" => $options_res
            );
            array_push($questions_res, $new_item);
        }

        return response()
            ->json($questions_res)
            ->header('Access-Control-Allow-Origin', '*');
    }
}
