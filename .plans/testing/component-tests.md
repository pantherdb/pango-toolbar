# Task: Write spec and e2e tests for pango-toolbar and pango-dropdown

**Status:** COMPLETE
**Branch:** issue-1-toolbar-versioning

## Goal
Create comprehensive spec (unit) and e2e tests for both components: `pango-toolbar` and `pango-dropdown`.

## Steps

### Phase 1: Spec Tests
- [x] Write `pango-toolbar.spec.ts` — 11 tests covering default rendering, custom props, download links, version handling, partner logos
- [x] Write `pango-dropdown.spec.ts` — 10 tests covering rendering, toggle, events, alignment, structure

### Phase 2: E2E Tests
- [x] Write `pango-toolbar.e2e.ts` — 6 tests for browser rendering, nav links, custom props
- [x] Write `pango-dropdown.e2e.ts` — 6 tests for rendering, toggle, events, alignment

### Phase 3: Verify
- [x] Spec tests: 25/25 passing
- [x] E2E tests: written but cannot run locally (Chrome not installed at expected path)

## Recovery Checkpoint
> ✅ TASK COMPLETE

## Files Modified

| File | Action | Status |
| ---- | ------ | ------ |
| src/components/pango-toolbar/pango-toolbar.spec.ts | Create | Done |
| src/components/pango-dropdown/pango-dropdown.spec.ts | Create | Done |
| src/components/pango-toolbar/pango-toolbar.e2e.ts | Create | Done |
| src/components/pango-dropdown/pango-dropdown.e2e.ts | Create | Done |
| src/utils/__mocks__/imageMock.ts | Create | Done |
| stencil.config.ts | Edit (added testing.moduleNameMapper) | Done |

## Notes
- Had to add `moduleNameMapper` in `stencil.config.ts` to mock PNG imports in spec tests
- Created `src/utils/__mocks__/imageMock.ts` as the image stub
