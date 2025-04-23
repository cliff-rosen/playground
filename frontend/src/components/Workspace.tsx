import React from 'react';
import { Check, X } from 'lucide-react';

export default function Workspace() {
    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-500 mb-4">Generating summary...</div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing Feedback Summary</h3>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Pricing Structure</h4>
                        <p className="text-gray-600">
                            Most clients (65%) find the tiered pricing structure confusing and would prefer simpler options.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Value Perception</h4>
                        <p className="text-gray-600">
                            Enterprise clients (7 out of 8) feel the premium tier provides good value, while small business clients (12 out of 16) perceive less value for their needs.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Competitive Analysis</h4>
                        <p className="text-gray-600">
                            40% of feedback mentioned our prices being higher than competitors without clear differentiation of added value.
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t flex justify-end space-x-4">
                    <button className="px-4 py-2 flex items-center space-x-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <X className="w-5 h-5" />
                        <span>Reject</span>
                    </button>
                    <button className="px-4 py-2 flex items-center space-x-2 bg-green-600 text-white hover:bg-green-700 rounded-lg">
                        <Check className="w-5 h-5" />
                        <span>Accept</span>
                    </button>
                </div>
            </div>
        </div>
    );
} 