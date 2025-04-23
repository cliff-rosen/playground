# FractalBot Orchestrator - Complete Sample Use Case

## System States Overview

| State ID | Name | Description |
|----------|------|-------------|
| S0 | Initial | No mission, workflow, or assets defined |
| S1 | Mission Defined | Mission set, awaiting workflow design |
| S2 | Workflow Designed | Workflow stages drafted, awaiting step resolution |
| S3 | Step Resolution | Current step being configured/resolved |
| S4 | Step Execution | Current step executing |
| S5 | Step Completed | Step execution finished, output ready for review |
| S6 | Stage Completed | All steps in current stage completed |
| S7 | Mission Completed | All stages and steps completed |

## UI Components State Mapping

| Component | State S0 | State S1 | State S2 | State S3 | State S4 | State S5 | State S6 |
|-----------|----------|----------|----------|----------|----------|----------|----------|
| Chat (Col 1) | Active | Active | Active | Active | Active | Active | Active |
| Mission (Col 2 Top) | Empty | Populated | Populated | Populated | Populated | Populated | Populated |
| Workflow (Col 2 Top) | Hidden | Empty | Populated, Collapsed | Populated, Current Stage Expanded | Populated, Current Stage Expanded | Populated, Current Stage Expanded | Populated, Next Stage Expanded |
| Workspace (Col 2 Bottom) | Empty or Chat | Mission Card Editor | Workflow Stage Editor | Step Editor/Resolver | Step Execution View | Output Review | Next Stage Design |
| Assets (Col 3) | Empty | Empty | Empty | Updated with inputs | Updated with inputs | Updated with new output | Updated with stage outputs |

## Complete Sample Use Case

### Phase 1: Initial Mission Definition
1. **Initial State**
   - Screen Areas:
     - Col 1: Chat interface active
     - Col 2 Top: Empty (no mission)
     - Col 2 Bottom: Empty workspace
     - Col 3: Empty assets panel
   - Status: Pending goal definition
   - System State: S0 (Initial)

2. **Mission Proposal**
   - User and bot exchange messages about mission requirements
   - Bot proposes mission card in workspace
   - Mission card contains:
     - Title: "Analyze Customer Feedback for Q1 Product Release"
     - Description: "Extract key insights and sentiment trends from customer emails about the new dashboard feature"
     - Initial Inputs: [Customer Email Archive]
     - Desired Outputs: [Insights Summary, Sentiment Analysis, Action Items]

3. **Mission Acceptance**
   - User edits description to add "prioritize issues by severity"
   - User clicks "Accept Mission" in workspace
   - Screen Areas Update:
     - Col 2 Top: Mission card appears
     - Col 2 Bottom: Workspace clears
     - Status: Pending workflow stage design
   - System State: S1 (Mission Defined)

### Phase 2: Workflow Design
4. **Workflow Proposal**
   - Bot announces it will propose a workflow
   - Bot places draft workflow in workspace with three stages:
     - Stage 1: "Data Preparation"
       - Input: [Customer Email Archive]
       - Output: [Processed Email Dataset]
       - Description: "Extract and normalize customer feedback from emails"
     - Stage 2: "Analysis & Classification"
       - Input: [Processed Email Dataset]
       - Output: [Classified Feedback Items, Sentiment Scores]
       - Description: "Categorize feedback and determine sentiment"
     - Stage 3: "Synthesis & Recommendations"
       - Input: [Classified Feedback Items, Sentiment Scores]
       - Output: [Insights Summary, Prioritized Issues, Action Items]
       - Description: "Generate insights and prioritize by severity"

5. **Workflow Acceptance**
   - User edits Stage 2 description to include "tag feature requests"
   - User clicks "Accept Workflow" in workspace
   - Screen Areas Update:
     - Col 2 Top: Workflow appears in collapsed form
     - Col 2 Bottom: Workspace clears
     - Status: Running - Stage 1 (Data Preparation)
   - System State: S2 (Workflow Designed)

### Phase 3: Stage 1 Execution
6. **Stage 1 Step Resolution**
   - First stage highlighted in workflow panel
   - Bot announces it's configuring Stage 1
   - Bot proposes a single atomic step for Stage 1:
     - Step 1.1: "Email Extraction & Normalization"
     - Tool: EmailProcessorTool
     - Input: [Customer Email Archive]
     - Output: [Processed Email Dataset]
   - Step configuration appears in workspace with run button
   - Bot announces step is ready to execute
   - System State: S3 (Step Resolution)

7. **Stage 1 Step Execution**
   - User clicks run button in workspace
   - Step status updates to "In Progress"
   - Progress indicator appears
   - Placeholder for output appears
   - System State: S4 (Step Execution)

8. **Stage 1 Completion**
   - Tool status updates to "Complete"
   - Output materializes in workspace:
     - [Processed Email Dataset] with 328 normalized feedback items
   - "Accept Output" button appears
   - Bot announces successful extraction
   - User reviews output in modal popup
   - User clicks "Accept and Add to Assets"
   - Output added to assets panel
   - System State: S5 → S6 (Step Completed → Stage Completed)

### Phase 4: Stage 2 Execution - Complex Resolution
9. **Stage 2 Initialization**
   - Workflow panel updates to focus on Stage 2
   - Bot announces "Designing Stage 2: Analysis & Classification"
   - Workspace shows bot message "Designing stage"
   - System State: S3 (Step Resolution - new stage)

10. **Stage 2 Step Design**
    - Bot proposes three sequential steps for Stage 2:
      - Step 2.1: "Feedback Categorization"
        - Tool: CategoryClassifierTool
        - Input: [Processed Email Dataset]
        - Output: [Categorized Feedback]
      - Step 2.2: "Sentiment Analysis & Feature Tagging"
        - Step Type: Composite (requires further decomposition)
        - Input: [Categorized Feedback]
        - Output: [Sentiment Analysis, Feature Tags]
        - Note: "This step requires multiple operations"
      - Step 2.3: "Results Compilation"
        - Tool: DataAggregatorTool
        - Input: [Sentiment Analysis, Feature Tags]
        - Output: [Classified Feedback Items, Sentiment Scores]
    - Bot highlights that Step 2.2 will need further resolution
    - System State: S3 (Step Resolution)

11. **Step 2.1 Execution**
    - Workspace focuses on Step 2.1 configuration
    - CategoryClassifierTool parameters displayed
    - User clicks "Run Step"
    - Tool executes and completes
    - Output [Categorized Feedback] added to assets
    - System auto-advances to next step
    - System State: S4 → S5 → S3 (Step Execution → Step Completed → Step Resolution)

12. **Step 2.2 Fractal Expansion**
    - Workspace shows Step 2.2 with "Needs Resolution" status
    - Bot announces "This step requires decomposition"
    - Bot proposes substeps:
      - Substep 2.2.1: "Sentiment Extraction"
        - Tool: SentimentAnalyzerTool
        - Input: [Categorized Feedback]
        - Output: [Sentiment Analysis]
      - Substep 2.2.2: "Feature Detection"
        - Tool: KeyphraseExtractorTool
        - Input: [Categorized Feedback]
        - Output: [Raw Feature Mentions]
      - Substep 2.2.3: "Feature Standardization"
        - Tool: EntityNormalizerTool
        - Input: [Raw Feature Mentions]
        - Output: [Feature Tags]
    - Workspace shows substep structure with nested view
    - User approves decomposition
    - System State: S3 (Step Resolution - with substeps)

13. **Substep Execution Loop**
    - For each substep (2.2.1, 2.2.2, 2.2.3):
      - Workspace focuses on current substep
      - Tool configuration displayed
      - User runs tool
      - Output reviewed and accepted
      - System advances to next substep
    - After all substeps complete:
      - Outputs aggregated to form composite step output
      - [Sentiment Analysis] and [Feature Tags] added to assets
      - System auto-advances to Step 2.3
      - System State: Cycles through S3 → S4 → S5 for each substep

14. **Step 2.3 Execution**
    - Workspace focuses on Step 2.3
    - DataAggregatorTool configuration displayed
    - User runs tool
    - Output [Classified Feedback Items, Sentiment Scores] reviewed and accepted
    - Added to assets panel
    - System advances to Stage 3
    - System State: S4 → S5 → S6 (Step Execution → Step Completed → Stage Completed)

### Phase 5: Stage 3 Execution
15. **Stage 3 Initialization**
    - Workflow panel updates to focus on Stage 3
    - Bot announces "Designing final stage: Synthesis & Recommendations"
    - Bot proposes two steps for Stage 3:
      - Step 3.1: "Generate Insights & Priorities"
        - Tool: InsightGeneratorTool
        - Input: [Classified Feedback Items, Sentiment Scores]
        - Output: [Insights Summary, Prioritized Issues]
      - Step 3.2: "Action Item Creation"
        - Tool: ActionItemGeneratorTool
        - Input: [Insights Summary, Prioritized Issues]
        - Output: [Action Items]
    - System State: S3 (Step Resolution - new stage)

16. **Stage 3 Execution**
    - Each step executed in sequence:
      - Step configured
      - Tool runs
      - Output reviewed and accepted
      - System advances
    - Final outputs added to assets:
      - [Insights Summary]
      - [Prioritized Issues]
      - [Action Items]
    - System State: Cycles through S3 → S4 → S5 for each step

17. **Mission Completion**
    - All stages complete
    - Bot announces "Mission complete"
    - Final deliverables displayed in workspace:
      - Summary of key insights
      - Prioritized issues by severity
      - Recommended action items
    - Mission status updated to "Completed"
    - System offers to export deliverables
    - System State: S7 (Mission Completed)

## Key State Transitions

Throughout this example, we observed these primary transitions:

1. **Initial → Mission Defined (S0 → S1)**
   - Trigger: User accepts mission
   - Result: Mission established in system

2. **Mission Defined → Workflow Designed (S1 → S2)**
   - Trigger: User accepts workflow
   - Result: Stage/step framework established

3. **Workflow Designed → Step Resolution (S2 → S3)**
   - Trigger: System focuses on first step
   - Result: Step configuration appears

4. **Step Resolution → Step Execution (S3 → S4)**
   - Trigger: User runs configured step
   - Result: Tool processes inputs

5. **Step Execution → Step Completed (S4 → S5)**
   - Trigger: Tool execution finishes
   - Result: Output ready for review

6. **Step Completed → Step Resolution/Stage Completed (S5 → S3/S6)**
   - Trigger: User accepts output
   - Result: Next step or stage becomes focus

7. **Fractal Expansion (special case)**
   - Trigger: Step needs decomposition
   - Result: Step expands into substeps

### Special Case: Fractal Expansion
- **Trigger**: Step cannot be resolved to atomic operation
- **Precondition**: Step requires decomposition
- **System Actions**:
  - Change step type from atomic to composite
  - Generate substeps
  - Initialize first substep for resolution
- **UI Changes**:
  - Step expands to show substeps
  - Workspace updates to focus on first substep
  - UI maintains hierarchy visualization

## Status Indicators

| Component | Status Values |
|-----------|---------------|
| Mission | Not Started, Defined, In Progress, Completed |
| Workflow | Not Started, Designed, In Progress, Completed |
| Stage | Not Started, Pending Resolution, In Progress, Completed |
| Step | Not Started, Resolving, Resolved, In Progress, Completed |
| Tool | Not Started, Configuring, Ready, In Progress, Completed |

## Decision Points

1. **Mission Definition**
   - User can edit proposed mission before accepting
   - User can reject and request new mission proposal

2. **Workflow Design**
   - User can edit proposed workflow stages
   - User can add/remove/reorder stages
   - User can modify inputs/outputs for each stage

3. **Step Resolution**
   - System decides whether step is atomic or needs decomposition
   - User can override and request alternative resolution
   - User can manually assign specific tools

4. **Output Review**
   - User can accept output as-is
   - User can request modifications before accepting
   - User can reject and request step re-execution

## UI Representation Details

### Component States During Fractal Expansion

The most distinctive aspect of the FractalBot interface is how it handles the fractal expansion pattern, where a step is decomposed into substeps:

1. **Workflow Panel Display**
   - Parent step shows expansion indicator (→)
   - When expanded, substeps appear indented beneath parent
   - Current substep is highlighted
   - Navigation breadcrumb shows: Mission > Stage 2 > Step 2.2 > Substep 2.2.1

2. **Workspace Representation**
   - Split view shows:
     - Top: Parent step context (what we're trying to accomplish)
     - Middle: Current substep details and controls
     - Bottom: Execution results for current substep
   - Relationship between substeps and parent goal is visually maintained

3. **Status Visualization**
   - Parent step shows "Resolving" status until all substeps complete
   - Each substep has its own status indicator
   - Progress tracker shows both parent step progress (3 of 3 substeps) and overall workflow progress

### Visual State Indicators

| State | Visual Indicators |
|-------|-------------------|
| Not Started | Gray, hollow icon |
| Pending | Yellow, pulsing icon |
| In Progress | Blue, animated icon |
| Completed | Green, solid icon |
| Failed | Red, solid icon |

### Asset Representation

As the workflow progresses, assets evolve and accumulate:

1. **Asset Evolution Chain**
   - Raw Input: [Customer Email Archive]
   - Stage 1 Output: [Processed Email Dataset]
   - Stage 2 Intermediate: [Categorized Feedback]
   - Stage 2 Composite: [Sentiment Analysis], [Feature Tags]
   - Stage 2 Final: [Classified Feedback Items, Sentiment Scores]
   - Stage 3 Final: [Insights Summary], [Prioritized Issues], [Action Items]

2. **Asset Visualization**
   - Each asset shows:
     - Icon representing type (document, dataset, etc.)
     - Title and description
     - Origin (which step created it)
     - Downstream dependencies (which steps will use it)
     - Preview thumbnail where applicable
