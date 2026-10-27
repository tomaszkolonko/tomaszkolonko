// Edit the website wording here; the page layout and styling are in src/pages/index.astro.
export const homepage = {
  pageTitle: 'Business Coaching & Sparring | Klarheit in Führung & Wandel',

  brand: {
    name: 'Thomas Kolonko',
    descriptor: 'Business Coaching',
  },

  navigation: [
    { label: 'Anliegen', href: '#anliegen' },
    { label: 'Angebot', href: '#angebot' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Ablauf', href: '#ablauf' },
  ],

  hero: {
    eyebrow: 'Business Coaching & Sparring · Zürich & Online',
    title: 'Klarheit gewinnen, wenn Führung und Projekte komplex werden.',
    description: `Systemisches Coaching und Begleitung auf Augenhöhe für Führungskräfte, Projektleiter und Teams in Veränderungsprozessen.
      Strukturiert reflektieren, Muster erkennen und wirksam handeln.`,
    headerAction: 'Erstgespräch buchen',
    primaryAction: 'Kostenloses Kennenlernen vereinbaren',
    secondaryAction: 'Typische Themen entdecken',
    credentials: [
      'Betrieblicher Mentor mit eidg. Fachausweis',
      'Systemisch & lösungsorientiert',
      'Mehrjährige Führungserfahrung in IT & Transformation',
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
    title: 'Wann ein Sparring auf Augenhöhe den Unterschied macht',
    introduction: `Im operativen Tagesgeschäft bleibt oft wenig Raum, um komplexe Situationen mit Abstand zu betrachten.
      Genau hier setzt professionelles Business Coaching an.`,
    cards: [
      {
        tag: 'Rollenwechsel & Führung',
        title: 'Souverän in der neuen Führungsrolle',
        description: `Vom Fachexperten zur Führungskraft oder mitten im Spannungsfeld einer Sandwich-Position:
          Entwickle deinen eigenen, authentischen Führungsstil ohne Mikromanagement.`,
      },
      {
        tag: 'Transformation & Projekte',
        title: 'Orientierung in komplexen Vorhaben',
        description: `Wenn zentrale Leitplanken fehlen, Stakeholder in verschiedene Richtungen ziehen und die Komplexität steigt:
          Fokus bewahren, Prioritäten schärfen und handlungsfähig bleiben.`,
      },
      {
        tag: 'System & Teamdynamik',
        title: 'Reibungsverluste & Konflikte lösen',
        description: `Unterschwellige Spannungen im Team oder Silodenken erkennen, offen ansprechen und in produktive
          Zusammenarbeit sowie psychologische Sicherheit verwandeln.`,
      },
      {
        tag: 'Persönliche Standortbestimmung',
        title: 'Klarheit bei wichtigen Entscheidungen',
        description: `Berufliche Neuorientierung, gesunde Abgrenzung bei hoher Belastung oder der nächste Karriereschritt:
          Mit strukturierter Reflexion zu stimmigen Entscheidungen.`,
      },
    ],
  },

  services: {
    eyebrow: 'Zusammenarbeit',
    title: 'Fokussiertes Angebot für nachhaltige Wirkung',
    introduction: `Keine vorgefertigten Standard-Schablonen, sondern massgeschneiderte Begleitung – abgestimmt auf deine Rolle,
      dein System und dein Ziel.`,
    cards: [
      {
        audience: 'Für Einzelpersonen & Führungskräfte',
        title: '1:1 Business Coaching & Mentoring',
        description: `Vertraulicher Reflexionsraum für deine aktuellen Führungs-, Projekt- oder Karrierethemen. Wir ordnen komplexe
          Gemengelagen, schärfen deine Rolle und erarbeiten konkrete Handlungsoptionen.`,
        points: [
          'Einzelsessions (60–90 Min.) oder strukturierte Begleitung über 3–6 Monate',
          'Systemische Fragetechniken & lösungsorientierte Methoden',
          'Online oder persönlich in Zürich',
        ],
        action: 'Unverbindliches Vorgespräch anfragen',
      },
      {
        audience: 'Für Teams & Organisationen',
        title: 'Team-Entwicklung & Change-Sparring',
        description: `Begleitung von Teams und Projektleitenden in Phasen von Neuausrichtung, Skalierung oder methodischem Wandel.
          Damit Zusammenarbeit nicht an unklaren Zielen oder Reibungsverlusten scheitert.`,
        points: [
          'Fokussierte Workshops zur Rollen-, Ziel- und Schnittstellenklärung',
          'Moderation anspruchsvoller Retrospektiven und Konfliktklärungen',
          'Praxisnahes Sparring für Agile Leaders, Product Owner & Projektverantwortliche',
        ],
        action: 'Anliegen unverbindlich besprechen',
      },
    ],
  },

  about: {
    eyebrow: 'Über mich & Haltung',
    title: 'Fundierte Coaching-Kompetenz trifft auf echte Praxiserfahrung in komplexen Organisationen.',
    introduction: `Gutes Business Coaching braucht beides: methodische Tiefe in der Prozessbegleitung und ein echtes Verständnis dafür,
      wie moderne Unternehmen, Tech-Teams und Veränderungsprojekte im Alltag funktionieren.`,
    approach: `In meiner Arbeit verbinde ich systemisches, lösungsorientiertes Coaching mit klarer Struktur und einem ganzheitlichen
      Blick auf den Menschen. Ich gebe dir keine theoretischen Ratschläge von der Seitenlinie, sondern begleite dich dabei,
      deine eigenen Hebel wieder klar zu sehen und wirksam einzusetzen.`,
    credentialLeadIn: 'Als ',
    credential: 'Betrieblicher Mentor mit eidgenössischem Fachausweis',
    credentialFollowUp: `, erfahrener Agile Coach / Scrum Master und studierter Informatiker (M.Sc.) kenne ich den Druck zwischen
      strategischen Zielen, knappen Ressourcen und menschlicher Dynamik aus eigener Anschauung.`,
    qualificationsTitle: 'Qualifikationen & Hintergrund',
    qualifications: [
      {
        title: 'Betrieblicher Mentor mit eidg. Fachausweis',
        description: 'Professionelle Begleitung von Coaching-, Beratungs- und Lernprozessen',
      },
      {
        title: 'Langjährige Praxis als Agile Coach & Scrum Master',
        description: 'Begleitung von Führungskräften, Teams und grossen Transformationsvorhaben',
      },
      {
        title: 'M.Sc. in Informatik & interdisziplinärer Hintergrund',
        description: 'Analytische Klarheit kombiniert mit systemischem und kulturübergreifendem Denken',
      },
      {
        title: 'Methodischer Fokus',
        description: 'Systemisches Coaching, lösungsorientierte Kurzzeitberatung & reflektierte Selbstführung',
      },
    ],
  },

  process: {
    eyebrow: 'Transparenter Prozess',
    title: 'In drei klaren Schritten zur Zusammenarbeit',
    introduction: 'Vertrauen und eine klare Zielorientierung bilden das Fundament. So starten wir gemeinsam:',
    steps: [
      {
        number: '01',
        title: 'Unverbindliches Kennenlernen (25 Min.)',
        description: `In einem kostenlosen Videocall oder Telefonat lernen wir uns kennen. Wir besprechen dein aktuelles Anliegen,
          klären offene Fragen und prüfen, ob die Chemie zwischen uns stimmt.`,
      },
      {
        number: '02',
        title: 'Auftragsklärung & Zielbild',
        description: `Zu Beginn der Zusammenarbeit definieren wir ein klares Ziel: Woran merkst du im Alltag konkret, dass sich
          das Coaching für dich gelohnt hat? Kein endloses Kreisen, sondern Fokus.`,
      },
      {
        number: '03',
        title: 'Coaching-Sessions & Transfer',
        description: `In vertraulichen Sessions (online oder vor Ort in Zürich) arbeiten wir systemisch und lösungsorientiert
          an deinen Fällen – mit direktem Transfer in deinen Führungs- und Berufsalltag.`,
      },
    ],
  },

  contact: {
    eyebrow: 'Nächster Schritt',
    title: 'Lass uns unverbindlich ins Gespräch kommen',
    description: `Wähle direkt einen passenden Termin für unser kostenloses 25-minütiges Kennenlerngespräch oder schreib mir
      eine kurze Nachricht.`,
    calendlyUrl: 'https://calendly.com/tz-kolonko/coaching-1-1',
    alternative: 'Kein passender Termin dabei? Schreib mir direkt an:',
    email: 'kontakt@tomaszkolonko.ch',
    linkedInAction: 'Auf LinkedIn vernetzen',
  },

  footer: {
    summary: 'Business Coaching & Mentoring · Zürich',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    linkedIn: 'LinkedIn',
  },
};
