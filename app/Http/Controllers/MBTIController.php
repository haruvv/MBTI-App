<?php

namespace App\Http\Controllers;

use App\Models\MBTI;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MbtiController extends Controller
{
    public function index()
    {
        $questions = \DB::table('mbti_questions')->get();
        return Inertia::render('Mbti/Test', ['questions' => $questions]);
    }

    public function store(Request $request)
    {
        $answers = $request->input('answers');
        $result = $this->calculateMbtiType($answers);
        return Inertia::render('Mbti/Result', ['result' => $result]);
    }

    private function calculateMbtiType($answers)
    {
        $dimensions = ['EI' => 0, 'SN' => 0, 'TF' => 0, 'JP' => 0];
        foreach ($answers as $questionId => $answer) {
            $question = \DB::table('mbti_questions')->find($questionId);
            $dimensions[$question->dimension] += $answer;
        }

        $type = '';
        $type .= $dimensions['EI'] > 0 ? 'E' : 'I';
        $type .= $dimensions['SN'] > 0 ? 'S' : 'N';
        $type .= $dimensions['TF'] > 0 ? 'T' : 'F';
        $type .= $dimensions['JP'] > 0 ? 'J' : 'P';

        return $type;
    }
}