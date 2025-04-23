import React from 'react';
import { Mail, FileText } from 'lucide-react';

interface Asset {
    id: string;
    name: string;
    icon: React.ReactNode;
    type: string;
}

const assets: Asset[] = [
    {
        id: '1',
        name: 'emails.json',
        icon: <Mail className="w-4 h-4" />,
        type: 'Source Data'
    },
    {
        id: '2',
        name: 'feedback_ext.json',
        icon: <FileText className="w-4 h-4" />,
        type: 'Extracted Data'
    },
    {
        id: '3',
        name: 'summary.docx',
        icon: <FileText className="w-4 h-4" />,
        type: 'Generated Document'
    }
];

interface AssetsProps {
    className?: string;
}

export function Assets({ className = '' }: AssetsProps) {
    return (
        <div className={`flex flex-col border rounded-lg shadow-sm ${className}`}>
            <div className="p-4 border-b bg-gray-50">
                <h2 className="font-semibold">Assets</h2>
            </div>
            <div className="p-4">
                <div className="space-y-2">
                    {assets.map((asset) => (
                        <div
                            key={asset.id}
                            className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                        >
                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600">
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