import React from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import Mission from './components/Mission';
import Workflow from './components/Workflow';
import Workspace from './components/Workspace';
import Assets from './components/Assets';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header className="z-50" />
      <div className="flex flex-1 min-h-0 pt-14">
        {/* Left Column - Chat */}
        <div className="w-[400px] bg-white border-r overflow-auto">
          <Chat />
        </div>

        {/* Middle Column - Stacked Components */}
        <div className="flex-1 bg-gray-50 flex flex-col min-h-0">
          <div className="flex-none">
            <Mission className="z-40" />
          </div>
          <div className="flex-none">
            <Workflow className="z-30" />
          </div>
          <div className="flex-1 overflow-auto relative min-h-0">
            <Workspace />
          </div>
        </div>

        {/* Right Column - Assets */}
        <div className="w-64 bg-white border-l overflow-auto">
          <Assets />
        </div>
      </div>
    </div>
  );
}
