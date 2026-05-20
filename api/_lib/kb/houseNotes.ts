import type { Lang } from '../../../src/content/types.js'

// Apartment Q&A / troubleshooting for the AI assistant. SERVER-SIDE ONLY.
// Michele: add more Q&A here. The assistant understands context, so guests can
// phrase questions differently — keep entries as clear "question → answer" pairs.

const NOTES: Record<Lang, string> = {
  en: `- No hot water / the hot water won't come out? Check the boiler on the terrace — it is under the curtains/blinds. If the boiler screen shows no temperature, press the "Mode" button once or twice until a temperature appears. Once a temperature is shown, give the boiler 15-20 minutes to reach the ideal temperature.
- Sudden power outage / the lights go out? Please kindly check the electrical panel (fuse box) located near the entrance door.
- How much does parking cost in Ostuni? Around €2 per hour.`,
  it: `- L'acqua calda non esce? Controlla il boiler in terrazza: è collocato sotto le tendine. Se sullo schermo del boiler non compare la temperatura, premi il pulsante "Mode" una o due volte finché non appare la temperatura. Una volta visualizzata, dai al boiler 15-20 minuti per raggiungere la temperatura ideale.
- La luce va via all'improvviso? Controlla gentilmente il quadro elettrico vicino alla porta d'ingresso.
- Quanto costa il parcheggio a Ostuni? Circa 2 € l'ora.`,
  fr: `- Pas d'eau chaude ? Vérifiez le chauffe-eau (boiler) sur la terrasse : il se trouve sous les rideaux/stores. Si l'écran n'affiche aucune température, appuyez sur le bouton « Mode » une ou deux fois jusqu'à ce qu'une température apparaisse. Ensuite, laissez 15-20 minutes au chauffe-eau pour atteindre la température idéale.
- Coupure de courant soudaine / les lumières s'éteignent ? Vérifiez gentiment le tableau électrique situé près de la porte d'entrée.
- Combien coûte le stationnement à Ostuni ? Environ 2 € de l'heure.`,
  de: `- Kein warmes Wasser? Prüfen Sie den Boiler auf der Terrasse: Er befindet sich unter den Vorhängen/Rollos. Zeigt das Display keine Temperatur an, drücken Sie ein- bis zweimal die Taste „Mode", bis eine Temperatur erscheint. Geben Sie dem Boiler danach 15-20 Minuten, um die ideale Temperatur zu erreichen.
- Plötzlicher Stromausfall / das Licht geht aus? Bitte prüfen Sie den Sicherungskasten (Stromkasten) in der Nähe der Eingangstür.
- Was kostet das Parken in Ostuni? Etwa 2 € pro Stunde.`,
}

export function getHouseNotes(lang: Lang): string {
  return NOTES[lang] ?? NOTES.en
}
