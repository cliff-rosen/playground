# FractalBot Orchestrator: Schema Documentation

## Overview

FractalBot is a hierarchical workflow orchestration system that breaks down complex tasks (Missions) into manageable components using a fractal approach. This document explains the core entities, their relationships, and state transitions in practical terms.

## Core Entities and Their Relationships

### Mission → Workflow → Stage → Step Hierarchy

1. **Mission** (Top Level)
   - Represents the overall goal or project
   - Contains embedded Workflow definition
   - Tracks high-level status and desired outcomes
   - Example: "Create a marketing website for our product"

2. **Workflow** (Organization Level)
   - Embedded within Mission
   - Contains multiple ordered Stages
   - Manages shared assets across stages
   - Inherits Mission's inputs and outputs
   - Example: Website creation workflow with stages for design, development, and deployment

3. **Stage** (Phase Level)
   - Belongs to one Workflow
   - Contains multiple ordered Steps
   - Represents a major phase of work
   - Example: "Frontend Development Stage"

4. **Step** (Execution Level)
   - Belongs to one Stage
   - Can be Atomic (single tool) or Composite (contains substeps)
   - Represents actual work units
   - Example: "Set up React components" or "Deploy to production"

### Asset Management

Assets are the resources and artifacts that flow through the system:
- Each entity (Mission, Workflow, Stage, Step) can specify required inputs and expected outputs
- Assets are versioned and tracked throughout the workflow
- Assets have clear states: PendingCompletion → PendingApproval → Ready → Archived

### Tool Integration

Tools are the execution units that perform actual work:
- Can be system tools, user tools, or third-party integrations
- AI agents are specially marked tools (isAgent: true)
- Tools have defined input/output schemas for validation
- Tools are categorized for easy discovery

### Copilot Assistance

The Copilot entity provides AI assistance throughout the process:
- Maintains conversation context
- Suggests workflow approaches
- Tracks capabilities and mission context
- Provides interactive guidance

## State Transitions

### Mission Lifecycle

```
Initial State → Pending Goal → Pending Workflow Design → In Progress → Completed
```

Key transition points:
1. Mission Card Approval (Pending Goal → Pending Workflow Design)
2. Workflow Approval (Pending Workflow Design → In Progress)
3. Final Delivery Confirmation (In Progress → Completed)

### Entity Status States

All major entities (Mission, Workflow, Stage, Step) share common status states:
- InDesign: Being configured or modified
- InProgress: Currently executing
- Completed: Successfully finished
- Failed: Encountered an error

## Practical Implementation Considerations

1. **Fractal Expansion**
   - Steps can be expanded into substeps as needed
   - Allows for dynamic refinement of work units
   - Enables both high-level planning and detailed execution
   - Key rule: for a step to be resolved (and ready to run), it and all its children must either be atomic and have a tool assigned or be composite and have children that meet this same condition.

2. **Asset Flow**
   - Assets are typically either uploaded by the user or created by tools and then approved by the user
   - If an asset is an input to a Stage, that means one or more steps in the Stage use that asset
   - If the asset is an output from a Stage, that means one or more steps in the Stage output that asset
   - The same concept applies at the step level.

3. **State Management**
   - Each level maintains its own status
   - Parent status depends on children states
   - Clear transition points for approval and verification

4. **Tool Integration**
   - Standardized input/output schemas

## Sample Lifecycle

Let's walk through a practical example of creating a marketing website using FractalBot:

### 1. Mission Creation
```json
{
  "id": "m-123",
  "title": "Create Company Marketing Website",
  "description": "Design and develop a modern marketing website for our AI product",
  "initialInputs": [
    { "type": "Document", "name": "brand_guidelines.pdf" },
    { "type": "Image", "name": "company_logo.svg" }
  ],
  "desiredOutputs": [
    { "type": "Website", "name": "live_marketing_site" },
    { "type": "Document", "name": "deployment_documentation" }
  ],
  "status": "PendingGoal",
  "workflow": {
    "inputs": ["brand_guidelines.pdf", "company_logo.svg"],
    "outputs": ["live_marketing_site", "deployment_documentation"],
    "stages": [
      {
        "id": "s-1",
        "description": "Design Phase",
        "inputs": ["brand_guidelines.pdf", "company_logo.svg"],
        "outputs": ["website_design.figma", "design_specs.md"],
        "status": "InDesign"
      },
      {
        "id": "s-2",
        "description": "Development Phase",
        "inputs": ["website_design.figma", "design_specs.md"],
        "outputs": ["website_codebase", "test_reports"],
        "status": "InDesign"
      },
      {
        "id": "s-3",
        "description": "Deployment Phase",
        "inputs": ["website_codebase"],
        "outputs": ["live_marketing_site", "deployment_documentation"],
        "status": "InDesign"
      }
    ],
    "currentStageIndex": 0,
    "status": "InDesign"
  }
}
```

### 2. Stage Execution Example (Development Phase)
```json
{
  "id": "s-2",
  "description": "Development Phase",
  "inputs": ["website_design.figma", "design_specs.md"],
  "outputs": ["website_codebase", "test_reports"],
  "status": "InProgress",
  "steps": [
    {
      "id": "step-1",
      "description": "Setup Development Environment",
      "stepType": "Composite",
      "inputs": ["design_specs.md"],
      "outputs": ["dev_environment_ready"],
      "substeps": [
        {
          "id": "step-1.1",
          "description": "Initialize Next.js Project",
          "tool": "next-cli",
          "stepType": "Atomic",
          "inputs": ["design_specs.md"],
          "outputs": ["next_project"]
        },
        {
          "id": "step-1.2",
          "description": "Configure TailwindCSS",
          "tool": "npm-install",
          "stepType": "Atomic",
          "inputs": ["next_project"],
          "outputs": ["dev_environment_ready"]
        }
      ]
    },
    {
      "id": "step-2",
      "description": "Implement Core Components",
      "stepType": "Composite",
      "inputs": ["website_design.figma", "dev_environment_ready"],
      "outputs": ["core_components"],
      "substeps": [
        {
          "id": "step-2.1",
          "description": "Create Hero Section",
          "tool": "react-component-generator",
          "stepType": "Atomic",
          "inputs": ["website_design.figma"],
          "outputs": ["hero_component"]
        },
        {
          "id": "step-2.2",
          "description": "Build Navigation",
          "tool": "react-component-generator",
          "stepType": "Atomic",
          "inputs": ["website_design.figma"],
          "outputs": ["nav_component"]
        }
      ]
    }
  ],
  "currentStepIndex": 0
}
```

### 4. State Transitions and Asset Flow

1. **Initial State → Pending Goal**
   - User uploads brand guidelines and logo
   - Copilot helps define mission parameters
   - Mission card created and pending approval

2. **Pending Goal → Pending Workflow Design**
   - Mission approved
   - Copilot suggests workflow structure
   - Stages and high-level steps defined

3. **Pending Workflow Design → In Progress**
   - Workflow approved
   - Design Phase begins
   - Tools start executing atomic steps

4. **Step Execution Flow**
   ```
   Parent Step (Composite)
   ├── Substep 1 (Atomic) - [InProgress → Completed]
   ├── Substep 2 (Atomic) - [InProgress → Completed]
   └── Parent Status      - [InProgress → Completed]
   ```

5. **Asset Evolution Example**
   ```
   website_design.figma (PendingCompletion)
   └── website_design.figma v2 (PendingApproval)
       └── website_design.figma v3 (Ready)
   ```

6. **In Progress → Completed**
   - All stages completed successfully
   - Final deliverables approved
   - Documentation generated

This lifecycle demonstrates how:
- Missions break down into manageable pieces
- Assets flow through the system
- Steps resolve into atomic actions
- States transition based on approvals and completions
- Tools integrate at the atomic step level




