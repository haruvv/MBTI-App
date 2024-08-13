import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Result({ result }) {
    return (
        <>
            <Head title="MBTI Result" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Your MBTI Type</h1>
                <p className="text-4xl font-bold">{result}</p>
            </div>
        </>
    );
}
