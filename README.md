# Lavender North — Prototype

Production-oriented Next.js prototype for Lavender North, a contemporary art gallery, curator, artist representation platform and artist website service.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Quick design preview

A dependency-free static preview is also included at `preview/index.html`.

## Current scope

- Gallery-first public homepage
- Curator's Edit governance distinction
- Artist representation, membership and one-off service routes
- Prototype Studio / Atelier / Signature membership tiers
- Lavender North Builder naming for the artist website product
- Lindsay McGowan founding-artist placeholder with no invented biography
- Responsive styling
- Placeholder demo artworks and artists clearly presented as prototype content

## Next production stages

1. Replace demo artwork with supplied/licensed images.
2. Add gallery routes: `/art`, `/artists`, `/artists/[slug]`, `/exhibitions`, `/for-artists`, `/studio`.
3. Add Supabase schema/auth/storage.
4. Add artist application workflow and archive import.
5. Add Stripe-ready sales architecture after commercial terms are final.
6. Connect GitHub and deploy to Vercel.

The supplied Concept 2 brand board is retained at `public/brand-reference.png` as the visual identity reference. It is not treated as a production-ready transparent logo asset.
