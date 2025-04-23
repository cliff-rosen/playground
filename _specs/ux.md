# FractalBot Orchestrator: Components and Interaction Patterns

## Core Components

### Mission
- **Definition**: The overall goal with clear inputs and desired outputs
- **Behavior**: Serves as the container for the entire knowledge workflow
- **Interactions**: Created by users, managed by the Copilot, monitored through UI
- **Lifecycle**: NotStarted → InProgress → Completed/Failed

### Workflow
- **Definition**: The transformation journey from starting inputs to desired outputs
- **Behavior**: Maintains ordered stages and shared asset space
- **Interactions**: Can be proposed by Copilot or designed by users
- **Pattern**: Adaptable planning - can be modified as execution proceeds

### Stage
- **Definition**: Major transformation phase with intermediate outcomes
- **Behavior**: Contains ordered steps, tracks progress, manages discrete inputs/outputs
- **Interactions**: Visible in Workflow Viewer, can be reorganized by users
- **Pattern**: Focuses attention on current transformation need

### Step
- **Definition**: Discrete execution unit that produces specific results
- **Behavior**: Can be atomic (using a single tool) or composite (fractal expansion)
- **Interactions**: Central to fractal pattern - can be decomposed on demand
- **Pattern**: Just-in-time resolution - remains high-level until execution is needed

### Tool
- **Definition**: Reusable capability with defined inputs and outputs
- **Behavior**: Performs transformations on assets
- **Interactions**: Selected from Tool Panel, configured by users, executed by system
- **Pattern**: Modular functionality - enables mix-and-match capabilities

### Asset
- **Definition**: Any resource used or produced in the workflow
- **Behavior**: Evolves through versions as transformations occur
- **Interactions**: Visible in Asset Panel, can be inspected/modified by users
- **Pattern**: Shared state - accessible across entire workflow

### Copilot
- **Definition**: AI assistant embedded in the journey
- **Behavior**: Proposes workflows, suggests tools, reflects on results
- **Interactions**: Primary communication channel with users via Chat Interface
- **Pattern**: Collaborative intelligence - combines AI suggestions with user decisions

## Interface Components

### Journey Card
- **Function**: Entry point to a mission
- **Users**: All system users
- **Interactions**: Create, open, share, archive journeys
- **Pattern**: Portfolio management of knowledge work

### Chat Interface
- **Function**: Communication channel with Copilot
- **Users**: End users, Copilot
- **Interactions**: Natural language dialog, plan negotiation, status updates
- **Pattern**: Conversational planning and execution

### Workflow Viewer
- **Function**: Visualizes execution plan and progress
- **Users**: End users, Copilot (for reference)
- **Interactions**: Inspect, modify, reorder steps and stages
- **Pattern**: Transparent process visualization

### Asset Panel
- **Function**: Manages all resources in workflow
- **Users**: End users, Tools (for input/output)
- **Interactions**: Upload, inspect, modify, export assets
- **Pattern**: Centralized resource management

### Workspace
- **Function**: Content viewing and editing area
- **Users**: End users
- **Interactions**: Inspect current focus, edit content, compare versions
- **Pattern**: Context-aware activity space

### Agent/Tool Panel
- **Function**: Access to specialized capabilities
- **Users**: End users, Copilot (for suggestions)
- **Interactions**: Browse, search, configure, favorite tools
- **Pattern**: Capability discovery and application

## Key Interaction Patterns

### Fractal Expansion
- **Description**: Steps remain high-level until execution, then decompose as needed
- **Actors**: System (proposing), User (approving), Copilot (mediating)
- **Flow**:
  1. Define step at high level
  2. When execution time arrives, evaluate if a direct tool exists
  3. If no direct tool, decompose into sub-steps
  4. Repeat process for each sub-step

### Tool Resolution
- **Description**: Dynamic selection of appropriate tools for steps
- **Actors**: System (proposing), User (approving/selecting), Copilot (suggesting)
- **Flow**:
  1. Analyze step requirements
  2. Search tool directory for matches
  3. Propose suitable tools to user
  4. Configure and apply selected tool

### Adaptive Planning
- **Description**: Workflow evolves based on intermediate results
- **Actors**: User (directing), Copilot (suggesting), System (implementing)
- **Flow**:
  1. Execute current step
  2. Evaluate results against expectations
  3. Adjust subsequent steps if needed
  4. Potentially revise entire workflow

### Asset Transformation Chain
- **Description**: Assets evolve through sequential operations
- **Actors**: Tools (performing operations), System (tracking), User (monitoring)
- **Flow**:
  1. Tool receives input assets
  2. Tool performs transformation
  3. Tool produces output assets
  4. New assets become available to subsequent steps

### Collaborative Intelligence
- **Description**: Shared decision-making between user and AI
- **Actors**: User, Copilot
- **Flow**:
  1. Copilot proposes approach or solution
  2. User provides feedback or direction
  3. Copilot adapts suggestions accordingly
  4. Shared plan emerges through iteration

## Component Relationships

### Containment Hierarchy
- Mission contains Workflow
- Workflow contains Stages
- Stage contains Steps
- Step can contain substeps (fractal pattern)
- Tools are referenced by Steps

### Data Flow
- Assets flow from Step to Step
- Tools consume and produce Assets
- Workflow maintains Asset repository
- Both input and output constraints guide execution

### Control Flow
- User directs high-level goals
- Copilot suggests implementation approaches
- System executes agreed plans
- User maintains intervention capability at each level

## Implementation Considerations

### State Management
- Progress tracking at Workflow/Stage/Step levels
- Version control for Assets
- Execution history for transparency

### Event System
- Step completion triggers next step evaluation
- Asset updates notify dependent components
- User interventions cause workflow reevaluation

### Persistence Model
- Save/restore capabilities for Journeys
- Export/import for Workflows and Tools
- Sharing mechanisms for collaborative work

### Extension Points
- Custom Tool creation
- Workflow templates
- Integration with external systems

This document outlines the key components of the FractalBot Orchestrator system, their behaviors, and the patterns governing their interactions. The architecture emphasizes flexibility, transparency, and progressive elaboration, enabling a balance between structure and adaptability in knowledge work.