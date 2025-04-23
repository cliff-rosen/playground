# FractalBot Orchestrator: State Transitions

## Overview

The FractalBot system follows a clear state transition model that governs how missions, workflows, stages, and steps progress through their lifecycles. These transitions are primarily driven by user actions in the chat and workspace, with the workflow browser and other viewers reflecting these changes.

## Mission States

```
InDesign → PendingGoal → PendingWorkflowStageDesign → InProgress → Completed
                                                          ↓
                                                       Failed
```

### InDesign
- **Trigger**: Mission creation initiated in chat
- **Interface State**:
  - Chat: Active conversation about mission goals
  - Workspace: Mission configuration form
  - Workflow Browser: Not yet visible
  - Mission Dashboard: Shows mission in design phase

### PendingGoal
- **Trigger**: User approves initial mission configuration
- **Interface State**:
  - Chat: Available for workflow discussion
  - Workspace: Shows mission details for review
  - Workflow Browser: Not yet visible
  - Mission Dashboard: Shows mission awaiting workflow design

### PendingWorkflowStageDesign
- **Trigger**: Mission goals approved
- **Interface State**:
  - Chat: Active workflow design discussion
  - Workspace: Shows workflow structure being designed
  - Workflow Browser: Shows initial workflow in compact mode
  - Mission Dashboard: Shows mission in workflow design phase

### InProgress
- **Trigger**: Workflow approved
- **Interface State**:
  - Chat: Available for execution monitoring
  - Workspace: Shows current stage/step details
  - Workflow Browser: Shows active workflow in either mode
  - Mission Dashboard: Shows mission in progress

### Completed
- **Trigger**: All stages complete
- **Interface State**:
  - Chat: Available for review discussion
  - Workspace: Shows final mission state
  - Workflow Browser: Shows completed workflow
  - Mission Dashboard: Shows mission as completed

### Failed
- **Trigger**: Critical error or user cancellation
- **Interface State**:
  - Chat: Available for error discussion
  - Workspace: Shows error details and recovery options
  - Workflow Browser: Shows failed state
  - Mission Dashboard: Shows mission as failed

## Workflow States

```
InDesign → Ready → InProgress → Completed
                     ↓
                  Failed
```

### InDesign
- **Trigger**: Workflow creation initiated
- **Interface State**:
  - Workflow Browser (Compact): Shows basic stage structure
  - Workflow Browser (Full): Shows editable stage/step hierarchy
  - Workspace: Shows current stage/step being designed

### Ready
- **Trigger**: All stages and steps defined
- **Interface State**:
  - Workflow Browser (Compact): Shows complete stage flow
  - Workflow Browser (Full): Shows complete hierarchy
  - Workspace: Shows final workflow configuration

### InProgress
- **Trigger**: Workflow execution begins
- **Interface State**:
  - Workflow Browser (Compact): Highlights current stage
  - Workflow Browser (Full): Shows execution progress
  - Workspace: Shows current execution details

### Completed
- **Trigger**: All stages complete
- **Interface State**:
  - Workflow Browser (Both modes): Shows completed workflow
  - Workspace: Shows final workflow state

### Failed
- **Trigger**: Critical error in workflow execution
- **Interface State**:
  - Workflow Browser (Both modes): Shows failed state
  - Workspace: Shows error details and recovery options

## Stage/Step States

```
InDesign → Ready → InProgress → Completed
                     ↓
                  Failed
```

### InDesign
- **Trigger**: Stage/step creation initiated
- **Interface State**:
  - Workflow Browser (Full): Shows editable component
  - Workspace: Shows configuration form

### Ready
- **Trigger**: All required assets and tools assigned
- **Interface State**:
  - Workflow Browser (Full): Shows configured component
  - Workspace: Shows ready state details

### InProgress
- **Trigger**: Execution begins
- **Interface State**:
  - Workflow Browser (Full): Shows active component
  - Workspace: Shows execution details

### Completed
- **Trigger**: Execution finishes
- **Interface State**:
  - Workflow Browser (Full): Shows completed component
  - Workspace: Shows final state

### Failed
- **Trigger**: Error in execution
- **Interface State**:
  - Workflow Browser (Full): Shows failed component
  - Workspace: Shows error details and recovery options

## Asset States

```
PendingCompletion → PendingApproval → Ready → Archived
        ↓                ↓
      Error           Error
```

### PendingCompletion
- **Trigger**: Asset creation initiated
- **Interface State**:
  - Workspace: Shows asset being created
  - Asset Manager: Shows pending status

### PendingApproval
- **Trigger**: Asset creation complete
- **Interface State**:
  - Workspace: Shows asset for review
  - Asset Manager: Shows awaiting approval

### Ready
- **Trigger**: Asset approved
- **Interface State**:
  - Workspace: Shows approved asset
  - Asset Manager: Shows ready status

### Archived
- **Trigger**: Asset no longer needed
- **Interface State**:
  - Workspace: Shows archived state
  - Asset Manager: Shows archived status

### Error
- **Trigger**: Asset creation/processing fails
- **Interface State**:
  - Workspace: Shows error details
  - Asset Manager: Shows error status

## State Transition Rules

1. **Mission Transitions**
   - Must follow sequential order
   - Each transition requires user approval
   - Cannot revert to previous states
   - Can transition to Failed from any state

2. **Workflow Transitions**
   - Must follow sequential order
   - Transitions automatically based on stage completion
   - Can be reset to InDesign if workflow needs redesign
   - Can transition to Failed from InProgress

3. **Stage/Step Transitions**
   - Must follow sequential order
   - Transitions automatically based on completion
   - Can be reset to InDesign if configuration needs update
   - Can transition to Failed from InProgress

4. **Asset Transitions**
   - Must follow sequential order
   - Can be archived at any time
   - Cannot revert to previous states
   - Can transition to Error from PendingCompletion or PendingApproval

## Interface Updates

1. **Workflow Browser Updates**
   - Compact mode updates stage nodes
   - Full mode updates entire hierarchy
   - Both modes reflect current state
   - Clicking components opens details in workspace

2. **Workspace Updates**
   - Shows current component details
   - Updates based on state changes
   - Provides approval interface
   - Shows execution progress
   - Displays error details when in Failed/Error states

3. **Mission Dashboard Updates**
   - Reflects current mission state
   - Shows overall progress
   - Updates based on state transitions
   - Highlights failed components

4. **Asset Manager Updates**
   - Reflects current asset states
   - Updates based on state changes
   - Highlights assets in error state
