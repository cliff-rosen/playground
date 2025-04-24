import React from 'react';
import { Settings, FolderOpen, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeaderProps {
    className?: string;
    currentDataSnapshotIdx: number;
    setCurrentDataSnapshotIdx: (idx: number) => void;
    totalSnapshots: number;
}

export default function Header({
    className = '',
    currentDataSnapshotIdx,
    setCurrentDataSnapshotIdx,
    totalSnapshots
}: HeaderProps) {
    return (
        <header className={`h-14 bg-white border-b flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10 ${className}`}>
            <div className="text-lg font-medium text-gray-800">Orchestrator</div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setCurrentDataSnapshotIdx(currentDataSnapshotIdx - 1)}
                    disabled={currentDataSnapshotIdx === 0}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                    Snapshot {currentDataSnapshotIdx + 1} of {totalSnapshots}
                </span>
                <button
                    onClick={() => setCurrentDataSnapshotIdx(currentDataSnapshotIdx + 1)}
                    disabled={currentDataSnapshotIdx === totalSnapshots - 1}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

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