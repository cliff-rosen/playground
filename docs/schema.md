# Schema Documentation

## Common Types

### Status
```typescript
type Status = 'completed' | 'current' | 'pending' | 'failed';
```
Represents the current state of an entity in the system.

### AssetStatus
```typescript
type AssetStatus = 'pendingCompletion' | 'pendingApproval' | 'ready' | 'archived' | 'error';
```
Represents the current state of an asset in the system.

## Core Types

### Asset
```typescript
type Asset = {
    id: string;
    name: string;
    type: string;
    status: AssetStatus;
    content: any;
    createdAt: string;
    updatedAt: string;
    version: number;
}
```
Represents a data asset in the system. Assets can be inputs, outputs, or intermediate results of various operations.

### Step
```typescript
type Step = {
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
```
Represents an individual step in a workflow stage. Steps can have tools associated with them and can reference input and output assets.

### Stage
```typescript
type Stage = {
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
```
Represents a stage in a workflow. Stages contain multiple steps and can reference their own input and output assets.

### Workflow
```typescript
type Workflow = {
    id: string;
    name: string;
    description: string;
    status: Status;
    stages: Stage[];
    assets: Asset[];
    createdAt: string;
    updatedAt: string;
}
```
Represents a workflow that defines a sequence of stages and steps. Workflows can be reused across different missions.

### Mission
```typescript
type Mission = {
    id: string;
    title: string;
    description: string;
    goal: string;
    status: Status;
    workflow: Workflow;
    assets: Asset[];
    inputs: string[]; // Asset IDs
    outputs: string[]; // Asset IDs
    createdAt: string;
    updatedAt: string;
}
```
Represents a mission that uses a workflow to achieve a specific goal. Missions have their own input and output assets that represent the overall requirements and deliverables.

### Workspace
```typescript
type Workspace = {
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
```
Represents a workspace that can contain various types of content and assets.

### WorkspaceType
```typescript
type WorkspaceType = 'proposedMission' | 'workflowStepStatus' | 'proposedWorkflowDesign' | 'extractionResult' | 'analysisResult';
```
Defines the different types of workspaces in the system.

### ChatMessage
```typescript
type ChatMessage = {
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
```
Represents a message in the chat interface, which can be associated with various entities in the system.

### WorkspaceState
```typescript
type WorkspaceState = {
    currentMission: Mission | null;
    currentStage: Stage | null;
    currentStep: Step | null;
    selectedAsset: Asset | null;
    chatHistory: ChatMessage[];
    viewMode: 'compact' | 'expanded';
}
```
Represents the current state of the workspace, including the selected mission, stage, step, and asset. 