export interface Stage {
    id: number;
    name: string;
    status: 'completed' | 'current' | 'pending';
    steps?: Step[];
}

export interface Step {
    id: string;
    name: string;
    status: 'completed' | 'current' | 'pending';
}

export const getStatusClass = (status: Stage['status']) => {
    switch (status) {
        case 'completed':
            return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
        case 'current':
            return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
        default:
            return 'bg-gray-50 text-gray-400 border border-gray-200';
    }
};

export const mockStages: Stage[] = [
    {
        id: 1,
        name: 'Search',
        status: 'completed',
        steps: [
            { id: '1-1', name: 'Query Database', status: 'completed' },
            { id: '1-2', name: 'Filter Results', status: 'completed' }
        ]
    },
    {
        id: 2,
        name: 'Extract',
        status: 'current',
        steps: [
            { id: '2-1', name: 'Parse Data', status: 'completed' },
            { id: '2-2', name: 'Validate Format', status: 'current' },
            { id: '2-3', name: 'Transform Data', status: 'pending' }
        ]
    },
    {
        id: 3,
        name: 'Generate',
        status: 'pending',
        steps: [
            { id: '3-1', name: 'Create Template', status: 'pending' },
            { id: '3-2', name: 'Fill Content', status: 'pending' }
        ]
    },
    {
        id: 4,
        name: 'Deliver',
        status: 'pending',
        steps: [
            { id: '4-1', name: 'Format Output', status: 'pending' },
            { id: '4-2', name: 'Send Notification', status: 'pending' }
        ]
    }
]; 