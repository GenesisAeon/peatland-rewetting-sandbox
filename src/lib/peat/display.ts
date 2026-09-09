import {
  DRAINED_PEAT_EMISSIONS_MT_CO2E_YR,
  DRAINED_TEMPERATE_CH4_KG_HA_YR,
  DRAINED_TEMPERATE_CO2_T_HA_YR,
  GUENTHER_2020_CITATION,
  GUENTHER_2024_AUTHOR_CORRECTION_CITATION,
  KREYLING_2021_CITATION,
  PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE,
  REWETTED_CH4_KG_HA_YR,
  REWETTED_CO2_T_HA_YR,
  SHARE_OF_GERMAN_GHG_PCT,
  SHANNON_NEAR_NATURAL,
  SHANNON_REWETTED,
  TARGET_REDUCTION_MT_CO2E_YR_BY_2030,
} from "./constants.ts";
import type { EvidenceEntry, Stance } from "./evidence.ts";
import { formatDe } from "../utils.ts";

export const STANCE_LABEL_DE: Record<Stance, string> = {
  flux: "Flux",
  policy: "Politik",
  biodiversity: "Biodiversität",
};

export const EVIDENCE_DOI: Record<EvidenceEntry["id"], string | null> = {
  guenther2020: GUENTHER_2020_CITATION.doi,
  moorschutzstrategie: null,
  kreyling2021: KREYLING_2021_CITATION.doi,
};

export const EVIDENCE_URL: Record<EvidenceEntry["id"], string | null> = {
  guenther2020: `https://doi.org/${GUENTHER_2020_CITATION.doi}`,
  moorschutzstrategie: "https://www.bmuv.de/",
  kreyling2021: `https://doi.org/${KREYLING_2021_CITATION.doi}`,
};

export function stanceLabelDe(stance: Stance): string {
  return STANCE_LABEL_DE[stance];
}

export function headlineFor(entry: EvidenceEntry): string {
  switch (entry.id) {
    case "guenther2020":
      return `CO₂ ${formatDe(DRAINED_TEMPERATE_CO2_T_HA_YR)}→${formatDe(REWETTED_CO2_T_HA_YR)} · CH₄ ${formatDe(DRAINED_TEMPERATE_CH4_KG_HA_YR)}→${formatDe(REWETTED_CH4_KG_HA_YR)}`;
    case "moorschutzstrategie":
      return `Ziel ≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} vs ${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt (${formatDe(SHARE_OF_GERMAN_GHG_PCT)}%)`;
    case "kreyling2021":
      return `Shannon ${formatDe(SHANNON_REWETTED)} vs ${formatDe(SHANNON_NEAR_NATURAL)} · ${formatDe(PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE)}% außerhalb`;
  }
}

export const KEY_NUMBERS = [
  {
    id: "co2_drained",
    label: "CO₂ drained",
    value: `${formatDe(DRAINED_TEMPERATE_CO2_T_HA_YR)} t/ha/yr`,
  },
  {
    id: "co2_rewetted",
    label: "CO₂ rewetted",
    value: `${formatDe(REWETTED_CO2_T_HA_YR)} t/ha/yr`,
  },
  {
    id: "ch4_drained",
    label: "CH₄ drained",
    value: `${formatDe(DRAINED_TEMPERATE_CH4_KG_HA_YR)} kg/ha/yr`,
  },
  {
    id: "ch4_rewetted",
    label: "CH₄ rewetted",
    value: `${formatDe(REWETTED_CH4_KG_HA_YR)} kg/ha/yr`,
  },
  {
    id: "target_5",
    label: "DE target 2030",
    value: `≥${formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} Mt`,
  },
  {
    id: "emissions_53",
    label: "DE drained peat",
    value: `${formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt (~${formatDe(SHARE_OF_GERMAN_GHG_PCT)}%)`,
  },
] as const;

export const GUENTHER_2024_DOI = GUENTHER_2024_AUTHOR_CORRECTION_CITATION.doi;
