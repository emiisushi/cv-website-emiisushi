# Rexie's CV Website (Next.js 15 + v0.dev)

A professional CV website generated with AI-assisted workflow, built using Next.js 15 and shadcn-style UI components, with a functional dark/light mode toggle and responsive profile sections.

## Live Submission Links
- GitHub Repository: `https://github.com/emiisushi/cv-website-emiisushi`
- Vercel Production URL: `https://cv-website-emiisushi-az9f.vercel.app/`

Replace the placeholder links above with your real URLs before submitting.

## Tech Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn-style reusable UI components (`Button`, `Card`, `Badge`)
- `next-themes` for dark/light mode toggle
- `lucide-react` icons

## Features Implemented
- Professional profile header with avatar image
- Personal bio and career summary
- Skills and technical competencies
- Detailed experience section:
	- Internship
	- University project
	- Volunteer work
- Education and certification
- Contact info and social links (LinkedIn, GitHub, email)
- Portfolio projects section
- v0.dev AI generation process section
- Responsive mobile-first layout
- Working dark/light mode toggle in the navbar

## AI Generation Approach (v0.dev Workflow)
1. Drafted a structured prompt in v0.dev to generate a professional CV layout with clear sections.
2. Iterated on visual hierarchy, card composition, and responsive behavior in AI-generated output.
3. Exported and integrated the generated structure into a clean Next.js 15 codebase.
4. Refactored into reusable shadcn-style components and centralized profile data.
5. Added theme support, final content polishing, and deployment-ready documentation.

## Project Structure
```text
app/
	globals.css
	layout.tsx
	page.tsx
components/
	mode-toggle.tsx
	theme-provider.tsx
	ui/
		badge.tsx
		button.tsx
		card.tsx
docs/
	submission-evidence.md
lib/
	profile-data.ts
	utils.ts
public/
	headshot.svg
```

## Run Locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Build for Production
```bash
npm run build
npm run start
```

## Required Evidence Screenshots
Create this folder and add screenshots:
- `docs/screenshots/v0-generation.png`
- `docs/screenshots/light-mode.png`
- `docs/screenshots/dark-mode.png`

Reference checklist: see `docs/submission-evidence.md`.

## Personalization Checklist
Before final submission, update these with your real details:
- `lib/profile-data.ts` personal bio, education, projects, social links
- `public/headshot.svg` with your real headshot image (optional: replace with `headshot.jpg`)
- README links for GitHub, Vercel, and v0.dev

## Version Control Workflow
Recommended commit strategy:
1. `chore: initialize nextjs project`
2. `feat: implement cv sections and theme toggle`
3. `docs: add submission evidence and deployment links`
4. `refactor: polish responsive layout and content`

Use clear commit messages and multiple commits to demonstrate proper workflow.
