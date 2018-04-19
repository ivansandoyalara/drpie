<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee');
    }

    public function responses()
    {
        return $this->hasMany('App\Response');
    }

    protected $fillable = [
        'legal_id',
        'name',
        'surname',
        'email',
        'gender',
        'footprint',
        'branch_id',
        'employee_id',
    ];
}
