<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;
use App\Employee;

class employees extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upexcel:employee';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upload employee data from excel file';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $file = public_path()."/excel/employees.xlsx";

        if(is_file($file)) //verify file existence
        {            
            $excel = App::make('excel');
            $excel->load($file, function($reader) {
                $elements = $reader->toArray();
                $bar = $this->output->createProgressBar(count($elements));
                
                foreach($elements as $element) 
                {
                    $employee = new Employee;
                    $employee->code = $element['code'];
                    $employee->name = $element['name'];
                    $employee->save();
                    $bar->advance();
                }

                $bar->finish();
            });
        }
        else
            $this->info('Error: there is no employee.xlsx file.');
    }
}
