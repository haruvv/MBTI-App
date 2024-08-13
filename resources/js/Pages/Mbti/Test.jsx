import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";

export default function Test({ questions }) {
    const { data, setData, post, processing, errors } = useForm({
        answers: {},
    });

    const handleAnswer = (questionId, value) => {
        setData("answers", { ...data.answers, [questionId]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("mbti.result"));
    };

    return (
        <>
            <Head title="MBTI Test" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">MBTI Test</h1>
                <form onSubmit={handleSubmit}>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-4">
                            <p className="mb-2">{question.question}</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={1}
                                        onChange={() =>
                                            handleAnswer(question.id, 1)
                                        }
                                        className="mr-2"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={-1}
                                        onChange={() =>
                                            handleAnswer(question.id, -1)
                                        }
                                        className="mr-2"
                                    />
                                    No
                                </label>
                            </div>
                            {errors[`answers.${question.id}`] && (
                                <div className="text-red-500">
                                    {errors[`answers.${question.id}`]}
                                </div>
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={processing}
                    >
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}
