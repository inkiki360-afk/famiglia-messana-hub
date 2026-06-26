const { useState, useEffect, useMemo } = React;

const WEDDING_METADATA = {
  sposi: "Gaia & Andrea",
  data: "26 Giugno 2026",
  location: "Villa Buttafava",
  coordinatori: "Patty & Io (Team VMGroup)"
};

const PHASES_DATA = [
  {
    id: "prep",
    title: "1. Preparazione Evento",
    time: "13:00 - 17:00",
    theme: {
      bg: "bg-slate-50 dark:bg-slate-900/40",
      border: "border-slate-200 dark:border-slate-800/80",
      accent: "slate",
      badge: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
      indicator: "bg-slate-500",
      gradient: "from-slate-500 to-slate-700",
      lightBg: "bg-slate-100 dark:bg-slate-800/50",
    },
    sections: [
      {
        title: "Mattinata & Partenza (Ore 13:00)",
        items: [
          "Ritirare pizzette",
          "Comprare acqua",
          "Verificare che tutto il materiale sia caricato",
          "Partenza team da Legnano alle ore 13:00"
        ]
      },
      {
        title: "Ore 13:30 — Arrivo in Villa & Allestimento",
        items: [
          "Arrivo in Villa Buttafava",
          "Scarico materiale",
          "Prendere stanza per lo staff",
          "Sistemare materiale dello staff",
          "Valutare posizionamento cubi audio",
          "Recuperare camicia di Gonzi",
          "Posizionare gli abiti di staff e artisti",
          "Indossare maglia ufficiale VMGroup (Tutto lo Staff)"
        ]
      },
      {
        title: "Ore 12:00 — Pick-up Ace (Malpensa)",
        items: [
          "Falbo parte per Malpensa Terminal 2",
          "All'arrivo in aeroporto inviare posizione ad Ace",
          "Ace telefono: +44 7966 135647 (Clicca per chiamare)",
          "Falbo si posiziona davanti all'uscita arrivi",
          "Chiedere ad Ace se vuole mangiare qualcosa in aeroporto prima di arrivare in villa",
          "Portare Ace in villa per il soundcheck"
        ]
      },
      {
        title: "Ore 14:30 — Arrivo Violiniste",
        items: [
          "Gestire arrivo Federica e Asia (violiniste) in zona Welcome",
          "Verificare che indossino la maglia VMGroup"
        ]
      },
      {
        title: "Ore 15:00 — Arrivo Julia & Visual",
        items: [
          "Gestire arrivo Julia + 4 Performer Visual",
          "Assegnare la stanza staff / camerino",
          "Effettuare il recupero abiti di Ace",
          "Verificare maglia VMGroup per tutti"
        ]
      },
      {
        title: "Ore 15:30 — Soundcheck Violini + Budo",
        items: [
          "Soundcheck violini (Federica e Asia)",
          "Test radiomicrofoni violiniste",
          "Test basi cerimonia",
          "Arrivo Budo",
          "Soundcheck Budo: test microfono / archetto, test chitarra e test in-ear Budo",
          "Verificare maglia VMGroup"
        ]
      },
      {
        title: "Ore 16:00 — Arrivo & Soundcheck Speranza",
        items: [
          "Gestire arrivo Speranza",
          "Soundcheck Speranza: test microfono e test in-ear",
          "Verificare maglia VMGroup"
        ]
      },
      {
        title: "Ore 16:15 — Cambio Visual (Welcome)",
        items: [
          "Far cambiare le Visual in Stanza Staff",
          "Verificare trucco e capelli delle Visual",
          "Verificare dress-code Welcome delle Visual: abito bianco con rose"
        ]
      },
      {
        title: "Ore 16:45 — Ultimi preparativi Welcome",
        items: [
          "Far cambiare le violiniste (Federica e Asia) in abiti di colore Nude",
          "Verificare trucco e capelli delle violiniste",
          "Visual si posizionano sui cubi nell'area Welcome",
          "Violiniste pronte e in posizione per l'accoglienza",
          "Tutti gli artisti sanno dove devono posizionarsi"
        ]
      }
    ]
  },
  {
    id: "welcome",
    title: "2. Welcome",
    time: "Inizio 17:00",
    theme: {
      bg: "bg-teal-50/50 dark:bg-teal-950/10",
      border: "border-teal-200 dark:border-teal-900/60",
      accent: "teal",
      badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200",
      indicator: "bg-teal-500",
      gradient: "from-teal-500 to-teal-700",
      lightBg: "bg-teal-100/50 dark:bg-teal-950/30",
    },
    sections: [
      {
        title: "Operativo Welcome (Ore 17:00)",
        items: [
          "Inizio ufficiale del Welcome ospiti",
          "Visual in posizione sui cubi con l'abito bianco rose",
          "Impianto audio Welcome acceso",
          "Playlist Welcome / cerimonia elettronica caricata e funzionante al corretto volume"
        ]
      },
      {
        title: "Area & Monitoraggio",
        items: [
          "Area pulita, flight case e cavi tecnici completamente nascosti alla vista",
          "Nessun tecnico presente nell'area ospiti",
          "Monitorare: le performer non devono avere telefoni in mano",
          "Atmosfera generale elegante ed accogliente"
        ]
      }
    ]
  },
  {
    id: "cerimonia",
    title: "3. Cerimonia",
    time: "17:15 - 18:15 (Inizio 17:30)",
    theme: {
      bg: "bg-emerald-50/50 dark:bg-emerald-950/10",
      border: "border-emerald-200 dark:border-emerald-900/60",
      accent: "emerald",
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200",
      indicator: "bg-emerald-500",
      gradient: "from-emerald-500 to-emerald-700",
      lightBg: "bg-emerald-100/50 dark:bg-emerald-950/30",
    },
    sections: [
      {
        title: "Ore 17:15 — Posizionamento",
        items: [
          "Violiniste (Federica e Asia) prendono posizione",
          "Inizio esecuzione brani d'atmosfera mentre gli ospiti prendono posto"
        ]
      },
      {
        title: "Ore 17:30 — Inizio Cerimonia",
        items: [
          "Radiomicrofoni delle 3 violiniste accesi e testati",
          "Radiomicrofono del celebrante acceso e bilanciato",
          "DJ pronto a lanciare le basi delle entrate nell'ordine corretto",
          "Cavi nascosti e in sicurezza"
        ]
      },
      {
        title: "Ore 18:15 — Fine Cerimonia",
        items: [
          "Fine della cerimonia",
          "Federica e Asia forniscono supporto operativo immediato post-cerimonia"
        ]
      }
    ]
  },
  {
    id: "aperitivo",
    title: "4. Aperitivo",
    time: "Inizio 18:30",
    theme: {
      bg: "bg-orange-50/50 dark:bg-orange-950/10",
      border: "border-orange-200 dark:border-orange-900/60",
      accent: "orange",
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-200",
      indicator: "bg-orange-500",
      gradient: "from-orange-500 to-orange-700",
      lightBg: "bg-orange-100/50 dark:bg-orange-950/30",
    },
    sections: [
      {
        title: "Operativo Aperitivo (Ore 18:30)",
        items: [
          "Inizio ufficiale Aperitivo",
          "Impianto audio aperitivo acceso e calibrato",
          "Victor (Vic) pronto con il sax live",
          "DJ in postazione pronto a partire immediatamente",
          "Alternare i momenti sax live di Victor con le selezioni del DJ",
          "Mantenere l'atmosfera elegante e coinvolgente"
        ]
      }
    ]
  },
  {
    id: "cena",
    title: "5. Cena",
    time: "19:30 - 21:30",
    theme: {
      bg: "bg-sky-50/50 dark:bg-sky-950/10",
      border: "border-sky-200 dark:border-sky-900/60",
      accent: "sky",
      badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-200",
      indicator: "bg-sky-500",
      gradient: "from-sky-500 to-sky-700",
      lightBg: "bg-sky-100/50 dark:bg-sky-950/30",
    },
    sections: [
      {
        title: "Ore 19:30 — Preparazione Cena & Cambi Abito (Stanza Staff)",
        items: [
          "Visual effettuano cambio abito: vestito Bianco/Nero + Cappello",
          "Ace effettua cambio: Giacca e Pantaloni con paillettes + Camicia Gonzi",
          "Speranza effettua cambio: Abito Nero con paillettes + ritocco trucco",
          "Julia effettua cambio: Abito Nero con paillettes + ritocco trucco",
          "Budo indossa l'abito Total Black",
          "Il Tecnico porta i 2 cubi audio all'ingresso della sala cena"
        ]
      },
      {
        title: "Ore 19:45 — Posizionamento Ingresso",
        items: [
          "Victor (Vic) cambia camicia (indossare Camicia Nera)",
          "Posizionare le Visual sopra i cubi all'ingresso della sala cena"
        ]
      },
      {
        title: "Ore 20:00 — Ingresso Ospiti",
        items: [
          "Inizio ingresso degli ospiti in sala cena",
          "Accoglienza spettacolare e coreografica gestita dalle Visual sui cubi",
          "Verificare che la registrazione audio dal mixer sia attiva (fonico)"
        ]
      },
      {
        title: "Ore 20:15 — Ingresso Sposi (Stargazing)",
        items: [
          "Ingresso trionfale di Gaia e Andrea",
          "Performance LIVE Stargazing con Ace, Speranza, Budo e Victor (Vic)",
          "Microfoni aperti, in-ear perfettamente funzionanti"
        ]
      },
      {
        title: "Ore 20:20 + — Prima Portata",
        items: [
          "Servizio della prima portata",
          "Monitorare il sottofondo musicale (da confermare)",
          "Visual effettuano cambio abito: vestito Nero + Gilet Sabry & So"
        ]
      },
      {
        title: "Durante la Cena — Performance 'Lose Control' (5')",
        items: [
          "Performance di Lose Control",
          "Coinvolti: Ace, Speranza, Budo e Victor con assolo di sax sul finale",
          "Verificare in-ear e microfoni prima dell'ingresso"
        ]
      },
      {
        title: "Durante la Cena — Seconda Portata",
        items: [
          "Servizio della seconda portata",
          "Uscita di Julia (da confermare con i tempi della cucina)"
        ]
      },
      {
        title: "Durante la Cena — Show 20 Minuti (Show Principale)",
        items: [
          "Lancio del Medley Dinner Show (Sweet Dreams, Get Lucky, Gimme Gimme, September, Disco Inferno, Freed From Desire, Don't You Worry Child, I Gotta Feeling)",
          "Ingresso delle Visual coreografiche vestite in Nero",
          "Tutti gli artisti microfonati ed in posizione"
        ]
      },
      {
        title: "Durante la Cena — Terza Portata & Cena Cantata",
        items: [
          "Servizio della terza portata",
          "Performance italiana + assoli di sax stile 'Jimmy Sax'",
          "Julia NON partecipa per prepararsi per la torta",
          "Evitare canzoni di: 883, YMCA, stile 'La Tartaruga'"
        ]
      },
      {
        title: "Ore 21:30 — Preparazione Torta (Stanza Staff)",
        items: [
          "Le Visual cambiano abito nella stanza dello staff indossando la Tuta Verde per la torta"
        ]
      }
    ]
  },
  {
    id: "torta",
    title: "6. Torta",
    time: "Ore 22:10",
    theme: {
      bg: "bg-amber-50/50 dark:bg-amber-950/10",
      border: "border-amber-200 dark:border-amber-900/60",
      accent: "amber",
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
      indicator: "bg-amber-500",
      gradient: "from-amber-500 to-amber-700",
      lightBg: "bg-amber-100/50 dark:bg-amber-950/30",
    },
    sections: [
      {
        title: "Operativo Torta (Ore 22:10)",
        items: [
          "Taglio della torta ufficiale all'esterno",
          "Visual già in posizione prima del taglio",
          "Esecuzione brano per il taglio: 'A Sky Full Of Stars'",
          "Julia pronta per la performance al violino (esegue Con te partirò finché non si sente la voce di Andrea)",
          "Visual fuoco entrano sul ritornello del pezzo",
          "Verificare che Ace, Speranza, Budo, Julia?, Victor siano pronti per il pre-party subito dopo il taglio"
        ]
      }
    ]
  },
  {
    id: "preparty",
    title: "7. Pre Party",
    time: "Ore 22:20",
    theme: {
      bg: "bg-violet-50/50 dark:bg-violet-950/10",
      border: "border-violet-200 dark:border-violet-900/60",
      accent: "violet",
      badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/60 dark:text-violet-200",
      indicator: "bg-violet-500",
      gradient: "from-violet-500 to-violet-700",
      lightBg: "bg-violet-100/50 dark:bg-violet-950/30",
    },
    sections: [
      {
        title: "Pre-Party in Glass House (Ore 22:20)",
        items: [
          "Ospiti rientrano nella Glass House",
          "Inizio della band live per il Pre-Party",
          "Visual raggiungono l'area del party indossando la Tuta Verde",
          "Ace, Speranza, Budo, Victor attivi sul palco",
          "Julia NON coinvolta (inizia sbaracco/riposo)"
        ]
      }
    ]
  },
  {
    id: "party",
    title: "8. Party",
    time: "23:00 - Fine Evento",
    theme: {
      bg: "bg-rose-50/50 dark:bg-rose-950/10",
      border: "border-rose-200 dark:border-rose-900/60",
      accent: "rose",
      badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200",
      indicator: "bg-rose-500",
      gradient: "from-rose-500 to-rose-700",
      lightBg: "bg-rose-100/50 dark:bg-rose-950/30",
    },
    sections: [
      {
        title: "DJ Set in Cantina (Ore 23:00)",
        items: [
          "Fine del pre-party e spostamento degli ospiti nelle cantine",
          "Inizio ufficiale DJ Set",
          "Victor attivo in pista con sax wireless",
          "Playlist dance / internazionale commerciale (evitare rigorosamente YMCA)"
        ]
      },
      {
        title: "Ore 23:15 — Fine Serata & Sbaracco",
        items: [
          "Gli artisti si cambiano in Stanza Staff",
          "Ritiro e controllo di tutta la strumentazione VMGroup",
          "Artisti lasciano la villa"
        ]
      },
      {
        title: "Logistica Trasferimenti & Rientri",
        items: [
          "Trasferimento Ace: accompagnare all'Hotel Moxy (definire autista)",
          "Trasferimento Julia: accompagnare a Gallarate (definire autista)",
          "Rientro Visual: autonomo",
          "Rientro Budo: autonomo",
          "Rientro Speranza: autonomo"
        ]
      }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('wedding_checklist_checked');
    return saved ? JSON.parse(saved) : {};
  });

  const [trafficLights, setTrafficLights] = useState(() => {
    const saved = localStorage.getItem('wedding_checklist_lights');
    return saved ? JSON.parse(saved) : {
      prep: 'neutral',
      welcome: 'neutral',
      cerimonia: 'neutral',
      aperitivo: 'neutral',
      cena: 'neutral',
      torta: 'neutral',
      preparty: 'neutral',
      party: 'neutral'
    };
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('wedding_checklist_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    localStorage.setItem('wedding_checklist_checked', JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    localStorage.setItem('wedding_checklist_lights', JSON.stringify(trafficLights));
  }, [trafficLights]);

  useEffect(() => {
    localStorage.setItem('wedding_checklist_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setThemeMode(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleCheckChange = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleTrafficLightChange = (phaseId, color) => {
    setTrafficLights(prev => ({
      ...prev,
      [phaseId]: color
    }));
  };

  const handleNoteChange = (phaseId, text) => {
    setNotes(prev => ({
      ...prev,
      [phaseId]: text
    }));
  };

  const handleResetChecklist = () => {
    if (window.confirm("Sei sicuro di voler resettare tutta la checklist? Questo eliminerà i progressi e i semafori.")) {
      setCheckedItems({});
      setTrafficLights({
        prep: 'neutral',
        welcome: 'neutral',
        cerimonia: 'neutral',
        aperitivo: 'neutral',
        cena: 'neutral',
        torta: 'neutral',
        preparty: 'neutral',
        party: 'neutral'
      });
      setNotes({});
      localStorage.removeItem('wedding_checklist_checked');
      localStorage.removeItem('wedding_checklist_lights');
      localStorage.removeItem('wedding_checklist_notes');
    }
  };

  const phaseStats = useMemo(() => {
    const stats = {};
    PHASES_DATA.forEach(phase => {
      let total = 0;
      let checked = 0;
      phase.sections.forEach((section, sIndex) => {
        section.items.forEach((_, iIndex) => {
          total++;
          const itemId = `${phase.id}-${sIndex}-${iIndex}`;
          if (checkedItems[itemId]) {
            checked++;
          }
        });
      });
      stats[phase.id] = {
        total,
        checked,
        percent: total > 0 ? Math.round((checked / total) * 100) : 0
      };
    });
    return stats;
  }, [checkedItems]);

  const globalStats = useMemo(() => {
    let total = 0;
    let checked = 0;
    Object.values(phaseStats).forEach(stat => {
      total += stat.total;
      checked += stat.checked;
    });
    return {
      total,
      checked,
      percent: total > 0 ? Math.round((checked / total) * 100) : 0
    };
  }, [phaseStats]);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];

    const results = [];
    PHASES_DATA.forEach(phase => {
      phase.sections.forEach((section, sIndex) => {
        section.items.forEach((itemText, iIndex) => {
          if (itemText.toLowerCase().includes(searchQuery.toLowerCase()) ||
              section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              phase.title.toLowerCase().includes(searchQuery.toLowerCase())) {

            const itemId = `${phase.id}-${sIndex}-${iIndex}`;
            results.push({
              itemId,
              phaseId: phase.id,
              phaseTitle: phase.title,
              sectionTitle: section.title,
              text: itemText,
              checked: !!checkedItems[itemId],
              theme: phase.theme
            });
          }
        });
      });
    });
    return results;
  }, [searchQuery, checkedItems]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${themeMode === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-rose-500 to-amber-600 bg-clip-text text-transparent">
                  {WEDDING_METADATA.sposi}
                </h1>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Festa: <span className="font-semibold">{WEDDING_METADATA.location}</span> &bull; Coord: {WEDDING_METADATA.coordinatori}
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {themeMode === 'dark' ? (
                <span className="text-lg">☀️</span>
              ) : (
                <span className="text-lg">🌙</span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 md:w-48 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-rose-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${globalStats.percent}%` }}
              ></div>
            </div>
            <div className="text-right whitespace-nowrap">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {globalStats.checked}/{globalStats.total}
              </span>
              <span className="text-xs text-slate-400 block">
                {globalStats.percent}% Completato
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                {themeMode === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={handleResetChecklist}
                className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-1 transition-all"
                title="Reset della Checklist"
              >
                Reset
              </button>
            </div>
          </div>

        </div>
      </header>

      <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 w-full sm:w-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono">VMGROUP PLANNING OPERATIVO &bull; 26 Giugno 2026</span>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cerca (es. Visual, Ace, Sax, Gonzi...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                &times;
              </button>
            )}
          </div>

        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">

        <div className="flex overflow-x-auto pb-3 gap-1.5 select-none">
          <button
            onClick={() => { setActiveTab("dashboard"); setSearchQuery(""); }}
            className={`px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "dashboard"
                ? "bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            📊 Tutte le Fasi
          </button>

          {PHASES_DATA.map((phase) => {
            const stats = phaseStats[phase.id];
            const lightColor = trafficLights[phase.id];

            let lightEmoji = "⚪";
            if (lightColor === 'green') lightEmoji = "🟢";
            if (lightColor === 'yellow') lightEmoji = "🟡";
            if (lightColor === 'red') lightEmoji = "🔴";

            return (
              <button
                key={phase.id}
                onClick={() => { setActiveTab(phase.id); setSearchQuery(""); }}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 border ${
                  activeTab === phase.id
                    ? `${phase.theme.indicator} text-white border-transparent shadow-md`
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                <span>{lightEmoji}</span>
                <span>{phase.title.split('. ')[1]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === phase.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {stats.percent}%
                </span>
              </button>
            );
          })}
        </div>

        {searchQuery ? (
          <div className="mt-4 animate-fadeIn">
            <h2 className="text-base font-bold mb-3 flex items-center gap-1.5">
              🔍 Risultati Ricerca per &quot;{searchQuery}&quot;
              <span className="text-xs font-normal text-slate-400">({searchResults.length} trovati)</span>
            </h2>

            {searchResults.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-center">
                <p className="text-sm text-slate-500">Nessuna voce corrisponde alla ricerca corrente.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {searchResults.map((item) => (
                  <div
                    key={item.itemId}
                    className="p-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex items-start gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckChange(item.itemId)}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-rose-500 focus:ring-rose-500 cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${item.checked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>
                        {item.text}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5 text-[10px]">
                        <span
                          onClick={() => { setActiveTab(item.phaseId); setSearchQuery(""); }}
                          className={`cursor-pointer px-2 py-0.5 rounded font-medium ${item.theme.badge}`}
                        >
                          {item.phaseTitle}
                        </span>
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                          {item.sectionTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {activeTab === "dashboard" ? (
              <div className="space-y-6 animate-fadeIn">

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg border border-slate-800/80">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-rose-400 uppercase">MATRIMONIO OPERATIVO VMGROUP</span>
                      <h2 className="text-2xl md:text-3xl font-extrabold mt-1">{WEDDING_METADATA.sposi}</h2>
                      <p className="text-sm text-slate-300 mt-1 flex items-center gap-1.5">
                        📍 {WEDDING_METADATA.location} &bull; 📅 26 Giugno 2026
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Coordinamento: {WEDDING_METADATA.coordinatori}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 w-full md:w-auto">
                      <div className="w-12 h-12 rounded-full border-2 border-rose-400 flex items-center justify-center font-bold text-lg">
                        {globalStats.percent}%
                      </div>
                      <div>
                        <span className="text-xs text-slate-300 block">Elementi Spuntati</span>
                        <span className="text-sm font-bold text-white">{globalStats.checked} su {globalStats.total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Semafori & Avanzamento Fasi</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {PHASES_DATA.map((phase) => {
                      const stats = phaseStats[phase.id];
                      const currentLight = trafficLights[phase.id];

                      return (
                        <div
                          key={phase.id}
                          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div
                              onClick={() => { setActiveTab(phase.id); window.scrollTo(0,0); }}
                              className="cursor-pointer group"
                            >
                              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-500 transition-colors">
                                {phase.title}
                              </h4>
                              <p className="text-xs text-slate-400 dark:text-slate-500">{phase.time}</p>
                            </div>

                            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                              <button
                                onClick={() => handleTrafficLightChange(phase.id, 'red')}
                                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                  currentLight === 'red' ? 'bg-red-500 text-white scale-110 shadow-sm shadow-red-500/50' : 'opacity-40 hover:opacity-100'
                                }`}
                                title="Stop / Errore"
                              >
                                <span className="text-[9px]">🔴</span>
                              </button>
                              <button
                                onClick={() => handleTrafficLightChange(phase.id, 'yellow')}
                                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                  currentLight === 'yellow' ? 'bg-amber-400 text-white scale-110 shadow-sm shadow-amber-400/50' : 'opacity-40 hover:opacity-100'
                                }`}
                                title="Attenzione / In Corso"
                              >
                                <span className="text-[9px]">🟡</span>
                              </button>
                              <button
                                onClick={() => handleTrafficLightChange(phase.id, 'green')}
                                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                  currentLight === 'green' ? 'bg-emerald-500 text-white scale-110 shadow-sm shadow-emerald-500/50' : 'opacity-40 hover:opacity-100'
                                }`}
                                title="Pronto"
                              >
                                <span className="text-[9px]">🟢</span>
                              </button>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                              <span>Completato ({stats.checked}/{stats.total})</span>
                              <span className="font-bold">{stats.percent}%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div
                                className={`h-1.5 rounded-full ${phase.theme.indicator} transition-all duration-300`}
                                style={{ width: `${stats.percent}%` }}
                              ></div>
                            </div>
                          </div>

                          {notes[phase.id] && (
                            <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1">
                              <span>📝</span>
                              <span className="line-clamp-2">{notes[phase.id]}</span>
                            </div>
                          )}

                          <button
                            onClick={() => { setActiveTab(phase.id); window.scrollTo(0,0); }}
                            className={`mt-3 w-full text-center py-1 rounded-lg text-xs font-semibold ${phase.theme.badge} border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-all`}
                          >
                            Apri Dettaglio Fase
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                    💡 Direttive Staff Importanti dal PDF Operativo
                  </h3>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 list-disc pl-4">
                    <li><strong>Maglia VMGroup:</strong> Tutto il personale di coordinamento (Patty, Io, Falbo) deve indossare la maglia ufficiale VMGroup durante tutta la fase di preparazione ed allestimento fino all&apos;inizio della cena.</li>
                    <li><strong>Camicia Gonzi:</strong> Da recuperare all&apos;arrivo in villa alle 13:30. Victor (Vic) cambia e indossa la camicia nera alle 19:45 prima dell&apos;ingresso degli ospiti.</li>
                    <li><strong>Visual - Cambi Abiti Chiave:</strong>
                      <ul className="list-circle pl-4 mt-1 space-y-1">
                        <li>16:15 → Abito Bianco con Rose (Welcome)</li>
                        <li>19:30 → Abito Bianco/Nero + Cappello (Ingresso Cena)</li>
                        <li>20:20 → Abito Nero + Gilet Sabry &amp; So (Durante Cena)</li>
                        <li>21:30 → Tuta Verde (Per taglio Torta e Party)</li>
                      </ul>
                    </li>
                    <li><strong>Audio & Allestimento Cena:</strong> Il fonico deve attivare la registrazione e monitorare che rimanga sempre attiva. Il tecnico deve ricordarsi di posizionare i 2 cubi audio all&apos;ingresso della sala cena alle ore 19:30.</li>
                  </ul>
                </div>

                <div className="block md:hidden pt-4">
                  <button
                    onClick={handleResetChecklist}
                    className="w-full py-3 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/30 rounded-xl font-bold text-xs text-center"
                  >
                    Reset Completo Checklist
                  </button>
                </div>

              </div>
            ) : (
              (() => {
                const phase = PHASES_DATA.find(p => p.id === activeTab);
                if (!phase) return null;

                const stats = phaseStats[phase.id];
                const currentLight = trafficLights[phase.id];
                const phaseIndex = PHASES_DATA.findIndex(p => p.id === phase.id);

                return (
                  <div className="space-y-6 animate-fadeIn">

                    <div className={`rounded-3xl p-6 ${phase.theme.bg} border ${phase.theme.border} transition-all duration-300`}>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${phase.theme.badge}`}>
                              {phase.time}
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-extrabold mt-2 text-slate-900 dark:text-white">
                            {phase.title}
                          </h2>
                        </div>

                        <div className="flex flex-col gap-1 w-full sm:w-auto">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1 sm:text-right">
                            Stato Operativo
                          </span>
                          <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                            <button
                              onClick={() => handleTrafficLightChange(phase.id, 'red')}
                              className={`flex-1 sm:flex-initial px-3 py-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                                currentLight === 'red'
                                  ? 'bg-red-500 text-white shadow-md shadow-red-500/30'
                                  : 'text-red-500/60 hover:bg-red-500/10'
                              }`}
                            >
                              🔴 <span className="hidden sm:inline">Stop</span>
                            </button>
                            <button
                              onClick={() => handleTrafficLightChange(phase.id, 'yellow')}
                              className={`flex-1 sm:flex-initial px-3 py-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                                currentLight === 'yellow'
                                  ? 'bg-amber-400 text-slate-900 shadow-md shadow-amber-400/30'
                                  : 'text-amber-500/60 hover:bg-amber-500/10'
                              }`}
                            >
                              🟡 <span className="hidden sm:inline">Attenzione</span>
                            </button>
                            <button
                              onClick={() => handleTrafficLightChange(phase.id, 'green')}
                              className={`flex-1 sm:flex-initial px-3 py-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                                currentLight === 'green'
                                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                                  : 'text-emerald-500/60 hover:bg-emerald-500/10'
                              }`}
                            >
                              🟢 <span className="hidden sm:inline">Pronto</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                          <span>Avanzamento checklist</span>
                          <span>{stats.checked} su {stats.total} completati ({stats.percent}%)</span>
                        </div>
                        <div className="w-full bg-slate-200/50 dark:bg-slate-800 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${phase.theme.indicator} transition-all duration-300`}
                            style={{ width: `${stats.percent}%` }}
                          ></div>
                        </div>
                      </div>

                    </div>

                    <div className="space-y-4">
                      {phase.sections.map((section, sIndex) => (
                        <div
                          key={sIndex}
                          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
                        >
                          <div className={`p-4 ${phase.theme.lightBg} border-b border-slate-100 dark:border-slate-800 flex justify-between items-center`}>
                            <h3 className="text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-700 dark:text-slate-300">
                              {section.title}
                            </h3>
                            <span className="text-[10px] bg-white/80 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-500 dark:text-slate-400">
                              {section.items.filter((_, iIdx) => checkedItems[`${phase.id}-${sIndex}-${iIdx}`]).length}/{section.items.length}
                            </span>
                          </div>

                          <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {section.items.map((item, iIndex) => {
                              const itemId = `${phase.id}-${sIndex}-${iIndex}`;
                              const isChecked = !!checkedItems[itemId];
                              const isPhone = item.includes("+44");

                              return (
                                <label
                                  key={iIndex}
                                  className={`p-4 flex items-start gap-3 cursor-pointer select-none transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/20 ${
                                    isChecked ? 'bg-slate-50/30 dark:bg-slate-900/10' : ''
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleCheckChange(itemId)}
                                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-rose-500 focus:ring-rose-500 cursor-pointer"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-xs sm:text-sm leading-relaxed ${
                                      isChecked
                                        ? 'line-through text-slate-400 dark:text-slate-500'
                                        : 'text-slate-800 dark:text-slate-200'
                                    }`}>
                                      {item}
                                    </p>
                                    {isPhone && (
                                      <a
                                        href="tel:+447966135647"
                                        className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-[10px] font-bold"
                                      >
                                        📞 Chiama Ace
                                      </a>
                                    )}
                                  </div>
                                </label>
                              );
                            })}
                          </div>

                        </div>
                      ))}
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          📝 Note Live per questa Fase
                        </h4>
                        <span className="text-[10px] text-slate-400">Salvataggio automatico</span>
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Scrivi qui appunti veloci (es. problemi tecnici, ritardi artisti, note su dress-code...)"
                        value={notes[phase.id] || ""}
                        onChange={(e) => handleNoteChange(phase.id, e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => {
                          if (phaseIndex > 0) {
                            setActiveTab(PHASES_DATA[phaseIndex - 1].id);
                          } else {
                            setActiveTab("dashboard");
                          }
                          window.scrollTo(0, 0);
                        }}
                        className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-center transition-all flex items-center justify-center gap-1"
                      >
                        ← {phaseIndex === 0 ? 'Dashboard' : 'Fase Prec.'}
                      </button>

                      <button
                        onClick={() => {
                          if (phaseIndex < PHASES_DATA.length - 1) {
                            setActiveTab(PHASES_DATA[phaseIndex + 1].id);
                          } else {
                            setActiveTab("dashboard");
                          }
                          window.scrollTo(0, 0);
                        }}
                        className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold text-center transition-all flex items-center justify-center gap-1"
                      >
                        {phaseIndex === PHASES_DATA.length - 1 ? 'Dashboard' : 'Prossima Fase'} →
                      </button>
                    </div>

                  </div>
                );
              })()
            )}
          </div>
        )}

      </main>

      <footer className="mt-12 py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors text-xs text-center text-slate-400">
        <p className="font-semibold text-slate-500 dark:text-slate-400">VMGroup Wedding & Event Management System</p>
        <p className="mt-1">Gaia & Andrea &bull; 26 Giugno 2026 &bull; Villa Buttafava</p>
        <p className="mt-4 text-[10px] text-slate-400">Sviluppato per smartphone e tablet. Dati salvati in locale nel browser.</p>
      </footer>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
