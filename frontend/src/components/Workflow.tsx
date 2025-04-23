import React from 'react';

interface WorkflowProps {
    className?: string;
}

export default function Workflow({ className = '' }: WorkflowProps) {
    const stages = [
        { id: 1, name: 'Search', status: 'completed' },
        { id: 2, name: 'Extract', status: 'current' },
        { id: 3, name: 'Generate', status: 'pending' },
        { id: 4, name: 'Deliver', status: 'pending' }
    ];

    return (
        <div className={`bg-white border-b ${className}`}>
            <div className="px-8 py-4">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Workflow Stages</h2>
                <div className="flex items-center justify-between">
                    {stages.map((stage, index) => (
                        <React.Fragment key={stage.id}>
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                    ${stage.status === 'completed' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                                        stage.status === 'current' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                                            'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                                    {stage.id}
                                </div>
                                <span className="mt-2 text-sm font-medium text-gray-600">{stage.name}</span>
                                {stage.status === 'current' && (
                                    <span className="mt-1 text-xs text-emerald-600">Current Stage</span>
                                )}
                            </div>
                            {index < stages.length - 1 && (
                                <div className={`h-0.5 w-12 mx-2
                                    ${stage.status === 'completed' ? 'bg-indigo-200' : 'bg-gray-200'}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
} 