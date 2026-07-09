# SeedhaLoad Daily Update Comment Template

Prepare daily update comments for the following active SeedhaLoad Sprint 0 GitHub issues.

Use only the information provided. Do not invent progress, blockers, ETA or evidence.

## Input Format

**Input issues:**
[Paste issue list with owner, current status, progress, blocker, next step, ETA, evidence]

Example input:
```
Issue TG-BE-001: Supabase RLS Setup
- Owner: Backend Developer
- Current status: In Progress
- Progress: RLS policies defined for customers and owners tables
- Blocker: Awaiting Architect approval on row-level security design
- Next step: Schedule review with Architect
- ETA: Sprint day 3
- Evidence: GitHub PR #42, policy design document link
```

## Output Format

For each issue, create a separate comment using this exact format:

```markdown
## Daily Update

**Date:** [today's date in YYYY-MM-DD format]
**Owner / Agent:** [owner name or role]
**Progress:** [what was completed today]
**Blocker:** [blocker title or "None"]
**Next Step:** [what happens next]
**ETA:** [delivery date or sprint day]
**Evidence:** [link(s) or "Evidence pending"]
```

## Comment Generation Rules

### Progress Section
- ✅ Describe only completed work from provided input
- ✅ Be specific and measurable (e.g., "Implemented 3 RLS policies" not "made progress")
- ✅ Reference PR numbers, branches, or commits if provided
- ✅ Do NOT invent completed work
- ✅ If no progress reported, write "No update available" (flag for PM)

### Blocker Section
- ✅ If blocker exists, state title clearly
- ✅ If no blocker, write "None"
- ✅ Do NOT invent blockers
- ✅ After each blocker comment, provide recommended label(s):
  - `blocked` — always required for any blocker
  - `founder-decision` — Founder approval needed
  - `finance-blocker` — Razorpay, fee flow, payment gate
  - `legal-blocker` — consent, privacy, KYC, compliance
  - `devops` — deployment, secrets, environments, CI/CD
  - `qa` — test scenario, UAT evidence, negative control
  - `backend-blocker` — Supabase, PostgreSQL, Edge Functions, RLS
  - `architect-blocker` — architecture, technical guardrails

### Next Step Section
- ✅ State the immediate next action
- ✅ Reference owner if handoff occurs
- ✅ Be actionable (e.g., "Schedule review with Architect" not "continue work")
- ✅ Do NOT invent next steps

### ETA Section
- ✅ Use format: "Sprint day N" or "YYYY-MM-DD"
- ✅ If ETA not provided, write "TBD"
- ✅ If blocker exists and blocks ETA, flag with "Blocked—ETA at risk"

### Evidence Section
- ✅ List all provided evidence links (GitHub PR, test report, screenshot, API response, deployment log)
- ✅ If evidence missing but mentioned in progress, write "Evidence pending"
- ✅ If no evidence provided, write "Evidence pending"
- ✅ Do NOT invent evidence links
- ✅ Format: "GitHub PR #42, Test report: [link], Deployment: [link]"

## Recommended Daily Update Comment Template (Filled)

```markdown
## Daily Update

**Date:** 2026-07-09
**Owner / Agent:** Backend Developer (Alice)
**Progress:** Implemented RLS policies for customers and owners tables. PR #42 merged to develop branch. 4 out of 5 security scenarios tested.
**Blocker:** Awaiting Architect approval on row-level security design
  - Recommended labels: `blocked` `architect-blocker`
**Next Step:** Schedule review with Architect to close security design feedback
**ETA:** Sprint day 3 (blocked—ETA at risk if not resolved by end of Sprint day 2)
**Evidence:** GitHub PR #42, RLS test report: [link pending]
```

## Blocker Handling in Daily Update

If a blocker is reported:

1. **State blocker title clearly** — "Awaiting Architect approval on RLS design"
2. **Recommend labels** — Add `blocked` + context label (architect-blocker, finance-blocker, legal-blocker, devops, qa, backend-blocker, founder-decision)
3. **Flag if ETA affected** — "ETA at risk—blocked since Sprint day 1"
4. **Provide next step to unblock** — "Waiting for Architect review; scheduled for Sprint day 2"
5. **Do NOT close blocker** — Only issue owner or unblocking agent can resolve blocker label

## Evidence Pending Handling

If progress is reported but evidence is missing:

- ✅ Write "Evidence pending" in Evidence section
- ✅ Add `evidence-pending` label to issue
- ✅ Set next step to "Attach test report" or "Post deployment screenshot"
- ✅ Give owner 24 hours to attach evidence before flagging in PM daily report

## Multiple Issues Processing

When processing multiple issues:

1. Create one separate comment per issue
2. Do NOT combine multiple issues into single comment
3. Post comments in order: lowest issue ID first
4. After all comments posted, summarize in PM daily stand-up report (see daily-standup-report-template.md)

## Common Daily Update Scenarios

### Scenario 1: Blocker Exists, No Progress
```markdown
## Daily Update

**Date:** 2026-07-09
**Owner / Agent:** Backend Developer
**Progress:** No progress—blocked since Sprint day 1
**Blocker:** Awaiting Architect approval on database migration approach
  - Recommended labels: `blocked` `architect-blocker`
**Next Step:** Ping Architect to schedule review
**ETA:** Blocked—cannot proceed
**Evidence:** Design document: [link], Email request: [link]
```

### Scenario 2: On Track, No Blocker
```markdown
## Daily Update

**Date:** 2026-07-09
**Owner / Agent:** Frontend Developer
**Progress:** Completed authentication UI flow. 3 screens implemented in FlutterFlow. Unit tests added.
**Blocker:** None
**Next Step:** Create demo for QA team
**ETA:** Sprint day 2
**Evidence:** GitHub PR #45, FlutterFlow link: [link], Test coverage report: [link]
```

### Scenario 3: Evidence Pending
```markdown
## Daily Update

**Date:** 2026-07-09
**Owner / Agent:** QA Tester
**Progress:** Completed 8 out of 10 test scenarios for platform fee flow. All tests passed—no critical bugs found.
**Blocker:** None
**Next Step:** Attach UAT test report and QA sign-off
**ETA:** Sprint day 2
**Evidence:** Evidence pending—test report to be uploaded by EOD
  - Recommended label: `evidence-pending`
```

### Scenario 4: Split Blocker (Multiple Owners)
```markdown
## Daily Update

**Date:** 2026-07-09
**Owner / Agent:** Backend Developer
**Progress:** Edge Function for platform fee calculation complete. Awaiting Finance review of fee logic.
**Blocker:** Awaiting Finance approval on platform fee calculation (₹49 test mode)
  - Recommended labels: `blocked` `finance-blocker`
**Next Step:** Finance team to review fee logic and confirm ₹49 is correct for test
**ETA:** Sprint day 2 (Finance decision required)
**Evidence:** GitHub PR #38, Fee logic document: [link], Test transaction log: [link]
```

## Quality Checks Before Posting

- ✅ Did I use only provided information? (No inventions)
- ✅ Is evidence real (link or "Evidence pending")? (No fake links)
- ✅ Is blocker accurate? (Do not exaggerate)
- ✅ Is ETA realistic? (Blocked issues marked "at risk")
- ✅ Are recommended labels included? (blocker + context)
- ✅ Is next step actionable? (Not vague)
- ✅ Does comment follow exact format? (Date, Owner, Progress, Blocker, Next Step, ETA, Evidence)

## Posting Instructions

1. **Who posts:** Project Manager or issue owner
2. **When:** Daily, at 9:00 AM or end of business
3. **Where:** As comment on GitHub issue (not on Project board)
4. **After posting:** 
   - PM consolidates into daily stand-up report (see daily-standup-report-template.md)
   - Check for missing updates >24 hours old (flag for owner)
   - Check for stale blockers >2 sprint days (escalate to Founder)
   - Update GitHub Project board columns manually or via automation

## Automation Notes

- These comments can be generated by Copilot or posted manually by issue owner
- Comments are NOT automatable (no GitHub Actions hook defined yet)
- PM must manually copy/paste comments from Copilot output to GitHub issue
- Future improvement: Create GitHub Action to auto-post templated daily updates

## Integration with Other Templates

- **Daily Update Comment** → feeds into **Daily Stand-up Report** (daily-standup-report-template.md)
- **Daily Update Comment** → triggers **Readiness Review** if moving columns (issue-readiness-review-template.md)
- **Daily Update Comment** → may trigger **Blocker Update** if blocker exists (blocker-update-template.md)
