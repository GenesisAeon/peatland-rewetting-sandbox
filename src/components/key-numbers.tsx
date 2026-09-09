import {
  doesMethaneIncreaseAfterRewetting,
  doesMethaneIncreaseNegateClimateBenefit,
  doesRewettingFullyRestoreOriginalBiodiversity,
  is20TonnesPerHectareFigureConfirmed,
  isRewettingANetCo2Sink,
} from "@/lib/peat";
import { useLocale } from "@/lib/i18n/locale";
import { keyNumbersForLocale } from "@/lib/i18n/messages";

export function KeyNumbers() {
  const { t } = useLocale();
  const numbers = keyNumbersForLocale(t);

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.numbersHeading}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {numbers.map((n) => (
          <div key={n.id} className="rounded-lg bg-elevated p-3">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {n.label}
            </p>
            <p className="mt-1 font-mono text-lg tabular-nums text-fg">{n.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
        {t.honestyHeading}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
        <li>
          is_rewetting_a_net_co2_sink() ={" "}
          <span className="text-accent">{String(isRewettingANetCo2Sink())}</span>
        </li>
        <li>
          does_methane_increase_after_rewetting() ={" "}
          <span className="text-accent">{String(doesMethaneIncreaseAfterRewetting())}</span>
        </li>
        <li>
          does_methane_increase_negate_climate_benefit() ={" "}
          <span className="text-accent">
            {String(doesMethaneIncreaseNegateClimateBenefit())}
          </span>
        </li>
        <li>
          does_rewetting_fully_restore_original_biodiversity() ={" "}
          <span className="text-accent">
            {String(doesRewettingFullyRestoreOriginalBiodiversity())}
          </span>
        </li>
        <li>
          is_20_tonnes_per_hectare_figure_confirmed() ={" "}
          <span className="text-accent">
            {String(is20TonnesPerHectareFigureConfirmed())}
          </span>
        </li>
      </ul>
    </section>
  );
}
