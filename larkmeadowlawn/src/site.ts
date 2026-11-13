// Everything about the (made-up) business lives here.

export const site = {
  name: 'Larkmeadow Lawn Care',
  short: 'Larkmeadow',
  kind: 'Lawn Care',
  city: 'Raleigh',
  state: 'NC',
  phone: '(919) 555-0154',
  phoneHref: 'tel:+19195550154',
  // A lawn crew comes to you, so there's no street address on the site.
  areas: ['Raleigh', 'Cary', 'Apex', 'Garner', 'Knightdale', 'Wake Forest', 'Morrisville', 'Holly Springs'],
  hours: [
    { days: 'Office, Monday to Friday', time: '7:00 am to 5:00 pm' },
    { days: 'Crews, Monday to Saturday', time: 'From 7:30 am' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Free quote', href: '/contact' },

  demo: {
    studio: 'KamaStudio',
    studioUrl: 'https://kamastudio.com',
    contact: 'Kyle',
    phone: '(813) 303-2058',
    phoneHref: 'tel:+18133032058',
  },
  gaId: 'G-Y2JC9ZQ8WJ',
};
