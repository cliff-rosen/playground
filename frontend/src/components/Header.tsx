import React from 'react';
import { Settings, FolderOpen, LogOut } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-14 bg-blue-700 text-white flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
            <div className="text-xl font-semibold">Orchestrator</div>
            <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-blue-600 rounded-lg">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-blue-600 rounded-lg">
                    <FolderOpen className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-blue-600 rounded-lg">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
} 