import { useState } from 'react';
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

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>(mockMessages);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: newMessage,
            sender: 'user',
            timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setNewMessage('');

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: 'I understand. Let me help you with that.',
                sender: 'bot',
                timestamp: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Chat</h1>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            <div
                                className={`flex items-start max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse' : ''
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user'
                                            ? 'bg-blue-500 text-white ml-2'
                                            : 'bg-gray-200 text-gray-700 mr-2'
                                        }`}
                                >
                                    {message.sender === 'user' ? (
                                        <User className="w-5 h-5" />
                                    ) : (
                                        <Bot className="w-5 h-5" />
                                    )}
                                </div>
                                <div
                                    className={`rounded-lg p-3 ${message.sender === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    <p className="text-sm">{message.content}</p>
                                    <span className="text-xs opacity-70 mt-1 block">
                                        {new Date(message.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSendMessage} className="mt-4">
                <div className="flex items-center bg-white rounded-lg shadow-md p-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="p-2 text-blue-500 hover:text-blue-600 focus:outline-none"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Chat; 