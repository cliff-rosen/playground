import { useQuery } from '@tanstack/react-query';
import { Clock, CheckCircle2, AlertCircle, Pencil } from 'lucide-react';

interface Mission {
    id: string;
    title: string;
    status: 'InDesign' | 'PendingGoal' | 'PendingWorkflowStageDesign' | 'InProgress' | 'Completed' | 'Failed';
    progress: number;
    lastUpdated: string;
}

const mockMissions: Mission[] = [
    {
        id: '1',
        title: 'Website Redesign Project',
        status: 'InProgress',
        progress: 65,
        lastUpdated: '2024-04-23T10:30:00',
    },
    {
        id: '2',
        title: 'Mobile App Development',
        status: 'PendingGoal',
        progress: 0,
        lastUpdated: '2024-04-22T15:45:00',
    },
    {
        id: '3',
        title: 'Data Analysis Pipeline',
        status: 'Completed',
        progress: 100,
        lastUpdated: '2024-04-21T09:15:00',
    },
];

const getStatusIcon = (status: Mission['status']) => {
    switch (status) {
        case 'InProgress':
            return <Clock className="w-5 h-5 text-blue-500" />;
        case 'Completed':
            return <CheckCircle2 className="w-5 h-5 text-green-500" />;
        case 'Failed':
            return <AlertCircle className="w-5 h-5 text-red-500" />;
        default:
            return <Pencil className="w-5 h-5 text-gray-500" />;
    }
};

const getStatusColor = (status: Mission['status']) => {
    switch (status) {
        case 'InProgress':
            return 'bg-blue-100 text-blue-800';
        case 'Completed':
            return 'bg-green-100 text-green-800';
        case 'Failed':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const MissionDashboard = () => {
    const { data: missions = mockMissions } = useQuery({
        queryKey: ['missions'],
        queryFn: () => mockMissions,
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Mission Dashboard</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    New Mission
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {missions.map((mission) => (
                    <div
                        key={mission.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">{mission.title}</h2>
                            {getStatusIcon(mission.status)}
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{mission.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-500 h-2 rounded-full"
                                    style={{ width: `${mission.progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(mission.status)}`}>
                                {mission.status}
                            </span>
                            <span className="text-sm text-gray-500">
                                {new Date(mission.lastUpdated).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionDashboard; 