import React from 'react';
import { Check, X } from 'lucide-react';

export default function Workspace() {
    return (
        <div className="h-full flex flex-col">
            <div className="flex-none px-8 py-5 bg-gradient-to-b from-white via-white to-transparent">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xs font-medium text-gray-400 tracking-wider">WORKSPACE</h2>
                        <h3 className="text-lg font-medium text-gray-800 mt-1">Pricing Feedback Summary</h3>
                    </div>
                    <div className="text-sm text-gray-400">Generating summary...</div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Pricing Structure</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Most clients (65%) find the tiered pricing structure confusing and would prefer simpler options.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Value Perception</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Enterprise clients (7 out of 8) feel the premium tier provides good value, while small business clients (12 out of 16) perceive less value for their needs.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Competitive Analysis</h4>
                        <p className="text-gray-600 leading-relaxed">
                            40% of feedback mentioned our prices being higher than competitors without clear differentiation of added value.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-none px-8 py-4 bg-gradient-to-t from-white via-white to-transparent">
                <div className="max-w-3xl mx-auto flex justify-end space-x-3">
                    <button className="px-6 py-2 flex items-center space-x-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
                        <X className="w-4 h-4" />
                        <span>Reject</span>
                    </button>
                    <button className="px-6 py-2 flex items-center space-x-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-100">
                        <Check className="w-4 h-4" />
                        <span>Accept</span>
                    </button>
                </div>
            </div>
        </div>
    );
} 