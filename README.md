# Thomas Kolonko – Coaching & Mentoring

## Website

Die zweisprachige Website stellt das Angebot von Thomas Kolonko auf Deutsch und Englisch vor: Business- und Personal-Coaching, betriebliches Mentoring und Sparring für Menschen in Fach-, Projekt- und Führungsrollen. Die Begleitung unterstützt bei beruflichen Herausforderungen, Veränderungen und persönlichen Anliegen – systemisch, lösungsorientiert und auf Augenhöhe. Das Angebot ist in Zürich und online verfügbar. Deutsch ist die Hauptsprache; die englische Version ist unter `/en/` erreichbar.

Website: [https://www.thomaskolonko.ch](https://www.thomaskolonko.ch)

## Astro

Die Website ist mit [Astro](https://astro.build) erstellt und wird als statische Website auf GitHub Pages veröffentlicht.

### Website-Texte bearbeiten

Die deutschen Texte der Startseite sind in [`src/content/homepage.ts`](./src/content/homepage.ts) und die englischen Übersetzungen in [`src/content/homepage.en.ts`](./src/content/homepage.en.ts) gesammelt. Die gemeinsame Darstellung befindet sich in [`src/components/HomePage.astro`](./src/components/HomePage.astro). Englische Unterseiten liegen in `src/pages/en/`; die deutschen Unterseiten liegen direkt in `src/pages/`.

### Befehle

Alle Befehle im Projektverzeichnis ausführen:

| Befehl | Aktion |
| --- | --- |
| `npm install` | Installiert die Abhängigkeiten |
| `npm run dev` | Startet den lokalen Entwicklungsserver unter `localhost:4321` |
| `npm run build` | Erstellt die Produktionsdateien im Verzeichnis `dist/` |
| `npm run preview` | Zeigt den Build lokal zur Vorschau an |
| `npm run astro ...` | Führt Astro-Befehle aus |

Weitere Informationen findest du in der [Astro-Dokumentation](https://docs.astro.build).
