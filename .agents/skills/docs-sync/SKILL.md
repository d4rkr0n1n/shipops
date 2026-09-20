---
name: docs-sync
description: "Use after changing ShipOps application code, configuration, dependencies, or deployment workflows to keep README.md and AGENTS.md accurate and aligned with the repository."
user-invocable: false
---

# ShipOps Documentation Sync

Keep the repository's operational documentation aligned with the code that is actually present. Run this skill after a code change, and before final validation or handoff.

## Workflow

1. Inspect the current diff and the changed files. Read the relevant implementation, `package.json`, deployment workflow, and existing documentation as needed.
2. Update `README.md` when a change affects setup, commands, dependencies, project structure, deployment, public behavior, pricing, contact flow, or implementation status.
3. Update `AGENTS.md` only when a change establishes or removes a durable repository convention, architecture boundary, validation requirement, or integration rule.
4. Keep statements factual. Do not describe planned routes, payments, automation, or integrations as implemented.
5. Preserve the generated `nextjs-agent-rules` block at the top of `AGENTS.md`; make repository-specific edits below it.
6. Avoid duplicating detailed implementation notes between the two files. Put user-facing setup and behavior in `README.md`; put agent-facing constraints and workflows in `AGENTS.md`.
7. Review the final diff for stale versions, broken paths, inconsistent plan language, accidental secrets, and unrelated formatting changes.

## Repository Rules

- Treat `package.json` and `package-lock.json` as the source of truth for dependency versions and scripts.
- Treat `.github/workflows/` and `next.config.ts` as the source of truth for deployment behavior.
- Treat `app/` as the source of truth for implemented routes, components, content, pricing, and client/server boundaries.
- Keep weekly plans, the one-time Lite Audit, manual payment language, and the email contact flow consistent across code and documentation.

## Validation

- Run `npm run build` after documentation changes that reflect code or configuration changes.
- Run `npm run lint` when the local ESLint toolchain initializes successfully; report toolchain failures separately from source errors.
- Confirm the skill file has valid YAML frontmatter with a matching `name` and a meaningful `description`.