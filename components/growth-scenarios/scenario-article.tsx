import { ScenarioCtaBox } from "@/components/growth-scenarios/scenario-cta"
import { ScenarioFaqSection } from "@/components/growth-scenarios/scenario-faq"
import { ScenarioPattern } from "@/components/growth-scenarios/scenario-pattern"
import { ScenarioQuickAnswer } from "@/components/growth-scenarios/scenario-quick-answer"
import { ScenarioResultsTable } from "@/components/growth-scenarios/scenario-results-table"
import { ScenarioServices } from "@/components/growth-scenarios/scenario-services"
import type { GrowthScenario } from "@/types/growth-scenario"

type ScenarioArticleProps = {
  scenario: GrowthScenario
}

export function ScenarioArticle({ scenario }: ScenarioArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-[13px] tracking-soft text-muted-foreground uppercase">
        {scenario.label} · {scenario.industry}
      </p>
      <h1 className="mt-4 font-display text-[34px] leading-display font-medium tracking-display md:text-5xl">
        {scenario.h1}
      </h1>
      <ScenarioQuickAnswer
        text={scenario.quickAnswer}
        disclaimer={scenario.disclaimer}
      />
      <ScenarioPattern pattern={scenario.businessPattern} />
      <section id="the-challenge" className="scroll-mt-28 pt-10">
        <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
          The Challenge
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">
          {scenario.challenge}
        </p>
      </section>
      <section id="objectives" className="scroll-mt-28 pt-10">
        <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
          Objectives
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
          {scenario.objectives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
      <section id="what-we-did" className="scroll-mt-28 pt-10">
        <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
          What We Did
        </h2>
        <ol className="mt-4 list-decimal space-y-4 pl-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
          {scenario.whatWeDid.map((move) => (
            <li key={move.title}>
              <span className="font-medium text-foreground">{move.title}. </span>
              {move.body}
            </li>
          ))}
        </ol>
      </section>
      <ScenarioResultsTable
        title={scenario.resultsTitle}
        results={scenario.results}
      />
      <section id="what-made-the-difference" className="scroll-mt-28 pt-10">
        <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
          What Made the Difference
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">
          {scenario.whatMadeTheDifference}
        </p>
      </section>
      <ScenarioFaqSection faqs={scenario.faqs} />
      <ScenarioServices services={scenario.servicesUsed} />
      <ScenarioCtaBox cta={scenario.cta} />
    </article>
  )
}
