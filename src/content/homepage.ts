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
    { label: 'Coaching-Beispiele', href: '/Moegliche-Coaching-Beispiele/' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Ablauf', href: '#ablauf' },
  ],

hero: {
    eyebrow: 'Business & Personal Coaching · Betriebliches Mentoring · Zürich & Online',
    title: 'Klarheit gewinnen, wirksam handeln und deinen eigenen Weg gestalten.',
    description: `Ob im anspruchsvollen Berufsalltag, in einer Führungsrolle oder bei persönlichen Fragen:
    Wenn Druck, Veränderungen oder wiederkehrende Hürden dich beschäftigen, sortieren wir gemeinsam deine Situation.
    Als ruhiger, direkter Sparringspartner begleite ich dich auf Augenhöhe dabei, neue Perspektiven zu entwickeln,
    deine Ressourcen zu nutzen und stimmige nächste Schritte zu finden.`,
    headerAction: 'Erstgespräch buchen',
    primaryAction: 'Kostenloses Kennenlernen vereinbaren',
    secondaryAction: 'Mögliche Themen entdecken',
    credentials: [
      'Betrieblicher Mentor mit eidg. Fachausweis',
      'Mitglied der Swiss Coaching Association (SCA)',
      'ICF PCC Level 2 Ausbildung abgeschlossen',
    ],
  },

  portrait: {
    placeholder: 'Platzhalter für dein Porträtfoto',
    imagePath: 'src/assets/portrait.jpg',
  },

  challenges: {
    eyebrow: 'Typische Ausgangslagen',
    title: 'Wenn du nicht nur reagieren, sondern wieder gestalten möchtest',
    introduction: `Ob im Job, im Team oder im privaten Alltag: Oft wissen wir rational genau,
    was wir tun „sollten“ – und stehen trotzdem am selben Punkt an. In einem urteilsfreien Raum
    betrachten wir, was dich beschäftigt, und erkunden, welche gangbaren Schritte für dich passen.`,
    cards: [
      {
        tag: 'Feststecken & Neuorientierung',
        title: 'Alltagshürden meistern und wieder handlungsfähig werden',
        description: `Du spürst, dass es so wie bisher nicht weitergeht – sei es im aktuellen Job,
          bei einer wichtigen Lebensentscheidung oder angesichts einer wiederkehrenden Alltagshürde.
          Gemeinsam sortieren wir deine Gedanken, entwickeln Optionen und machen einen nächsten Schritt greifbar.`,
      },
      {
        tag: 'Selbstwirksamkeit & Resilienz',
        title: 'Resilienz und Selbstregulation stärken',
        description: `Hohe Anforderungen und Stress können sich in Gedanken, Gefühlen und im Körper zeigen.
          Wir erkunden, wie deine Bewertungen dein Erleben und Handeln beeinflussen, und stärken
          deine innere Ruhe, Selbstregulation und gesunden Grenzen – passend zu deinem Anliegen.`,
      },
      {
        tag: 'Kommunikation & Zusammenarbeit',
        title: 'Gespräche und Zusammenarbeit konstruktiv gestalten',
        description: `Ein schwieriges Gespräch, Spannungen im Team oder Führen ohne formale Weisungsmacht:
          Wir bereiten Gespräche vor, betrachten unterschiedliche Perspektiven und finden Wege,
          Konflikte respektvoll und klar anzusprechen.`,
      },
      {
        tag: 'Klarheit & Führung im Wandel',
        title: 'Klarheit und Führung im Wandel finden',
        description: `Umstrukturierungen, neue Arbeitsweisen oder eine veränderte Rolle
          können Unsicherheit auslösen. Wir klären, was deine Rolle ausmacht, wo dein Einfluss liegt
          und wie du Veränderungen auf deine Weise mitgestalten kannst.`,
      },
    ],
  },

  services: {
    eyebrow: 'Zusammenarbeit & Angebot',
    title: 'Business-, Resilienz- und Life-Coaching – nahbar und praxisorientiert',
    introduction: `Berufliche und private Themen lassen sich im Alltag oft nicht trennen.
      Ich biete dir einen freiwilligen, vertraulichen Reflexionsraum und begegne dir partnerschaftlich
      und direkt. Wir starten bei deinem konkreten Anliegen und arbeiten lösungsorientiert.
      Wenn es für dich passt, richten wir den Blick auch auf tieferliegende Gedanken und Muster.
      Beratung oder konkrete Methoden biete ich als Impuls an, wenn du das ausdrücklich möchtest.`,
    cards: [
      {
        audience: 'Für Fachkräfte, Mitarbeitende & Privatpersonen',
        title: '1:1 Coaching für Beruf und Alltag',
        description: `Ein geschützter Reflexionsraum für anspruchsvolle Situationen, persönliche Entscheidungen
        oder wiederkehrende Alltagshürden. Wir nehmen deine Stärken und Ressourcen ernst und richten den Blick
        auf konkrete, gangbare Schritte in eine stimmige Zukunft.`,
        points: [
          'Einzelsitzungen à 60 Minuten oder Begleitung über mehrere Termine',
          'Klarheit gewinnen, eigene Handlungsoptionen entwickeln und Selbstwirksamkeit stärken',
          'Online oder auf Wunsch persönlich in Zürich, zum Beispiel als Walk & Talk',
        ],
        action: 'Unverbindliches Vorgespräch anfragen',
      },
      {
        audience: 'Für Menschen in Fach-, Projekt- und Führungsrollen',
        title: 'Betriebliches Mentoring & Sparring im Wandel',
        description: `Gezielte Unterstützung für Menschen, die im beruflichen Alltag vor neuen Anforderungen
        stehen – von hohen Anforderungen und Veränderungen bis zu lateraler Führung und anspruchsvollen
        Situationen in der Zusammenarbeit.`,
        points: [
          'Klarheit in der eigenen Rolle, Selbstführung und Umgang mit Belastung stärken',
          'Praxisnahes Sparring für Fachkräfte, Projektleitende, Scrum Master, Product Owner & Teamleads',
          'Auf Wunsch auch im Rahmen einer betrieblichen Förderung (Dreiecksvertrag möglich)',
        ],
        action: 'Anliegen unverbindlich besprechen',
      },
    ],
  },

  about: {
    eyebrow: 'Über mich, Menschenbild & Haltung',
    title: 'Struktur, menschliche Weitsicht und Führung auf Augenhöhe',
    introduction: `Mein Hintergrund verbindet analytisches Denken mit Offenheit für unterschiedliche Perspektiven:
      Nach meinem Sinologie-Studium und zwei Jahren in China habe ich einen Master in Computer Science erworben.
      Als Senior Scrum Master und Agile Coach begleite ich Menschen und Teams in Veränderungsprozessen –
      auch ohne formale Weisungsbefugnis. Aus eigener Erfahrung kenne ich die Arbeitsrealität technischer
      und leistungsorientierter Organisationen und die Spannungen, die entstehen, wenn Fronten sich verhärten.`,
    approach: `In meiner Arbeit begegne ich dir ruhig, geerdet und wertschätzend – und spreche Beobachtungen
      ehrlich an. Ich führe den Prozess, nicht den Inhalt: Mit offenen Fragen erkunden wir deine Situation
      und die Wechselwirkungen in deinem Umfeld. Dabei betrachten wir auch, wie Gedanken Gefühle und Handlungen
      beeinflussen. Wenn du dafür offen bist, beziehen wir Körperwahrnehmung und einfache Wege zur Selbstregulation
      ein. Wie im Partner-Tanz und in den Kampfkünsten entstehen Verbindung und Führung für mich nicht durch Druck,
      sondern durch Präsenz, eigenes Gespür und innere Klarheit.`,
    credentialLeadIn: 'Als ',
    credential: 'Betrieblicher Mentor mit eidgenössischem Fachausweis und aktives Mitglied der SCA',
    credentialFollowUp: ` sowie diplomierter Business & Leadership Coach und Integral Coach (Living Sense) begleite ich dich mit Struktur, Empathie und Vertrauen in deine Entwicklungsfähigkeit. Meine ICF PCC Level 2 Ausbildung habe ich abgeschlossen.`,
    qualificationsTitle: 'Ausbildungen, Mitgliedschaften & Hintergrund',
    qualifications: [
      {
        title: 'Betrieblicher Mentor mit eidg. Fachausweis & aktives SCA-Mitglied',
        description: 'Qualifikation als betrieblicher Mentor und aktives Mitglied der Swiss Coaching Association (SCA); ich orientiere mich an den ethischen Richtlinien von SCA und ICF.',
      },
      {
        title: 'ICF PCC Level 2 Ausbildung · Integral, Business & Leadership Coach',
        description: 'Diplomierter Business & Leadership Coach und Integral Coach (Living Sense); die ICF PCC Level 2 Ausbildung im Professional Certified Coach Track ist abgeschlossen.',
      },
      {
        title: 'Erfahrung als Senior Scrum Master & Agile Coach',
        description: 'Praxiserfahrung in der Begleitung von Teams und Individuen durch Veränderungen, im Umgang mit Teamdynamiken und in Führung ohne formale Weisungsbefugnis.',
      },
      {
        title: 'M.Sc. in Computer Science & Studium der Sinologie',
        description: 'Analytische Struktur verbunden mit interkultureller Erfahrung und Offenheit für unterschiedliche Perspektiven.',
      },
      {
        title: 'In Ausbildung zum SVEB-Zertifikat',
        description: 'Weiterbildung im Bereich Erwachsenenbildung.',
      },
    ],
  },

  process: {
    eyebrow: 'Transparenter Prozess',
    title: 'Vom ersten Kennenlernen zur wirksamen Zusammenarbeit',
    introduction: 'Das kostenlose Kennenlerngespräch ist unverbindlich und steht für sich. Wenn wir uns für eine Zusammenarbeit entscheiden, beginnt der Coachingprozess:',
    steps: [
      {
        number: '01',
        title: 'Unverbindliches Kennenlernen (25 Min.)',
        description: `In diesem einmaligen, kostenlosen Gespräch per Videocall oder Telefon erzählst du, was dich beschäftigt. Wir lernen uns kennen und prüfen, ob Vertrauen und Zusammenarbeit für beide Seiten passen – danach entscheidest du in Ruhe, ob du ins Coaching einsteigen möchtest.`,
      },
      {
        number: '02',
        title: 'Einstieg ins Coaching',
        description: `Zum Start schaffen wir einen gemeinsamen Rahmen für die Zusammenarbeit und schauen auf dein übergeordnetes Anliegen: Was möchtest du verändern oder erreichen? Daraus entwickeln wir eine Richtung, an der wir uns orientieren können.`,
      },
      {
        number: '03',
        title: 'Jede Sitzung: Fokus und Alltagstransfer',
        description: `Zu Beginn jeder Sitzung klären wir, was dich gerade beschäftigt und was dir heute einen greifbaren Mehrwert bringen würde. Zum Abschluss halten wir fest, welche Erkenntnis, Perspektive oder welcher nächste Schritt dich im Alltag weiterbringt.`,
      },
    ],
    examplesAction: 'Coaching-Beispiele ansehen',
  },

  contact: {
    eyebrow: 'Nächster Schritt',
    title: 'Lass uns unverbindlich kennenlernen',
    description: `Wähle einen Termin für ein kostenloses 25-minütiges Kennenlerngespräch. Wir besprechen dein Anliegen und finden gemeinsam heraus, ob die Zusammenarbeit passt.`,
    calLink25: 'https://cal.com/thomas-kolonko/25min',
    calLink60: 'https://cal.com/thomas-kolonko/60min',
    alternative: 'Kein passender Termin dabei? Schreibe mir eine E-Mail:',
    email: 'info@thomaskolonko.ch',
    linkedInAction: 'Auf LinkedIn vernetzen',
  },

  footer: {
    summary: 'Business-, Resilienz- & Life-Coaching · Betriebliches Mentoring · Zürich',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    linkedIn: 'LinkedIn',
  },
};