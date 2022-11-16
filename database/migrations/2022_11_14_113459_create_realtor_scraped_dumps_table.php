<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('realtor_scraped_dumps', function (Blueprint $table) {
            $table->integer('Zip')->primary();
            $table->string('City');
            $table->string('State');
            $table->integer('HomeSale');
            $table->integer('HomeBaseValue');
            $table->integer('HomeMaxValue');
            $table->integer('MedianListPrice');
            $table->integer('MedianSoldPrice');
            $table->integer('Year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realtor_scraped_dumps');
    }
};
