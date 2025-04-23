import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: string;
}

const mockMessages: Message[] = [
    {
        id: '1',
        content: 'Hello! How can I help you with your mission today?',
        sender: 'bot',
        timestamp: '2024-04-23T10:30:00',
    },
    {
        id: '2',
        content: 'I need help designing a workflow for our new project.',
        sender: 'user',
        timestamp: '2024-04-23T10:31:00',
    },
    {
        id: '3',
        content: 'I can help you with that. What kind of project are you working on?',
        sender: 'bot',
        timestamp: '2024-04-23T10:31:30',
    },
];

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>(mockMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const userMessage: Message = {
                id: Date.now().toString(),
                content: input,
                sender: 'user',
                timestamp: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, userMessage]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-50">
            <div className="px-4 py-3 border-b bg-white">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Assistant</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`rounded-lg px-4 py-2 max-w-[85%] ${message.sender === 'user'
                                ? 'bg-indigo-50 text-gray-800 border border-indigo-100'
                                : 'bg-white text-gray-800 border border-gray-100'
                                }`}
                        >
                            {message.content.split('\n').map((line, i) => (
                                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t bg-white">
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask for help..."
                        className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm"
                    />
                    <button
                        onClick={handleSend}
                        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
} 