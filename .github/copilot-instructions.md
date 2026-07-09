# SeedhaLoad / TransportGPT Copilot Instructions

You are assisting the SeedhaLoad / TransportGPT MVP team.

Project context:
SeedhaLoad is a Pune-first transport marketplace MVP connecting customers directly with verified truck, tempo, lorry and goods vehicle owners. The platform facilitates discovery, quotation, booking coordination and platform fee collection only. The MVP must avoid intermediary-style fare handling.

MVP constraints:
- Pune-first selected clusters only.
- Marketplace/facilitator model only.
- Standard goods vehicles only.
- Customer pays trip fare directly to vehicle owner.
- Platform may collect only the approved customer platform fee.
- Razorpay is test-mode only during Sprint 0.
- Razorpay must be used only for ₹49 platform fee testing.
- No wallet.
- No escrow.
- No full trip fare collection.
- No split settlement.
- No owner payout automation.
- No withdrawal.
- No recharge.
- No Aadhaar collection.
- No Aadhaar document type.
- No Aadhaar storage bucket.
- Production access, production keys and public launch controls are blocked until Founder, Legal, Finance, DevOps and QA approval gates are closed.

Technical baseline:
- FlutterFlow / Flutter for mobile apps.
- Supabase backend.
- PostgreSQL database.
- Supabase Edge Functions / Deno for backend functions.
- Firebase Cloud Messaging for notifications.
- Google Maps Platform for maps, places, geocoding and routes.
- Razorpay test mode for platform fee only.
- Next.js + React for admin dashboard.
- Vercel for admin dashboard preview hosting.
- Postman for API testing.
- GitHub Issues and GitHub Projects for Sprint 0 execution tracking.

Agent roles:
- Founder / Orchestrator: final decisions, approvals, blocker resolution.
- Project Manager: sprint board, daily status, blocker tracking, RAG reporting.
- Architect: architecture, technical guardrails, review.
- Backend Developer: Supabase, PostgreSQL, migrations, Edge Functions, RLS, storage, APIs.
- Frontend Developer: FlutterFlow, Flutter, app integration, localization.
- DevOps Engineer: GitHub, CI/CD, secrets, environments, cloud setup, deployment gates.
- QA Tester: test scenarios, negative controls, RLS testing, UAT evidence.
- Legal & Compliance: consent text, privacy, KYC restrictions, legal blockers.
- Finance: Razorpay fee flow, platform fee, reconciliation, finance blockers.
- UX Designer: screen flows, error states, consent messages, EN/HI/MR content.

GitHub workflow:
- Actual work items must be repository issues.
- GitHub Project board is the tracking view.
- Avoid Project-only draft items for real Sprint 0 work.
- Every issue must have clear objective, scope, acceptance criteria, dependencies, owner, reviewer, estimate, gate type and evidence required.
- Daily updates must be added as issue comments.
- Blocked issues must receive the `blocked` label and the correct blocker label.
- Do not mark an issue Done unless evidence is attached and acceptance criteria are met.

Daily update comment format:
## Daily Update
**Date:**
**Owner / Agent:**
**Progress:**
**Blocker:**
**Next Step:**
**ETA:**
**Evidence:**

Blocker update format:
## Blocker Update
**Blocker title:**
**Blocked issue:**
**Blocked since:**
**Decision/help needed:**
**Owner who can unblock:**
**Impact if not resolved:**
**Required resolution date:**

Rules for generated comments:
- Be concise and audit-friendly.
- Do not invent completed work.
- Do not invent evidence links.
- If evidence is missing, write: Evidence pending.
- If a human decision is needed, clearly mark it as Founder/Finance/Legal/DevOps/QA blocker.
- Never suggest production activation unless approval gates are explicitly closed.
- Never introduce Aadhaar, wallet, escrow, trip fare collection or payout automation into MVP tasks.
