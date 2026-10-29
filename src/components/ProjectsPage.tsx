import { About } from './About'
import { ChromaticText } from './ChromaticText'
import { DistortedText } from './DistortedText'
import { ProjectIndex } from './ProjectIndex'
import { portfolioContent } from '../content'

export function ProjectsPage() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-page-title"
      className="relative bg-[#111111] text-[#d8d8d8] [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:text-[#1b1b1b]"
    >
      <div className="relative grid min-h-[calc(100svh-136px)] grid-cols-[146px_minmax(440px,1fr)_minmax(340px,0.76fr)] grid-rows-[minmax(272px,0.8fr)_minmax(230px,0.72fr)_minmax(150px,0.48fr)] gap-x-[clamp(24px,3vw,68px)] overflow-hidden p-14 max-[1050px]:grid-cols-[110px_minmax(0,1fr)] max-[1050px]:grid-rows-[auto_auto_auto_90px] max-[1050px]:gap-x-8 max-[1050px]:gap-y-[72px] max-[1050px]:overflow-visible max-[680px]:flex max-[680px]:min-h-svh max-[680px]:flex-col max-[680px]:gap-0 max-[680px]:p-[22px]">
        <section
          className="col-start-2 row-start-1 self-start pt-[17px] max-[1050px]:col-start-2 max-[1050px]:row-start-1 max-[680px]:pt-[70px]"
          aria-labelledby="projects-page-title"
        >
          <DistortedText
            as="h2"
            id="projects-page-title"
            lines={['02', 'PROJETOS']}
            lineClassNames={['text-5xl']}
            className="m-0 flex w-max flex-col text-[clamp(96px,8.8vw,138px)] leading-[0.83] font-extralight tracking-[0.045em] whitespace-nowrap max-[680px]:text-[clamp(46px,13.5vw,76px)] max-[680px]:tracking-[0.005em] [&>span+span]:mt-7 max-[680px]:[&>span+span]:mt-[18px]"
          />
          <p className="mt-4 mb-0 text-[13px] font-light max-[680px]:mt-3.5 max-[680px]:text-[11px]">
            {portfolioContent.profession}
          </p>
        </section>

        <About
          titleId="projects-page-summary-title"
          text={portfolioContent.aboutProject}
          showTitle={false}
          ariaLabel="Resumo dos projetos"
        />

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

      <ProjectIndex />
    </section>
  )
}
