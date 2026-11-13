// Prices for the quote estimator, and the year-round lawn calendar.

export const sizes = [
  { id: 'small', label: 'Small', note: 'Up to ¼ acre. Most townhomes and newer neighborhoods.', perVisit: 45 },
  { id: 'medium', label: 'Medium', note: '¼ to ½ acre. A typical Raleigh ranch or two-story lot.', perVisit: 60 },
  { id: 'large', label: 'Large', note: '½ to 1 acre. Corner lots and older neighborhoods.', perVisit: 85 },
];

export const frequencies = [
  { id: 'weekly', label: 'Every week', extra: 0, visitsPerMonth: 4.33 },
  { id: 'biweekly', label: 'Every other week', extra: 10, visitsPerMonth: 2.17 },
];

export const months = [
  {
    name: 'January',
    short: 'Jan',
    tasks: [
      'Winter pruning for shrubs and small trees',
      'Soil tests, so spring fertilizer matches what your yard needs',
      'Stick and debris pickup after storms',
    ],
  },
  {
    name: 'February',
    short: 'Feb',
    tasks: [
      'Crabgrass preventer goes down when the forsythia blooms',
      'Crepe myrtles trimmed lightly, never chopped to stumps',
      'Fresh pine straw for beds',
    ],
  },
  {
    name: 'March',
    short: 'Mar',
    tasks: ['First mows of the season', 'Spring cleanup of beds and edges', 'Light feeding for fescue lawns'],
  },
  {
    name: 'April',
    short: 'Apr',
    tasks: ['Weekly mowing begins', 'Spot treatment for clover, dandelions and wild onion', 'Mulch refresh'],
  },
  {
    name: 'May',
    short: 'May',
    tasks: [
      'Fescue mowed tall, 3½ to 4 inches, to shade out weeds',
      'Feeding for Bermuda and zoysia lawns',
      'Hedge and shrub shaping',
    ],
  },
  {
    name: 'June',
    short: 'Jun',
    tasks: [
      'Mowing with freshly sharpened blades',
      'Watching fescue for brown patch in hot, humid weeks',
      'Watering tips: about an inch a week, early in the morning',
    ],
  },
  {
    name: 'July',
    short: 'Jul',
    tasks: ['Mowing high so the grass holds up to the heat', 'Grub checks', 'Weed control in beds'],
  },
  {
    name: 'August',
    short: 'Aug',
    tasks: ['Mowing continues', 'Fall aeration and seeding booked', 'Second hedge trim'],
  },
  {
    name: 'September',
    short: 'Sep',
    tasks: [
      'Core aeration and overseeding for fescue, the most important visit of the year',
      'Fall feeding for fescue',
      'Mowing every week while new grass comes in',
    ],
  },
  {
    name: 'October',
    short: 'Oct',
    tasks: ['Overseeding wraps up by mid-month', 'Second fall feeding', 'Mowing slows down'],
  },
  {
    name: 'November',
    short: 'Nov',
    tasks: ['Leaf cleanups start', 'Last mows of the season', 'Final feeding for fescue'],
  },
  {
    name: 'December',
    short: 'Dec',
    tasks: ['Final leaf pickups', 'Gutter clean-outs', 'Beds cut back for winter'],
  },
];
