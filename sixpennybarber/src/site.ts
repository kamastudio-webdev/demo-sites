// Everything about the (made-up) business lives here.

export const site = {
  name: 'Sixpenny Barber Shop',
  short: 'Sixpenny',
  kind: 'Barber Shop',
  city: 'Denver',
  state: 'CO',
  neighborhood: 'Capitol Hill',
  phone: '(720) 555-0139',
  phoneHref: 'tel:+17205550139',
  address: {
    street: '1546 Brasswick St',
    cityLine: 'Denver, CO 80218',
  },
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday to Friday', time: '10:00 am to 7:00 pm' },
    { days: 'Saturday', time: '8:00 am to 4:00 pm' },
    { days: 'Sunday', time: '10:00 am to 3:00 pm' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Barbers', href: '/barbers' },
    { label: 'Book', href: '/book' },
    { label: 'Visit', href: '/visit' },
  ],
  cta: { label: 'Book a chair', href: '/book' },

  demo: {
    studio: 'KamaStudio',
    studioUrl: 'https://kamastudio.com',
    contact: 'Kyle',
    phone: '(813) 303-2058',
    phoneHref: 'tel:+18133032058',
  },
  gaId: 'G-Y2JC9ZQ8WJ',
};
