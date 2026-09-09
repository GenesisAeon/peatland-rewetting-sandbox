import { useLocale } from "@/lib/i18n/locale";
import {
  GUENTHER_2020_CITATION,
  GUENTHER_2024_AUTHOR_CORRECTION_CITATION,
  KREYLING_2021_CITATION,
  NATIONALE_MOORSCHUTZSTRATEGIE_CITATION,
} from "@/lib/peat";
import type { EvidenceEntry } from "@/lib/peat";

const CITES: {
  id: EvidenceEntry["id"] | "guenther2024";
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string | null;
  url: string | null;
}[] = [
  {
    id: "guenther2020",
    authors: GUENTHER_2020_CITATION.authors,
    year: String(GUENTHER_2020_CITATION.year),
    title: GUENTHER_2020_CITATION.title,
    journal: `${GUENTHER_2020_CITATION.journal}, ${GUENTHER_2020_CITATION.volume}, ${GUENTHER_2020_CITATION.article_id}`,
    doi: GUENTHER_2020_CITATION.doi,
    url: null,
  },
  {
    id: "guenther2024",
    authors: GUENTHER_2024_AUTHOR_CORRECTION_CITATION.authors,
    year: String(GUENTHER_2024_AUTHOR_CORRECTION_CITATION.year),
    title: GUENTHER_2024_AUTHOR_CORRECTION_CITATION.title,
    journal: GUENTHER_2024_AUTHOR_CORRECTION_CITATION.journal,
    doi: GUENTHER_2024_AUTHOR_CORRECTION_CITATION.doi,
    url: null,
  },
  {
    id: "moorschutzstrategie",
    authors: "Bundesministerium fuer Umwelt (BMUV)",
    year: NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.adopted,
    title: NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.title,
    journal: NATIONALE_MOORSCHUTZSTRATEGIE_CITATION.source,
    doi: null,
    url: "https://www.bmuv.de/",
  },
  {
    id: "kreyling2021",
    authors: KREYLING_2021_CITATION.authors,
    year: String(KREYLING_2021_CITATION.year),
    title: KREYLING_2021_CITATION.title,
    journal: `${KREYLING_2021_CITATION.journal}, ${KREYLING_2021_CITATION.volume}, ${KREYLING_2021_CITATION.article_id}`,
    doi: KREYLING_2021_CITATION.doi,
    url: null,
  },
];

export function Sources() {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.sourcesHeading}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.sourcesLead}</p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.id}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{t.sourceNotes[c.id]}</p>
            {c.id === "guenther2024" ? (
              <p className="mt-1 text-xs leading-relaxed text-subtle">
                {GUENTHER_2024_AUTHOR_CORRECTION_CITATION.note}
              </p>
            ) : null}
            {c.doi ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={`https://doi.org/${c.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                doi:{c.doi}
              </a>
            ) : c.url ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                {c.url}
              </a>
            ) : (
              <p className="mt-1 font-mono text-xs text-subtle">
                no DOI in source package - none invented
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">{t.sourcesFoot}</p>
    </section>
  );
}
