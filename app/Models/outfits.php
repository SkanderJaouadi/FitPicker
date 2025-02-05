<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class outfits extends Model
{
    protected $table ='outfits';
    protected $fillable=['name','season','description','is_favorite'];
    public function clothes(): HasMany
    {
        return $this->hasMany(clothes::class);
    }

    public function woredrobe(): BelongsTo
    {
        return $this->belongsTo(woredrobe::class);
    }

    

    use HasFactory;
}
