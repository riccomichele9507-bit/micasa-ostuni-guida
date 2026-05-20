import type { GuideContent } from './types'
import { CONTACT, WIFI, LOCK_CODE, MAPS, LINKS } from './shared'

export const fr: GuideContent = {
  hero: {
    kicker: 'Ostuni · Pouilles',
    welcome: 'Bienvenue',
    title: 'MiCasa Ostuni',
    subtitle: 'Bon séjour !',
    intro:
      'Mi Casa est née d’un coup de foudre de Michele et Ilaria en se promenant dans Ostuni : les anciennes ruelles blanches, les montées et descentes, et la vue à couper le souffle sur la Vallée d’Itria et la mer. Vous trouverez ici tout le nécessaire pour un séjour reposant dans la Ville Blanche.',
    address: CONTACT.address,
    mapUrl: MAPS.house,
    scrollHint: 'Tout pour votre séjour',
  },
  hosts: {
    title: 'Bonjour, nous sommes Michele & Ilaria',
    body: [
      'MiCasa est née d’une terre riche en culture et en traditions, et de l’amour sincère de Michele et Ilaria pour l’hospitalité : un lieu pour se détendre, mais aussi pour découvrir le territoire et l’ancienne tradition des Pouilles.',
      'Le nom évoque l’hospitalité et le sentiment d’être chez soi loin de chez soi — il réunit les initiales des deux propriétaires. C’est un appartement entièrement rénové en 2022, offrant tout le confort d’une maison moderne tout en conservant la tradition et le goût typique de la Ville Blanche.',
    ],
    phones: [...CONTACT.phones],
    email: CONTACT.email,
  },
  checkIn: {
    time: 'À partir de 14h00',
    points: [
      'L’arrivée est possible à partir de 14h00.',
      'Nous vous préviendrons si le logement est prêt plus tôt pour une arrivée anticipée.',
      'Le logement dispose d’une arrivée autonome (self check-in).',
      'Les deux portes bleues vous sont réservées : l’une mène à l’appartement, l’autre à la terrasse.',
    ],
    lockLabel: 'Code du masterlock (clés)',
    lockCode: LOCK_CODE,
  },
  checkOut: {
    time: 'Avant 10h00',
    points: [
      'Le départ se fait à 10h00.',
      `Vous pouvez laisser les clés de l’appartement dans le masterlock à l’extérieur (code ${LOCK_CODE}).`,
      'Merci d’avoir choisi MiCasa Ostuni !',
    ],
  },
  wifi: {
    networkLabel: 'Réseau',
    network: WIFI.network,
    passwordLabel: 'Mot de passe',
    password: WIFI.password,
    note: 'Touchez pour copier. Le nom du réseau et le mot de passe figurent aussi sur le routeur.',
  },
  house: [
    {
      title: 'Cuisine & Café',
      body: 'Vous trouverez une cuisine entièrement équipée. Vous pouvez utiliser notre machine à espresso pour le café.',
    },
    {
      title: 'Lave-linge & Fer à repasser',
      body: 'Le lave-linge est sur la terrasse, lessive déjà incluse. Le fer et la planche à repasser se trouvent sur le côté et dans la petite armoire blanche de la maison.',
    },
    {
      title: 'Climatisation',
      body: 'Merci de penser à éteindre la climatisation et les lumières chaque fois que vous quittez l’appartement.',
    },
  ],
  parking: {
    intro:
      'Le stationnement gratuit se trouve dans la même rue que la maison. S’il n’y a pas de place, voici deux parkings couverts payants :',
    options: [
      { name: 'Parking payant — 5 min à pied', note: '5 minutes à pied', mapUrl: MAPS.parking5 },
      { name: 'Parking payant — 10 min à pied', note: '10 minutes à pied', mapUrl: MAPS.parking10 },
    ],
  },
  waste: {
    intro:
      'Déposez vos déchets triés dehors, sur les marches de l’entrée de la rue principale, le jour de la collecte après 19h00. Si, au moment de partir, vous n’avez pas pu sortir les ordures parce que ce n’était pas le bon jour, vous pouvez simplement les laisser dans le logement.',
    outro: 'Merci de votre coopération 🌍',
    dayCol: 'Jour',
    typeCol: 'Type de déchet',
    days: [
      { day: 'Lundi', type: 'Déchets organiques' },
      { day: 'Mardi', type: 'Non recyclable (résiduel)' },
      { day: 'Mercredi', type: 'Papier & carton' },
      { day: 'Jeudi', type: 'Déchets organiques' },
      { day: 'Vendredi', type: 'Plastique & métaux' },
      { day: 'Samedi', type: 'Déchets organiques' },
      { day: 'Dimanche', type: 'Verre' },
    ],
  },
  rules: {
    items: [
      'Interdiction de fumer à l’intérieur (autorisé sur la terrasse).',
      'Éteignez la climatisation et les lumières en sortant.',
      'Merci de ne pas déplacer nos meubles.',
      'Respectez les horaires d’arrivée et de départ.',
      'Sortez les poubelles avant de partir.',
    ],
    footer: 'En tant que Superhosts, nous voulons rendre votre séjour aussi confortable que possible !',
  },
  emergency: {
    items: [
      { label: 'Urgence médicale', phone: '118', address: 'Via Villafranca, 72017 Ostuni BR' },
      { label: 'Pompiers', phone: '115', address: 'Via Dottor Filippo Anglani, 72017 Ostuni BR' },
      { label: 'Police', phone: '113', address: 'Corso Vittorio Emanuele II, 93, 72017 Ostuni BR' },
      { label: 'Numéro d’urgence européen', phone: '112' },
    ],
    firstAid:
      'Une trousse de premiers secours se trouve dans la petite armoire blanche à l’entrée de l’appartement.',
  },
  reach: {
    fromAirport: [
      'Depuis l’aéroport de Bari, prenez la voie rapide 16 en direction de Brindisi.',
      'Prenez la sortie Villanova.',
      'Suivez les panneaux vers Ostuni (en bleu).',
      'Continuez vers Ostuni centre (en blanc), puis en direction de Fasano — vous pouvez commencer à suivre Google Maps.',
      'Suivez Bari / Corso Giuseppe Mazzini.',
      'Au premier virage, tournez à droite sur Via G.C. Bovio et continuez tout droit.',
      'Vous trouverez Vico Costa sur la gauche — et voici MiCasa.',
    ],
  },
  thingsToDo: [
    {
      name: 'Tour du centre historique en Ape / Tuk Tuk',
      description: 'Un tour privé du village médiéval d’Ostuni à bord du célèbre triporteur.',
      url: LINKS.apeTour,
    },
    {
      name: 'Vélo & nature — Réserve de Torre Guaceto',
      description: 'Réserve marine protégée avec des guides officiels pour des visites durables.',
      url: LINKS.torreGuaceto,
    },
    {
      name: 'Dégustation d’huile d’olive à la ferme',
      description: 'Dégustation d’huile d’olive extra-vierge à l’Agriturismo Salinola.',
      url: LINKS.oilTasting,
    },
    {
      name: 'Orecchiette faites maison',
      description: 'Expériences de cuisine avec les habitants — cherchez les expériences Airbnb à Ostuni.',
      url: LINKS.orecchiette,
    },
    {
      name: 'Grottes de Castellana',
      description: 'L’un des réseaux de grottes les plus spectaculaires d’Italie. Réservez votre billet en ligne à l’avance.',
      url: LINKS.castellana,
    },
  ],
  placesToSee: [
    {
      name: 'Alberobello',
      description: 'Célèbre pour ses trulli aux toits coniques — un site UNESCO au charme intemporel.',
    },
    {
      name: 'Bari',
      description: 'Une vieille ville animée face à la mer : histoire, culture et saveurs authentiques.',
    },
    {
      name: 'Polignano a Mare & Monopoli',
      description: 'Des maisons en surplomb sur une mer cristalline et de superbes grottes marines.',
    },
    {
      name: 'Lecce',
      description: 'Un joyau du Baroque : églises et palais finement sculptés dans la chaude pierre locale.',
    },
    {
      name: 'Martina Franca & Locorotondo',
      description: 'Élégance baroque et atmosphère raffinée de deux des plus beaux villages de la Vallée d’Itria.',
    },
  ],
  beaches: [
    { name: 'Lido Morelli', note: 'Plage payante', mapUrl: MAPS.lidoMorelli },
    { name: 'Cala Maka', note: 'Plage payante', mapUrl: MAPS.calaMaka },
    { name: 'Lido Bosco Verde', note: 'Plage payante', mapUrl: MAPS.lidoBoscoVerde },
  ],
  nearest: [
    { name: 'Caffè Mazzini — Tabac', note: 'Café & tabac', mapUrl: MAPS.caffeMazzini },
    { name: 'Terra Nostra — Charcuterie & à emporter', note: 'Épicerie fine', mapUrl: MAPS.terraNostra },
    { name: 'Pizzeria Da Torino', note: 'Pizza', mapUrl: MAPS.daTorino },
    { name: 'Supermarché', note: 'Courses', mapUrl: MAPS.supermarket },
    { name: 'Pizzeria Impasto Napoletano', note: 'Pizza', mapUrl: MAPS.impastoNapoletano },
  ],
  eat: [
    {
      name: 'Osteria del Tempo Perso',
      description: 'Le restaurant le plus célèbre et typique d’Ostuni, installé dans une ancienne grotte. Réservez à l’avance.',
      note: 'Prix moyen-élevé',
      mapUrl: MAPS.tempoPerso,
    },
    {
      name: 'Trattoria Fave e Fogghje',
      description: 'Menu typique des Pouilles avec un excellent rapport qualité-prix.',
      note: 'Excellent rapport qualité-prix',
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
    'Videz le réfrigérateur et sortez les poubelles.',
    'Prévenez-nous en cas de dommage.',
    'Remettez les clés à leur place d’origine.',
    'Envoyez un message à l’hôte lors de votre départ.',
    'Fermez toutes les portes et éteignez toutes les lumières.',
  ],
  faq: [
    {
      q: 'Puis-je arriver plus tôt ?',
      a: 'Si l’appartement est prêt avant 14h, nous vous préviendrons. En attendant, vous pouvez déposer vos bagages sans problème.',
    },
    {
      q: 'Quel stationnement est disponible ?',
      a: 'Le stationnement gratuit est dans la même rue ; s’il est complet, deux parkings couverts payants se trouvent à proximité (5 et 10 minutes à pied). Voir la section Stationnement.',
    },
    {
      q: 'Puis-je laisser mes bagages après le départ ?',
      a: 'Bien sûr, aucun problème — nous demandons simplement un jour de préavis.',
    },
    {
      q: 'Puis-je laver et repasser mes vêtements ?',
      a: 'Bien sûr — l’appartement dispose d’un lave-linge, d’un fer et d’une planche à repasser.',
    },
    {
      q: 'Un ménage supplémentaire est-il possible ?',
      a: 'Bien sûr — nous demandons deux jours de préavis, et le coût est de 30 €.',
    },
  ],
  reviews: [
    'Appartement magnifique et rénové. Belle terrasse pour se détendre et cuisiner. Nous le recommandons :)',
    'Ce fut un plaisir de séjourner chez Michele. Équipé de tout le confort et extrêmement propre, salle de bain spacieuse, cuisine bien équipée, assez central, facile d’accès et facile pour se garer à proximité. Vivement recommandé — nous reviendrons !',
  ],
  offers: [
    { name: 'Clients fidèles', detail: '15 % de réduction sur votre prochaine réservation.' },
  ],
}
