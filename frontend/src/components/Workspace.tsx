import React from 'react';
import { Check, X } from 'lucide-react';

export default function Workspace() {
    return (
        <div>
            <div className="px-8 py-4 border-b bg-white/50">
                <h2 className="text-sm font-medium text-gray-600">Workspace</h2>
            </div>

            <div className="p-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-sm text-gray-500 mb-6">Generating summary...</div>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Pricing Feedback Summary</h3>

                    <div className="space-y-6">
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

                    <div className="mt-8 pt-6 border-t flex justify-end space-x-4">
                        <button className="px-6 py-2 flex items-center space-x-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <X className="w-5 h-5" />
                            <span>Reject</span>
                        </button>
                        <button className="px-6 py-2 flex items-center space-x-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors">
                            <Check className="w-5 h-5" />
                            <span>Accept</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 