// Language-independent data: contacts, credentials and external links.
// Kept in one place so the four language files never drift on URLs or numbers.

export const CONTACT = {
  phones: ['+39 346 248 2556', '+39 348 876 0035'],
  email: 'micasaostuni@gmail.com',
  address: '72017 Ostuni — Vico Costa, 14-16',
} as const

export const WIFI = {
  network: 'Linkem_685EBD',
  password: 'ap0b1uhi',
} as const

export const LOCK_CODE = '3698'

/** Google Maps short links. */
export const MAPS = {
  house: 'https://maps.app.goo.gl/6VDT1EeEa6MPnMoQA',
  parking5: 'https://maps.app.goo.gl/46hjQh8ty7L3v1e4A',
  parking10: 'https://maps.app.goo.gl/QMvmVcsEiTXwLDjUA',
  lidoMorelli: 'https://maps.app.goo.gl/aP7yESPYEEJ525sb6',
  calaMaka: 'https://maps.app.goo.gl/G4qozXy35rQxYQFK9',
  lidoBoscoVerde: 'https://maps.app.goo.gl/qvzXtCQShr5ojWKb8',
  caffeMazzini: 'https://maps.app.goo.gl/HDWUMygR5dD2FPpd6',
  terraNostra: 'https://maps.app.goo.gl/1MvneWJjy5sHVeNE9',
  daTorino: 'https://maps.app.goo.gl/3uNe6H8svqFGsTqR8',
  supermarket: 'https://maps.app.goo.gl/KZsTu4qXQj81CASL9',
  impastoNapoletano: 'https://maps.app.goo.gl/2fZw19vf9JMSVhSD6',
  tempoPerso: 'https://maps.app.goo.gl/5u9dHhYBTF2Byyv66',
  faveFogghje: 'https://maps.app.goo.gl/Jj1GNESNtfvAWWrPA',
  sapereSapori: 'https://maps.app.goo.gl/YZPim6qBiGubkzK87',
  santOronzo: 'https://maps.app.goo.gl/6dTzamWUXQcqHDWZ9',
  barPerso: 'https://maps.app.goo.gl/Mi1eEY6i348o4XCWA',
  borgoAntico: 'https://maps.app.goo.gl/ZRAGUgfrHYx1DAYn7',
  ricardoCafe: 'https://maps.app.goo.gl/kSHJ8ZpBpL9fdbvVA',
  abcBistrot: 'https://maps.app.goo.gl/TRcKjn7bRB7ydkrn7',
  calaMakaDrink: 'https://maps.app.goo.gl/6nXrcsqBB9eo3ARC9',
  nomade: 'https://maps.app.goo.gl/ZKgrEQKR8noLfoHXA',
  gipas111: 'https://maps.app.goo.gl/SJteTDaLGAJixpfa7',
} as const

/** External websites (tours, tickets, experiences). */
export const LINKS = {
  apeTour:
    'https://www.tripadvisor.it/AttractionProductReview-g187875-d17458945-Private_Tour_of_the_Medieval_Village_of_Ostuni_by_Tuk_Tuk-Brindisi_Province_of_Bri.html',
  torreGuaceto:
    'https://www.riservaditorreguaceto.it/index.php/it/fruizione/visitare-torre-guaceto/elenco-delle-guide-ufficiali/20-fruizione-sostenibile/193-scegli-il-tuo-tour',
  oilTasting:
    'https://www.agriturismosalinola.com/Degustazione-olio-extravergine-di-oliva-per-gruppi-in-Ostuni-Puglia.html',
  orecchiette: 'https://www.airbnb.it/s/Ostuni--BR/experiences',
  castellana: 'https://shop.grottedicastellana.it/webshop/webticket',
} as const
