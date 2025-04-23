import React from 'react';

export default function Mission() {
    return (
        <div className="bg-white border-b">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Mission: Summarize feedback from emails</h2>

                {/* Workflow Steps */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            1
                        </div>
                        <div className="ml-2">
                            <span className="text-sm font-medium">Search emails</span>
                        </div>
                    </div>

                    <div className="h-px w-12 bg-gray-300" />

                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            2
                        </div>
                        <div className="ml-2">
                            <span className="text-sm font-medium">Extract feedback</span>
                        </div>
                    </div>

                    <div className="h-px w-12 bg-gray-300" />

                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                            3
                        </div>
                        <div className="ml-2">
                            <span className="text-sm font-medium">Generate summary</span>
                        </div>
                    </div>

                    <div className="h-px w-12 bg-gray-300" />

                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                            4
                        </div>
                        <div className="ml-2">
                            <span className="text-sm font-medium">Deliverable</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 