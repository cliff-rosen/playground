import React from 'react';
import { Settings, FolderOpen, LogOut } from 'lucide-react';

interface HeaderProps {
    className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
    return (
        <header className={`h-14 bg-white border-b flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10 ${className}`}>
            <div className="text-lg font-medium text-gray-800">Orchestrator</div>
            <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                    <FolderOpen className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
} 