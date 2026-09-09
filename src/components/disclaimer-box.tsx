import {
  GUENTHER_CO2_ONLY_DIFFERENCE_NOTE,
  TWENTY_TONNES_EXCLUSION_NOTE,
  is20TonnesPerHectareFigureConfirmed,
  isRewettingANetCo2Sink,
} from "@/lib/peat";
import { useLocale } from "@/lib/i18n/locale";

export function DisclaimerBox() {
  const sink = isRewettingANetCo2Sink();
  const twenty = is20TonnesPerHectareFigureConfirmed();
  const { t } = useLocale();

  const links = [
    {
      href: "https://klimakatalog.vercel.app/p/peatland-rewetting-utac",
      label: t.linkKlimakatalog,
    },
    {
      href: "https://apps-hub-alpha.vercel.app/",
      label: t.linkAppsHub,
    },
    {
      href: "https://github.com/GenesisAeon/peatland-rewetting-utac",
      label: t.linkGithub,
    },
    {
      href: "https://github.com/GenesisAeon/peatland-rewetting-sandbox",
      label: t.linkSandboxGithub,
    },
  ];

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.disclaimerHeading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg">{t.disclaimerLead}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {t.disclaimerBody}{" "}
        <span className="font-mono text-accent">
          is_rewetting_a_net_co2_sink() = {sink ? "true" : "false"}
        </span>
        ;{" "}
        <span className="font-mono text-accent">
          is_20_tonnes_per_hectare_figure_confirmed() = {twenty ? "true" : "false"}
        </span>
        .
      </p>
      <div className="mt-4 space-y-3 rounded-lg border border-ring/60 bg-elevated/40 p-4 text-sm leading-relaxed text-muted">
        <p>
          <span className="font-mono text-xs text-accent">TWENTY_TONNES_EXCLUSION_NOTE</span>
          <br />
          {TWENTY_TONNES_EXCLUSION_NOTE}
        </p>
        <p>
          <span className="font-mono text-xs text-accent">GUENTHER_CO2_ONLY_DIFFERENCE_NOTE</span>
          <br />
          {GUENTHER_CO2_ONLY_DIFFERENCE_NOTE}
        </p>
        <p className="text-xs text-subtle">{t.twentyTonnesNote}</p>
        <p className="text-xs text-subtle">{t.guentherCo2OnlyNote}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
