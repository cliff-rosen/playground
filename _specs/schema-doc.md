# FractalBot Orchestrator: Core Schema Documentation

## Overview

FractalBot is a mission-oriented workflow orchestration system. Unlike traditional bots that organize around conversation threads, FractalBot organizes around missions - discrete, goal-oriented projects that can be broken down into manageable components. This document focuses on two essential aspects of the system:

1. **Temporal Evolution**: How the system evolves through different states
2. **Hierarchical Structure**: How components are organized from mission to tools

## Hierarchical Structure

The system follows a strict hierarchy where each level breaks down into more specific components:

```
Mission
└── Workflow
    └── Stages (ordered)
        └── Steps (ordered)
            ├── Atomic Steps (with tools)
            └── Composite Steps (with substeps)
```

### Mission Level
- The fundamental unit of organization in FractalBot
- Represents a complete, self-contained project with clear goals
- Owns all assets used in the mission
- Contains one workflow definition
- Example: "Create a marketing website"
- Each mission has a clear lifecycle from creation to completion

### Workflow Level
- Embedded within the mission
- Defines the overall process
- Contains ordered stages
- References mission assets it needs/produces

### Stage Level
- Represents a major phase of work
- Contains ordered steps
- References mission assets it needs/produces
- Example: "Design Phase", "Development Phase"

### Step Level
- Can be Atomic or Composite
- Atomic steps use specific tools
- Composite steps contain substeps
- References mission assets it needs/produces

## State Evolution

The system evolves through well-defined states at each level:

### Mission States
```
InDesign → PendingGoal → PendingWorkflowStageDesign → InProgress → Completed
```

1. **InDesign**
   - Mission is being created
   - Initial assets are being defined
   - Workflow structure is being designed

2. **PendingGoal**
   - Mission definition is complete
   - Waiting for approval to proceed
   - Initial assets are ready

3. **PendingWorkflowStageDesign**
   - Mission is approved
   - Workflow and stages are being defined
   - Step structure is being designed

4. **InProgress**
   - Workflow is approved
   - Stages are executing in order
   - Assets are being produced and consumed

5. **Completed**
   - All stages are complete
   - All desired assets are produced
   - Mission goals are achieved

### Stage and Step States
```
InDesign → Ready → InProgress → Completed
```

1. **InDesign**
   - Component is being defined
   - Input/output assets are being specified
   - For steps: tools are being assigned

2. **Ready**
   - Component is fully defined
   - All required assets are available
   - For steps: all tools are assigned
   - Waiting to begin execution

3. **InProgress**
   - Component is executing
   - Assets are being consumed/produced
   - For steps: tools are running

4. **Completed**
   - Component has finished
   - Output assets are ready
   - For steps: tools have completed

### Asset States
```
PendingCompletion → PendingApproval → Ready → Archived
```

1. **PendingCompletion**
   - Asset is being created
   - Content is not yet final

2. **PendingApproval**
   - Asset is complete
   - Waiting for approval

3. **Ready**
   - Asset is approved
   - Available for use

4. **Archived**
   - Asset is no longer needed
   - Kept for reference

## Key Relationships

1. **Asset Ownership**
   - All assets belong to the mission
   - Other components reference assets by name
   - Assets flow through the hierarchy as they're produced/consumed

2. **State Dependencies**
   - Parent states depend on child states
   - Mission can't complete until all stages complete
   - Stage can't complete until all steps complete
   - Step can't complete until all substeps complete

3. **Execution Flow**
   - Stages execute in order
   - Steps execute in order
   - Atomic steps execute tools
   - Composite steps execute substeps

## Example: Website Creation

### Hierarchical Breakdown
```
Mission: Create Marketing Website
└── Workflow
    ├── Stage 1: Design
    │   ├── Step 1.1: Create Wireframes (Atomic)
    │   └── Step 1.2: Design UI (Atomic)
    ├── Stage 2: Development
    │   ├── Step 2.1: Setup Environment (Composite)
    │   │   ├── Initialize Project (Atomic)
    │   │   └── Configure Tools (Atomic)
    │   └── Step 2.2: Build Components (Atomic)
    └── Stage 3: Deployment
        └── Step 3.1: Deploy to Production (Atomic)
```

### State Evolution
1. Mission starts in InDesign
2. Moves to PendingGoal when defined
3. Moves to PendingWorkflowStageDesign when approved
4. Moves to InProgress when workflow is approved
5. Each stage moves through InDesign → InProgress → Completed
6. Each step moves through InDesign → InProgress → Completed
7. Assets move through PendingCompletion → PendingApproval → Ready
8. Mission completes when all stages are done




