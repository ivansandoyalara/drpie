<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    public function visitors()
    {
        return $this->hasMany('App\Visitor');
    }
}
