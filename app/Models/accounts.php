<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class accounts extends Model
{
    protected $table ='accounts'
    protected $fillable = ['first_name', 'last_name', 'email', 'date_of_birth', 'password' ];
    
    public function woredrobe(){
        return $this->hasOne(woredrobe::class);
    }

    use HasFactory;
}
