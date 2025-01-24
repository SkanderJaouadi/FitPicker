<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('woredrobes', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('clothe_id');
            $table->foreign('clothe_id')->references('id')->on('clothes');

            $table->unsignedBigInteger('outfit_id');
            $table->foreign('outfit_id')->references('id')->on('outfits');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('woredrobes');
    }
};
