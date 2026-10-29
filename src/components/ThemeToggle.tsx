import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])

  return (
    <button
      className="pointer-events-auto fixed top-14 right-14 z-[60] h-7 w-[61px] cursor-pointer rounded-full border border-current bg-transparent p-0.5 opacity-[0.86] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[5px] max-[680px]:top-[22px] max-[680px]:right-[22px] max-[680px]:h-[23px] max-[680px]:w-12"
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={`Ativar tema ${isLight ? 'escuro' : 'claro'}`}
      onClick={() => setIsLight((current) => !current)}
    >
      <span
        className={`block size-[22px] rounded-full bg-current transition-transform duration-240 max-[680px]:size-[17px] ${
          isLight ? 'translate-x-0' : 'translate-x-[33px] max-[680px]:translate-x-[25px]'
        }`}
      />
    </button>
  )
}
