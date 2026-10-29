import { useCallback, useEffect, useRef, useState } from 'react'

import type { Page } from '../components/Sidebar'

const sectionIds: Record<Page, string> = {
  home: 'home',
  about: 'sobre',
  projects: 'projetos',
}

export function useSectionNavigation() {
  const [activePage, setActivePage] = useState<Page>('home')
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    const updateActivePage = () => {
      const activationLine = window.innerHeight * 0.36
      const aboutTop = document.getElementById(sectionIds.about)?.getBoundingClientRect().top
      const projectsTop = document.getElementById(sectionIds.projects)?.getBoundingClientRect().top

      if (projectsTop !== undefined && projectsTop <= activationLine) {
        setActivePage('projects')
      } else if (aboutTop !== undefined && aboutTop <= activationLine) {
        setActivePage('about')
      } else {
        setActivePage('home')
      }

      animationFrame.current = null
    }

    const requestUpdate = () => {
      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(updateActivePage)
      }
    }

    updateActivePage()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (animationFrame.current !== null) cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  const navigateTo = useCallback((page: Page) => {
    const section = document.getElementById(sectionIds[page])
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return { activePage, navigateTo }
}
