import { SocialLinks } from './SocialLinks'

const navigation = ['Início', 'Sobre', 'Projetos']

export type Page = 'home' | 'about' | 'projects'

type SidebarProps = {
  activePage?: Page
  onNavigate?: (page: Page) => void
}

export function Sidebar({ activePage = 'home', onNavigate }: SidebarProps) {
  return (
    <aside className="col-start-1 row-span-2 flex flex-col items-start max-[1050px]:row-span-3 max-[680px]:block">
      <nav
        className="flex w-full flex-col gap-[17px] max-[680px]:w-[calc(100%-76px)] max-[680px]:flex-row max-[680px]:gap-[22px]"
        aria-label="Navegação principal"
      >
        {navigation.map((item, index) => {
          const isActive =
            (index === 0 && activePage === 'home') ||
            (index === 1 && activePage === 'about') ||
            (index === 2 && activePage === 'projects')

          return (
            <a
              href={index === 0 ? '#home' : `#${item.toLowerCase()}`}
              onClick={(event) => {
                event.preventDefault()
                onNavigate?.(index === 0 ? 'home' : index === 1 ? 'about' : 'projects')
              }}
              className={`relative w-fit text-xs leading-none font-normal tracking-[0.12em] uppercase no-underline transition-colors duration-180 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[5px] max-[680px]:text-[10px] ${isActive
                ? "text-[#d8d8d8] after:absolute after:top-[calc(100%+8px)] after:left-0 after:h-px after:w-[82px] after:bg-current after:content-[''] max-[680px]:after:w-full [[data-theme=light]_&]:text-[#1b1b1b]"
                : 'text-[#858585] hover:text-[#d8d8d8] [[data-theme=light]_&]:text-[#666666] [[data-theme=light]_&]:hover:text-[#1b1b1b]'
                }`}
              aria-current={isActive ? 'page' : undefined}
              key={item}
            >
              {item}
            </a>
          )
        })}
      </nav>
      <SocialLinks />
    </aside>
  )
}
