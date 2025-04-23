import React from 'react';
import { Check, X, FileText } from 'lucide-react';
import type { Workspace } from '../types/index';

interface WorkspaceViewProps {
    workspace: Workspace;
}

export default function WorkspaceView({ workspace }: WorkspaceViewProps) {
    const getStatusText = (status: Workspace['status']) => {
        switch (status) {
            case 'pending':
                return 'Pending completion';
            case 'completed':
                return 'Completed';
            case 'failed':
                return 'Failed';
            default:
                return 'Unknown status';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Workspace</h2>
                        <h3 className="text-lg font-medium text-gray-800 mt-1">{workspace.title}</h3>
                    </div>
                    <div className="text-sm text-gray-400">{getStatusText(workspace.status)}</div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex items-center justify-center min-h-[200px]">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">Asset will be generated upon completion</p>
                </div>
            </div>

            {/* Buttons Area */}
            <div className="p-6 border-t border-gray-100 flex justify-end space-x-3">
                <button className="px-6 py-2 flex items-center space-x-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                </button>
                <button className="px-6 py-2 flex items-center space-x-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-100">
                    <Check className="w-4 h-4" />
                    <span>Complete</span>
                </button>
            </div>
        </div>
    );
} 