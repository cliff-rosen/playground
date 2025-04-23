import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight, ChevronDown, Circle, CheckCircle2, AlertCircle } from 'lucide-react';

interface Stage {
    id: string;
    title: string;
    status: 'InDesign' | 'Ready' | 'InProgress' | 'Completed' | 'Failed';
    steps: Step[];
}

interface Step {
    id: string;
    title: string;
    status: 'InDesign' | 'Ready' | 'InProgress' | 'Completed' | 'Failed';
}

const mockStages: Stage[] = [
    {
        id: '1',
        title: 'Requirements Gathering',
        status: 'Completed',
        steps: [
            { id: '1-1', title: 'Initial Meeting', status: 'Completed' },
            { id: '1-2', title: 'Document Review', status: 'Completed' },
        ],
    },
    {
        id: '2',
        title: 'Design Phase',
        status: 'InProgress',
        steps: [
            { id: '2-1', title: 'Wireframe Creation', status: 'Completed' },
            { id: '2-2', title: 'UI Design', status: 'InProgress' },
            { id: '2-3', title: 'Design Review', status: 'InDesign' },
        ],
    },
    {
        id: '3',
        title: 'Development',
        status: 'InDesign',
        steps: [
            { id: '3-1', title: 'Frontend Development', status: 'InDesign' },
            { id: '3-2', title: 'Backend Development', status: 'InDesign' },
        ],
    },
];

const getStatusIcon = (status: Stage['status']) => {
    switch (status) {
        case 'Completed':
            return <CheckCircle2 className="w-4 h-4 text-green-500" />;
        case 'Failed':
            return <AlertCircle className="w-4 h-4 text-red-500" />;
        case 'InProgress':
            return <Circle className="w-4 h-4 text-blue-500" />;
        default:
            return <Circle className="w-4 h-4 text-gray-400" />;
    }
};

const WorkflowBrowser = () => {
    const [viewMode, setViewMode] = useState<'compact' | 'full'>('compact');
    const [expandedStages, setExpandedStages] = useState<string[]>([]);

    const { data: stages = mockStages } = useQuery({
        queryKey: ['stages'],
        queryFn: () => mockStages,
    });

    const toggleStage = (stageId: string) => {
        setExpandedStages((prev) =>
            prev.includes(stageId)
                ? prev.filter((id) => id !== stageId)
                : [...prev, stageId]
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Workflow Browser</h1>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setViewMode('compact')}
                        className={`px-4 py-2 rounded-lg ${viewMode === 'compact'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Compact View
                    </button>
                    <button
                        onClick={() => setViewMode('full')}
                        className={`px-4 py-2 rounded-lg ${viewMode === 'full'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Full View
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                {stages.map((stage) => (
                    <div key={stage.id} className="mb-4">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => viewMode === 'full' && toggleStage(stage.id)}
                        >
                            {viewMode === 'full' && (
                                <ChevronRight
                                    className={`w-5 h-5 mr-2 transform transition-transform ${expandedStages.includes(stage.id) ? 'rotate-90' : ''
                                        }`}
                                />
                            )}
                            {getStatusIcon(stage.status)}
                            <span className="ml-2 font-semibold">{stage.title}</span>
                        </div>

                        {viewMode === 'full' && expandedStages.includes(stage.id) && (
                            <div className="ml-8 mt-2 space-y-2">
                                {stage.steps.map((step) => (
                                    <div key={step.id} className="flex items-center">
                                        {getStatusIcon(step.status)}
                                        <span className="ml-2">{step.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkflowBrowser; 