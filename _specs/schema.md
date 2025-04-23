# FractalBot Orchestrator: Core Component Schema Tables

## Mission Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| title | String | Clear identifier for the overall goal |
| description | String | Detailed explanation of what needs to be accomplished |
| assets | Map[String, Asset] | All assets used in this mission |
| status | Enum | [InDesign, PendingGoal, PendingWorkflowStageDesign, InProgress, Completed, Failed] |
| workflow | Workflow | Embedded workflow definition |

## Workflow Table

| Field | Type | Description |
|-------|------|-------------|
| inputAssetRefs | Array[String] | References to mission assets required to start |
| outputAssetRefs | Array[String] | References to mission assets that will be produced |
| stages | Array[Stage] | Ordered list of major transformation phases |
| currentStageIndex | Integer | Tracks execution progress |
| status | Enum | [InDesign, InProgress, Completed, Failed] |

## Stage Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| description | String | Purpose of this transformation phase |
| inputAssetRefs | Array[String] | References to mission assets required to begin this stage |
| outputAssetRefs | Array[String] | References to mission assets that will be produced by this stage |
| steps | Array[Step] | Ordered list of execution units |
| currentStepIndex | Integer | Tracks execution progress |
| status | Enum | [InDesign, InProgress, Completed, Failed] |

## Step Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| description | String | Purpose of this execution unit |
| inputAssetRefs | Array[String] | References to mission assets required for execution |
| outputAssetRefs | Array[String] | References to mission assets that will be produced by this step |
| stepType | Enum | [Atomic, Composite] - Whether step uses a tool directly or contains substeps |
| tool | ToolReference | Reference to executing tool (if atomic) |
| substeps | Array[Step] | Nested steps for fractal expansion (if composite) |
| parentId | UUID | Reference to parent step if nested (optional) |
| status | Enum | [InDesign, InProgress, Completed, Failed] |
| isResolved | Boolean | Whether the step's tree terminates in steps with assigned tools |

## Tool Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| name | String | Human-readable identifier |
| description | String | What the tool does |
| category | String | Classification for discovery |
| inputSchema | JSONSchema | Expected input format |
| outputSchema | JSONSchema | Produced output format |
| isAgent | Boolean | Indicates if this is an AI agent |
| provider | String | Source of the tool (system, user, third-party) |
| status | Enum | [Available, Deprecated, Unavailable] |

## Asset Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| name | String | Human-readable identifier |
| type | String | Format specification (JSON, Text, Image, etc.) |
| content | Any | The actual data |
| version | Integer | For tracking asset evolution |
| parentId | UUID | For versioned assets (optional) |
| status | Enum | [PendingCompletion, PendingApproval, Ready, Archived, Error] |

## Copilot Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| missionId | UUID | Associated mission |
| capabilities | Array[String] | Available features and functions |
| conversationHistory | Array[Message] | Record of user-copilot interactions |
| suggestedWorkflows | Array[WorkflowReference] | Proposed approaches |
| status | Enum | [Active, Idle, Processing] |

