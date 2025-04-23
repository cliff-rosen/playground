import React from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import Mission from './components/Mission';
import Workspace from './components/Workspace';
import Assets from './components/Assets';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-14">
        {/* Left Column - Chat */}
        <div className="w-[400px] bg-white overflow-y-auto border-r">
          <Chat />
        </div>

        {/* Middle Column - Mission, Workflow, Workspace */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Mission />
          <Workspace />
        </div>

        {/* Right Column - Assets */}
        <div className="w-64 bg-white overflow-y-auto border-l">
          <Assets />
        </div>
      </div>
    </div>
  );
}
