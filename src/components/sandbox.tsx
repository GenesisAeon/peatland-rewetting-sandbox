import { useMemo, useState } from "react";
import {
  ALL_EVIDENCE,
  DRAINED_PEAT_EMISSIONS_MT_CO2E_YR,
  DRAINED_TEMPERATE_CH4_KG_HA_YR,
  DRAINED_TEMPERATE_CO2_T_HA_YR,
  GUENTHER_2020_CORE_MESSAGE_NOTE,
  KREYLING_NO_CONVERGENCE_NOTE,
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
  doesMethaneIncreaseNegateClimateBenefit,
  isRewettingANetCo2Sink,
  type EvidenceEntry,
} from "@/lib/peat";
import { DisputeStatus } from "@/components/dispute-status";
import {
  StanceFilter,
  type StanceFilter as StanceFilterValue,
} from "@/components/stance-filter";
import { KeyNumbers } from "@/components/key-numbers";
import { EvidencePanel } from "@/components/evidence-panel";
import { EvidenceDrawer } from "@/components/evidence-drawer";
import { DisclaimerBox } from "@/components/disclaimer-box";
import { Sources } from "@/components/sources";
import { LocaleSwitch } from "@/components/locale-switch";
import { useLocale } from "@/lib/i18n/locale";
import { Button } from "@/components/ui/button";
import { formatDe } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Mode = "drained" | "rewetted";

function FluxBar({
  label,
  value,
  maxAbs,
  unit,
  sink,
}: {
  label: string;
  value: number;
  maxAbs: number;
  unit: string;
  sink?: boolean;
}) {
  const width = Math.min(100, (Math.abs(value) / maxAbs) * 100);
  const negative = value < 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
          {label}
        </p>
        <p
          className={cn(
            "font-mono text-sm tabular-nums",
            negative ? "text-accent" : "text-fg",
          )}
        >
          {formatDe(value)} {unit}
        </p>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-elevated">
        <div
          className={cn(
            "h-full rounded-full transition-all",
            negative ? "bg-accent" : "bg-muted",
          )}
          style={{ width: `${width}%` }}
        />
      </div>
      {sink ? (
        <p className="mt-1 text-xs text-accent">{/* filled by parent badge */}</p>
      ) : null}
    </div>
  );
}

export function Sandbox() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<StanceFilterValue>("all");
  const [selectedId, setSelectedId] = useState<EvidenceEntry["id"] | null>(null);
  const [mode, setMode] = useState<Mode>("drained");

  const visible = useMemo(() => {
    if (filter === "all") return ALL_EVIDENCE;
    return ALL_EVIDENCE.filter((e) => e.stance === filter);
  }, [filter]);

  const selected = ALL_EVIDENCE.find((e) => e.id === selectedId) ?? null;
  const hiddenCount = ALL_EVIDENCE.length - visible.length;
  const sink = isRewettingANetCo2Sink();
  const co2 = mode === "drained" ? DRAINED_TEMPERATE_CO2_T_HA_YR : REWETTED_CO2_T_HA_YR;
  const ch4 = mode === "drained" ? DRAINED_TEMPERATE_CH4_KG_HA_YR : REWETTED_CH4_KG_HA_YR;

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12">
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="text-2xs font-medium uppercase tracking-[0.18em] text-subtle">
              {t.eyebrow}
            </p>
            <LocaleSwitch />
          </div>
          <h1 className="mt-3 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            {t.titleLead}
            <span className="italic text-accent">{t.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.lead}
          </p>
        </header>

        <div className="mt-8 space-y-4">
          <DisputeStatus />

          <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl tracking-tight">{t.toggleHeading}</h2>
                <p className="mt-1 text-sm text-muted">{t.toggleHint}</p>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label={t.toggleHeading}>
                <Button
                  type="button"
                  variant="chip"
                  size="sm"
                  data-active={mode === "drained"}
                  aria-pressed={mode === "drained"}
                  onClick={() => setMode("drained")}
                >
                  {t.toggleDrained}
                </Button>
                <Button
                  type="button"
                  variant="chip"
                  size="sm"
                  data-active={mode === "rewetted"}
                  aria-pressed={mode === "rewetted"}
                  onClick={() => setMode("rewetted")}
                >
                  {t.toggleRewetted}
                </Button>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-elevated p-4">
                <FluxBar
                  label={t.toggleCo2Label}
                  value={co2}
                  maxAbs={Math.max(
                    Math.abs(DRAINED_TEMPERATE_CO2_T_HA_YR),
                    Math.abs(REWETTED_CO2_T_HA_YR),
                  )}
                  unit="t/ha/yr"
                />
                <p className="mt-2 text-xs text-accent">
                  {co2 < 0 ? t.toggleSinkBadge : t.toggleSourceBadge}
                  {" · "}
                  is_rewetting_a_net_co2_sink() = {String(sink)}
                </p>
              </div>
              <div className="rounded-lg bg-elevated p-4">
                <FluxBar
                  label={t.toggleCh4Label}
                  value={ch4}
                  maxAbs={REWETTED_CH4_KG_HA_YR}
                  unit="kg/ha/yr"
                />
                <p className="mt-2 font-mono text-xs text-muted">
                  does_methane_increase_negate_climate_benefit() ={" "}
                  <span className="text-accent">
                    {String(doesMethaneIncreaseNegateClimateBenefit())}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-ring/60 bg-bg/40 p-4">
              <h3 className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                {t.guentherNoteHeading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {GUENTHER_2020_CORE_MESSAGE_NOTE}
              </p>
            </div>
          </section>

          <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
            <h2 className="font-heading text-2xl tracking-tight">{t.policyHeading}</h2>
            <p className="mt-2 text-sm text-muted">{t.policyShare}</p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-muted">
                  <span>{t.policyTarget}</span>
                  <span className="font-mono">{formatDe(TARGET_REDUCTION_MT_CO2E_YR_BY_2030)} Mt</span>
                </div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-elevated">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{
                      width: `${(TARGET_REDUCTION_MT_CO2E_YR_BY_2030 / DRAINED_PEAT_EMISSIONS_MT_CO2E_YR) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-muted">
                  <span>{t.policyCurrent}</span>
                  <span className="font-mono">{formatDe(DRAINED_PEAT_EMISSIONS_MT_CO2E_YR)} Mt</span>
                </div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-elevated">
                  <div className="h-full w-full rounded-full bg-muted" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
            <h2 className="font-heading text-2xl tracking-tight">{t.biodivHeading}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-elevated p-3">
                <p className="text-2xs uppercase tracking-[0.12em] text-subtle">Shannon rewetted</p>
                <p className="mt-1 font-mono text-lg">
                  {formatDe(SHANNON_REWETTED)} ± {formatDe(SHANNON_REWETTED_SE)}
                </p>
              </div>
              <div className="rounded-lg bg-elevated p-3">
                <p className="text-2xs uppercase tracking-[0.12em] text-subtle">Shannon near-natural</p>
                <p className="mt-1 font-mono text-lg">
                  {formatDe(SHANNON_NEAR_NATURAL)} ± {formatDe(SHANNON_NEAR_NATURAL_SE)}
                </p>
              </div>
              <div className="rounded-lg bg-elevated p-3">
                <p className="text-2xs uppercase tracking-[0.12em] text-subtle">Outside natural range</p>
                <p className="mt-1 font-mono text-lg">
                  {formatDe(PCT_REWETTED_OUTSIDE_NATURAL_BIODIV_RANGE)}%
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">
              {formatDe(SITES_REWETTED)} vs {formatDe(SITES_NEAR_NATURAL)} sites ·{" "}
              {formatDe(YEARS_AFTER_REWETTING_SPAN_LOW)}–
              {formatDe(YEARS_AFTER_REWETTING_SPAN_HIGH)} years (mean{" "}
              {formatDe(MEAN_YEARS_AFTER_REWETTING)})
            </p>
            <div className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-4">
              <p className="text-2xs font-medium uppercase tracking-[0.14em] text-accent">
                KREYLING_NO_CONVERGENCE_NOTE
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{KREYLING_NO_CONVERGENCE_NOTE}</p>
              <p className="mt-2 text-sm text-muted">{t.biodivKreylingNote}</p>
            </div>
          </section>

          <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl tracking-tight">{t.filterHeading}</h2>
                <p className="mt-1 text-sm text-muted">{t.filterHint}</p>
              </div>
              <StanceFilter value={filter} onChange={setFilter} />
            </div>
            {hiddenCount > 0 ? (
              <p className="mt-3 text-xs text-subtle">
                {hiddenCount === 1 ? t.hiddenOne : t.hiddenMany(hiddenCount)} {t.hiddenSuffix}
              </p>
            ) : null}
          </section>

          <KeyNumbers />
          <EvidencePanel
            visible={visible}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
          <DisclaimerBox />
          <Sources />
        </div>
      </div>

      <EvidenceDrawer
        entry={selected}
        open={selectedId != null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
      />
    </div>
  );
}
