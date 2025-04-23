// Common status types
export type Status = 'completed' | 'current' | 'pending' | 'failed';
export type AssetStatus = 'pendingCompletion' | 'pendingApproval' | 'ready' | 'archived' | 'error';

// Workspace types
export type WorkspaceType = 'proposedMission' | 'workflowStepStatus' | 'proposedWorkflowDesign' | 'extractionResult' | 'analysisResult';

export type Workspace = {
    id: string;
    type: WorkspaceType;
    title: string;
    status: Status;
    content?: {
        text?: string;
        assets?: Asset[];
    };
    createdAt: string;
    updatedAt: string;
}

// Asset types
export type Asset = {
    id: string;
    name: string;
    type: string;
    status: AssetStatus;
    content: any;
    createdAt: string;
    updatedAt: string;
    version: number;
}

// Step types
export type Step = {
    id: string;
    name: string;
    description: string;
    status: Status;
    assets: {
        inputs: string[]; // Asset IDs
        outputs: string[]; // Asset IDs
    };
    tool?: {
        name: string;
        configuration: Record<string, any>;
    };
    substeps?: Step[];
    createdAt: string;
    updatedAt: string;
}

// Stage types
export type Stage = {
    id: string;
    name: string;
    description: string;
    status: Status;
    steps: Step[];
    assets: {
        inputs: string[]; // Asset IDs
        outputs: string[]; // Asset IDs
    };
    createdAt: string;
    updatedAt: string;
}

// Mission types
export type Mission = {
    id: string;
    title: string;
    description: string;
    status: Status;
    stages: Stage[];
    assets: Asset[];
    createdAt: string;
    updatedAt: string;
}

// Chat message types
export type ChatMessage = {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
    metadata?: {
        missionId?: string;
        stageId?: string;
        stepId?: string;
        assetId?: string;
    };
}

// Workspace types
export type WorkspaceState = {
    currentMission: Mission | null;
    currentStage: Stage | null;
    currentStep: Step | null;
    selectedAsset: Asset | null;
    chatHistory: ChatMessage[];
    viewMode: 'compact' | 'expanded';
} 