<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class woredrobes extends Model
{
    protected $table='woredrobes';

    public function clothes(): HasMany
    {
        return $this->hasMany(clothes::class);
    }
    
    public function outfits(): HasMany
    {
        return $this->hasMany(outfits::class);
    }
    
    public function account(): BelongsTo
    {
        return $this->belongsTo(account::class);
    }

    use HasFactory;
}
