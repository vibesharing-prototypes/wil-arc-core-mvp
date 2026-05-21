# MVP prototype scope

**Repository:** [x99-mvp](https://github.com/dil-wrahn/x99-mvp) · **VibeSharing:** [project](https://vibesharing.app/dashboard/projects/06369505-d472-46b0-8df9-b86d24b2c3b3) (app at repo root)  
**Deploy:** New Netlify site + VibeSharing project for this repository (repo root). Record the live URL in [`PROTOTYPES.md`](./PROTOTYPES.md).

## In scope

- **Schema management (M1)** — default route `/`. Admin-facing define / edit / deprecate custom attributes, aligned with milestone language in `AGENTS.md` and `src/docs/`.
- **Schema viewer (M0)** — `/schema-viewer`. Read-only OOTB schema browser (extends the same product story as management, with write UI gated in production).

## Out of scope (use vision v2 or lab)

- Roles & permissions builder
- Workflows template editor and stubs
- BOS-constrained schema management (v1 / v2)
- Permission card style explorations
- Tabbed form preview exploration
- Anything under “Explorations” in the vision app nav

## Optional env

- `VITE_VISION_PROTOTYPE_URL` — if set, the app can show a small link “Open full vision prototype” (when wired in UI).
