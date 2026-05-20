import type { GuideContent } from './types'
import { CONTACT, WIFI, LOCK_CODE, MAPS, LINKS } from './shared'

export const de: GuideContent = {
  hero: {
    kicker: 'Ostuni · Apulien',
    welcome: 'Willkommen',
    title: 'MiCasa Ostuni',
    subtitle: 'Schönen Aufenthalt!',
    intro:
      'Mi Casa entstand aus der Liebe auf den ersten Blick, die Michele und Ilaria beim Spaziergang durch Ostuni erlebten: die alten weißen Gassen, das Auf und Ab und der atemberaubende Blick über das Itria-Tal und das Meer. Hier finden Sie alles für einen erholsamen Aufenthalt in der Weißen Stadt.',
    address: CONTACT.address,
    mapUrl: MAPS.house,
    scrollHint: 'Alles für Ihren Aufenthalt',
  },
  hosts: {
    title: 'Hallo, wir sind Michele & Ilaria',
    body: [
      'MiCasa entstand aus einem Land voller Kultur und Tradition und aus Michele und Ilarias echter Liebe zur Gastfreundschaft: ein Ort zum Entspannen, aber auch zum Entdecken der Region und der alten apulischen Tradition.',
      'Der Name steht für Gastfreundschaft und das Gefühl, fern von zu Hause zu Hause zu sein — er vereint die Initialen der beiden Gastgeber. Es ist eine Wohnung, die 2022 vollständig renoviert wurde, um allen Komfort eines modernen Zuhauses zu bieten und zugleich die Tradition und den typischen Geschmack der Weißen Stadt zu bewahren.',
    ],
    phones: [...CONTACT.phones],
    email: CONTACT.email,
  },
  checkIn: {
    time: 'Ab 14:00 Uhr',
    points: [
      'Der Check-in ist ab 14:00 Uhr möglich.',
      'Wir benachrichtigen Sie, falls die Wohnung früher für einen vorzeitigen Check-in bereit ist.',
      'Die Wohnung verfügt über einen Self-Check-in.',
      'Beide blauen Türen sind für Sie reserviert: eine führt in die Wohnung, die andere auf die Terrasse.',
    ],
    lockLabel: 'Masterlock-Code (Schlüssel)',
    lockCode: LOCK_CODE,
  },
  checkOut: {
    time: 'Bis 10:00 Uhr',
    points: [
      'Der Check-out ist um 10:00 Uhr.',
      `Sie können die Wohnungsschlüssel im Masterlock draußen lassen (Code ${LOCK_CODE}).`,
      'Danke, dass Sie MiCasa Ostuni gewählt haben!',
    ],
  },
  wifi: {
    networkLabel: 'Netzwerk',
    network: WIFI.network,
    passwordLabel: 'Passwort',
    password: WIFI.password,
    note: 'Zum Kopieren tippen. Netzwerkname und Passwort stehen auch am Router.',
  },
  house: [
    {
      title: 'Küche & Kaffee',
      body: 'Sie finden eine voll ausgestattete Küche vor. Sie dürfen gerne unsere Espressomaschine für Kaffee benutzen.',
    },
    {
      title: 'Waschmaschine & Bügeleisen',
      body: 'Die Waschmaschine steht auf der Terrasse, Waschmittel ist bereits enthalten. Bügeleisen und Bügelbrett befinden sich seitlich und im kleinen weißen Schrank in der Wohnung.',
    },
    {
      title: 'Klimaanlage',
      body: 'Bitte denken Sie daran, Klimaanlage und Licht auszuschalten, wenn Sie die Wohnung verlassen.',
    },
  ],
  parking: {
    intro:
      'Kostenlose Parkplätze gibt es in derselben Straße wie das Haus. Falls kein Platz frei ist, hier zwei überdachte kostenpflichtige Optionen:',
    options: [
      { name: 'Parkhaus — 5 Min. zu Fuß', note: '5 Minuten zu Fuß', mapUrl: MAPS.parking5 },
      { name: 'Parkhaus — 10 Min. zu Fuß', note: '10 Minuten zu Fuß', mapUrl: MAPS.parking10 },
    ],
  },
  waste: {
    intro:
      'An den unten genannten Tagen können Sie Ihren getrennten Müll auf die Eingangsstufen der Hauptstraße stellen.',
    outro: 'Danke für Ihre Mithilfe 🌍',
    dayCol: 'Tag',
    typeCol: 'Abfallart',
    days: [
      { day: 'Montag', type: 'Biomüll' },
      { day: 'Dienstag', type: 'Restmüll' },
      { day: 'Mittwoch', type: 'Papier & Pappe' },
      { day: 'Donnerstag', type: 'Biomüll' },
      { day: 'Freitag', type: 'Kunststoff & Metall' },
      { day: 'Samstag', type: 'Biomüll' },
      { day: 'Sonntag', type: 'Glas' },
    ],
  },
  rules: {
    items: [
      'Rauchen im Haus verboten (auf der Terrasse erlaubt).',
      'Schalten Sie Klimaanlage und Licht aus, wenn Sie gehen.',
      'Bitte stellen Sie unsere Möbel nicht um.',
      'Halten Sie die Check-in- und Check-out-Zeiten ein.',
      'Bringen Sie den Müll vor der Abreise hinaus.',
    ],
    footer: 'Als Superhosts möchten wir Ihren Aufenthalt so komfortabel wie möglich machen!',
  },
  emergency: {
    items: [
      { label: 'Medizinischer Notfall', phone: '118', address: 'Via Villafranca, 72017 Ostuni BR' },
      { label: 'Feuerwehr', phone: '115', address: 'Via Dottor Filippo Anglani, 72017 Ostuni BR' },
      { label: 'Polizei', phone: '113', address: 'Corso Vittorio Emanuele II, 93, 72017 Ostuni BR' },
      { label: 'Europäische Notrufnummer', phone: '112' },
    ],
    firstAid:
      'Ein Erste-Hilfe-Kasten befindet sich im kleinen weißen Schrank am Eingang der Wohnung.',
  },
  reach: {
    fromAirport: [
      'Vom Flughafen Bari nehmen Sie die Schnellstraße 16 Richtung Brindisi.',
      'Nehmen Sie die Ausfahrt Villanova.',
      'Folgen Sie den Schildern nach Ostuni (blau geschrieben).',
      'Fahren Sie weiter ins Zentrum von Ostuni (weiß geschrieben), dann Richtung Fasano — hier können Sie Google Maps folgen.',
      'Folgen Sie Bari / Corso Giuseppe Mazzini.',
      'An der ersten Abbiegung rechts in die Via G.C. Bovio und geradeaus weiter.',
      'Sie finden Vico Costa auf der linken Seite — und hier ist MiCasa.',
    ],
  },
  thingsToDo: [
    {
      name: 'Altstadt-Tour mit Ape / Tuk Tuk',
      description: 'Eine private Tour durch das mittelalterliche Dorf Ostuni im klassischen Dreirad.',
      url: LINKS.apeTour,
    },
    {
      name: 'Radfahren & Natur — Reservat Torre Guaceto',
      description: 'Geschütztes Meeresreservat mit offiziellen Guides für nachhaltige Touren.',
      url: LINKS.torreGuaceto,
    },
    {
      name: 'Olivenöl-Verkostung auf dem Bauernhof',
      description: 'Verkostung von nativem Olivenöl extra im Agriturismo Salinola.',
      url: LINKS.oilTasting,
    },
    {
      name: 'Hausgemachte Orecchiette',
      description: 'Koch-Erlebnisse mit Einheimischen — suchen Sie nach Airbnb-Erlebnissen in Ostuni.',
      url: LINKS.orecchiette,
    },
    {
      name: 'Höhlen von Castellana',
      description: 'Eines der spektakulärsten Höhlensysteme Italiens. Buchen Sie Ihr Webticket im Voraus.',
      url: LINKS.castellana,
    },
  ],
  placesToSee: [
    {
      name: 'Alberobello',
      description: 'Berühmt für seine ikonischen Trulli mit Kegeldächern — ein UNESCO-Welterbe von zeitlosem Charme.',
    },
    {
      name: 'Bari',
      description: 'Eine lebhafte Altstadt am Meer: Geschichte, Kultur und authentische Aromen.',
    },
    {
      name: 'Polignano a Mare & Monopoli',
      description: 'Häuser über dem kristallklaren Meer und beeindruckende Meeresgrotten.',
    },
    {
      name: 'Lecce',
      description: 'Ein Juwel des Barocks: Kirchen und Paläste, fein in warmem lokalem Stein gemeißelt.',
    },
    {
      name: 'Martina Franca & Locorotondo',
      description: 'Barocke Eleganz und die raffinierte Atmosphäre zweier der schönsten Orte des Itria-Tals.',
    },
  ],
  beaches: [
    { name: 'Lido Morelli', note: 'Kostenpflichtiger Strand', mapUrl: MAPS.lidoMorelli },
    { name: 'Cala Maka', note: 'Kostenpflichtiger Strand', mapUrl: MAPS.calaMaka },
    { name: 'Lido Bosco Verde', note: 'Kostenpflichtiger Strand', mapUrl: MAPS.lidoBoscoVerde },
  ],
  nearest: [
    { name: 'Caffè Mazzini — Tabakladen', note: 'Café & Tabak', mapUrl: MAPS.caffeMazzini },
    { name: 'Terra Nostra — Feinkost & zum Mitnehmen', note: 'Feinkost', mapUrl: MAPS.terraNostra },
    { name: 'Pizzeria Da Torino', note: 'Pizza', mapUrl: MAPS.daTorino },
    { name: 'Supermarkt', note: 'Einkauf', mapUrl: MAPS.supermarket },
    { name: 'Pizzeria Impasto Napoletano', note: 'Pizza', mapUrl: MAPS.impastoNapoletano },
  ],
  eat: [
    {
      name: 'Osteria del Tempo Perso',
      description: 'Das berühmteste und typischste Restaurant Ostunis, in einer alten Höhle. Im Voraus reservieren.',
      note: 'Mittleres bis gehobenes Preisniveau',
      mapUrl: MAPS.tempoPerso,
    },
    {
      name: 'Trattoria Fave e Fogghje',
      description: 'Typisch apulisches Menü mit hervorragendem Preis-Leistungs-Verhältnis.',
      note: 'Sehr gutes Preis-Leistungs-Verhältnis',
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
    'Leeren Sie den Kühlschrank und bringen Sie den Müll hinaus.',
    'Sagen Sie uns Bescheid, falls ein Schaden entstanden ist.',
    'Legen Sie die Schlüssel an ihren ursprünglichen Platz zurück.',
    'Schreiben Sie dem Gastgeber beim Check-out eine Nachricht.',
    'Schließen Sie alle Türen und schalten Sie alle Lichter aus.',
  ],
  faq: [
    {
      q: 'Kann ich früher einchecken?',
      a: 'Wenn die Wohnung vor 14 Uhr bereit ist, sagen wir Ihnen Bescheid. In der Zwischenzeit können Sie Ihr Gepäck problemlos abstellen.',
    },
    {
      q: 'Welche Parkmöglichkeiten gibt es?',
      a: 'Kostenloses Parken in derselben Straße; wenn voll, gibt es in der Nähe zwei überdachte kostenpflichtige Optionen (5 und 10 Minuten zu Fuß). Siehe Abschnitt Parken.',
    },
    {
      q: 'Kann ich mein Gepäck nach dem Check-out lassen?',
      a: 'Klar, kein Problem — wir bitten nur um einen Tag Vorankündigung.',
    },
    {
      q: 'Kann ich meine Kleidung waschen und bügeln?',
      a: 'Natürlich — die Wohnung hat eine Waschmaschine, ein Bügeleisen und ein Bügelbrett.',
    },
    {
      q: 'Ist eine zusätzliche Reinigung möglich?',
      a: 'Natürlich — wir bitten um zwei Tage Vorankündigung, die Kosten betragen 30 €.',
    },
  ],
  reviews: [
    'Schöne, renovierte Wohnung. Tolle Terrasse zum Entspannen und Kochen. Wir empfehlen sie :)',
    'Es war ein Vergnügen, bei Michele zu wohnen. Mit jedem Komfort ausgestattet und extrem sauber, geräumiges Bad, gut ausgestattete Küche, recht zentral, leicht zu erreichen und einfach in der Nähe zu parken. Sehr empfehlenswert — wir kommen wieder!',
  ],
  offers: [
    { name: 'Frühbucher-Rabatt', detail: '10 % Rabatt bei rechtzeitiger Buchung.' },
    { name: 'Langzeit-Rabatt', detail: '20 % Rabatt bei Aufenthalten ab 8 Nächten.' },
    { name: 'Stammgäste', detail: '15 % Rabatt auf Ihre nächste Buchung.' },
  ],
}
