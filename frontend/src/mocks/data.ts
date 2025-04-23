import { Mission, Stage, Step, Asset, ChatMessage, Workspace, Workflow } from '../types';

export const mockAssets: Asset[] = [
    {
        id: 'asset-1',
        name: 'Customer Feedback Dataset',
        type: 'dataset',
        status: 'ready',
        content: { /* dataset content */ },
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
        version: 1
    },
    {
        id: 'asset-2',
        name: 'Analysis Report',
        type: 'document',
        status: 'pendingApproval',
        content: { /* document content */ },
        createdAt: '2024-01-02T00:00:00Z',
        updatedAt: '2024-01-02T00:00:00Z',
        version: 1
    }
];

export const mockSteps: Step[] = [
    {
        id: 'step-1-1',
        name: 'Query Database',
        description: 'Fetch customer feedback data from the database',
        status: 'completed',
        assets: {
            inputs: [],
            outputs: ['asset-1']
        },
        tool: {
            name: 'DatabaseQueryTool',
            configuration: { query: 'SELECT * FROM feedback' }
        },
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T01:00:00Z'
    },
    {
        id: 'step-1-2',
        name: 'Filter Results',
        description: 'Filter relevant feedback entries',
        status: 'completed',
        assets: {
            inputs: ['asset-1'],
            outputs: ['asset-1']
        },
        tool: {
            name: 'DataFilterTool',
            configuration: { criteria: 'relevance > 0.8' }
        },
        createdAt: '2024-01-01T01:00:00Z',
        updatedAt: '2024-01-01T02:00:00Z'
    }
];

export const mockStages: Stage[] = [
    {
        id: 'stage-1',
        name: 'Search',
        description: 'Search and filter customer feedback',
        status: 'completed',
        steps: mockSteps.slice(0, 2),
        assets: {
            inputs: [],
            outputs: ['asset-1']
        },
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T02:00:00Z'
    },
    {
        id: 'stage-2',
        name: 'Extract',
        description: 'Extract and analyze feedback data',
        status: 'current',
        steps: [
            {
                id: 'step-2-1',
                name: 'Parse Data',
                description: 'Parse the feedback data',
                status: 'completed',
                assets: {
                    inputs: ['asset-1'],
                    outputs: ['asset-1']
                },
                tool: {
                    name: 'DataParserTool',
                    configuration: { format: 'json' }
                },
                createdAt: '2024-01-02T00:00:00Z',
                updatedAt: '2024-01-02T01:00:00Z'
            },
            {
                id: 'step-2-2',
                name: 'Validate Format',
                description: 'Validate the parsed data',
                status: 'current',
                assets: {
                    inputs: ['asset-1'],
                    outputs: ['asset-1']
                },
                tool: {
                    name: 'DataValidatorTool',
                    configuration: { schema: 'feedback_schema' }
                },
                createdAt: '2024-01-02T01:00:00Z',
                updatedAt: '2024-01-02T02:00:00Z'
            }
        ],
        assets: {
            inputs: ['asset-1'],
            outputs: ['asset-1']
        },
        createdAt: '2024-01-02T00:00:00Z',
        updatedAt: '2024-01-02T02:00:00Z'
    },
    {
        id: 'stage-3',
        name: 'Generate',
        description: 'Generate insights from the analyzed data',
        status: 'pending',
        steps: [
            {
                id: 'step-3-1',
                name: 'Generate Insights',
                description: 'Generate key insights from the data',
                status: 'pending',
                assets: {
                    inputs: ['asset-1'],
                    outputs: ['asset-2']
                },
                tool: {
                    name: 'InsightGeneratorTool',
                    configuration: { threshold: 0.7 }
                },
                createdAt: '2024-01-03T00:00:00Z',
                updatedAt: '2024-01-03T00:00:00Z'
            }
        ],
        assets: {
            inputs: ['asset-1'],
            outputs: ['asset-2']
        },
        createdAt: '2024-01-03T00:00:00Z',
        updatedAt: '2024-01-03T00:00:00Z'
    }
];

export const mockWorkflow: Workflow = {
    id: 'workflow-1',
    name: 'Customer Feedback Analysis Workflow',
    description: 'Standard workflow for analyzing customer feedback',
    status: 'current',
    stages: mockStages,
    assets: mockAssets,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-02T02:00:00Z'
};

export const mockMission: Mission = {
    id: 'mission-1',
    title: 'Customer Feedback Analysis',
    description: 'Analyze customer feedback to identify key insights and trends',
    goal: 'Create a report on customer feedback that contains the most common issues and suggestions for improvement',
    status: 'current',
    workflow: mockWorkflow,
    assets: mockAssets,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-02T02:00:00Z'
};

export const mockChatMessages: ChatMessage[] = [
    {
        id: 'msg-1',
        role: 'user',
        content: 'I need to analyze our customer feedback to identify key trends',
        timestamp: '2024-01-01T00:00:00Z',
        metadata: {
            missionId: 'mission-1'
        }
    },
    {
        id: 'msg-2',
        role: 'assistant',
        content: "I'll help you analyze the customer feedback. Let's start by gathering the data.",
        timestamp: '2024-01-01T00:01:00Z',
        metadata: {
            missionId: 'mission-1',
            stageId: 'stage-1'
        }
    }
];

export const mockWorkspaces: Workspace[] = [
    {
        id: 'ws-1',
        type: 'workflowStepStatus',
        title: 'Extraction in Progress',
        status: 'pending',
        content: {
            text: 'Extracting data from input documents...',
            assets: []
        },
        createdAt: '2024-03-20T12:00:00Z',
        updatedAt: '2024-03-20T12:00:00Z'
    },
    {
        id: 'ws-2',
        type: 'proposedWorkflowDesign',
        title: 'Proposed Workflow Design',
        status: 'completed',
        content: {
            text: 'Analysis of current workflow and proposed improvements...',
            assets: []
        },
        createdAt: '2024-03-20T11:30:00Z',
        updatedAt: '2024-03-20T11:45:00Z'
    },
    {
        id: 'ws-3',
        type: 'extractionResult',
        title: 'Document Extraction Results',
        status: 'failed',
        content: {
            text: 'Failed to extract data from corrupted document...',
            assets: []
        },
        createdAt: '2024-03-20T10:15:00Z',
        updatedAt: '2024-03-20T10:30:00Z'
    },
    {
        id: 'ws-4',
        type: 'analysisResult',
        title: 'Data Analysis Report',
        status: 'completed',
        content: {
            text: 'Analysis of extracted data patterns and insights...',
            assets: []
        },
        createdAt: '2024-03-20T09:00:00Z',
        updatedAt: '2024-03-20T09:45:00Z'
    }
]; 