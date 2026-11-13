// Everything about the (made-up) business lives here.
// To start a new demo from this one, change this file, the colors in
// src/styles/global.css, the logo, and the text on the pages.

export const site = {
  name: 'Oakspur Tire & Wheel',
  short: 'Oakspur',
  kind: 'Tire & Wheel',
  city: 'Kansas City',
  state: 'MO',
  phone: '(816) 555-0176',
  phoneHref: 'tel:+18165550176',
  address: {
    street: '1907 Thornlatch Ave',
    cityLine: 'Kansas City, MO 64108',
  },
  hours: [
    { days: 'Monday to Friday', time: '7:30 am to 6:00 pm' },
    { days: 'Saturday', time: '8:00 am to 4:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Tires', href: '/tires' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  // The banner across the top of every page.
  demo: {
    studio: 'KamaStudio',
    studioUrl: 'https://kamastudio.com',
    contact: 'Kyle',
    phone: '(813) 303-2058',
    phoneHref: 'tel:+18133032058',
  },

  // Google Analytics property "KamaStudio Demo Sites".
  gaId: 'G-Y2JC9ZQ8WJ',
};
