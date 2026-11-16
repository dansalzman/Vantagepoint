// Single source for every gap the demo papers over. Each <Todo id="..."> marker
// on a page links to its entry on open-items.html. Keep IDs in step with the
// "Vantage Point Website: Open Items" document.

export type Priority = 'Blocker' | 'High' | 'Medium' | 'Low';

export interface OpenItem {
  id: string;
  group: 'Facts and copy' | 'Proof points' | 'Brand and assets' | 'Technical';
  title: string;
  priority: Priority;
  demo: string; // what the demo shows in the meantime
  pages: string[];
}

export const openItems: OpenItem[] = [
  // Facts and copy
  { id: 'F1', group: 'Facts and copy', priority: 'Blocker', title: 'Confirm the founding year: 2020 (Our History, 10News) or 2021 (statistics line)', demo: '2020', pages: ['About', 'Results'] },
  { id: 'F2', group: 'Facts and copy', priority: 'Blocker', title: 'Phone number, email address and street address in Carlsbad', demo: 'Placeholder phone, email and address', pages: ['Every footer', 'Contact', 'Find a Job', 'DOR Staff'] },
  { id: 'F3', group: 'Facts and copy', priority: 'Blocker', title: 'Office hours: 9:00 to 5:00 (current site) or 8:00 to 5:00 (DOR directory)', demo: 'Monday to Friday, 9:00 to 5:00, by appointment', pages: ['Every footer', 'Contact'] },
  { id: 'F4', group: 'Facts and copy', priority: 'Blocker', title: 'Primary market: San Diego County, Southern California, or statewide and remote', demo: 'San Diego and Southern California, plus remote services', pages: ['Home', 'DOR Staff', 'Title tags'] },
  { id: 'F5', group: 'Facts and copy', priority: 'High', title: 'Approve the outcome headline on the homepage', demo: '"780+ people with disabilities placed in competitive jobs, at an average of $22.22 an hour."', pages: ['Home'] },
  { id: 'F6', group: 'Facts and copy', priority: 'High', title: 'Is every service free to the client, and under which funding (DOR, Regional Center, other)?', demo: '"No cost to you when DOR or your Regional Center funds your services"', pages: ['Find a Job', 'For Families', 'FAQ'] },
  { id: 'F7', group: 'Facts and copy', priority: 'High', title: 'Typical client timeline from first call to first day of work', demo: '14 to 28 days to be assigned (from the referral page); later stages are estimates', pages: ['Find a Job', 'For Families'] },
  { id: 'F8', group: 'Facts and copy', priority: 'High', title: 'What happens to a "help me start" request from someone with no DOR case, and who answers it', demo: 'Form shown; does not submit', pages: ['Find a Job', 'Contact'] },
  { id: 'F9', group: 'Facts and copy', priority: 'High', title: 'Plain descriptions of Time To Shine, WorkWell and Self-Determination: who each is for and who pays', demo: 'Draft descriptions', pages: ['Find a Job', 'DOR Staff'] },
  { id: 'F10', group: 'Facts and copy', priority: 'High', title: 'Answers to the six family questions (cost, job developers, matching, support after hiring, benefits, family role)', demo: 'Draft answers', pages: ['For Families'] },
  { id: 'F11', group: 'Facts and copy', priority: 'High', title: 'Benefits partner to point families to (DOR benefits counseling, a WIPA project, or both)', demo: 'Generic pointer to benefits counseling', pages: ['For Families', 'FAQ'] },
  { id: 'F12', group: 'Facts and copy', priority: 'High', title: 'Employer business case: confirm job coaching is free to the employer and name the employer contact', demo: 'Draft claims and a placeholder contact', pages: ['For Employers'] },
  { id: 'F13', group: 'Facts and copy', priority: 'Medium', title: 'Hiring incentives with current, verified amounts (for example WOTC, the Disabled Access Credit)', demo: 'Incentives named, no amounts', pages: ['For Employers'] },
  { id: 'F14', group: 'Facts and copy', priority: 'High', title: 'Named contact for each DOR district, current capacity or wait time, and languages offered', demo: 'Table with blank contact cells', pages: ['DOR Staff'] },
  { id: 'F15', group: 'Facts and copy', priority: 'Medium', title: 'Context for the 61% three-month retention figure, or a stronger retention measure', demo: '61% with its definition', pages: ['Home', 'Results'] },
  { id: 'F16', group: 'Facts and copy', priority: 'Medium', title: 'Review the FAQ answers (eligibility, cost, benefits, transportation, remote work)', demo: 'Draft answers', pages: ['Find a Job'] },
  { id: 'F17', group: 'Facts and copy', priority: 'Medium', title: 'Spanish versions of the client and family pages', demo: '"Español" link marked as coming soon', pages: ['Header', 'Find a Job', 'For Families'] },
  { id: 'F18', group: 'Facts and copy', priority: 'High', title: 'Full list of the nine authorized DOR districts, plus remote and Blind Field Services details', demo: 'Six districts named from the assessment; three blank', pages: ['DOR Staff', 'Home'] },
  { id: 'F19', group: 'Facts and copy', priority: 'Medium', title: 'Is the "Reintegration" program in third-party listings still offered?', demo: 'Not shown', pages: ['Find a Job'] },

  // Proof points
  { id: 'P1', group: 'Proof points', priority: 'High', title: 'Employer names, with written permission to list them as text', demo: '"Employer name" placeholders', pages: ['Home', 'For Employers', 'Results'] },
  { id: 'P2', group: 'Proof points', priority: 'High', title: 'One quote from a hiring manager: name, title, company, signed release', demo: 'Sample quote, labeled', pages: ['For Employers'] },
  { id: 'P3', group: 'Proof points', priority: 'High', title: 'Two or three family testimonials with releases', demo: 'Sample quotes, labeled', pages: ['For Families'] },
  { id: 'P4', group: 'Proof points', priority: 'Medium', title: 'Text of the nine current client testimonials and video links; confirm releases and captions', demo: 'Sample quotes, labeled', pages: ['Home', 'Results'] },
  { id: 'P5', group: 'Proof points', priority: 'High', title: 'CARF or other accreditation, if held', demo: 'Not shown', pages: ['About', 'DOR Staff', 'Footer'] },
  { id: 'P6', group: 'Proof points', priority: 'Low', title: '10News leadership award: date, link, permission to reference', demo: 'Text mention, no link', pages: ['About', 'Results'] },
  { id: 'P7', group: 'Proof points', priority: 'Low', title: 'Annual or outcome reports to link', demo: 'Placeholder links', pages: ['Results', 'Donate'] },
  { id: 'P8', group: 'Proof points', priority: 'Medium', title: 'Team and board: names, titles, short bios, headshots', demo: 'Placeholder cards', pages: ['About'] },
  { id: 'P9', group: 'Proof points', priority: 'Medium', title: 'Founder story in text (from the founder video)', demo: 'Short draft', pages: ['About'] },

  // Brand and assets
  { id: 'B1', group: 'Brand and assets', priority: 'High', title: 'Replace stock photography with real clients at work, with signed releases', demo: 'Pexels stock images from brand kit v1; no model is presented as a client', pages: ['All pages'] },
  { id: 'B2', group: 'Brand and assets', priority: 'Medium', title: 'Staff and board review of brand kit v1; original logo vectors', demo: 'Traced logo from kit v1', pages: ['All pages'] },

  // Technical
  { id: 'T1', group: 'Technical', priority: 'Blocker', title: 'Form handling: service, who receives each form, response-time promise', demo: 'Forms show what they will ask; they do not send', pages: ['Find a Job', 'For Families', 'For Employers', 'DOR Staff', 'Contact'] },
  { id: 'T2', group: 'Technical', priority: 'Medium', title: 'Donation processor, gala ticketing and sponsorship packages', demo: 'Buttons link nowhere', pages: ['Donate'] },
  { id: 'T3', group: 'Technical', priority: 'High', title: 'WCAG 2.1 AA audit and a published accessibility statement', demo: 'Draft statement outline', pages: ['Footer'] },
  { id: 'T4', group: 'Technical', priority: 'High', title: 'Privacy policy covering form data', demo: 'Not written', pages: ['Footer', 'Forms'] },
];

export const byId = Object.fromEntries(openItems.map((i) => [i.id, i]));
