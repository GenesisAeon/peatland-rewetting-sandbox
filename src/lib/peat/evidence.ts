/**
 * Evidence pillars + honesty APIs for peatland-rewetting-utac (P131).
 * Ported structurally from honesty.py + constants.py. Discrete values only.
 */

import {
  DRAINED_TEMPERATE_CH4_KG_HA_YR,
  GUENTHER_2020_CITATION,
  GUENTHER_2020_CORE_MESSAGE_NOTE,
  GUENTHER_CO2_ONLY_DIFFERENCE_NOTE,
  KREYLING_2021_CITATION,
  KREYLING_NO_CONVERGENCE_NOTE,
  MEAN_YEARS_AFTER_REWETTING,
  MOORSCHUTZSTRATEGIE_SCOPE_NOTE,
  NATIONALE_MOORSCHUTZSTRATEGIE_CITATION,
  PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE,
  REWETTED_CH4_KG_HA_YR,
  REWETTED_CO2_T_HA_YR,
  TWENTY_TONNES_EXCLUSION_NOTE,
} from "./constants.ts";

export type Stance = "flux" | "policy" | "biodiversity";

export type EvidenceEntry = {
  id: "guenther2020" | "moorschutzstrategie" | "kreyling2021";
  label: string;
  stance: Stance;
  citation: string;
};

export const ALL_EVIDENCE: readonly EvidenceEntry[] = [
  {
    id: "guenther2020",
    label: "Guenther et al. 2020 (temperate CO2/CH4 fluxes)",
    stance: "flux",
    citation: `${GUENTHER_2020_CITATION.authors} (${GUENTHER_2020_CITATION.year}). "${GUENTHER_2020_CITATION.title}". ${GUENTHER_2020_CITATION.journal}. DOI ${GUENTHER_2020_CITATION.doi}`,
  },
  {
    id: "moorschutzstrategie",
    label: "Nationale Moorschutzstrategie DE 2022",
    stance: "policy",
    citation: `${NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.title} (${NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.jurisdiction}, adopted ${NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.adopted}; ${NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.source})`,
  },
  {
    id: "kreyling2021",
    label: "Kreyling et al. 2021 (fen biodiversity, no convergence)",
    stance: "biodiversity",
    citation: `${KREYLING_2021_CITATION.authors} (${KREYLING_2021_CITATION.year}). "${KREYLING_2021_CITATION.title}". ${KREYLING_2021_CITATION.journal}. DOI ${KREYLING_2021_CITATION.doi}`,
  },
];

export function fluxEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "flux");
}

export function policyEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "policy");
}

export function biodiversityEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "biodiversity");
}

/** Guenther 2020: REWETTED_CO2_T_HA_YR = -0.4. Always True. */
export function isRewettingANetCo2Sink(): boolean {
  if (!(REWETTED_CO2_T_HA_YR < 0)) {
    throw new Error("REWETTED_CO2_T_HA_YR must be negative sink");
  }
  return true;
}

/** Guenther 2020: drained 7.9 -> rewetted 205.9 kg CH4/ha/yr. Always True. */
export function doesMethaneIncreaseAfterRewetting(): boolean {
  if (!(REWETTED_CH4_KG_HA_YR > DRAINED_TEMPERATE_CH4_KG_HA_YR)) {
    throw new Error("rewetted CH4 must exceed drained CH4");
  }
  return true;
}

/**
 * Guenther 2020: methane rise does NOT negate climate benefit if rewetting
 * happens before 2050. Always False under that documented condition.
 */
export function doesMethaneIncreaseNegateClimateBenefit(): boolean {
  return false;
}

/**
 * Kreyling 2021: 63% outside natural biodiv range; no full restoration.
 * Always False.
 */
export function doesRewettingFullyRestoreOriginalBiodiversity(): boolean {
  void PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE;
  void MEAN_YEARS_AFTER_REWETTING;
  return false;
}

/**
 * Unverified ~20 t CO2e/ha/yr secondary figure — intentionally negative.
 * Always False. Never show ~20 t as a constant.
 */
export function is20TonnesPerHectareFigureConfirmed(): boolean {
  void TWENTY_TONNES_EXCLUSION_NOTE;
  return false;
}

export {
  GUENTHER_2020_CORE_MESSAGE_NOTE,
  GUENTHER_CO2_ONLY_DIFFERENCE_NOTE,
  KREYLING_NO_CONVERGENCE_NOTE,
  MOORSCHUTZSTRATEGIE_SCOPE_NOTE,
  TWENTY_TONNES_EXCLUSION_NOTE,
};
