<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('clothes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('type', ['top', 'bottom', 'shoes']);
            $table->string('color');
            $table->string('size');
            $table->string('occasion');
            $table->string('tag');
            $table->string('description');
            $table->string('image_url')->notNullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('clothes');
    }
};
