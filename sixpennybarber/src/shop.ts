// The service menu and the barbers, used across the site and by the booking form.

export const services = [
  { id: 'cut', name: 'Haircut', note: 'Clippers or scissors, finished with a neck shave and hot towel', minutes: 45, price: 38 },
  { id: 'fade', name: 'Skin fade', note: 'Taken down to the skin and blended up', minutes: 45, price: 42 },
  { id: 'cut-beard', name: 'Haircut and beard', note: 'The full cut plus a beard shape and line-up', minutes: 60, price: 55 },
  { id: 'shave', name: 'Hot towel shave', note: 'Straight razor, two hot towels, cold towel to finish', minutes: 45, price: 45 },
  { id: 'beard', name: 'Beard trim', note: 'Shaped, lined up with a razor, and oiled', minutes: 20, price: 22 },
  { id: 'buzz', name: 'Buzz cut', note: 'One guard all over, cleaned up around the ears and neck', minutes: 20, price: 25 },
  { id: 'kids', name: "Kids' cut", note: '12 and under, with a lollipop if a parent says yes', minutes: 30, price: 28 },
  { id: 'senior', name: 'Senior cut', note: '65 and over, Tuesday to Friday', minutes: 30, price: 30 },
];

export const barbers = [
  {
    id: 'theo',
    name: 'Theo Vance',
    initials: 'TV',
    role: 'Owner, behind the chair since 2006',
    good: 'Scissor cuts, side parts and longer styles',
  },
  {
    id: 'marisol',
    name: 'Marisol Reyes',
    initials: 'MR',
    role: 'Barber since 2014',
    good: 'Skin fades, designs and curly hair',
  },
  {
    id: 'dex',
    name: 'Dex Whitaker',
    initials: 'DW',
    role: 'Barber since 2019',
    good: 'Beards, hot towel shaves and kids who hate haircuts',
  },
];
