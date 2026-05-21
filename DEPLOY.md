# Deploy checklist (MVP)

**GitHub:** [dil-wrahn/x99-mvp](https://github.com/dil-wrahn/x99-mvp)  
**VibeSharing:** https://vibesharing.app/dashboard/projects/06369505-d472-46b0-8df9-b86d24b2c3b3

## Netlify

1. Import **x99-mvp**, branch `main`, base directory `.`
2. Build: `npm run build` (`npm install --force` if needed) → `dist`
3. Optional env: `VITE_VISION_PROTOTYPE_URL`, `VITE_DEPLOYMENT_NOTE`
4. Update [`PROTOTYPES.md`](./PROTOTYPES.md) with live URL

## VibeSharing

Link the project above to the Netlify URL.

## Verify routes

`/`, `/objects/:type`, `/objects/:type/schema`, `/schema-viewer`, form-preview destination route
