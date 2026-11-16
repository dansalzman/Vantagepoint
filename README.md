# Vantage Point website: demo prototype

A working prototype of the new usevantagepoint.com, built from the November 2026 Website Assessment and brand kit v1. It shows the new structure: four audience doors on the homepage, a new Families page, an employer page built around the business case, a sharper DOR referral page, and contact details on every page.

**This is a demo.** Text highlighted in amber with a tag (F2, P1, …) is a placeholder that Vantage Point staff need to supply or confirm. Each tag links to `open-items.html`, which lists every gap. Use the "Highlights on/off" button in the top bar to see the page without markers. Forms do not send, and every photograph is a stock image.

## Pages

| File | Audience | Purpose |
| --- | --- | --- |
| `index.html` | Everyone | Outcome headline, stats, four audience doors |
| `find-a-job.html` | Job seekers | DOR explained, 3 steps with timeline, programs, "help me start" form, FAQ |
| `for-families.html` | Families, guardians | Six family questions, family quotes, call-back form |
| `for-employers.html` | Employers | Business case, employer names, quote, incentives, 4-field form |
| `for-dor-staff.html` | DOR counselors | Referral steps, DOR service terms, district contacts, outcomes, downloads |
| `results.html` | Everyone | Outcomes, sectors, employers, testimonials, reports |
| `about.html` | Everyone | Story, values, team, board, careers |
| `donate.html` | Donors | Give, gala, sponsorship |
| `contact.html` | Everyone | Contact facts and an "I am a…" form |
| `open-items.html` | Staff | Every open item, with priority |

## Working on it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

- Contact details and headline figures: `src/data/site.ts`
- Open items list: `src/data/openItems.ts` (mark a gap in a page with `<Todo id="F2">…</Todo>`)
- Brand tokens and components: `src/styles/tokens.css`, `src/styles/bundle.css` (from the brand kit, unchanged); site layout in `src/styles/site.css`
- Brand guidance: `brand/`

The build produces flat `.html` files with relative links, so `dist/` can be hosted anywhere (GitHub Pages, Netlify, Vercel) without configuration. Pages carry `noindex` until launch.
