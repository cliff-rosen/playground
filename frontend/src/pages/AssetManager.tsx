import { useQuery } from '@tanstack/react-query';
import { FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface Asset {
    id: string;
    name: string;
    type: string;
    status: 'PendingCompletion' | 'PendingApproval' | 'Ready' | 'Archived' | 'Error';
    lastUpdated: string;
    size: string;
}

const mockAssets: Asset[] = [
    {
        id: '1',
        name: 'Project Requirements',
        type: 'Document',
        status: 'Ready',
        lastUpdated: '2024-04-23T10:30:00',
        size: '2.5 MB',
    },
    {
        id: '2',
        name: 'UI Mockups',
        type: 'Image',
        status: 'PendingApproval',
        lastUpdated: '2024-04-22T15:45:00',
        size: '5.2 MB',
    },
    {
        id: '3',
        name: 'Database Schema',
        type: 'Document',
        status: 'PendingCompletion',
        lastUpdated: '2024-04-21T09:15:00',
        size: '1.1 MB',
    },
    {
        id: '4',
        name: 'API Documentation',
        type: 'Document',
        status: 'Error',
        lastUpdated: '2024-04-20T14:20:00',
        size: '3.8 MB',
    },
];

const getStatusIcon = (status: Asset['status']) => {
    switch (status) {
        case 'Ready':
            return <CheckCircle2 className="w-5 h-5 text-green-500" />;
        case 'Error':
            return <AlertCircle className="w-5 h-5 text-red-500" />;
        case 'PendingCompletion':
        case 'PendingApproval':
            return <Clock className="w-5 h-5 text-yellow-500" />;
        default:
            return <FileText className="w-5 h-5 text-gray-400" />;
    }
};

const getStatusColor = (status: Asset['status']) => {
    switch (status) {
        case 'Ready':
            return 'bg-green-100 text-green-800';
        case 'Error':
            return 'bg-red-100 text-red-800';
        case 'PendingCompletion':
        case 'PendingApproval':
            return 'bg-yellow-100 text-yellow-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const AssetManager = () => {
    const { data: assets = mockAssets } = useQuery({
        queryKey: ['assets'],
        queryFn: () => mockAssets,
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Asset Manager</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Upload Asset
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Size
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Updated
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {assets.map((asset) => (
                            <tr key={asset.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {getStatusIcon(asset.status)}
                                        <span className="ml-2 font-medium text-gray-900">{asset.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {asset.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(asset.status)}`}>
                                        {asset.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {asset.size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(asset.lastUpdated).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetManager; 