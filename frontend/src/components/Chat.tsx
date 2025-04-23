import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { ChatMessage } from '../types';

interface ChatProps {
    messages: ChatMessage[];
    onSendMessage: (message: string) => void;
    className?: string;
}

export default function Chat({ messages, onSendMessage, className = '' }: ChatProps) {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={`flex flex-col h-full bg-white/95 ${className}`}>
            <div className="px-4 py-3 border-b">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Assistant</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`rounded-xl px-4 py-3 max-w-[85%] ${message.role === 'user'
                                ? 'bg-emerald-50 text-gray-800 border-l-4 border-emerald-500'
                                : message.role === 'system'
                                    ? 'bg-blue-50 text-gray-800 border-l-4 border-blue-500'
                                    : 'bg-white text-gray-800 border border-gray-100'
                                }`}
                        >
                            {message.content.split('\n').map((line, i) => (
                                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                    {line}
                                </p>
                            ))}
                            {message.metadata && (
                                <div className="mt-2 text-xs text-gray-500">
                                    {message.metadata.missionId && <span>Mission: {message.metadata.missionId} </span>}
                                    {message.metadata.stageId && <span>Stage: {message.metadata.stageId} </span>}
                                    {message.metadata.stepId && <span>Step: {message.metadata.stepId} </span>}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t bg-white">
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask for help..."
                        rows={1}
                        className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm resize-none"
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