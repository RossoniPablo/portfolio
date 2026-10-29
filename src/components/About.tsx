import { portfolioContent } from '../content'

type AboutProps = {
  titleId?: string
  text?: string
  showTitle?: boolean
  showDivider?: boolean
  ariaLabel?: string
}

export function About({
  titleId = 'about-title',
  text = portfolioContent.about,
  showTitle = true,
  showDivider = true,
  ariaLabel = 'Resumo profissional',
}: AboutProps) {
  return (
    <section
      className="about-summary col-start-3 row-start-2 self-start pt-0.5 max-[1050px]:col-start-2 max-[1050px]:row-start-2 max-[1050px]:w-full max-[1050px]:max-w-[560px] max-[680px]:mt-[88px] max-[680px]:w-[calc(100vw-44px)] max-[680px]:min-w-0 max-[680px]:max-w-[calc(100vw-44px)]"
      aria-labelledby={showTitle ? titleId : undefined}
      aria-label={showTitle ? undefined : ariaLabel}
    >
      {showTitle && showDivider && (
        <h2 id={titleId} className="m-0 text-[17px] font-light tracking-[0.02em] uppercase">
          Sobre
        </h2>
      )}
      {showTitle && (
        <div
          className="mt-2 h-px w-full bg-[#494949] [[data-theme=light]_&]:bg-[#ababab]"
          aria-hidden="true"
        />
      )}
      <p
        className={`${showTitle ? 'mt-9 max-[680px]:mt-[26px]' : 'mt-0'} mb-0 max-w-[630px] whitespace-pre-line text-[16px] leading-[1.52] font-light tracking-[0.065em] max-[680px]:w-full max-[680px]:max-w-full max-[680px]:break-words`}
      >
        {text}
      </p>
      {!showTitle && showDivider && (
        <div
          className="mt-9 h-px w-full bg-[#494949] [[data-theme=light]_&]:bg-[#ababab] max-[680px]:mt-[26px]"
          aria-hidden="true"
        />
      )}
    </section>
  )
}
