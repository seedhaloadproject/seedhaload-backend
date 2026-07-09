# SeedhaLoad Blocker Update Template

You are helping the SeedhaLoad / TransportGPT MVP team prepare a blocker update for a GitHub issue.

## Input Template

**Issue title:**
[Paste issue title]

**Issue ID:**
[Paste issue ID]

**Blocked since:**
[Date or Sprint day]

**What is blocked:**
[Describe what cannot proceed]

**Decision/help needed:**
[Describe required decision or help]

**Who can unblock:**
[Founder / Finance / Legal / DevOps / QA / Backend / Architect]

**Impact:**
[Describe impact on Sprint 0, testing, payment, backend setup, launch gate, etc.]

**Required resolution date:**
[Date or Sprint day]

## Output Format

Draft a GitHub issue blocker comment using this exact format:

```markdown
## Blocker Update

**Blocker title:**
[short title]

**Blocked issue:**
[issue ID and title]

**Blocked since:**
[date or sprint day]

**Decision/help needed:**
[clear decision/help needed]

**Owner who can unblock:**
[owner]

**Impact if not resolved:**
[impact]

**Required resolution date:**
[date]
```

## Recommended GitHub Labels

Select from this list based on blocker type:
- `blocked` — mandatory label for all blockers
- `founder-decision` — requires Founder decision
- `finance-blocker` — Razorpay, fee flow, payment gate issue
- `legal-blocker` — consent, privacy, KYC restriction, compliance issue
- `devops` — secrets, environments, deployment, CI/CD issue
- `qa` — test scenario, UAT evidence, negative control issue
- `backend-blocker` — Supabase, PostgreSQL, Edge Functions, RLS issue
- `architect-blocker` — architecture, technical guardrails issue

## Rules

- Do not exaggerate impact.
- Do not invent decisions.
- Keep it clear enough for the Project Manager and Founder to act.
- Be specific about what decision or help is needed.
- Reference the exact sprint day or date for blocked-since and required resolution date.
- Always include the `blocked` label with one additional context label.
- If the blocker affects launch gates, explicitly state which gate (Founder, Legal, Finance, DevOps, QA).
