# Task: Set up semantic-release for automated npm publishing

**Status:** ACTIVE
**Branch:** issue-1-toolbar-versioning

## Goal

Configure semantic-release for fully automated versioning, changelogs, npm publishing, and GitHub releases. Next release will be 0.1.0.

## Steps

- [x] Fix package.json metadata (repo URL, bugs, homepage, prepublishOnly)
- [x] Clean up CHANGELOG.md for semantic-release ownership
- [x] Delete redundant publish.yml workflow
- [x] Update ci.yml to PR-only trigger
- [x] Update semantic-release.yml (permissions, semantic_version 24, skip-ci fix)
- [x] Add commitlint config and CI workflow
- [ ] Commit, push, and verify

## Recovery Checkpoint

- **Last completed action:** All file changes made
- **Next immediate action:** Commit and push

## Files Modified

| File | Action | Status |
| ---- | ------ | ------ |
| package.json | Edit (repo URL, bugs, homepage, prepublishOnly) | Done |
| CHANGELOG.md | Rewrite for semantic-release | Done |
| .github/workflows/publish.yml | Delete | Done |
| .github/workflows/ci.yml | Edit (PR-only trigger) | Done |
| .github/workflows/semantic-release.yml | Rewrite (permissions, v24, skip-ci) | Done |
| commitlint.config.js | Create | Done |
| .github/workflows/commitlint.yml | Create | Done |

## Notes

- Squash merge to main with `feat:` prefix will trigger 0.0.3 -> 0.1.0
- NPM_TOKEN secret must be set in pantherdb/pango-toolbar repo settings
- If main has branch protection, allow GH Actions to bypass or use a PAT
