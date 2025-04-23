import React from 'react';
import { Check, X } from 'lucide-react';

export default function Workspace() {
    return (
        <div className="bg-white rounded-2xl shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Workspace</h2>
                        <h3 className="text-lg font-medium text-gray-800 mt-1">Pricing Feedback Summary</h3>
                    </div>
                    <div className="text-sm text-gray-400">Generating summary...</div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-6">
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Pricing Structure</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Most clients (65%) find the tiered pricing structure confusing and would prefer simpler options.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Value Perception</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Enterprise clients (7 out of 8) feel the premium tier provides good value, while small business clients (12 out of 16) perceive less value for their needs.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Competitive Analysis</h4>
                    <p className="text-gray-600 leading-relaxed">
                        40% of feedback mentioned our prices being higher than competitors without clear differentiation of added value.
                    </p>
                </div>
            </div>

            {/* Buttons Area */}
            <div className="p-6 border-t border-gray-100 flex justify-end space-x-3">
                <button className="px-6 py-2 flex items-center space-x-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
                    <X className="w-4 h-4" />
                    <span>Reject</span>
                </button>
                <button className="px-6 py-2 flex items-center space-x-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-100">
                    <Check className="w-4 h-4" />
                    <span>Accept</span>
                </button>
            </div>
        </div>
    );
} 