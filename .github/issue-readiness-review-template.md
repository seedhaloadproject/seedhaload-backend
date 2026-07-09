# SeedhaLoad Issue Readiness Review Template

Review this GitHub issue and advise whether it is ready to move from [current column] to [target column].

## Input Format

**Issue title:**
[Paste title]

**Issue body:**
[Paste body]

**Latest comments:**
[Paste latest comments]

**Evidence:**
[Paste evidence links or write None]

**Acceptance criteria:**
[Paste criteria]

**Current column:**
[Backlog / Ready / In Progress / In Review / QA / Validation / Done]

**Target column:**
[Ready / In Progress / In Review / QA / Validation / Done]

## Output Format

```markdown
## Issue Readiness Review

**Issue:** [ID — title]
**Current column:** [current]
**Target column:** [target]

### 1. Move Allowed?
**Decision:** Yes / No

### 2. Reason
[Explain decision with reference to checklist items below]

### 3. Acceptance Criteria Completion
- [ ] Criterion 1: [status]
- [ ] Criterion 2: [status]
- [ ] Criterion N: [status]

**All criteria met?** Yes / No

### 4. Evidence Attached?
- [List evidence links or state: Evidence pending]

**Evidence complete?** Yes / No / Partial

### 5. Blocker Status
- Any open blockers? Yes / No
- Blocker IDs: [list or None]
- Can proceed despite blockers? Yes / No

### 6. Security & Compliance Check
- [ ] No secrets exposed (API keys, tokens, credentials)
- [ ] No production keys used (test-mode only)
- [ ] No violation of MVP restrictions
- [ ] No Aadhaar collection/storage introduced
- [ ] No wallet/escrow/full-fare-collection introduced
- [ ] No owner payout automation introduced

**All security checks passed?** Yes / No

### 7. Reviewer Approval Required?
- [ ] Architect review needed? Yes / No
- [ ] Backend lead review needed? Yes / No
- [ ] QA approval needed? Yes / No
- [ ] Finance/Legal approval needed? Yes / No

**Approval status:** [Approved / Pending / Not required]

### 8. Missing Items
- [List missing items or state: None]

### 9. Recommended Next GitHub Comment
[Provide the exact comment template to post if move is blocked or conditional]

### 10. Recommended Labels
- Add: [labels]
- Remove: [labels]
```

## Readiness Checklist

### For Ready → In Progress
- ✅ Acceptance criteria clearly defined
- ✅ Scope is precise and bounded
- ✅ Dependencies resolved or listed
- ✅ Owner assigned
- ✅ Estimate provided
- ✅ No ambiguity about deliverable
- ✅ No blocker preventing start

### For In Progress → In Review
- ✅ Code/functionality complete
- ✅ All acceptance criteria met
- ✅ No security issues (no secrets, no prod keys)
- ✅ MVP restrictions respected
- ✅ Self-review completed
- ✅ Ready for peer review
- ✅ No open blockers
- ✅ Daily update comment posted with progress

### For In Review → QA / Validation
- ✅ Code review completed
- ✅ Reviewer approval obtained (if required)
- ✅ Code merged or ready to merge
- ✅ QA test scenarios defined
- ✅ Evidence of review attached
- ✅ No reviewer blockers remaining

### For QA / Validation → Done
- ✅ QA test scenarios executed
- ✅ All test cases passed
- ✅ Evidence of UAT/testing attached (screenshots, logs, test report)
- ✅ No critical bugs found
- ✅ All acceptance criteria verified by QA
- ✅ Documentation updated (if required)
- ✅ Deployment confirmed (if applicable)
- ✅ QA sign-off obtained

## Validation Rules

### Acceptance Criteria
- **Do not move** if any acceptance criterion is incomplete
- Mark "Evidence pending" does NOT count as complete
- If criteria is vague or untestable, return to In Progress for clarification

### Evidence Requirements by Column
- **Ready to In Progress:** No evidence required (planning phase)
- **In Progress to In Review:** Self-review evidence (checklist comment), code link
- **In Review to QA:** Peer review approval, code review link, merged status
- **QA to Done:** Test report, UAT screenshots, QA sign-off comment, deployment confirmation

### Security & Compliance
- **Secrets Check:** Scan for API keys, tokens, credentials, Razorpay keys, Firebase config
  - Production keys = auto-block (Red flag)
  - Test mode only = allowed
- **MVP Restrictions:** Auto-block if any of these are introduced:
  - Aadhaar collection, storage, or document type
  - Wallet or escrow functionality
  - Full trip fare collection (customer must pay owner directly)
  - Owner payout automation
  - Withdrawal or recharge
  - Production go-live without approval gates

### Blocker Status
- **Open blockers?** Do not move (add `blocked` label, do not proceed)
- **Closed blockers?** Can move if resolution is verified
- **Founder/Finance/Legal/DevOps/QA blockers?** Get explicit approval before move

### Reviewer Approval
- **Architect review needed?** If architecture change, new service, or MVP boundary touched
- **Backend lead review?** All backend changes (Edge Functions, RLS, migrations, APIs)
- **QA approval?** Before marking Done — verify test scenarios passed
- **Finance/Legal approval?** Payment flow, fee handling, consent, privacy, KYC

## Decision Tree

```
Is acceptance criteria complete AND evidence attached?
├─ No → Return to current column, comment with missing items
└─ Yes → Continue

Are all blockers resolved?
├─ No → Keep `blocked` label, do not move
└─ Yes → Continue

Does issue pass security check (no secrets, no prod keys, no MVP violations)?
├─ No → Add `security` label, return to previous column, comment with violations
└─ Yes → Continue

Is reviewer approval required for this target column?
├─ Yes & Approved? → Continue to move
├─ Yes & Pending? → Add `awaiting-review` label, do not move yet
└─ No → Continue to move

Move allowed = Yes
```

## Common Blockers to Move

- Missing evidence (test report, UAT screenshot, deployment log)
- Incomplete acceptance criteria (1+ criteria not met)
- Open blocker label still attached
- Missing reviewer approval (Architect, Backend lead, QA)
- Security issue found (secrets exposed, prod key used)
- MVP restriction violated (Aadhaar, wallet, escrow, etc.)
- Daily update missing (>24 hours without comment)
- Acceptance criteria unclear or vague

## Labels to Manage During Readiness

- Add when blocking move:
  - `blocked` — if open blocker exists
  - `awaiting-review` — if waiting for peer review approval
  - `security` — if security issue found
  - `evidence-pending` — if test report or UAT missing
  - `needs-clarification` — if acceptance criteria unclear

- Remove when criteria met:
  - `ready-for-review` — after moving to In Review
  - `in-progress` → remove when moving to Review (column already indicates state)
  - `needs-clarification` — after criteria clarified

## Recommended Comment When Blocking a Move

```markdown
## Readiness Review — Move Blocked

**Issue:** [ID — title]
**Current column:** [current]
**Target column:** [target]
**Decision:** ❌ Not ready to move

### Reason
[Clear reason based on checklist]

### Missing Items
- Item 1: [what is missing and why it matters]
- Item 2: [what is missing and why it matters]

### Required Before Next Review
1. [specific action needed]
2. [specific action needed]

### Recommended Next Step
[Post updated daily comment with progress on missing items]

**Re-request review once items above are resolved.**
```

## Recommended Comment When Approving a Move

```markdown
## Readiness Review — Move Approved ✅

**Issue:** [ID — title]
**Current column:** [current]
**Target column:** [target]
**Decision:** ✅ Ready to move

### Evidence Verified
- [Evidence item 1: ✅ verified]
- [Evidence item 2: ✅ verified]

### Acceptance Criteria Met
- All [N] acceptance criteria completed and verified

### Security & Compliance
✅ All security checks passed
✅ No MVP restrictions violated
✅ No blockers remaining

### Recommended Labels
- Remove: [labels]
- Add: [labels]

**This issue is ready to move to [target column].**
```

## Report Cadence

- **When:** During daily stand-up or when issue author requests review
- **Who:** Project Manager, Architect (for design changes), QA (before Done)
- **Output:** Comment on issue with decision and next steps
- **Follow-up:** Update GitHub Project board column manually or via automation
