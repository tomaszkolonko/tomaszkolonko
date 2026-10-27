// Edit the website wording here; the page layout and styling are in src/pages/index.astro.
export const homepage = {
  pageTitle: 'Thomas Kolonko | Business Coaching, Leadership & Mentoring in Zürich',

  brand: {
    name: 'Thomas Kolonko',
    descriptor: 'Business & Leadership Coaching',
  },

  navigation: [
    { label: 'Anliegen', href: '#anliegen' },
    { label: 'Angebot', href: '#angebot' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Ablauf', href: '#ablauf' },
  ],

  hero: {
    eyebrow: 'Business & Leadership Coaching · Betriebliches Mentoring · Zürich & Online',
    title: 'Klarheit gewinnen, wenn Führung, Wandel und Projekte komplex werden.',
    description: `Systemisch-lösungsorientiertes Coaching und Sparring auf Augenhöhe für Führungskräfte, Agile Leaders und Fachkräfte in Veränderungsprozessen. Eigene Muster reflektieren, vorhandene Stärken aktivieren und selbstwirksam handeln.`,
    headerAction: 'Erstgespräch buchen',
    primaryAction: 'Kostenloses Kennenlernen vereinbaren',
    secondaryAction: 'Typische Themen entdecken',
    credentials: [
      'Betrieblicher Mentor mit eidg. Fachausweis',
      'Mitglied der Swiss Coaching Association (SCA)',
      'ICF PCC Level 2 (Ausbildung erfolgreich abgeschlossen)',
    ],
  },

  portrait: {
    placeholder: 'Platzhalter für dein Porträtfoto',
    instructionsBefore: 'Später einfach in ',
    imagePath: 'src/assets/portrait.jpg',
    instructionsAfter: ' ablegen und hier einbinden.',
  },

  challenges: {
    eyebrow: 'Typische Ausgangslagen',
    title: 'Wann ein reflektiertes Sparring auf Augenhöhe den Unterschied macht',
    introduction: `Veränderungen in Organisationen fordern uns fachlich wie emotional. Du bist der Experte für deine eigene Realität – ich gestalte den passenden Reflexionsraum, damit du deine eigene „Landkarte“ erweitern und stimmige Lösungswege entwickeln kannst.`,
    cards: [
      {
        tag: 'Leadership & Rollenverständnis',
        title: 'Souverän führen – auch ohne Machtkeule',
        description: `Ob neu in der Führungsrolle, im Spannungsfeld einer Sandwich-Position oder als Servant Leader ohne direkte Weisungsbefugnis: Entwickle einen authentischen, mitarbeiterzentrierten Führungsstil und triff auch unter Druck klare Entscheidungen.`,
      },
      {
        tag: 'Coaching in Veränderungsprozessen',
        title: 'Orientierung und Gestaltungskraft im Wandel',
        description: `Wenn Organisationen sich transformieren, sind zukünftige Rollen und Aufgaben oft noch unscharf. Wir stärken deine Veränderungskompetenz, klären den Umgang mit Unsicherheiten oder Widerstand und nutzen den offenen Gestaltungsspielraum aktiv für deine Positionierung.`,
      },
      {
        tag: 'Selbstwirksamkeit & Resilienz',
        title: 'Eigenverantwortung und emotionale Balance',
        description: `Verstehen, wie eigene Gedanken und Deutungsmuster Resultate hervorbringen: Lerne, mit Druck und Emotionen konstruktiv umzugehen, deine persönliche Resilienz gezielt aufzubauen und aus einer Haltung echter Selbstwirksamkeit heraus zu agieren.`,
      },
      {
        tag: 'Systemdynamik & Brückenbau',
        title: 'Verhärtete Fronten und Konflikte auflösen',
        description: `Menschen agieren nie isoliert, sondern immer als Teil eines Systems. Wir machen Wechselwirkungen sowie Kommunikations- und Verhaltensmuster im Team sichtbar, um Silodenken aufzubrechen und echte Kooperation zu ermöglichen.`,
      },
    ],
  },

  services: {
    eyebrow: 'Zusammenarbeit & Rollenverständnis',
    title: 'Fokussierte Begleitung – abgestimmt auf dein System und dein Ziel',
    introduction: `Coaching ist für mich Hilfe zur Selbsthilfe auf Basis von Freiwilligkeit, absoluter Vertraulichkeit und Transparenz. Je nach Anliegen begleite ich dich klar deklariert coachend (durch gezielte Reflexionsfragen), trainierend (beim Einüben neuer Verhaltensweisen) oder beratend (mit neutralen Praxis-Optionen).`,
    cards: [
      {
        audience: 'Für Führungskräfte & Projektleitende',
        title: '1:1 Business & Leadership Coaching',
        description: `Vertrauliches Sparring für deine Führungs-, Transformations- oder Karrierethemen. Anstatt endlos in Problemursachen der Vergangenheit zu graben, richten wir den Fokus auf deine Ziele, bereits funktionierende Ausnahmen und konkrete Handlungsoptionen.`,
        points: [
          'Einzelsessions (45–90 Min.) oder strukturierte Prozessbegleitung über mehrere Monate',
          'Integraler, systemisch-lösungsorientierter Ansatz (nach Steve de Shazer) & Positive Psychologie',
          'Arbeit mit Auftragsklärung (auf Wunsch auch im Dreiecksvertrag mit dem Arbeitgeber)',
        ],
        action: 'Unverbindliches Vorgespräch anfragen',
      },
      {
        audience: 'Für Fachkräfte, Scrum Master & Change Agents',
        title: 'Betriebliches Mentoring & Change-Sparring',
        description: `Praxisnahe Begleitung für Menschen, die Veränderung in komplexen Organisationen gestalten oder selbst mitten im Wandel stehen. Wir schärfen deine Rolle im System, bauen nachhaltige Resilienz auf und stärken deine Wirksamkeit im Alltag.`,
        points: [
          'Sparring für Agile Coaches, Scrum Master, Product Owner und Projektleitende',
          'Stärkung von Selbstführung, Stressmanagement und souveräner Kommunikation im Wandel',
          'Online oder persönlich in ruhiger Atmosphäre in Zürich',
        ],
        action: 'Anliegen unverbindlich besprechen',
      },
    ],
  },

  about: {
    eyebrow: 'Über mich, Menschenbild & Haltung',
    title: 'Analytische Klarheit trifft auf tiefe Wertschätzung für das Menschliche.',
    introduction: `Mein Weg führte mich über ein Sinologie-Studium mit zwei Jahren in China und einen Master in Informatik (M.Sc.) direkt in die Praxis grosser Organisationen. Während ich früher dachte, nur „harte Skills“ wie Mathematik und Technik würden zählen, zeigten mir meine Stationen als Software Engineer, Scrum Master, stellvertretender Release Train Engineer (RTE) und Agile Coach bei der UBS in Zürich immer wieder: Meine wahre Stärke liegt im Menschlichen – und im Brückenbauen zwischen verhärteten Fronten.`,
    approach: `Mein Menschenbild verbindet drei Pfeiler: den Konstruktivismus (du konstruierst deine eigene Wirklichkeit und trägst die passende Lösung bereits in dir), den Humanismus nach Carl Rogers (bedingungslose Wertschätzung, Empathie und Echtheit) sowie die Positive Psychologie (Fokus auf Stärken und Potenzialentfaltung statt reiner Defizitanalyse).`,
    credentialLeadIn: 'Als ',
    credential: 'Betrieblicher Mentor mit eidgenössischem Fachausweis, Vollmitglied der SCA',
    credentialFollowUp: ` und zertifizierter Business & Leadership Coach (Living Sense, ICF PCC Level 2 bestanden) verbinde ich methodische Tiefe mit gelebter Servant-Leadership-Erfahrung in komplexen Transformationsumfeldern.`,
    qualificationsTitle: 'Ausbildungen, Mitgliedschaften & Hintergrund',
    qualifications: [
      {
        title: 'Betrieblicher Mentor mit eidg. Fachausweis & SCA-Mitglied',
        description: 'Eidgenössisches Diplom (Living Sense Coaching Institut) sowie Vollmitglied der Swiss Coaching Association (SCA) mit Arbeit nach anerkannten ethischen Qualitätsstandards.',
      },
      {
        title: 'ICF PCC Level 2 (bestanden) · Business, Leadership & Integral Coach',
        description: 'Erfolgreich abgeschlossene Ausbildungen in Integral Coaching sowie Business & Leadership Coaching (Living Sense) und bestandene ICF PCC Level 2 Prüfung (in Akkreditierung).',
      },
      {
        title: 'Praxis als Agile Coach, Scrum Master & stv. RTE',
        description: 'Mehrjährige Erfahrung in der Begleitung von Teams, Scrum Mastern und Führungskräften in agilen Transformationen (u. a. bei der UBS in Zürich).',
      },
      {
        title: 'M.Sc. in Computer Science & Hintergrund in Sinologie',
        description: 'Kombination aus analytisch-strukturiertem Denken und einem tiefen, kulturübergreifenden Verständnis für unterschiedliche Perspektiven und Wertesysteme.',
      },
    ],
  },

  process: {
    eyebrow: 'Transparenter Prozess',
    title: 'Strukturierte Begleitung mit klarem Transfer in deinen Alltag',
    introduction: 'Ein wirksames Coaching braucht einen sicheren Rahmen, Freiwilligkeit und deine Bereitschaft zur Selbstreflexion. So arbeiten wir zusammen:',
    steps: [
      {
        number: '01',
        title: 'Unverbindliches Vorgespräch (25 Min.)',
        description: `Wir lernen uns kostenlos per Videocall oder Telefon kennen, besprechen deine Ausgangslage und prüfen, ob die Chemie und die Rahmenbedingungen für eine vertrauensvolle Zusammenarbeit auf Augenhöhe stimmen.`,
      },
      {
        number: '02',
        title: 'Klare Auftragsklärung & Zielbild',
        description: `Wir definieren dein konkretes Zielbild und halten den Rahmen transparent fest (bei Bedarf auch als Dreiecksvertrag mit dem Arbeitgeber). Woran wirst du im Alltag ganz konkret merken, dass sich unsere Arbeit für dich gelohnt hat?`,
      },
      {
        number: '03',
        title: '5-Phasen-Prozess & Alltagstransfer',
        description: `Jede Sitzung folgt einer klaren Struktur (Orientierung, Klärung, Veränderung, Integration und Abschluss). Mit systemischen Fragen, Perspektivenwechseln und kleinen, handlungsorientierten Experimenten sichern wir den direkten Transfer in deine Praxis.`,
      },
    ],
  },

contact: {
    eyebrow: 'Nächster Schritt',
    title: 'Lass uns unverbindlich ins Gespräch kommen',
    description: `Wähle direkt einen passenden Termin für unser kostenloses 25-minütiges Kennenlerngespräch oder schreib mir eine kurze Nachricht zu deinem Anliegen.`,
    calLink25: 'https://cal.com/thomas-kolonko/25min',
    calLink60: 'https://cal.com/thomas-kolonko/60min',
    alternative: 'Kein passender Termin dabei? Schreib mir direkt an:',
    email: 'kontakt@tomaszkolonko.ch',
    linkedInAction: 'Auf LinkedIn vernetzen',
  },

  footer: {
    summary: 'Business & Leadership Coaching · Betriebliches Mentoring · Zürich',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    linkedIn: 'LinkedIn',
  },
};