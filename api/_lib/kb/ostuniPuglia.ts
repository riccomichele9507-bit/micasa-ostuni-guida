import type { Lang } from '../../../src/content/types'

// Extra, free-form knowledge about Ostuni & Puglia for the AI assistant.
// SERVER-SIDE ONLY — this is never shipped to the browser.
// Michele: edit the text below to teach the assistant more. Keep one entry per language.

const EXTRA: Record<Lang, string> = {
  en: `Ostuni is known as "La Città Bianca" (the White City) for its whitewashed old town, perched on a hill in the Itria Valley, in the province of Brindisi, Puglia (the heel of Italy).
- Getting around: a car is the easiest way to explore Puglia. Ostuni train station (on the Bari–Lecce line) is about 3 km from the centre; taxis and buses connect it to town.
- The historic centre is a maze of steep, narrow lanes and steps — wear comfortable shoes.
- Beaches are about 7–10 km from the old town (Marina di Ostuni, Pilone, Torre Guaceto). Most need a car or taxi.
- Typical Apulian food to try: orecchiette (with cime di rapa), burrata, bombette (stuffed pork rolls), focaccia, friselle, and local extra-virgin olive oil and Primitivo/Negroamaro wines.
- Best months: May–October for warm weather and the sea; July–August are busiest.
- Markets and shops usually close in the early afternoon (riposo) and reopen around 5 PM. Many close on Sundays.
- Nearby day trips: Alberobello (trulli), Polignano a Mare, Lecce (Baroque), Matera (in Basilicata, ~1h30 by car).`,
  it: `Ostuni è conosciuta come "La Città Bianca" per il suo centro storico imbiancato a calce, arroccato su una collina nella Valle d'Itria, in provincia di Brindisi, in Puglia.
- Spostarsi: l'auto è il modo più comodo per esplorare la Puglia. La stazione di Ostuni (linea Bari–Lecce) è a circa 3 km dal centro; taxi e bus la collegano alla città.
- Il centro storico è un labirinto di vicoli ripidi, stretti e scalinate — indossa scarpe comode.
- Le spiagge sono a circa 7–10 km dal centro (Marina di Ostuni, Pilone, Torre Guaceto). Quasi sempre serve l'auto o un taxi.
- Piatti pugliesi tipici da provare: orecchiette (con le cime di rapa), burrata, bombette, focaccia, friselle, olio extravergine locale e vini Primitivo/Negroamaro.
- Periodo migliore: da maggio a ottobre per clima caldo e mare; luglio e agosto sono i mesi più affollati.
- Negozi e mercati di solito chiudono nel primo pomeriggio (riposo) e riaprono verso le 17. Molti chiudono la domenica.
- Gite nei dintorni: Alberobello (trulli), Polignano a Mare, Lecce (barocco), Matera (in Basilicata, ~1h30 in auto).`,
  fr: `Ostuni est surnommée "La Città Bianca" (la Ville Blanche) pour son centre historique chaulé, perché sur une colline dans la Vallée d'Itria, province de Brindisi, dans les Pouilles.
- Se déplacer : la voiture est le moyen le plus pratique pour explorer les Pouilles. La gare d'Ostuni (ligne Bari–Lecce) est à environ 3 km du centre ; taxis et bus la relient à la ville.
- Le centre historique est un dédale de ruelles raides et étroites et d'escaliers — portez des chaussures confortables.
- Les plages sont à environ 7–10 km du centre (Marina di Ostuni, Pilone, Torre Guaceto). Une voiture ou un taxi est généralement nécessaire.
- Spécialités des Pouilles à goûter : orecchiette (aux cime di rapa), burrata, bombette, focaccia, friselle, huile d'olive extra-vierge locale et vins Primitivo/Negroamaro.
- Meilleure période : de mai à octobre pour la chaleur et la mer ; juillet et août sont les plus fréquentés.
- Commerces et marchés ferment souvent en début d'après-midi (riposo) et rouvrent vers 17h. Beaucoup ferment le dimanche.
- Excursions à proximité : Alberobello (trulli), Polignano a Mare, Lecce (baroque), Matera (en Basilicate, ~1h30 en voiture).`,
  de: `Ostuni ist als "La Città Bianca" (die Weiße Stadt) bekannt — wegen ihrer weiß gekalkten Altstadt auf einem Hügel im Itria-Tal, Provinz Brindisi, in Apulien.
- Fortbewegung: Ein Auto ist am praktischsten, um Apulien zu erkunden. Der Bahnhof Ostuni (Linie Bari–Lecce) liegt etwa 3 km vom Zentrum; Taxis und Busse verbinden ihn mit der Stadt.
- Die Altstadt ist ein Labyrinth aus steilen, engen Gassen und Treppen — bequeme Schuhe tragen.
- Die Strände sind etwa 7–10 km vom Zentrum entfernt (Marina di Ostuni, Pilone, Torre Guaceto). Meist braucht man ein Auto oder Taxi.
- Typische apulische Gerichte: Orecchiette (mit Cime di Rapa), Burrata, Bombette, Focaccia, Friselle, lokales natives Olivenöl und Primitivo/Negroamaro-Weine.
- Beste Zeit: Mai bis Oktober für warmes Wetter und Meer; Juli und August sind am vollsten.
- Geschäfte und Märkte schließen oft am frühen Nachmittag (riposo) und öffnen gegen 17 Uhr wieder. Viele sind sonntags geschlossen.
- Ausflüge in der Nähe: Alberobello (Trulli), Polignano a Mare, Lecce (Barock), Matera (in der Basilikata, ~1,5 Std. mit dem Auto).`,
}

export function getOstuniPugliaInfo(lang: Lang): string {
  return EXTRA[lang] ?? EXTRA.en
}
