import { Mission, Stage, Step, Asset, ChatMessage, Workspace, Workflow } from '../types';
import { MockDataSnapshot } from './data';
import { mockDataSnapshot1 } from './mockDataSnapshot1';

// Base state
const baseState = mockDataSnapshot1;

// Mission proposal data
const missionProposal: Mission = {
    id: 'mission-1',
    title: 'Customer Feedback Analysis',
    description: 'Analyze customer feedback to identify key insights and trends',
    goal: 'Create a report on customer feedback that contains the most common issues and suggestions for improvement',
    status: 'pending',
    workflow: {
        id: '',
        name: '',
        description: '',
        status: 'pending',
        stages: [],
        assets: [],
        createdAt: '',
        updatedAt: ''
    },
    assets: [],
    inputs: ['Customer feedback database'],
    outputs: ['Analysis report with key insights'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
};

// Deltas from base state
const deltas: Partial<MockDataSnapshot> = {
    chatMessages: [
        ...baseState.chatMessages,
        {
            id: 'msg-2',
            role: 'assistant' as const,
            content: "I'll help you analyze the customer feedback. Let's start by clarifying the mission. I've created a proposed mission based on your request. Please Accept or Modify the mission.",
            timestamp: '2024-01-01T00:01:00Z',
            metadata: {}
        }
    ],
    workspace: {
        ...baseState.workspace,
        type: 'proposedMission',
        title: 'Proposed Mission',
        content: {
            mission: missionProposal,
            assets: []
        },
        actionButtons: [
            {
                label: 'Accept',
                onClick: () => console.log('Accept mission'),
                variant: 'primary'
            },
            {
                label: 'Modify',
                onClick: () => console.log('Modify mission'),
                variant: 'secondary'
            }
        ],
        updatedAt: '2024-01-01T00:01:00Z'
    }
};

// Final state
export const mockDataSnapshot2: MockDataSnapshot = {
    ...baseState,
    ...deltas
}; 