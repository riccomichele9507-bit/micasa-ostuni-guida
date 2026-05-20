import type { GuideContent } from './types'
import { CONTACT, WIFI, LOCK_CODE, MAPS, LINKS } from './shared'

export const en: GuideContent = {
  hero: {
    kicker: 'Ostuni · Puglia',
    welcome: 'Welcome',
    title: 'MiCasa Ostuni',
    subtitle: 'Enjoy your stay!',
    intro:
      'Mi Casa was born from a love at first sight that Michele and Ilaria had while walking through Ostuni — the ancient white streets, the ups and downs, and the breathtaking view over the Itria Valley and the sea. Here is everything you need for a relaxed, beautiful stay in the White City.',
    address: CONTACT.address,
    mapUrl: MAPS.house,
    scrollHint: 'Everything for your stay',
  },
  hosts: {
    title: "Hello, we're Michele & Ilaria",
    body: [
      "MiCasa was born from a land rich in culture and tradition, and from Michele and Ilaria's genuine love for hospitality: a place to relax, but also to discover the territory and the ancient Apulian tradition.",
      'The name recalls hospitality and the feeling of being at home away from home — it joins the initials of the two owners. It is an apartment, completely renovated in 2022 to offer all the comforts of a modern home while keeping the tradition and typical taste of the White City.',
    ],
    phones: [...CONTACT.phones],
    email: CONTACT.email,
  },
  checkIn: {
    time: 'After 2:00 PM',
    points: [
      'Check-in is available from 2:00 PM.',
      'We will notify you if the house is ready earlier for an early check-in.',
      'The house has self check-in.',
      'Both blue doors are reserved for you: one leads to the apartment, the other to the terrace.',
    ],
    lockLabel: 'Masterlock code (keys)',
    lockCode: LOCK_CODE,
  },
  checkOut: {
    time: 'Before 10:00 AM',
    points: [
      'Check-out is at 10:00 AM.',
      `You can leave the apartment keys in the masterlock outside (code ${LOCK_CODE}).`,
      'Thank you for choosing MiCasa Ostuni!',
    ],
  },
  wifi: {
    networkLabel: 'Network',
    network: WIFI.network,
    passwordLabel: 'Password',
    password: WIFI.password,
    note: 'Tap to copy. The network name and password are also on the router.',
  },
  house: [
    {
      title: 'Kitchen & Coffee',
      body: 'You will find a fully equipped kitchen. You are welcome to use our espresso machine for coffee.',
    },
    {
      title: 'Washer & Iron',
      body: 'The washing machine is on the terrace, with detergent already included. Iron and ironing board are on the side and inside the small white wardrobe in the house.',
    },
    {
      title: 'Air Conditioning',
      body: 'Please remember to turn off the AC and lights whenever you leave the apartment.',
    },
  ],
  parking: {
    intro:
      'Free parking is on the same street as the house. If no space is available, here are two undercover paid options:',
    options: [
      { name: 'Paid parking — 5 min walk', note: '5 minutes on foot', mapUrl: MAPS.parking5 },
      { name: 'Paid parking — 10 min walk', note: '10 minutes on foot', mapUrl: MAPS.parking10 },
    ],
  },
  waste: {
    intro:
      'Put your sorted waste outside, on the entrance stairs of the main street, on the collection day after 7:00 PM. If you couldn’t take the rubbish out before leaving because it wasn’t the right day, you can simply leave it in the house.',
    outro: 'Thank you for your cooperation 🌍',
    dayCol: 'Day',
    typeCol: 'Waste type',
    days: [
      { day: 'Monday', type: 'Organic waste' },
      { day: 'Tuesday', type: 'Non-recyclable (rest)' },
      { day: 'Wednesday', type: 'Paper & cardboard' },
      { day: 'Thursday', type: 'Organic waste' },
      { day: 'Friday', type: 'Plastic & metal' },
      { day: 'Saturday', type: 'Organic waste' },
      { day: 'Sunday', type: 'Glass' },
    ],
  },
  rules: {
    items: [
      'No smoking inside the house (smoking is allowed on the terrace).',
      'Turn off the AC and lights when you go out.',
      "Please don't rearrange our furniture.",
      'Respect the check-in and check-out times.',
      'Take out the trash before you leave.',
    ],
    footer: 'As Superhosts, we aim to make your stay as comfortable as it can possibly be!',
  },
  emergency: {
    items: [
      { label: 'Medical emergency', phone: '118', address: 'Via Villafranca, 72017 Ostuni BR' },
      { label: 'Fire department', phone: '115', address: 'Via Dottor Filippo Anglani, 72017 Ostuni BR' },
      { label: 'Police station', phone: '113', address: 'Corso Vittorio Emanuele II, 93, 72017 Ostuni BR' },
      { label: 'European emergency number', phone: '112' },
    ],
    firstAid:
      'A first aid kit is inside the small white cabinet at the entrance of the apartment.',
  },
  reach: {
    fromAirport: [
      'From Bari Airport, take highway 16 toward Brindisi.',
      'Take the Villanova exit.',
      'Follow signs for Ostuni (written in blue).',
      'Continue to Ostuni centre (written in white), then continue toward Fasano — here you can start following Google Maps.',
      'Follow for Bari / Corso Giuseppe Mazzini.',
      'At the first turn, go right onto Via G.C. Bovio and continue straight.',
      'You will find Vico Costa on the left — and here is MiCasa.',
    ],
  },
  thingsToDo: [
    {
      name: 'Historic centre tour by Ape / Tuk Tuk',
      description: 'A private tour of the medieval village of Ostuni aboard the classic three-wheeler.',
      url: LINKS.apeTour,
    },
    {
      name: 'Cycling & nature — Torre Guaceto Reserve',
      description: 'Protected marine reserve with official guides for sustainable tours.',
      url: LINKS.torreGuaceto,
    },
    {
      name: 'Olive oil tasting at a farmhouse',
      description: 'Extra-virgin olive oil tasting at Agriturismo Salinola.',
      url: LINKS.oilTasting,
    },
    {
      name: 'Homemade orecchiette',
      description: 'Cooking experiences with locals — search Airbnb experiences in Ostuni.',
      url: LINKS.orecchiette,
    },
    {
      name: 'Castellana Caves',
      description: 'One of Italy’s most spectacular cave systems. Book your webticket in advance.',
      url: LINKS.castellana,
    },
  ],
  placesToSee: [
    {
      name: 'Alberobello',
      description: 'Famous for its iconic conical-roofed trulli — a UNESCO heritage site with timeless charm.',
    },
    {
      name: 'Bari',
      description: 'A lively old town overlooking the sea: history, culture and authentic flavours.',
    },
    {
      name: 'Polignano a Mare & Monopoli',
      description: 'Houses perched over the crystal-clear sea and striking sea caves.',
    },
    {
      name: 'Lecce',
      description: 'A jewel of the Baroque: churches and palaces finely carved in warm local stone.',
    },
    {
      name: 'Martina Franca & Locorotondo',
      description: 'Baroque elegance and the refined atmosphere of two of the Itria Valley’s loveliest towns.',
    },
  ],
  beaches: [
    { name: 'Lido Morelli', note: 'Paid beach', mapUrl: MAPS.lidoMorelli },
    { name: 'Cala Maka', note: 'Paid beach', mapUrl: MAPS.calaMaka },
    { name: 'Lido Bosco Verde', note: 'Paid beach', mapUrl: MAPS.lidoBoscoVerde },
  ],
  nearest: [
    { name: 'Caffè Mazzini — Tabaccheria', note: 'Café & tobacco', mapUrl: MAPS.caffeMazzini },
    { name: 'Terra Nostra — Salumeria & takeaway', note: 'Deli', mapUrl: MAPS.terraNostra },
    { name: 'Pizzeria Da Torino', note: 'Pizza', mapUrl: MAPS.daTorino },
    { name: 'Supermarket', note: 'Groceries', mapUrl: MAPS.supermarket },
    { name: 'Pizzeria Impasto Napoletano', note: 'Pizza', mapUrl: MAPS.impastoNapoletano },
  ],
  eat: [
    {
      name: 'Osteria del Tempo Perso',
      description: "Ostuni's most famous and characteristic restaurant, set in an ancient cave. Book in advance.",
      note: 'Medium-high price',
      mapUrl: MAPS.tempoPerso,
    },
    {
      name: 'Trattoria Fave e Fogghje',
      description: 'Typical Apulian menu with excellent value for money.',
      note: 'Great value',
      mapUrl: MAPS.faveFogghje,
    },
    { name: 'Trattoria Sapere & Sapori', mapUrl: MAPS.sapereSapori },
    { name: "Osteria Pizzeria Sant'Oronzo", mapUrl: MAPS.santOronzo },
  ],
  drink: [
    { name: 'Bar Perso', mapUrl: MAPS.barPerso },
    { name: 'Borgo Antico Bistrot', mapUrl: MAPS.borgoAntico },
    { name: 'Ricardo Cafe', mapUrl: MAPS.ricardoCafe },
    { name: 'ABC Apulian Bistrot', mapUrl: MAPS.abcBistrot },
    { name: 'Cala Maka', mapUrl: MAPS.calaMakaDrink },
    { name: 'Nomade', mapUrl: MAPS.nomade },
    { name: 'Gipas 111', mapUrl: MAPS.gipas111 },
  ],
  beforeYouGo: [
    'Empty the fridge and take out the trash.',
    'Let us know if any damage occurred.',
    'Return the keys to their original place.',
    'Message the host when you check out.',
    'Close all doors and turn off all lights.',
  ],
  faq: [
    {
      q: 'Can I have an early check-in?',
      a: 'If the apartment is ready before 2 PM we will let you know. In the meantime you can leave your luggage without any problem.',
    },
    {
      q: 'What parking is available?',
      a: 'Free parking is on the same street as the house; if it is full, there are two undercover paid options nearby (5 and 10 minutes on foot). See the Parking section.',
    },
    {
      q: 'Can I leave my luggage after check-out?',
      a: 'Sure, no problem — we just ask for one day’s notice.',
    },
    {
      q: 'Can I wash and iron my clothes?',
      a: 'Of course — the apartment has a washing machine, an iron and an ironing board.',
    },
    {
      q: 'Is additional cleaning possible?',
      a: 'Of course — we ask for two days’ notice, and the cost is €30.',
    },
  ],
  reviews: [
    'Beautiful and renovated apartment. Lovely terrace to relax and cook. We recommend it :)',
    "It was a pleasure to stay at Michele's place. Equipped with every comfort and extremely clean, spacious bathroom, well-equipped kitchen, quite central, easy to reach and easy to park nearby. Highly recommended — we will be back!",
  ],
  offers: [
    { name: 'Early Bird discount', detail: '10% off when you book well in advance.' },
    { name: 'Long Stay discount', detail: '20% off for stays of 8 nights or more.' },
    { name: 'Repeat Guests', detail: '15% off your next booking as a returning guest.' },
  ],
}
