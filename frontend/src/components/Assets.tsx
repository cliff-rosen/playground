import React from 'react';
import { FileText, Image, Database, Code } from 'lucide-react';

interface Asset {
    id: string;
    name: string;
    type: string;
    icon: React.ReactNode;
}

const assets: Asset[] = [
    {
        id: '1',
        name: 'Customer Feedback',
        type: 'Document',
        icon: <FileText className="w-4 h-4" />,
    },
    {
        id: '2',
        name: 'Survey Results',
        type: 'Spreadsheet',
        icon: <Database className="w-4 h-4" />,
    },
    {
        id: '3',
        name: 'Support Tickets',
        type: 'Database',
        icon: <Code className="w-4 h-4" />,
    },
    {
        id: '4',
        name: 'User Screenshots',
        type: 'Images',
        icon: <Image className="w-4 h-4" />,
    },
];

interface AssetsProps {
    className?: string;
}

export function Assets({ className = '' }: AssetsProps) {
    return (
        <div className={`flex flex-col h-full bg-gray-50 ${className}`}>
            <div className="px-4 py-3 border-b bg-white">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Assets</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                    {assets.map((asset) => (
                        <div
                            key={asset.id}
                            className="flex items-center p-2 hover:bg-white rounded-lg cursor-pointer group border border-transparent hover:border-gray-200 transition-colors"
                        >
                            <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-gray-600 border border-gray-200">
                                {asset.icon}
                            </div>
                            <div className="ml-3 flex-1">
                                <div className="text-sm font-medium text-gray-700">{asset.name}</div>
                                <div className="text-xs text-gray-500">{asset.type}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Assets; 