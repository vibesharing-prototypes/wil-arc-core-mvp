# Custom attributes — MVP prototype

**Repository:** [x99-mvp](https://github.com/dil-wrahn/x99-mvp)  
**VibeSharing:** [MVP project](https://vibesharing.app/dashboard/projects/06369505-d472-46b0-8df9-b86d24b2c3b3)  
**Scope:** Object library, schema management (M1), read-only schema viewer (M0). No roles, workflows, or lab explorations.

## Deploy

| Item | Value |
|------|--------|
| **GitHub** | `dil-wrahn/x99-mvp`, branch `main`, repo root (no base directory) |
| **Netlify** | Site linked to this repo; publish `dist` after `npm run build` |
| **Live URL** | _Set in VibeSharing / Netlify — paste here when stable_ |
| **VibeSharing** | https://vibesharing.app/dashboard/projects/06369505-d472-46b0-8df9-b86d24b2c3b3 |

**Build:** `npm install` (use `npm install --force` if Atlas tarball integrity fails) → `npm run build`.

## Sibling prototypes

| Prototype | GitHub | VibeSharing |
|-----------|--------|-------------|
| **Vision** | [x99-vision](https://github.com/dil-wrahn/x99-vision) | [Vision project](https://vibesharing.app/dashboard/projects/31318a96-b6bd-40db-8aac-4408da2dd2a8) |
| **Lab** | [x99-lab](https://github.com/dil-wrahn/x99-lab) | [Lab project](https://vibesharing.app/dashboard/projects/b509c6bc-2537-49a2-9fb4-00632f0080c4) |

## Optional env (Netlify)

- `VITE_VISION_PROTOTYPE_URL` — banner link to vision live URL
- `VITE_DEPLOYMENT_NOTE` — short label in nav footer

## Product docs

Canonical requirements: [Confluence — Custom attributes prototype docs](https://diligentbrands.atlassian.net/wiki/spaces/RCP/folder/6953959468). Local copies under `src/docs/`.

## CI

GitHub Actions build checks: **TBD** (see `README.md`).
