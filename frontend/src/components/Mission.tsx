import React from 'react';

interface MissionProps {
    className?: string;
}

export default function Mission({ className = '' }: MissionProps) {
    return (
        <div className={className}>
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Current Mission</h2>
                    <h1 className="text-2xl font-semibold text-gray-900 mt-1">Summarize Customer Feedback</h1>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Analyze customer feedback from various sources to generate a comprehensive summary of key insights and trends. This will help us understand customer sentiment and identify areas for improvement.
                    </p>
                </div>
                <div className="flex items-center">
                    <span className="px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full whitespace-nowrap">
                        In Progress
                    </span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Inputs</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Customer feedback emails
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Support ticket data
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Survey responses
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Outputs</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Summary report
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Key insights
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                            Action items
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 