// Edit the website wording here; the page layout and styling are in src/pages/index.astro.
export const homepage = {
  pageTitle: 'Thomas Kolonko | Coaching & Betriebliches Mentoring in Zürich',

  brand: {
    name: 'Thomas Kolonko',
    descriptor: 'Coaching & Mentoring',
  },

  navigation: [
    { label: 'Anliegen', href: '#anliegen' },
    { label: 'Angebot', href: '#angebot' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Ablauf', href: '#ablauf' },
  ],

  hero: {
    eyebrow: 'Business & Personal Coaching · Betriebliches Mentoring · Zürich & Online',
    title: 'Klarheit und neue Perspektiven, wenn du beruflich oder privat anstehst.',
    description: `Manchmal drehen sich Gedanken im Kreis, Veränderungen kosten Kraft oder der nächste Schritt liegt im Nebel. Ich begleite dich systemisch und auf Augenhöhe dabei, innere Blockaden zu lösen, deine Stärken zu aktivieren und wieder selbstwirksam ins Handeln zu kommen.`,
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
    title: 'Wann ein ehrliches Sparring auf Augenhöhe den Unterschied macht',
    introduction: `Ob im Job, im Team oder im privaten Alltag: Oft wissen wir rational genau, was wir tun „sollten“ – und stehen trotzdem am selben Punkt an. Coaching öffnet den Raum, deine eigene Situation mit Abstand zu betrachten und einen stimmigen Durchbruch zu schaffen.`,
    cards: [
      {
        tag: 'Feststecken & Neuorientierung',
        title: 'Wenn du anstehst und einen Durchbruch suchst',
        description: `Du spürst, dass es so wie bisher nicht weitergeht – sei es im aktuellen Job, bei einer wichtigen Lebensentscheidung oder in einem wiederkehrenden Muster. Wir bringen Struktur in das Gedankenkarussell und machen deinen nächsten Schritt greifbar.`,
      },
      {
        tag: 'Selbstwirksamkeit & Resilienz',
        title: 'Mit Druck, Stress und Erwartungen gesund umgehen',
        description: `Im Berufsalltag wird oft viel Eigenverantwortung verlangt, ohne dass die Rahmenbedingungen klar sind. Lerne, deine Emotionen und Gedanken bewusst zu regulieren, gesunde Grenzen zu setzen und deine persönliche Resilienz nachhaltig zu stärken.`,
      },
      {
        tag: 'Beruflicher Wandel & Umbruch',
        title: 'Sicherheit gewinnen in Veränderungsprozessen',
        description: `Umstrukturierungen, neue Arbeitsweisen oder eine veränderte Rolle lösen oft Unsicherheit und Widerstand aus. Ich begleite dich dabei, deinen eigenen Gestaltungsspielraum im neuen System zu erkennen und deinen Platz aktiv einzunehmen.`,
      },
      {
        tag: 'Zusammenarbeit & Selbstführung',
        title: 'Reibungen lösen und authentisch wirken',
        description: `Schwierige Gespräche mit Vorgesetzten oder Kolleg:innen, unterschwellige Konflikte im Team oder eine Rolle ohne formale Weisungsmacht: Entdecke neue Kommunikationswege und führe dich selbst (und andere) klar und kooperativ.`,
      },
    ],
  },

  services: {
    eyebrow: 'Zusammenarbeit & Angebot',
    title: 'Individuelle Begleitung für deinen beruflichen und persönlichen Weg',
    introduction: `Coaching ist für mich Hilfe zur Selbsthilfe auf Basis von Freiwilligkeit, Vertrauen und absoluter Diskretion. Du bist der Experte für dein Leben – ich unterstütze dich je nach Bedarf klar deklariert coachend (durch gezielte Fragen), trainierend (beim Einüben neuer Verhaltensweisen) oder beratend (mit neutralen Impulsen).`,
    cards: [
      {
        audience: 'Für Mitarbeitende, Fachkräfte & Privatpersonen',
        title: '1:1 Coaching & Standortbestimmung',
        description: `Ein geschützter Reflexionsraum für Themen aus Beruf und Privatleben, bei denen du dir Fortschritt, Klarheit oder Entlastung wünschst. Statt endlos in der Vergangenheit zu wühlen, richten wir den Blick auf deine Ressourcen und konkrete Lösungen.`,
        points: [
          'Einzelsessions (60–90 Min.) oder Begleitung über mehrere Wochen/Monate',
          'Auflösen von Denkblockaden, Stärkung des Selbstvertrauens und klare Entscheidungsfindung',
          'Online oder persönlich in ruhiger Atmosphäre in Zürich',
        ],
        action: 'Unverbindliches Vorgespräch anfragen',
      },
      {
        audience: 'Im Unternehmenskontext & bei Veränderungen',
        title: 'Betriebliches Mentoring & Rollen-Sparring',
        description: `Gezielte Unterstützung für Menschen, die im beruflichen Alltag vor neuen Anforderungen stehen – vom Einstieg in eine neue Rolle über agile Zusammenarbeit bis zum souveränen Umgang mit anspruchsvollen Team- und Führungssituationen.`,
        points: [
          'Aufbau von Veränderungskompetenz, Stressmanagement und gesunder Selbstführung',
          'Praxisnahes Sparring für Fachkräfte, Projektmitarbeitende, Scrum Master & Team-Leads',
          'Auf Wunsch auch im Rahmen einer betrieblichen Förderung (Dreiecksvertrag möglich)',
        ],
        action: 'Anliegen unverbindlich besprechen',
      },
    ],
  },

  about: {
    eyebrow: 'Über mich, Menschenbild & Haltung',
    title: 'Ich hole dich dort ab, wo du gerade stehst – nicht dort, wo andere dich gerne hätten.',
    introduction: `Mein eigener Weg war alles andere als geradlinig: Nach einem Sinologie-Studium mit zwei prägenden Jahren in China wechselte ich – mehr aus Vernunft und dem Glauben, nur „harte Skills“ wie Mathematik und Technik würden zählen – in die Informatik (M.Sc.). Doch als Software-Entwickler erlebte ich hautnah den Frust, wenn von Mitarbeitenden Eigenverantwortung gefordert wird, ohne sie wirklich zu begleiten. Gleichzeitig bekam ich immer wieder dasselbe Feedback: Meine eigentliche Superkraft liegt im Menschlichen und im Vermitteln zwischen verhärteten Fronten.`,
    approach: `Als ich 2023 den Schritt zum Scrum Master und Agile Coach machte, fand ich meinen Platz. Mein Menschenbild fusst auf drei Säulen: dem Konstruktivismus (jeder Mensch hat seine eigene „Landkarte“ der Realität und trägt die Lösung bereits in sich), dem Humanismus nach Carl Rogers (bedingungslose Wertschätzung, Empathie und Echtheit) sowie der Positiven Psychologie (Fokus auf deine Stärken und das, was dich aufblühen lässt).`,
    credentialLeadIn: 'Als ',
    credential: 'Betrieblicher Mentor mit eidgenössischem Fachausweis, Vollmitglied der SCA',
    credentialFollowUp: ` und ausgebildeter Integral, Business & Leadership Coach (Living Sense, ICF PCC Level 2 bestanden) begleite ich dich mit echter Empathie, Struktur und dem tiefen Vertrauen in deine eigene Entwicklungsfähigkeit.`,
    qualificationsTitle: 'Ausbildungen, Mitgliedschaften & Hintergrund',
    qualifications: [
      {
        title: 'Betrieblicher Mentor mit eidg. Fachausweis & SCA-Mitglied',
        description: 'Eidgenössisches Diplom (Living Sense Coaching Institut) sowie Vollmitglied der Swiss Coaching Association (SCA) mit Arbeit nach anerkannten ethischen Qualitätsstandards.',
      },
      {
        title: 'ICF PCC Level 2 (bestanden) · Integral, Business & Leadership Coach',
        description: 'Fundierte Ausbildungen in Integral Coaching sowie Business & Leadership Coaching (Living Sense) und erfolgreich bestandene ICF PCC Level 2 Prüfung (in Akkreditierung).',
      },
      {
        title: 'Erfahrung als Agile Coach, Scrum Master & Software Engineer',
        description: 'Tiefes Verständnis für den Arbeitsalltag in modernen Organisationen, Teamdynamiken und das Begleiten auf Augenhöhe ohne formale Machtkeule.',
      },
      {
        title: 'M.Sc. in Computer Science & Hintergrund in Sinologie',
        description: 'Verbindung von analytischer Struktur mit einer grossen Offenheit für unterschiedliche Lebensentwürfe, Kulturen und persönliche Perspektiven.',
      },
    ],
  },

  process: {
    eyebrow: 'Transparenter Prozess',
    title: 'In drei klaren Schritten zu deinem nächsten Durchbruch',
    introduction: 'Ein wirksames Coaching braucht einen sicheren Rahmen, Freiwilligkeit und deine Bereitschaft, ehrlich hinzuschauen. So arbeiten wir zusammen:',
    steps: [
      {
        number: '01',
        title: 'Unverbindliches Kennenlernen (25 Min.)',
        description: `Wir lernen uns kostenlos per Videocall oder Telefon kennen. Du schilderst mir kurz, wo du gerade anstehst, und wir spüren gemeinsam, ob die Chemie und das Vertrauen für eine Zusammenarbeit stimmen.`,
      },
      {
        number: '02',
        title: 'Klare Auftragsklärung & Zielbild',
        description: `Wir definieren dein konkretes Zielbild: Woran wirst du in deinem beruflichen oder privaten Alltag ganz konkret merken, dass sich das Coaching für dich gelohnt hat?`,
      },
      {
        number: '03',
        title: '5-Phasen-Prozess & Alltagstransfer',
        description: `Jede Sitzung folgt einem klaren Rahmen (Orientierung, Klärung, Veränderung, Integration und Abschluss). Mit lösungsorientierten Fragen, Perspektivenwechseln und kleinen Experimenten sorgen wir für echte Aha-Momente und nachhaltige Schritte im Alltag.`,
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
    summary: 'Coaching & Betriebliches Mentoring · Zürich',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    linkedIn: 'LinkedIn',
  },
};