import { Mission, Stage, Step, Asset, ChatMessage, Workspace, Workflow } from '../types';
import { MockDataSnapshot } from './data';
import { mockDataSnapshot2 } from './mockDataSnapshot2';

// Base state
const baseState = mockDataSnapshot2;

// Mission data (moved from workspace to main mission)
const mission: Mission = {
    id: 'mission-1',
    title: 'Customer Feedback Analysis',
    description: 'Analyze customer feedback to identify key insights and trends',
    goal: 'Create a report on customer feedback that contains the most common issues and suggestions for improvement',
    status: 'current',
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
    updatedAt: '2024-01-01T00:02:00Z'
};

// Proposed workflow for the workspace
const proposedWorkflow: Workflow = {
    id: 'workflow-1',
    name: 'Customer Feedback Analysis Workflow',
    description: 'Standard workflow for analyzing customer feedback',
    status: 'pending',
    stages: [
        {
            id: 'stage-1',
            name: 'Search',
            description: 'Search and filter customer feedback',
            status: 'pending',
            steps: [
                {
                    id: 'step-1-1',
                    name: 'Query database',
                    description: 'Fetch customer feedback data from the database',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                },
                {
                    id: 'step-1-2',
                    name: 'Filter relevant entries',
                    description: 'Filter out irrelevant feedback entries',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                }
            ],
            assets: {
                inputs: [],
                outputs: []
            },
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: 'stage-2',
            name: 'Extract',
            description: 'Extract and analyze feedback data',
            status: 'pending',
            steps: [
                {
                    id: 'step-2-1',
                    name: 'Parse data',
                    description: 'Parse the feedback data into a structured format',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                },
                {
                    id: 'step-2-2',
                    name: 'Validate format',
                    description: 'Validate the parsed data format',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                }
            ],
            assets: {
                inputs: [],
                outputs: []
            },
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: 'stage-3',
            name: 'Generate',
            description: 'Generate insights from the analyzed data',
            status: 'pending',
            steps: [
                {
                    id: 'step-3-1',
                    name: 'Generate insights',
                    description: 'Generate key insights from the analyzed data',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                },
                {
                    id: 'step-3-2',
                    name: 'Create report',
                    description: 'Create a report with the generated insights',
                    status: 'pending',
                    assets: {
                        inputs: [],
                        outputs: []
                    },
                    createdAt: '2024-01-01T00:00:00Z',
                    updatedAt: '2024-01-01T00:00:00Z'
                }
            ],
            assets: {
                inputs: [],
                outputs: []
            },
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        }
    ],
    assets: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
};

// Deltas from base state
const deltas: Partial<MockDataSnapshot> = {
    mission,
    chatMessages: [
        ...baseState.chatMessages,
        {
            id: 'msg-3',
            role: 'assistant' as const,
            content: "Great! I'll create a workflow with three stages: Search, Extract, and Generate. Here's the proposed workflow structure. Would you like me to proceed with this plan?",
            timestamp: '2024-01-01T00:02:00Z',
            metadata: {}
        }
    ],
    workspace: {
        ...baseState.workspace,
        type: 'proposedWorkflowDesign',
        title: 'Proposed Workflow',
        content: {
            workflow: proposedWorkflow,
            assets: []
        },
        actionButtons: [
            {
                label: 'Accept',
                onClick: () => console.log('Accept workflow'),
                variant: 'primary'
            },
            {
                label: 'Modify',
                onClick: () => console.log('Modify workflow'),
                variant: 'secondary'
            }
        ],
        updatedAt: '2024-01-01T00:02:00Z'
    }
};

// Final state
export const mockDataSnapshot3: MockDataSnapshot = {
    ...baseState,
    ...deltas
}; 