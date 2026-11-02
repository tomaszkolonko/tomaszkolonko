# Thomas Kolonko – Coaching & Mentoring

## Website

Die Website stellt das Angebot von Thomas Kolonko vor: Business- und Personal-Coaching, betriebliches Mentoring und Sparring für Menschen in Fach-, Projekt- und Führungsrollen. Die Begleitung unterstützt bei beruflichen Herausforderungen, Veränderungen und persönlichen Anliegen – systemisch, lösungsorientiert und auf Augenhöhe. Das Angebot ist in Zürich und online verfügbar.

Website: [https://www.thomaskolonko.ch](https://www.thomaskolonko.ch)

## Astro

Die Website ist mit [Astro](https://astro.build) erstellt und wird als statische Website auf GitHub Pages veröffentlicht.

### Website-Texte bearbeiten

Die Texte der Startseite sind in [`src/content/homepage.ts`](./src/content/homepage.ts) gesammelt. Die Darstellung und Struktur befinden sich in [`src/pages/index.astro`](./src/pages/index.astro). Die Inhalte der rechtlichen Seiten stehen in den jeweiligen Dateien unter `src/pages/`.

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
