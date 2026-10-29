import { education, experiences, technologyGroups, volunteerProjects } from '../data/about'
import { portfolioContent } from '../content'
import { About } from './About'
import { ChromaticText } from './ChromaticText'
import { DistortedText } from './DistortedText'
import { EditorialEntries } from './EditorialEntries'

const sectionTitleClass =
  'm-0 mb-8 text-[15px] font-light tracking-[0.08em] uppercase max-[680px]:mb-6'

export function AboutPage() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-page-title"
      className="relative bg-[#111111] text-[#d8d8d8] [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:text-[#1b1b1b]"
    >
      <div className="relative grid min-h-[calc(100svh-136px)] grid-cols-[146px_minmax(440px,1fr)_minmax(340px,0.76fr)] grid-rows-[minmax(272px,0.8fr)_minmax(230px,0.72fr)_minmax(150px,0.48fr)] gap-x-[clamp(24px,3vw,68px)] overflow-hidden p-14 max-[1050px]:grid-cols-[110px_minmax(0,1fr)] max-[1050px]:grid-rows-[auto_auto_auto_90px] max-[1050px]:gap-x-8 max-[1050px]:gap-y-[72px] max-[1050px]:overflow-visible max-[680px]:flex max-[680px]:min-h-svh max-[680px]:flex-col max-[680px]:gap-0 max-[680px]:p-[22px]">
        <section
          className="col-start-2 row-start-1 self-start pt-[17px] max-[1050px]:col-start-2 max-[1050px]:row-start-1 max-[680px]:pt-[70px]"
          aria-labelledby="about-page-title"
        >
          <DistortedText
            as="h2"
            id="about-page-title"
            lines={['01', 'SOBRE']}
            lineClassNames={['text-5xl']}
            className="m-0 flex flex-col text-[clamp(96px,8.8vw,138px)] leading-[0.83] font-extralight tracking-[0.045em] whitespace-nowrap max-[680px]:text-[clamp(52px,15vw,84px)] max-[680px]:tracking-[0.015em] [&>span+span]:mt-7 max-[680px]:[&>span+span]:mt-[18px]"
          />
          <p className="mt-4 mb-0 text-[13px] font-light max-[680px]:mt-3.5 max-[680px]:text-[11px]">
            {portfolioContent.profession}
          </p>
        </section>

        <About titleId="about-page-summary-title" showTitle={false} showDivider={false} />

        <section
          className="col-start-2 row-start-2 self-end pb-8 text-[13px] leading-[1.35] font-light max-[1050px]:col-start-2 max-[1050px]:row-start-3 max-[1050px]:self-start max-[1050px]:p-0 max-[680px]:mt-[72px]"
          aria-label="Contato"
        >
          <p className="m-0">Entre em contato</p>
          <a
            className="block w-fit no-underline hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[5px]"
            href={`mailto:${portfolioContent.email}`}
          >
            {portfolioContent.email}
          </a>
        </section>

        <ChromaticText
          as="span"
          className="col-start-3 row-start-3 -mr-[0.05em] -mb-[0.12em] self-end justify-self-end text-[clamp(58px,6vw,94px)] leading-none font-extralight tracking-[0.08em] opacity-[0.08] select-none max-[1050px]:col-start-2 max-[1050px]:row-start-4 max-[680px]:mt-16 max-[680px]:self-end"
          aria-hidden="true"
        >
          {portfolioContent.year}
        </ChromaticText>
      </div>

      <div className="mx-auto max-w-[1600px] pr-14 pb-44 pl-[250px] max-[1050px]:pl-[210px] max-[680px]:px-[22px] max-[680px]:pt-28 max-[680px]:pb-32">
        <section aria-labelledby="experience-title">
          <h3 id="experience-title" className={sectionTitleClass}>
            Experiência
          </h3>
          <EditorialEntries entries={experiences} contentClassName="text-[16px]" />
        </section>

        <section className="pt-40 max-[680px]:pt-28" aria-labelledby="volunteer-title">
          <h3 id="volunteer-title" className={sectionTitleClass}>
            Projeto voluntário
          </h3>
          <EditorialEntries entries={volunteerProjects} contentClassName="text-[16px]" />
        </section>

        <section className="pt-40 max-[680px]:pt-28" aria-labelledby="education-title">
          <h3 id="education-title" className={sectionTitleClass}>
            Formação
          </h3>
          <EditorialEntries entries={education} />
        </section>

        <section className="pt-40 max-[680px]:pt-28" aria-labelledby="technologies-title">
          <h3 id="technologies-title" className={sectionTitleClass}>
            Tecnologias
          </h3>
          <div className="grid grid-cols-4 gap-x-12 border-t border-[#494949] pt-9 [[data-theme=light]_&]:border-[#ababab] max-[900px]:grid-cols-2 max-[900px]:gap-y-16 max-[520px]:grid-cols-1">
            {technologyGroups.map((group) => (
              <div key={group.category}>
                <h4 className="m-0 text-[13px] font-normal tracking-[0.14em] text-[#858585] [[data-theme=light]_&]:text-[#666666]">
                  {group.category}
                </h4>
                <ul className="mt-6 space-y-3 p-0">
                  {group.items.map((technology) => (
                    <li
                      className="w-fit list-none text-[clamp(13px,1.8vw,15px)] font-extralight tracking-[0.02em] transition-[opacity,transform] duration-200 hover:translate-x-0.5 hover:opacity-60"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
