import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ALL_EVIDENCE,
  DRAINED_TEMPERATE_CH4_KG_HA_YR,
  DRAINED_TEMPERATE_CO2_T_HA_YR,
  PACKAGE_ID,
  REWETTED_CH4_KG_HA_YR,
  REWETTED_CO2_T_HA_YR,
  SOURCE_VERSION,
  TARGET_REDUCTION_MT_CO2E_YR_BY_2030,
  DRAINED_PEAT_EMISSIONS_MT_CO2E_YR,
  SHARE_OF_GERMAN_GHG_PCT,
  doesMethaneIncreaseAfterRewetting,
  doesMethaneIncreaseNegateClimateBenefit,
  doesRewettingFullyRestoreOriginalBiodiversity,
  is20TonnesPerHectareFigureConfirmed,
  isRewettingANetCo2Sink,
} from "./index.ts";

describe("peatland-rewetting-sandbox domain (P131)", () => {
  it("ports package id and version", () => {
    assert.equal(PACKAGE_ID, 131);
    assert.equal(SOURCE_VERSION, "1.0.0");
  });

  it("keeps Guenther fluxes 1:1 with sign flip to sink", () => {
    assert.equal(DRAINED_TEMPERATE_CO2_T_HA_YR, 10.3);
    assert.equal(REWETTED_CO2_T_HA_YR, -0.4);
    assert.equal(DRAINED_TEMPERATE_CH4_KG_HA_YR, 7.9);
    assert.equal(REWETTED_CH4_KG_HA_YR, 205.9);
    assert.equal(isRewettingANetCo2Sink(), true);
    assert.equal(doesMethaneIncreaseAfterRewetting(), true);
  });

  it("keeps Moorschutzstrategie discrete bars", () => {
    assert.equal(TARGET_REDUCTION_MT_CO2E_YR_BY_2030, 5.0);
    assert.equal(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR, 53);
    assert.equal(SHARE_OF_GERMAN_GHG_PCT, 7.5);
  });

  it("encodes all 5 honesty functions", () => {
    assert.equal(isRewettingANetCo2Sink(), true);
    assert.equal(doesMethaneIncreaseAfterRewetting(), true);
    assert.equal(doesMethaneIncreaseNegateClimateBenefit(), false);
    assert.equal(doesRewettingFullyRestoreOriginalBiodiversity(), false);
    assert.equal(is20TonnesPerHectareFigureConfirmed(), false);
  });

  it("has three evidence pillars", () => {
    assert.equal(ALL_EVIDENCE.length, 3);
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "flux"));
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "policy"));
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "biodiversity"));
  });

  it("never invents continuous formulas or 20t constant", () => {
    assert.equal(is20TonnesPerHectareFigureConfirmed(), false);
  });
});
