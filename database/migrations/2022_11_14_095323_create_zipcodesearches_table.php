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
        Schema::create('zipcodesearches', function (Blueprint $table) {
            $table->integer('zip')->primary();
            $table->string('type');
            $table->string('primary_city');
            $table->string('state');
            $table->string('county');
            $table->string('timezone');
            $table->string('area_code')->nullable();
            $table->float('latitude');
            $table->float('longitude');
            $table->integer('irs_estimated_population');
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
        Schema::dropIfExists('zipcodesearches');
    }
};
