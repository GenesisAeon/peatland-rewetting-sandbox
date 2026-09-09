import { formatDe } from "@/lib/utils";
import {
  DRAINED_PEAT_EMISSIONS_MT_CO2E_YR,
  DRAINED_TEMPERATE_CH4_KG_HA_YR,
  DRAINED_TEMPERATE_CO2_T_HA_YR,
  MEAN_YEARS_AFTER_REWETTING,
  PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE,
  REWETTED_CH4_KG_HA_YR,
  REWETTED_CO2_T_HA_YR,
  SHARE_OF_GERMAN_GHG_PCT,
  SHANNON_NEAR_NATURAL,
  SHANNON_NEAR_NATURAL_SE,
  SHANNON_REWETTED,
  SHANNON_REWETTED_SE,
  SITES_NEAR_NATURAL,
  SITES_REWETTED,
  TARGET_REDUCTION_MT_CO2E_YR_BY_2030,
  YEARS_AFTER_REWETTING_SPAN_HIGH,
  YEARS_AFTER_REWETTING_SPAN_LOW,
} from "@/lib/peat/constants";
import type { EvidenceEntry, Stance } from "@/lib/peat/evidence";

export type Locale = "de" | "en";

export type Messages = {
  language: string;
  documentTitle: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  statusLabel: string;
  statusHeading: string;
  statusBody: string;
  filterHeading: string;
  filterHint: string;
  filterAll: string;
  filterFlux: string;
  filterPolicy: string;
  filterBiodiversity: string;
  filterAria: string;
  hiddenOne: string;
  hiddenMany: (n: number) => string;
  hiddenSuffix: string;
  toggleHeading: string;
  toggleHint: string;
  toggleDrained: string;
  toggleRewetted: string;
  toggleCo2Label: string;
  toggleCh4Label: string;
  toggleSinkBadge: string;
  toggleSourceBadge: string;
  guentherNoteHeading: string;
  policyHeading: string;
  policyTarget: string;
  policyCurrent: string;
  policyShare: string;
  biodivHeading: string;
  biodivKreylingNote: string;
  numbersHeading: string;
  evidenceHeading: string;
  evidenceLead: string;
  entriesCount: (visible: number, total: number) => string;
  coreClaim: string;
  citation: string;
  doiSource: string;
  close: string;
  drawerFoot: string;
  honestyHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourcesFoot: string;
  disclaimerHeading: string;
  disclaimerLead: string;
  disclaimerBody: string;
  twentyTonnesNote: string;
  guentherCo2OnlyNote: string;
  linkKlimakatalog: string;
  linkAppsHub: string;
  linkGithub: string;
  linkSandboxGithub: string;
  stanceLabel: Record<Stance, string>;
  evidenceTitle: Record<EvidenceEntry["id"], string>;
  evidenceCore: Record<EvidenceEntry["id"], string>;
  headlines: Record<EvidenceEntry["id"], string>;
  keyNumberLabels: Record<string, string>;
  sourceNotes: Record<EvidenceEntry["id"] | "guenther2024", string>;
};

const de: Messages = {
  language: "Deutsch",
  documentTitle: "Moor-Wiedervernässung-Sandbox",
  eyebrow: "GenesisAeon ? P131 ? peatland-rewetting-utac",
  titleLead: "Wiedervernässung: ",
  titleAccent: "Senke, Methan, Biodiversität",
  lead:
    "Diskrete Guenther-2020-Fluxe (Vorher/Nachher), Moorschutzstrategie-Balken und Kreyling-Biodiversität — ohne stetige Formeln, ohne ~20 t-Konstante, ohne UTAC-Bridge.",
  statusLabel: "Honesty-Status",
  statusHeading: "CO₂-Senke ja — vollständige Ökologie nein",
  statusBody:
    "Fünf feste Honesty-Checks aus der Quelle. Timing vor 2050 ist qualitativ entscheidend; kein einzelner Netto-Nutzen-Wert.",
  filterHeading: "Evidenz-Säulen",
  filterHint: "Filter nach Quelle. Headline:",
  filterAll: "Alle",
  filterFlux: "Flux",
  filterPolicy: "Politik",
  filterBiodiversity: "Biodiversität",
  filterAria: "Evidenzfilter",
  hiddenOne: "1 Eintrag ausgeblendet.",
  hiddenMany: (n) => `${n} Einträge ausgeblendet.`,
  hiddenSuffix: "Filter zurücksetzen, um alle zu sehen.",
  toggleHeading: "Entwässert vs. wiedervernässt",
  toggleHint: "Guenther et al. 2020 — temperate Fluxe, diskret, keine Interpolation.",
  toggleDrained: "Entwässert",
  toggleRewetted: "Wiedervernässt",
  toggleCo2Label: "CO₂ (t/ha/Jahr)",
  toggleCh4Label: "CH₄ (kg/ha/Jahr)",
  toggleSinkBadge: "Netto-Senke (Vorzeichenwechsel)",
  toggleSourceBadge: "Quelle (positiv)",
  guentherNoteHeading: "Guenther Kernbotschaft (Timing)",
  policyHeading: "Nationale Moorschutzstrategie DE",
  policyTarget: `Ziel $≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} Mt CO₂e/Jahr bis 2030`,
  policyCurrent: `Aktuell ~${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt CO₂e/Jahr aus entwässerten Mooren`,
  policyShare: `≈${formatDe(SHARE_OF_GERMAN_GHG_PCT)}% der deutschen THG-Emissionen`,
  biodivHeading: "Kreyling 2021 — Biodiversität",
  biodivKreylingNote:
    "Kein Konvergenztrend zur naturnahen Biodiversität über Jahrzehnte. CO₂-Vorteil ≠ vollständige ökologische Wiederherstellung.",
  numbersHeading: "Schlüsselzahlen (diskret)",
  evidenceHeading: "Evidenz",
  evidenceLead: "Drei Säulen aus der Python-API — nichts erfunden.",
  entriesCount: (visible, total) => `${visible} / ${total}`,
  coreClaim: "Kernaussage",
  citation: "Zitation",
  doiSource: "DOI / Quelle",
  close: "Schließen",
  drawerFoot: "1:1 Port aus peatland-rewetting-utac v1.0.0.",
  honestyHeading: "Honesty-Checks (alle 5)",
  sourcesHeading: "Quellen",
  sourcesLead:
    "Primärquellen plus Guenther-2024-Author-Correction (N₂O→CO₂-Faktor-Bug, bereits eingearbeitet).",
  sourcesFoot:
    "Kein UTAC/CREP/AFET. Keine stetigen Formeln. ~20 t nie als Konstante.",
  disclaimerHeading: "Disclaimer",
  disclaimerLead:
    "Reine Wissenschafts-Sandbox. Keine Live-Prognose, keine Inventar-Software.",
  disclaimerBody:
    "Explizit ausgeschlossen: die oft zitierte ~20 t CO₂e/ha/Jahr-Zahl. Guenthers echte CO₂-Differenz (~10.7 t/ha/Jahr) ist enger und nicht zu vermischen.",
  twentyTonnesNote:
    "TWENTY_TONNES_EXCLUSION_NOTE: Herkunft der ~20 t in Moorschutzstrategie/bmuv.de nicht gefunden — absichtlich nicht kodiert.",
  guentherCo2OnlyNote:
    "GUENTHER_CO2_ONLY_DIFFERENCE_NOTE: 10.3 → −0.4 t CO₂/ha/Jahr ≈ 10.7 t (nur CO₂) — nicht mit ~20 t CO₂e verwechseln.",
  linkKlimakatalog: "Klimakatalog ? P131",
  linkAppsHub: "Apps-Hub",
  linkGithub: "peatland-rewetting-utac",
  linkSandboxGithub: "peatland-rewetting-sandbox",
  stanceLabel: {
    flux: "Flux",
    policy: "Politik",
    biodiversity: "Biodiversität",
  },
  evidenceTitle: {
    guenther2020: "Guenther et al. 2020",
    moorschutzstrategie: "Nationale Moorschutzstrategie",
    kreyling2021: "Kreyling et al. 2021",
  },
  evidenceCore: {
    guenther2020:
      "Temperate Fluxe: CO₂ Senke nach Wiedervernässung; CH₄ steigt stark; Timing vor 2050.",
    moorschutzstrategie:
      "Mindestziel 5 Mt vs. aktuell ~53 Mt (~7.5% DE-THG).",
    kreyling2021:
      "Shannon 1.46 vs. 1.75; 63% außerhalb naturnaher Bandbreite; keine Konvergenz.",
  },
  headlines: {
    guenther2020: `CO₂ ${formatDe(DRAINED_TEMPERATE_CO2_T_HA_YR)}→${formatDe(REWETTED_CO2_T_HA_YR)} ? CH₄ ${formatDe(DRAINED_TEMPERATE_CH4_KG_HA_YR)}→${formatDe(REWETTED_CH4_KG_HA_YR)}`,
    moorschutzstrategie: `$≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} vs ${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt`,
    kreyling2021: `${formatDe(SITES_REWETTED)} vs ${formatDe(SITES_NEAR_NATURAL)} Sites ? ${formatDe(YEARS_AFTER_REWETTING_SPAN_LOW)}–${formatDe(YEARS_AFTER_REWETTING_SPAN_HIGH)} Jahre (Ø ${formatDe(MEAN_YEARS_AFTER_REWETTING)})`,
  },
  keyNumberLabels: {
    co2_drained: "CO₂ entwässert",
    co2_rewetted: "CO₂ wiedervernässt",
    ch4_drained: "CH₄ entwässert",
    ch4_rewetted: "CH₄ wiedervernässt",
    target_5: "DE-Ziel 2030",
    emissions_53: "DE entwässerte Moore",
  },
  sourceNotes: {
    guenther2020: "Kern-Flux-Quelle; Zahlen bereits mit 2024-Korrektur.",
    moorschutzstrategie: "Politik/Inventar-Größenordnung laut bmuv.",
    kreyling2021: "Zentrale Biodiversitäts-Ehrlichkeit: keine Konvergenz.",
    guenther2024: "Author Correction: N₂O→CO₂-Umrechnungsfaktor 14→28.",
  },
};

const en: Messages = {
  language: "English",
  documentTitle: "Peatland Rewetting Sandbox",
  eyebrow: "GenesisAeon ? P131 ? peatland-rewetting-utac",
  titleLead: "Rewetting: ",
  titleAccent: "sink, methane, biodiversity",
  lead:
    "Discrete Guenther 2020 fluxes (before/after), Moorschutzstrategie bars, and Kreyling biodiversity — no continuous formulas, no ~20 t constant, no UTAC bridge.",
  statusLabel: "Honesty status",
  statusHeading: "CO₂ sink yes — full ecology no",
  statusBody:
    "Five fixed honesty checks from the source. Timing before 2050 is qualitative; no single net-benefit constant.",
  filterHeading: "Evidence pillars",
  filterHint: "Filter by source. Headline:",
  filterAll: "All",
  filterFlux: "Flux",
  filterPolicy: "Policy",
  filterBiodiversity: "Biodiversity",
  filterAria: "Evidence filter",
  hiddenOne: "1 entry hidden.",
  hiddenMany: (n) => `${n} entries hidden.`,
  hiddenSuffix: "Reset filter to see all.",
  toggleHeading: "Drained vs rewetted",
  toggleHint: "Guenther et al. 2020 — temperate fluxes, discrete, no interpolation.",
  toggleDrained: "Drained",
  toggleRewetted: "Rewetted",
  toggleCo2Label: "CO₂ (t/ha/yr)",
  toggleCh4Label: "CH₄ (kg/ha/yr)",
  toggleSinkBadge: "Net sink (sign flip)",
  toggleSourceBadge: "Source (positive)",
  guentherNoteHeading: "Guenther core message (timing)",
  policyHeading: "National peatland strategy DE",
  policyTarget: `Target $≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} Mt CO₂e/yr by 2030`,
  policyCurrent: `Current ~${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt CO₂e/yr from drained peat soils`,
  policyShare: `≈${formatDe(SHARE_OF_GERMAN_GHG_PCT)}% of German GHG emissions`,
  biodivHeading: "Kreyling 2021 — biodiversity",
  biodivKreylingNote:
    "No convergence toward near-natural biodiversity over decades. CO₂ benefit ≠ full ecological restoration.",
  numbersHeading: "Key numbers (discrete)",
  evidenceHeading: "Evidence",
  evidenceLead: "Three pillars from the Python API — nothing invented.",
  entriesCount: (visible, total) => `${visible} / ${total}`,
  coreClaim: "Core claim",
  citation: "Citation",
  doiSource: "DOI / source",
  close: "Close",
  drawerFoot: "1:1 port from peatland-rewetting-utac v1.0.0.",
  honestyHeading: "Honesty checks (all 5)",
  sourcesHeading: "Sources",
  sourcesLead:
    "Primary sources plus Guenther 2024 author correction (N₂O→CO₂ factor bug, already applied).",
  sourcesFoot:
    "No UTAC/CREP/AFET. No continuous formulas. Never show ~20 t as a constant.",
  disclaimerHeading: "Disclaimer",
  disclaimerLead:
    "Pure-science sandbox. No live forecast, no inventory software.",
  disclaimerBody:
    "Explicitly excluded: the often-cited ~20 t CO₂e/ha/yr figure. Guenther's real CO₂-only difference (~10.7 t/ha/yr) is narrower and must not be mixed.",
  twentyTonnesNote:
    "TWENTY_TONNES_EXCLUSION_NOTE: ~20 t origin not found in Moorschutzstrategie/bmuv.de — intentionally not encoded.",
  guentherCo2OnlyNote:
    "GUENTHER_CO2_ONLY_DIFFERENCE_NOTE: 10.3 → −0.4 t CO₂/ha/yr ≈ 10.7 t (CO₂ only) — do not confuse with ~20 t CO₂e.",
  linkKlimakatalog: "Klimakatalog ? P131",
  linkAppsHub: "Apps Hub",
  linkGithub: "peatland-rewetting-utac",
  linkSandboxGithub: "peatland-rewetting-sandbox",
  stanceLabel: {
    flux: "Flux",
    policy: "Policy",
    biodiversity: "Biodiversity",
  },
  evidenceTitle: {
    guenther2020: "Guenther et al. 2020",
    moorschutzstrategie: "National peatland strategy",
    kreyling2021: "Kreyling et al. 2021",
  },
  evidenceCore: {
    guenther2020:
      "Temperate fluxes: CO₂ sink after rewetting; CH₄ rises sharply; timing before 2050.",
    moorschutzstrategie:
      "At-least 5 Mt target vs current ~53 Mt (~7.5% DE GHG).",
    kreyling2021:
      "Shannon 1.46 vs 1.75; 63% outside natural range; no convergence.",
  },
  headlines: {
    guenther2020: `CO₂ ${formatDe(DRAINED_TEMPERATE_CO2_T_HA_YR)}→${formatDe(REWETTED_CO2_T_HA_YR)} ? CH₄ ${formatDe(DRAINED_TEMPERATE_CH4_KG_HA_YR)}→${formatDe(REWETTED_CH4_KG_HA_YR)}`,
    moorschutzstrategie: `$≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} vs ${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt`,
    kreyling2021: `${formatDe(SITES_REWETTED)} vs ${formatDe(SITES_NEAR_NATURAL)} sites ? ${formatDe(YEARS_AFTER_REWETTING_SPAN_LOW)}–${formatDe(YEARS_AFTER_REWETTING_SPAN_HIGH)} yr (mean ${formatDe(MEAN_YEARS_AFTER_REWETTING)})`,
  },
  keyNumberLabels: {
    co2_drained: "CO₂ drained",
    co2_rewetted: "CO₂ rewetted",
    ch4_drained: "CH₄ drained",
    ch4_rewetted: "CH₄ rewetted",
    target_5: "DE target 2030",
    emissions_53: "DE drained peat",
  },
  sourceNotes: {
    guenther2020: "Core flux source; numbers already include 2024 correction.",
    moorschutzstrategie: "Policy/inventory order-of-magnitude per bmuv.",
    kreyling2021: "Central biodiversity honesty: no convergence.",
    guenther2024: "Author Correction: N₂O→CO₂ conversion factor 14→28.",
  },
};

export const messages: Record<Locale, Messages> = { de, en };

export function stanceLabel(stance: Stance, t: Messages): string {
  return t.stanceLabel[stance];
}

export function headlineForLocale(entry: EvidenceEntry, t: Messages): string {
  return t.headlines[entry.id];
}

export function keyNumbersForLocale(t: Messages) {
  return [
    {
      id: "co2_drained",
      label: t.keyNumberLabels.co2_drained,
      value: `${formatDe(DRAINED_TEMPERATE_CO2_T_HA_YR)} t/ha/yr`,
    },
    {
      id: "co2_rewetted",
      label: t.keyNumberLabels.co2_rewetted,
      value: `${formatDe(REWETTED_CO2_T_HA_YR)} t/ha/yr`,
    },
    {
      id: "ch4_drained",
      label: t.keyNumberLabels.ch4_drained,
      value: `${formatDe(DRAINED_TEMPERATE_CH4_KG_HA_YR)} kg/ha/yr`,
    },
    {
      id: "ch4_rewetted",
      label: t.keyNumberLabels.ch4_rewetted,
      value: `${formatDe(REWETTED_CH4_KG_HA_YR)} kg/ha/yr`,
    },
    {
      id: "target_5",
      label: t.keyNumberLabels.target_5,
      value: `$≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} Mt`,
    },
    {
      id: "emissions_53",
      label: t.keyNumberLabels.emissions_53,
      value: `${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt (~${formatDe(SHARE_OF_GERMAN_GHG_PCT)}%)`,
    },
    {
      id: "shannon",
      label: "Shannon H′",
      value: `${formatDe(SHANNON_REWETTED)}$±${formatDe(SHANNON_REWETTED_SE)} vs ${formatDe(SHANNON_NEAR_NATURAL)}$±${formatDe(SHANNON_NEAR_NATURAL_SE)}`,
    },
    {
      id: "outside",
      label: "% outside natural",
      value: `${formatDe(PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE)}%`,
    },
  ] as const;
}
