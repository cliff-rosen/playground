import { Mission, Stage, Step, Asset, ChatMessage, Workspace, Workflow } from '../types';
import { MockDataSnapshot } from './data';
import { mockDataSnapshot3 } from './mockDataSnapshot3';

// Base state
const baseState = mockDataSnapshot3;

// Workflow data (moved from workspace to mission)
var workflow: Workflow | undefined = baseState.mission.workflow;
workflow = {
    ...workflow,
    id: 'workflow-1',
    name: 'Customer Feedback Analysis Workflow',
    description: 'Standard workflow for analyzing customer feedback',
    status: 'current',
    stages: [
        {
            id: 'stage-1',
            name: 'Search',
            description: 'Search and filter customer feedback',
            status: 'current',
            steps: [
                {
                    id: 'step-1-1',
                    name: 'Query database',
                    description: 'Fetch customer feedback data from the database',
                    status: 'current',
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
    updatedAt: '2024-01-01T00:03:00Z'
};

// Mission with updated workflow
const mission: Mission = {
    ...baseState.mission,
    workflow,
    updatedAt: '2024-01-01T00:03:00Z'
};

// Current step details for workspace
const currentStep: Step = {
    id: 'step-1-1',
    name: 'Query database',
    description: 'Fetch customer feedback data from the database',
    status: 'current',
    assets: {
        inputs: [],
        outputs: []
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:03:00Z'
};

// Deltas from base state
const deltas: Partial<MockDataSnapshot> = {
    mission,
    chatMessages: [
        ...baseState.chatMessages,
        {
            id: 'msg-4',
            role: 'assistant' as const,
            content: "I'll start by querying the customer feedback database. This will fetch all the relevant feedback data for analysis.",
            timestamp: '2024-01-01T00:03:00Z',
            metadata: {
                stageId: 'stage-1',
                stepId: 'step-1-1'
            }
        }
    ],
    workspace: {
        ...baseState.workspace,
        type: 'stepDetails',
        title: 'Query Database',
        content: {
            text: JSON.stringify({
                step: currentStep,
                configuration: {
                    database: 'customer_feedback',
                    query: 'SELECT * FROM feedback WHERE date >= NOW() - INTERVAL 30 DAY',
                    parameters: {
                        limit: 1000
                    }
                }
            }, null, 2),
            assets: []
        },
        actionButtons: [
            {
                label: 'Execute',
                onClick: () => console.log('Execute query'),
                variant: 'primary'
            },
            {
                label: 'Modify',
                onClick: () => console.log('Modify query'),
                variant: 'secondary'
            }
        ],
        updatedAt: '2024-01-01T00:03:00Z'
    }
};

// Final state
export const mockDataSnapshot4: MockDataSnapshot = {
    ...baseState,
    ...deltas
}; 