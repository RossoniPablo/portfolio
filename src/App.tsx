import { About } from './components/About'
import { AboutPage } from './components/AboutPage'
import { ChromaticText } from './components/ChromaticText'
import { CursorFollower } from './components/CursorFollower'
import { Hero } from './components/Hero'
import { ProjectsPage } from './components/ProjectsPage'
import { Sidebar } from './components/Sidebar'
import { ThemeToggle } from './components/ThemeToggle'
import { portfolioContent } from './content'
import { useSectionNavigation } from './hooks/useSectionNavigation'

export function App() {
  const { activePage, navigateTo } = useSectionNavigation()

  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[#111111] font-['Montserrat','Helvetica_Neue',Arial,sans-serif] text-[#d8d8d8] [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:text-[#1b1b1b]">
      <CursorFollower />

      <div className="pointer-events-none fixed top-14 left-14 z-[60] max-[680px]:top-[22px] max-[680px]:right-[22px] max-[680px]:left-[22px]">
        <div className="pointer-events-auto">
          <Sidebar activePage={activePage} onNavigate={navigateTo} />
        </div>
      </div>

      <ThemeToggle />

      <footer className="fixed bottom-14 left-14 z-[60] text-[10px] font-light whitespace-nowrap max-[680px]:bottom-[22px] max-[680px]:left-[22px]">
        © {portfolioContent.year} Rossoni Pablo
      </footer>

      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative grid min-h-svh grid-cols-[146px_minmax(440px,1fr)_minmax(340px,0.76fr)] grid-rows-[minmax(272px,0.8fr)_minmax(230px,0.72fr)_minmax(150px,0.48fr)] gap-x-[clamp(24px,3vw,68px)] overflow-hidden bg-[#111111] p-14 text-[#d8d8d8] antialiased [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:text-[#1b1b1b] max-[1050px]:grid-cols-[110px_minmax(0,1fr)] max-[1050px]:grid-rows-[auto_auto_auto_90px] max-[1050px]:gap-x-8 max-[1050px]:gap-y-[72px] max-[1050px]:overflow-visible max-[680px]:flex max-[680px]:min-h-svh max-[680px]:flex-col max-[680px]:gap-0 max-[680px]:p-[22px]"
      >
        <Hero />
        <About showTitle={false} showDivider={false} />

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
      </section>

      <AboutPage />
      <ProjectsPage />
    </main>
  )
}
