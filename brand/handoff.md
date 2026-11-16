# PowerPoint and web handoff

One set of values feeds both the website and slides. `tokens.json` is the source; the tables below say how those values map into each tool.

## For the website (Claude Code or any developer)

1. Read `README.md`, then `tokens.json`.
2. Load fonts: Libre Franklin 500, 600, 700 and Open Sans 400, 600, 700 from Google Fonts.
3. Load `tokens.css` (generated from `tokens.json`) and `components/bundle.css`.
4. Build pages from the components: Hero, SectionHeader, StatBlock, Card, RingPhoto, Button. Class names start with `vp-`.
5. Use semantic tokens (`bg-*`, `text-*`, `action-*`) in new CSS, never raw hex values.
6. Take logos from Assets, Logos (SVG) and photos from Assets, Photography, with the alt text from the Photography section.

Page pattern recommended by the assessment: Hero with a real photograph and the proof points directly under it, then programs, then audience paths (job seekers, DOR staff, employers), then the giving call to action in amber.

## For PowerPoint

Theme colors (Design, Variants, Colors, Customize Colors)

| Slot | Token | Hex |
| --- | --- | --- |
| Text/Background Dark 1 | `neutral-ink` | #1B2733 |
| Text/Background Light 1 | `neutral-white` | #FFFFFF |
| Text/Background Dark 2 | `brand-navy` | #032F60 |
| Text/Background Light 2 | `neutral-sand` | #F7F4EE |
| Accent 1 | `brand-navy` | #032F60 |
| Accent 2 | `brand-sky` | #1BB7E8 |
| Accent 3 | `brand-sky-deep` | #08759F |
| Accent 4 | `brand-amber` | #F4A72C |
| Accent 5 | `neutral-slate` | #4A5A70 |
| Accent 6 | `brand-sky-tint` | #E8F7FD |
| Hyperlink | `brand-sky-deep` | #08759F |
| Followed hyperlink | `neutral-slate` | #4A5A70 |

Theme fonts: headings Libre Franklin, body Open Sans. Install both on any machine that edits the deck, or embed them when saving.

Slide type sizes at 13.33 x 7.5 in

| Element | Font | Size | Color |
| --- | --- | --- | --- |
| Title slide headline | Libre Franklin SemiBold | 40 pt | White on navy |
| Slide title | Libre Franklin SemiBold | 28 pt | Navy |
| Subhead | Libre Franklin SemiBold | 18 pt | Navy |
| Body | Open Sans Regular | 16 pt | Ink |
| Caption and source line | Open Sans Regular | 11 pt | Slate |
| Eyebrow label | Open Sans SemiBold, uppercase, expanded spacing | 11 pt | Deep sky, or sky on navy |
| Stat number | Libre Franklin SemiBold | 44 pt | White on navy, or navy on white |

Master layouts to build

| Layout | Background | Contents |
| --- | --- | --- |
| Title | `brand-navy` | Reversed stacked logo, headline, corner ring arc |
| Section divider | `brand-navy` or ring-cropped photo on sand | Eyebrow, h1 |
| Title and content | White | Slide title, body, icon logo bottom right |
| Two content | White | Slide title, two columns |
| Stat band | `brand-navy` | Up to four numbers with a sky rule above each |
| Photo and text | White or sand | Photo with 12 px corners on one half, text on the other |
| Quote | `brand-sky-tint` | Ring-cropped portrait, quote in h2, name in label style |
| Closing | `brand-navy` | Reversed logo, contact line |

Charts: series colors in order are navy, sky, deep sky, slate. Amber marks the single series or bar the slide is about.

The PowerPoint template file itself is not part of this kit yet.
