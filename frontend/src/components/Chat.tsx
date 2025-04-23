import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: string;
}

const mockMessages: Message[] = [
    {
        id: '1',
        content: "Hi there! I'm your Orchestrator Copilot. What would you like to accomplish today?",
        sender: 'bot',
        timestamp: new Date().toISOString(),
    },
    {
        id: '2',
        content: "I need to summarize feedback from client emails about our new pricing",
        sender: 'user',
        timestamp: new Date().toISOString(),
    },
    {
        id: '3',
        content: "I can help with that. Let me suggest a workflow:\n1. Search emails for pricing feedback\n2. Extract key feedback points\n3. Generate a summary\n4. Deliver a final report\n\nShall we proceed with this?",
        sender: 'bot',
        timestamp: new Date().toISOString(),
    },
    {
        id: '4',
        content: "Yes, let's use that workflow",
        sender: 'user',
        timestamp: new Date().toISOString(),
    },
    {
        id: '5',
        content: "Great! I've created the workflow. First, let's search your emails. Do you want to search by date range, specific clients, or keywords?",
        sender: 'bot',
        timestamp: new Date().toISOString(),
    },
    {
        id: '6',
        content: 'Look for emails from the last 30 days with "pricing" or "price" in the subject or body',
        sender: 'user',
        timestamp: new Date().toISOString(),
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
        <div className="flex flex-col h-full">
            <div className="p-4 border-b bg-gray-50">
                <h2 className="font-semibold">Chat</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                                }`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-gray-100 text-gray-600'
                                    }`}
                            >
                                {message.sender === 'user' ? (
                                    <User className="w-5 h-5" />
                                ) : (
                                    <Bot className="w-5 h-5" />
                                )}
                            </div>
                            <div
                                className={`rounded-lg px-4 py-2 max-w-[80%] ${message.sender === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                    }`}
                            >
                                {message.content.split('\n').map((line, i) => (
                                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t p-4">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={handleSend}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
} 