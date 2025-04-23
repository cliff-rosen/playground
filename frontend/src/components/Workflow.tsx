import React from 'react';

export default function Workflow() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Workflow</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            1
                        </div>
                        <div>Input</div>
                    </div>
                    <div className="h-1 w-16 bg-gray-300"></div>
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            2
                        </div>
                        <div>Process</div>
                    </div>
                    <div className="h-1 w-16 bg-gray-300"></div>
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            3
                        </div>
                        <div>Output</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 