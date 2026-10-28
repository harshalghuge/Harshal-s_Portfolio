# Harshal Portfolio

A responsive single-page portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Layout behavior

- Desktop uses a two-column layout: a sticky profile card on the left and a vertically scrolling portfolio on the right.
- The profile card begins near the top with a small margin and stays pinned as the page scrolls, matching the interaction in the Sawad reference.
- The icon navigation is sticky within the right-hand content column.
- On mobile, the profile card returns to normal document flow and the navigation remains accessible above the content.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Personalize before publishing

- Replace the portrait image URL in `src/components/ProfileCard.jsx` with your own optimized photo.
- Replace placeholder GitHub, LinkedIn, Instagram, and YouTube URLs in `src/components/ProfileCard.jsx`.
- Update project and experience details in `src/data/projects.js` and `src/data/experience.js`.
- Confirm all contact and social links before deploying.
