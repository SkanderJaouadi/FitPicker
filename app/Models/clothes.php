<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clothes extends Model
{
    protected $table ='clothes';
    protected $fillable=['type','color','size','occasion','tag','description','image_url'];
    
    public function woredrobe(): BelongsTo
    {
        return $this->belongsTo(woredrobe::class);
    }

    public function outfit(): BelongsTo
    {
        return $this->belongsTo(outfit::class);
    }

    use HasFactory;
}
