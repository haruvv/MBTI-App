import React from "react";
import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h1 className="text-3xl font-extrabold text-gray-900">
                                        Welcome to MBTI Test
                                    </h1>
                                    <p>
                                        Discover your personality type with our
                                        MBTI (Myers-Briggs Type Indicator) test.
                                    </p>
                                    <ul className="list-disc space-y-2">
                                        <li>16 unique personality types</li>
                                        <li>
                                            Gain insights into your strengths
                                            and weaknesses
                                        </li>
                                        <li>
                                            Understand how you interact with
                                            others
                                        </li>
                                    </ul>
                                    <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                        <Link
                                            href={route("mbti.test")}
                                            className="text-cyan-600 hover:text-cyan-700"
                                        >
                                            Take the test now &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
