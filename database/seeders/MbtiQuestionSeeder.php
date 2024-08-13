<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MbtiQuestionSeeder extends Seeder
{
    public function run()
    {
        $questions = [
            ['question' => 'あなたは新しい人と会うのが好きですか？', 'dimension' => 'EI'],
            ['question' => '詳細な計画を立てるのが好きですか？', 'dimension' => 'SN'],
            ['question' => '論理的な分析を重視しますか？', 'dimension' => 'TF'],
            ['question' => '締め切りぎりぎりまで作業するのが好きですか？', 'dimension' => 'JP'],
            // 他の質問を追加...
        ];

        DB::table('mbti_questions')->insert($questions);
    }
}