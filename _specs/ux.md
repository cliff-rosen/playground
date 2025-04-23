# FractalBot Orchestrator: UX

## Core Concepts

### Mission-Oriented Interface
Unlike traditional bots that organize around conversation threads, FractalBot organizes around missions - discrete, goal-oriented projects. The interface is designed to support the complete lifecycle of a mission from creation to completion.

### Primary Interaction Spaces
Users primarily interact with FractalBot through two spaces:
1. **Chat Interface**: For natural language communication with the Copilot
2. **Workspace**: For reviewing, editing, and approving mission components

All other interface components serve as viewers and monitors rather than direct interaction spaces.

## Interface Components

### Chat Interface
- **Function**: Primary interaction space with Copilot
- **Users**: End users, Copilot
- **Interactions**:
  - Mission planning and creation
  - Workflow design and modification
  - Stage and step configuration
  - Tool assignment and configuration
  - Status queries and updates
  - Problem resolution
- **States**:
  - Active: In conversation
  - Idle: Available but not active
  - Processing: Working on a request

### Workspace
- **Function**: Primary space for reviewing and approving mission components
- **Users**: End users
- **Interactions**:
  - Review Copilot proposals
  - Edit mission components
  - Approve/reject changes
  - Configure assets and tools
- **Content Types**:
  - Mission configurations
  - Workflow designs
  - Stage/step definitions and tool assignments
  - Assets
- **Navigation**:
  - Select components from viewers to view/edit details
  - Return to viewers for high-level overview

### Mission Dashboard (Viewer)
- **Function**: Overview and monitoring of missions
- **Users**: All system users
- **Viewing**:
  - Mission status/progress
  - Mission details
- **States**:
  - InDesign: Mission creation and configuration
  - PendingGoal: Awaiting approval
  - PendingWorkflowStageDesign: Workflow being designed
  - InProgress: Active execution
  - Completed: Mission finished

### Workflow Browser (Viewer)
- **Function**: Visualization of mission workflow
- **Users**: End users, Copilot
- **Viewing Modes**:
  - **Compact Mode**:
    - Horizontal graph layout
    - Shows stages as nodes
    - Visualizes stage dependencies and flow
    - Quick overview of workflow structure
  - **Full Mode**:
    - Explorer-style interface
    - One row per stage/step/substep
    - Expandable/collapsible hierarchy
    - Detailed view of all components
- **Viewing**:
  - Stage and step structure
  - Asset requirements
  - Tool assignments
  - Execution progress
- **Navigation**:
  - Click on stages/steps to view details in workspace
  - Toggle between compact and full modes
  - Expand/collapse hierarchy in full mode
- **States**:
  - InDesign: Workflow being defined
  - Ready: Workflow fully defined
  - InProgress: Workflow executing
  - Completed: Workflow finished

### Asset Manager (Viewer)
- **Function**: Monitoring and management of assets
- **Users**: End users, Tools
- **Viewing**:
  - Asset versions
  - Asset states
  - Dependencies
- **States**:
  - PendingCompletion: Being created
  - PendingApproval: Awaiting approval
  - Ready: Approved and available
  - Archived: No longer needed

## Key Interaction Patterns

### Chat-Driven Design
- All design and configuration happens through chat
- Copilot proposes changes in the workspace
- User reviews and approves in the workspace
- Changes are reflected in viewers

### Workspace-Based Review
- All proposals appear in workspace
- User can inspect and modify before approval
- Approval triggers state transitions
- Changes propagate to viewers

### Mission Lifecycle
1. **Mission Creation**
   - User discusses mission in chat
   - Copilot proposes mission in workspace
   - User reviews and approves
   - Mission moves to PendingGoal

2. **Workflow Design**
   - User discusses workflow in chat
   - Copilot proposes structure in workspace
   - User reviews and modifies
   - Moves to PendingWorkflowStageDesign

3. **Execution**
   - Workflow approved in workspace
   - Stages execute in order
   - Steps transition through states
   - Assets are produced and approved

4. **Completion**
   - All stages complete
   - Final assets approved
   - Mission marked as completed

### Asset Flow
- Assets are owned by mission
- Components reference assets by name
- Asset states control availability
- Version history is maintained

## Implementation Considerations

### State Management
- Clear visual indicators of current state in viewers
- Appropriate actions enabled/disabled based on state
- State transition confirmation in workspace
- Progress tracking in viewers

### Event Handling
- State changes update viewers
- Asset updates notify dependent components
- Tool execution results update step state
- User approvals trigger state transitions

### Persistence
- Mission state is preserved between sessions
- Asset versions are maintained
- Execution history is recorded
- User preferences are saved

### Extension Points
- Custom tool integration
- Asset type support
- State transition hooks
- UI customization options

This document outlines the key components of the FractalBot Orchestrator system, their behaviors, and the patterns governing their interactions. The architecture emphasizes flexibility, transparency, and progressive elaboration, enabling a balance between structure and adaptability in knowledge work.