// Everything about the (made-up) business lives here.

export const site = {
  name: 'Tallybrook Tax Service',
  short: 'Tallybrook',
  kind: 'Tax Service',
  city: 'Columbus',
  state: 'OH',
  phone: '(614) 555-0128',
  phoneHref: 'tel:+16145550128',
  email: 'hello@tallybrooktax.online',
  address: {
    street: '2280 Wexlow Rd, Suite 3',
    cityLine: 'Columbus, OH 43221',
  },
  // Tax season hours and the rest of the year.
  hours: {
    season: { label: 'January 15 to April 15', rows: [
      { days: 'Monday to Friday', time: '9:00 am to 7:00 pm' },
      { days: 'Saturday', time: '9:00 am to 3:00 pm' },
    ] },
    offSeason: { label: 'Rest of the year', rows: [
      { days: 'Tuesday and Thursday', time: '10:00 am to 4:00 pm' },
    ] },
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services and fees', href: '/services' },
    { label: 'What to bring', href: '/what-to-bring' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Book a time', href: '/contact' },

  demo: {
    studio: 'KamaStudio',
    studioUrl: 'https://kamastudio.com',
    contact: 'Kyle',
    phone: '(813) 303-2058',
    phoneHref: 'tel:+18133032058',
  },
  gaId: 'G-Y2JC9ZQ8WJ',
};
