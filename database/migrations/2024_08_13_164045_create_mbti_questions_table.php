<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMbtiQuestionsTable extends Migration
{
    public function up()
    {
        Schema::create('mbti_questions', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('dimension', 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mbti_questions');
    }
}