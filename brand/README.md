# Vantage Point

Careers for people with disabilities, shown with confidence.

Vantage Point is a San Diego 501c3 nonprofit and an approved vendor of the California Department of Rehabilitation (DOR). It places people with disabilities into integrated, competitive jobs. This kit keeps the existing logo and its two colors exactly as they are and adds the system around them: a working palette, a type scale, a logo file set, icons, a graphic device, components and a photo library. Use it for the website, for PowerPoint, and for anything else that carries the name.

Status: version 1, built 2026-11-15 from the live site and the brand assessment agreed that day. It has not yet been reviewed by Vantage Point staff or the board.

## How to use this kit

- Building a web page: load `tokens.css` and `components/bundle.css`, then use the classes documented under Components. Every color, size and radius is a CSS variable named after its token.
- Building a slide deck: use the theme mapping in the PowerPoint and web handoff section. Logos and photos are in Assets as PNG and JPG.
- Choosing a photo: read the Photography section first. It lists each image, what it shows, where it fits and its alt text.

## Brand fundamentals

**What the brand should say at a glance:** people with disabilities are capable employees, and Vantage Point is the organization that connects them to work they care about.

**Audiences, in order:** job seekers and their families, DOR counselors who refer clients, employers who hire, and donors and board members.

**Voice**

- Lead with the person and the job. "Maria started at the front desk in March" before any mention of services.
- Plain, direct sentences. Write at a level any visitor can read; avoid agency acronyms without spelling them out once.
- Confident, never pitying. No "despite," "overcoming," "brave" or "special."
- Person-first language by default ("people with disabilities"), as the current site uses. Follow an individual's own preference when writing about them.
- Every number carries its year and what it counts.

**Tagline in use on the site:** Empowering people with disabilities by connecting their passions to meaningful, integrated employment.

**Proof points on the current homepage.** Use them in the StatBlock component.

| Figure | What it counts |
| --- | --- |
| 780+ | People placed in integrated, competitive employment |
| $22.22 | Average hourly wage of clients placed in 2025 |
| 9.2/10 | Average client rating on the exit survey |
| 61% | Clients placed in 2025 who stayed in their position more than three months |

Open copy issue: the homepage counts placements "since founding in 2021" and the history section says the organization was founded in 2020. Confirm the year before reusing either line.

## Logo

The artwork is unchanged: a figure with raised arms and a tie, a leaf shape, and a ring, beside the words Vantage Point.

| Lockup | File stem | Use |
| --- | --- | --- |
| Horizontal | `vp-logo-horizontal` | Default. Website header, document headers, slide footers. |
| Stacked | `vp-logo-stacked` | Square and narrow spaces: title slides, signage, social posts. |
| Icon only | `vp-logo-icon` | Favicon, social avatar, slide corner, anything under 120 px wide. |
| Reversed | add `-reversed` | On `brand-navy`. Navy parts turn white, sky stays sky. |
| One color | `-navy`, `-white` | Single-ink printing, embroidery, or over a flat brand color. |

Rules

- Clear space on every side equals the height of the figure's head.
- Minimum width: 120 px or 1.25 in for the horizontal lockup, 88 px or 0.9 in for stacked, 24 px for the icon.
- Backgrounds: full color on `neutral-white`, `neutral-sand` or `brand-sky-tint`. Reversed on `brand-navy`. Never directly on a photograph; put a navy or white panel behind it.
- Do not recolor, outline, stretch, rotate, add effects, or rebuild the wordmark in another typeface.

Provenance: the only logo file on the website is a 1836 x 882 JPEG screenshot from November 2020. The SVG and PNG files here were traced from that file, so curves are faithful at normal sizes but are not the designer's original vectors. If the original artwork file is found, replace these and keep the file names. The wordmark typeface has not been identified.

## Color

Two core colors come from the logo and are not to be altered. Everything else supports them.

| Token | Hex | Role |
| --- | --- | --- |
| `brand-navy` | #032F60 | Core. Headlines, brand fills, primary buttons. |
| `brand-sky` | #1BB7E8 | Core. Accents, rings, text and buttons on navy. |
| `brand-sky-deep` | #08759F | Links and labels on light backgrounds. |
| `brand-sky-tint` | #E8F7FD | Panels and table bands. |
| `brand-amber` | #F4A72C | The one warm accent. Giving actions and one highlight per view. |
| `neutral-sand` | #F7F4EE | Warm alternate background. |
| `neutral-ink` | #1B2733 | Body text. |
| `neutral-slate` | #4A5A70 | Secondary text. |

Approved text pairings (WCAG 2.1 contrast ratio; 4.5:1 is the minimum for body text)

| Text | On | Ratio | Verdict |
| --- | --- | --- | --- |
| `neutral-ink` | white, sand, sky tint | 15.2, 13.8, 13.8 | Yes |
| `brand-navy` | white, sand, sky tint | 13.3, 12.1, 12.1 | Yes |
| `neutral-slate` | white, sand, sky tint | 7.0, 6.4, 6.4 | Yes |
| `brand-sky-deep` | white, sand, sky tint | 5.2, 4.7, 4.7 | Yes |
| white | `brand-navy` | 13.3 | Yes |
| `brand-sky` | `brand-navy` | 5.7 | Yes |
| `brand-navy` | `brand-sky`, `brand-amber` | 5.7, 6.6 | Yes |
| `brand-sky` | white | 2.3 | No. Use `brand-sky-deep`. |
| white | `brand-amber` | 2.0 | No. Use `brand-navy`. |

Proportion on a typical page: white and sand about 70%, navy about 20%, sky about 8%, amber 2% or less. Use the semantic tokens (`bg-*`, `text-*`, `action-*`) in code so pairings stay valid.

## Typography

Libre Franklin for headings and Open Sans for text, both already on the website and both free from Google Fonts. Headings are weight 600 in `brand-navy`. Text is weight 400 in `neutral-ink`. The uppercase tracked `label` style comes from the site's navigation and is the brand's signature detail: use it for eyebrows, navigation and buttons.

Fallbacks when the fonts are not installed: Franklin Gothic Medium or Arial for headings, Segoe UI or Arial for text.

Rules: left-align text. One `display` headline per page. Do not set body copy in uppercase, in sky, or below 14 px.

## Graphic device: the ring

The ring around the logo figure is the brand's repeating shape.

- Photo crop: portraits may be cropped to a circle with a 4 px `brand-sky` ring (see RingPhoto).
- Corner arc: a large ring, 4 to 5 px stroke in `brand-sky` at about 50% opacity, bleeding off one corner of a navy panel (see StatBlock and Hero).
- One ring per view. Never a pattern of rings, never filled, never in amber.

## Iconography

One outline style: 48 px grid, 2.5 px stroke, round caps and joins, structure in `brand-navy` with one detail in `brand-sky`. Eight starter icons are in Assets under Icons. They replace the stock illustrations on the current homepage. Icons sit beside a text label; they do not replace it. On navy backgrounds place icons on a white or sky-tint disc until a reversed set is drawn.

## Photography

People doing their jobs well. Disability is present and unhidden, and it is not the story. Full direction, the image list, alt text and licensing are in the Photography section.

## Accessibility

For a disability employment organization this is part of the brand, not a compliance step.

- Meet WCAG 2.1 AA. Use only the approved pairings above.
- Every content image has alt text describing the person and the work. Decorative rings and arcs are hidden from screen readers.
- Visible keyboard focus: a 3 px `focus-ring` outline with 2 px offset.
- Tap targets at least 44 px tall. Body text at least 16 px on mobile.
- Never rely on color alone. Pair color with a label or icon.
- Caption every video.

## What is not in this kit yet

- Photographs of a Deaf employee signing with coworkers and of a blind or low-vision employee. Good candidates exist in the All in Frame collection (allinframestock.com); its terms allow use in the website and decks but not redistribution in an asset library, so they are not stored here.
- A warehouse or shop-floor photo showing an employee with a visible disability alongside an employer.
- Photographs of real Vantage Point clients. Every photo here is stock and should be replaced by a real shoot with signed releases.
- A reversed icon set, and the finished PowerPoint template file.
