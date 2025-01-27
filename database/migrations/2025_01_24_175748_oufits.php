<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('outfits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->notNullable();
            $table->enum('season', ['winter','spring','autumn','summer']);
            $table->string('description');
            
            $table->unsignedBigInteger('clothe_id');
            $table->foreign('clothe_id')->references('id')->on('clothes');

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('outfits');
    }
};
