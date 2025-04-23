import { Check, Search, FileText, FileOutput } from 'lucide-react';

interface Step {
    id: number;
    title: string;
    icon: React.ReactNode;
    status: 'completed' | 'current' | 'pending';
}

const steps: Step[] = [
    {
        id: 1,
        title: 'Search emails',
        icon: <Search className="w-5 h-5" />,
        status: 'completed'
    },
    {
        id: 2,
        title: 'Extract feedback',
        icon: <FileText className="w-5 h-5" />,
        status: 'current'
    },
    {
        id: 3,
        title: 'Generate summary',
        icon: <FileOutput className="w-5 h-5" />,
        status: 'pending'
    },
    {
        id: 4,
        title: 'Deliverable',
        icon: <Check className="w-5 h-5" />,
        status: 'pending'
    }
];

const MissionProgress = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Mission: Summarize feedback from emails
                </h2>
            </div>

            <div className="flex items-center">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <div className={`flex flex-col items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
                            <div
                                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${step.status === 'completed' ? 'bg-green-100 text-green-600' :
                                        step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                                            'bg-gray-100 text-gray-400'}
                `}
                            >
                                {step.icon}
                            </div>
                            <span className="text-sm mt-2 text-gray-600">{step.title}</span>
                        </div>
                        {index !== steps.length - 1 && (
                            <div
                                className={`h-1 flex-1 mx-2 rounded
                  ${step.status === 'completed' ? 'bg-green-400' : 'bg-gray-200'}
                `}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionProgress; 