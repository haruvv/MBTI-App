import React from "react";
import { Link } from "@inertiajs/react";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link
                                href={route("home")}
                                className="flex-shrink-0 flex items-center"
                            >
                                MBTI Test
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-white border-t border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        &copy; 2023 MBTI Test App. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
