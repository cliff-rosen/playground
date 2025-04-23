# FractalBot Orchestrator: Technical Overview

## Core Concept

FractalBot Orchestrator is a platform that occupies the "Goldilocks zone" between fully automated black-box AI agents and complex low-level workflow programming. It provides a structured yet flexible way to compose, run, and manage AI-powered knowledge workflows.

## Key Philosophical Tensions

The product navigates three fundamental tensions:

1. **Structure vs. Flexibility**
   - Establishes high-level strategic plans (macro steps) while allowing for just-in-time tactical decisions
   - Creates plans that are both contracts and living documents that can evolve

2. **Simplicity vs. Power**
   - Begins with conversational, natural interactions
   - Employs a fractal expansion model where complexity emerges only when needed

3. **Automation vs. Control**
   - Can propose plans, suggest tools, or execute steps automatically
   - Provides transparency and intervention points for user direction

## The Fractal Planning Model

The key innovation is the fractal planning model:
1. Start with a simple, understandable high-level plan
2. Progressively elaborate details only where and when needed
3. Dynamically assign tools and agents as work unfolds
4. Maintain both "forest" view (overall plan) and "trees" view (current step details)

## Component Architecture

The system uses a hierarchical structure:

```
MISSION → WORKFLOW → STAGES → STEPS → TOOLS → ATOMIC OPERATIONS
```

- **Mission**: Defines the ultimate deliverable and starting resources
- **Workflow**: Outlines the transformation journey from inputs to outputs
- **Stages**: Represent major phases with clear intermediate outcomes
- **Steps**: Define specific execution units that produce discrete results
- **Tools**: Encapsulate reusable capabilities applicable across contexts
- **Atomic Operations**: Fundamental actions that drive transformation

## Execution Methodology

The process follows two main phases:

1. **SETUP**
   - Agree on final deliverable and inputs
   - Define high-level stages connecting inputs to deliverable

2. **EXECUTION**
   - Focus attention on current stage
   - Resolve to appropriate tools:
     - Use suitable tools directly when available
     - Search for tools when needed
     - Decompose complex steps into sub-steps when necessary
   - Execute the fully resolved step
   - Reevaluate workflow and agree on next action
   - Proceed until deliverable is achieved

## Formal Schema

### Core Components

#### Mission
- **title**: String - Clear identifier for the overall goal
- **description**: String - Detailed explanation of what needs to be accomplished
- **initialInputs**: Array[Asset] - Starting resources provided by the user
- **desiredOutputs**: Array[Asset] - Definition of the final deliverable(s)
- **status**: Enum [NotStarted, InProgress, Completed, Failed]

#### Workflow
- **id**: UUID - Unique identifier
- **missionId**: UUID - Reference to parent mission
- **stages**: Array[Stage] - Ordered list of major transformation phases
- **currentStageIndex**: Integer - Tracks execution progress
- **assets**: Map[String, Asset] - Shared resource space across all stages

#### Stage
- **id**: UUID - Unique identifier
- **description**: String - Purpose of this transformation phase
- **inputs**: Array[AssetReference] - Required resources to begin this stage
- **outputs**: Array[AssetReference] - Expected products of this stage
- **steps**: Array[Step] - Ordered list of execution units
- **currentStepIndex**: Integer - Tracks execution progress
- **status**: Enum [NotStarted, InProgress, Completed, Failed]

#### Step
- **id**: UUID - Unique identifier
- **description**: String - Purpose of this execution unit
- **inputs**: Array[AssetReference] - Required resources for execution
- **outputs**: Array[AssetReference] - Expected products of execution
- **status**: Enum [NotStarted, InProgress, Completed, Failed]
- **stepType**: Enum [Atomic, Composite]
- **tool**: ToolReference (if atomic) - Reference to executing tool
- **substeps**: Array[Step] (if composite) - Nested steps for fractal expansion
- **parentId**: UUID (optional) - Reference to parent step if nested

#### Tool
- **id**: UUID - Unique identifier
- **name**: String - Human-readable identifier
- **description**: String - What the tool does
- **category**: String - Classification for discovery
- **inputSchema**: JSONSchema - Expected input format
- **outputSchema**: JSONSchema - Produced output format
- **isAgent**: Boolean - Indicates if this is an AI agent
- **provider**: String - Source of the tool (system, user, third-party)

#### Asset
- **id**: UUID - Unique identifier
- **name**: String - Human-readable identifier
- **type**: String - Format specification (JSON, Text, Image, etc.)
- **content**: Any - The actual data
- **metadata**: Map[String, Any] - Additional descriptive information
- **version**: Integer - For tracking asset evolution
- **parentId**: UUID (optional) - For versioned assets

## Key Interface Components

1. **Journey Card**: Represents a complete workflow solution
2. **Chat Interface**: Primary interface for user-Copilot collaboration
3. **Workflow Viewer**: Visualizes the execution plan and progress
4. **Asset Panel**: Manages all resources used in the workflow
5. **Workspace**: Central area for viewing and editing content
6. **Agent Panel**: Access to specialized AI tools for specific tasks

## Competitive Positioning

FractalBot Orchestrator differentiates itself by:

- **Not being a black box agent** that "just does it" (providing more transparency and control)
- **Not being a low-level dev framework** requiring code and glue logic (offering higher abstraction)
- Providing visibility, structure, modularity, and just enough abstraction
- Supporting a "top-down planning, bottom-up execution" approach that matches how humans naturally solve problems
- Enabling progressive elaboration and just-in-time decomposition of tasks
- Maintaining both high-level strategic view and detailed tactical focus

## Target Users

- Knowledge workers (researchers, consultants, analysts)
- Technical users (prompt engineers, AI developers)
- Business users (ops, product managers, sales strategists)
- Niche verticals (legal, medical, compliance, education)
- AI-native creators: people who already use GPT but want more structure

## Value Proposition

- Power of code + ease of no-code
- Control without cognitive overload
- Workflow transparency + tool modularity
- Reuse & composability
- A system to "orchestrate over orchestration" (nested workflows, chaining)
- Brings structure to the chaos of prompt experiments
- Enables fast delivery of custom AI assistants or vertical agents

## Implementation Notes

The system architecture should support:
- Recursive composition (workflows within workflows)
- Asset sharing across workflows
- Dynamic tool discovery and assignment
- Just-in-time planning and execution
- Full visibility into execution state and history
- Intervention points for user control