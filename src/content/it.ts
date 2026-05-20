import type { GuideContent } from './types'
import { CONTACT, WIFI, LOCK_CODE, MAPS, LINKS } from './shared'

export const it: GuideContent = {
  hero: {
    kicker: 'Ostuni · Puglia',
    welcome: 'Benvenuti',
    title: 'MiCasa Ostuni',
    subtitle: 'Buon soggiorno!',
    intro:
      'Mi Casa nasce da un amore a prima vista di Michele e Ilaria, passeggiando per Ostuni: le antiche vie bianche, i saliscendi e la vista mozzafiato sulla Valle d’Itria e sul mare. Qui trovi tutto ciò che ti serve per un soggiorno rilassante nella Città Bianca.',
    address: CONTACT.address,
    mapUrl: MAPS.house,
    scrollHint: 'Tutto per il tuo soggiorno',
  },
  hosts: {
    title: 'Ciao, siamo Michele & Ilaria',
    body: [
      'MiCasa nasce da una terra ricca di cultura e tradizione e dall’amore autentico di Michele e Ilaria per l’ospitalità: un luogo dove rilassarsi, ma anche scoprire il territorio e l’antica tradizione pugliese.',
      'Il nome richiama l’ospitalità e il sentirsi a casa lontano da casa, ed è l’unione delle iniziali dei due proprietari. È un appartamento, completamente ristrutturato nel 2022 per offrire tutti i comfort di una casa moderna mantenendo la tradizione e il gusto tipico della Città Bianca.',
    ],
    phones: [...CONTACT.phones],
    email: CONTACT.email,
  },
  checkIn: {
    time: 'Dalle 14:00',
    points: [
      'Il check-in è disponibile dalle 14:00.',
      'Ti avviseremo se la casa è pronta prima, per un check-in anticipato.',
      'La casa ha il self check-in.',
      'Entrambe le porte blu sono riservate a te: una conduce all’appartamento, l’altra alla terrazza.',
    ],
    lockLabel: 'Codice masterlock (chiavi)',
    lockCode: LOCK_CODE,
  },
  checkOut: {
    time: 'Entro le 10:00',
    points: [
      'Il check-out è alle 10:00.',
      `Puoi lasciare le chiavi dell’appartamento nel masterlock all’esterno (codice ${LOCK_CODE}).`,
      'Grazie per aver scelto MiCasa Ostuni!',
    ],
  },
  wifi: {
    networkLabel: 'Rete',
    network: WIFI.network,
    passwordLabel: 'Password',
    password: WIFI.password,
    note: 'Tocca per copiare. Nome rete e password sono anche sul router.',
  },
  house: [
    {
      title: 'Cucina & Caffè',
      body: 'Troverai una cucina completamente attrezzata. Puoi usare la nostra macchina per l’espresso per il caffè.',
    },
    {
      title: 'Lavatrice & Ferro',
      body: 'La lavatrice è in terrazza, con il detersivo già incluso. Ferro e asse da stiro sono di lato e dentro il piccolo armadio bianco in casa.',
    },
    {
      title: 'Aria condizionata',
      body: 'Ricordati di spegnere l’aria condizionata e le luci ogni volta che esci dall’appartamento.',
    },
  ],
  parking: {
    intro:
      'Il parcheggio gratuito è sulla stessa via della casa. Se non ci sono posti, ecco due opzioni coperte a pagamento:',
    options: [
      { name: 'Parcheggio a pagamento — 5 min a piedi', note: '5 minuti a piedi', mapUrl: MAPS.parking5 },
      { name: 'Parcheggio a pagamento — 10 min a piedi', note: '10 minuti a piedi', mapUrl: MAPS.parking10 },
    ],
  },
  waste: {
    intro:
      'Nei giorni indicati puoi gentilmente lasciare i rifiuti differenziati sui gradini dell’ingresso della via principale.',
    outro: 'Grazie per la collaborazione 🌍',
    dayCol: 'Giorno',
    typeCol: 'Tipo di rifiuto',
    days: [
      { day: 'Lunedì', type: 'Organico' },
      { day: 'Martedì', type: 'Non riciclabile (secco)' },
      { day: 'Mercoledì', type: 'Carta e cartone' },
      { day: 'Giovedì', type: 'Organico' },
      { day: 'Venerdì', type: 'Plastica e metalli' },
      { day: 'Sabato', type: 'Organico' },
      { day: 'Domenica', type: 'Vetro' },
    ],
  },
  rules: {
    items: [
      'Vietato fumare in casa (consentito in terrazza).',
      'Spegni l’aria condizionata e le luci quando esci.',
      'Per favore non spostare i nostri mobili.',
      'Rispetta gli orari di check-in e check-out.',
      'Porta fuori i rifiuti prima di partire.',
    ],
    footer: 'Come Superhost, vogliamo rendere il tuo soggiorno il più confortevole possibile!',
  },
  emergency: {
    items: [
      { label: 'Emergenza medica', phone: '118', address: 'Via Villafranca, 72017 Ostuni BR' },
      { label: 'Vigili del fuoco', phone: '115', address: 'Via Dottor Filippo Anglani, 72017 Ostuni BR' },
      { label: 'Polizia', phone: '113', address: 'Corso Vittorio Emanuele II, 93, 72017 Ostuni BR' },
      { label: 'Numero unico emergenze', phone: '112' },
    ],
    firstAid:
      'Trovi una cassetta di primo soccorso dentro il piccolo armadietto bianco all’ingresso dell’appartamento.',
  },
  reach: {
    fromAirport: [
      'Dall’aeroporto di Bari, prendi la superstrada 16 in direzione Brindisi.',
      'Prendi l’uscita Villanova.',
      'Segui le indicazioni per Ostuni (scritte in blu).',
      'Prosegui per Ostuni centro (scritte in bianco), poi continua verso Fasano — qui puoi iniziare a seguire Google Maps.',
      'Segui per Bari / Corso Giuseppe Mazzini.',
      'Alla prima svolta, gira a destra su Via G.C. Bovio e prosegui dritto.',
      'Troverai Vico Costa sulla sinistra — ed ecco MiCasa.',
    ],
  },
  thingsToDo: [
    {
      name: 'Tour del centro storico in Ape / Tuk Tuk',
      description: 'Un tour privato del borgo medievale di Ostuni a bordo della classica tre ruote.',
      url: LINKS.apeTour,
    },
    {
      name: 'Bici & natura — Riserva di Torre Guaceto',
      description: 'Riserva marina protetta con guide ufficiali per tour sostenibili.',
      url: LINKS.torreGuaceto,
    },
    {
      name: 'Degustazione di olio in masseria',
      description: 'Degustazione di olio extravergine d’oliva all’Agriturismo Salinola.',
      url: LINKS.oilTasting,
    },
    {
      name: 'Orecchiette fatte a mano',
      description: 'Esperienze di cucina con la gente del posto — cerca le esperienze Airbnb a Ostuni.',
      url: LINKS.orecchiette,
    },
    {
      name: 'Grotte di Castellana',
      description: 'Uno dei sistemi di grotte più spettacolari d’Italia. Prenota il webticket in anticipo.',
      url: LINKS.castellana,
    },
  ],
  placesToSee: [
    {
      name: 'Alberobello',
      description: 'Famosa per gli iconici trulli dai tetti conici — patrimonio UNESCO dal fascino senza tempo.',
    },
    {
      name: 'Bari',
      description: 'Una vivace città vecchia affacciata sul mare: storia, cultura e sapori autentici.',
    },
    {
      name: 'Polignano a Mare & Monopoli',
      description: 'Case a strapiombo sul mare cristallino e suggestive grotte marine.',
    },
    {
      name: 'Lecce',
      description: 'Un gioiello del Barocco: chiese e palazzi finemente scolpiti nella calda pietra locale.',
    },
    {
      name: 'Martina Franca & Locorotondo',
      description: 'Eleganza barocca e l’atmosfera raffinata di due dei borghi più belli della Valle d’Itria.',
    },
  ],
  beaches: [
    { name: 'Lido Morelli', note: 'Spiaggia a pagamento', mapUrl: MAPS.lidoMorelli },
    { name: 'Cala Maka', note: 'Spiaggia a pagamento', mapUrl: MAPS.calaMaka },
    { name: 'Lido Bosco Verde', note: 'Spiaggia a pagamento', mapUrl: MAPS.lidoBoscoVerde },
  ],
  nearest: [
    { name: 'Caffè Mazzini — Tabaccheria', note: 'Bar & tabacchi', mapUrl: MAPS.caffeMazzini },
    { name: 'Terra Nostra — Salumeria & asporto', note: 'Gastronomia', mapUrl: MAPS.terraNostra },
    { name: 'Pizzeria Da Torino', note: 'Pizza', mapUrl: MAPS.daTorino },
    { name: 'Supermercato', note: 'Spesa', mapUrl: MAPS.supermarket },
    { name: 'Pizzeria Impasto Napoletano', note: 'Pizza', mapUrl: MAPS.impastoNapoletano },
  ],
  eat: [
    {
      name: 'Osteria del Tempo Perso',
      description: 'Il ristorante più famoso e caratteristico di Ostuni, in un’antica grotta. Prenota in anticipo.',
      note: 'Prezzo medio-alto',
      mapUrl: MAPS.tempoPerso,
    },
    {
      name: 'Trattoria Fave e Fogghje',
      description: 'Menù tipico pugliese con un ottimo rapporto qualità-prezzo.',
      note: 'Ottimo rapporto qualità-prezzo',
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
    'Svuota il frigorifero e porta fuori i rifiuti.',
    'Facci sapere se è successo qualche danno.',
    'Riporta le chiavi al loro posto originale.',
    'Scrivi all’host quando fai il check-out.',
    'Chiudi tutte le porte e spegni tutte le luci.',
  ],
  faq: [
    {
      q: 'Posso fare un check-in anticipato?',
      a: 'Se l’appartamento è pronto prima delle 14, ti avviseremo. Nel frattempo puoi lasciare i bagagli senza problemi.',
    },
    {
      q: 'Che parcheggio è disponibile?',
      a: 'Il parcheggio gratuito è sulla stessa via della casa; se è pieno, ci sono due opzioni coperte a pagamento nelle vicinanze (5 e 10 minuti a piedi). Vedi la sezione Parcheggio.',
    },
    {
      q: 'Posso lasciare i bagagli dopo il check-out?',
      a: 'Certo, nessun problema — chiediamo solo un giorno di preavviso.',
    },
    {
      q: 'Posso lavare e stirare i vestiti?',
      a: 'Certo — l’appartamento ha lavatrice, ferro e asse da stiro.',
    },
    {
      q: 'È possibile avere una pulizia extra?',
      a: 'Certo — chiediamo due giorni di preavviso e il costo è di 30 €.',
    },
  ],
  reviews: [
    'Appartamento bello e ristrutturato. Bella terrazza per rilassarsi e cucinare. Lo consigliamo :)',
    'È stato un piacere soggiornare da Michele. Dotato di ogni comfort ed estremamente pulito, bagno spazioso, cucina ben attrezzata, abbastanza centrale, facile da raggiungere e facile parcheggiare nelle vicinanze. Altamente consigliato — torneremo!',
  ],
  offers: [
    { name: 'Sconto Early Bird', detail: '10% di sconto prenotando con largo anticipo.' },
    { name: 'Sconto Long Stay', detail: '20% di sconto per soggiorni di 8 notti o più.' },
    { name: 'Ospiti di ritorno', detail: '15% di sconto sulla tua prossima prenotazione.' },
  ],
}
