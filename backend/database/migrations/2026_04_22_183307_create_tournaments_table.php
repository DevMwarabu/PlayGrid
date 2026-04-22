<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('game');
            $table->text('rules')->nullable();
            $table->enum('status', ['upcoming', 'open', 'ongoing', 'finished', 'cancelled'])->default('upcoming');
            $table->string('prize_pool')->nullable();
            $table->dateTime('start_date');
            $table->integer('max_players')->default(128);
            $table->string('banner_url')->nullable();
            $table->json('settings')->nullable(); // For format (knockout, robin, etc.)
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
