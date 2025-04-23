import React, { useState } from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import Mission from './components/Mission';
import Workflow from './components/Workflow';
import Workspace from './components/Workspace';
import Assets from './components/Assets';
import { mockChatMessages, mockMission, mockWorkspaces } from './mocks/data';
import type { ChatMessage } from './types';

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header className="z-50" />
      <div className="flex-1 min-h-0 pt-14">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Chat Rail (cols 1-3) */}
          <div className="col-span-3 h-full overflow-hidden">
            <Chat
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          </div>

          {/* Main Content Area (cols 4-9) */}
          <div className="col-span-6 h-full flex flex-col">
            {/* Mission Header */}
            <div className="sticky top-14 z-30 bg-white shadow-lg rounded-2xl p-6 mb-6">
              <Mission mission={mockMission} />
            </div>

            {/* Stage Tracker */}
            <div className="mb-6">
              <Workflow stages={mockMission.stages} />
            </div>

            {/* Workspace Canvas */}
            <div className="flex-1 overflow-y-auto">
              <Workspace workspace={mockWorkspaces[0]} />
            </div>
          </div>

          {/* Right Assets Rail (cols 10-12) */}
          <div className="col-span-3 h-full overflow-hidden">
            <Assets assets={mockMission.assets} />
          </div>
        </div>
      </div>
    </div>
  );
}
