// Contact facts and figures used across the site. Placeholder values are
// marked in the open items list (F2, F3); change them here once confirmed.

export const contact = {
  phone: '(760) 555-0100', // F2 placeholder (555 numbers are reserved for fiction)
  phoneHref: 'tel:+17605550100',
  email: 'hello@usevantagepoint.com', // F2 placeholder
  referralEmail: 'referrals@usevantagepoint.com', // F2 placeholder
  employerEmail: 'employers@usevantagepoint.com', // F2 placeholder
  street: '0000 Example Street, Suite 000', // F2 placeholder
  city: 'Carlsbad, CA 92008',
  hours: 'Monday to Friday, 9:00 a.m. to 5:00 p.m.', // F3 to confirm
  appointment: 'Visits by appointment',
};

// Homepage figures, from the current site. Each label says what is counted
// and for which year, per the brand kit.
export const stats = [
  { num: '780', unit: '+', label: 'People placed in integrated, competitive jobs since 2020' },
  { pre: '$', num: '22.22', label: 'Average hourly wage of clients placed in 2025' },
  { num: '9.2', unit: '/10', label: 'Average client rating on the 2025 exit survey' },
  { num: '61', unit: '%', label: 'Clients placed in 2025 still in their job after three months' },
];

export const nav = [
  { href: 'find-a-job.html', label: 'Find a Job', key: 'job' },
  { href: 'for-families.html', label: 'For Families', key: 'families' },
  { href: 'for-employers.html', label: 'For Employers', key: 'employers' },
  { href: 'for-dor-staff.html', label: 'For DOR Staff', key: 'dor' },
  { href: 'results.html', label: 'Results', key: 'results' },
  { href: 'about.html', label: 'About', key: 'about' },
];
