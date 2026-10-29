import { portfolioContent } from '../content'
import { DistortedText } from './DistortedText'

export function Hero() {
  return (
    <section
      className="col-start-2 row-start-1 self-start pt-[17px] max-[1050px]:col-start-2 max-[1050px]:row-start-1 max-[680px]:pt-[110px]"
      aria-labelledby="hero-title"
    >
      <DistortedText
        id="hero-title"
        lines={[portfolioContent.firstName, portfolioContent.lastName]}
        className="m-0 flex max-w-full flex-col text-[clamp(96px,8.8vw,138px)] leading-[0.83] font-extralight tracking-[0.045em] whitespace-nowrap max-[680px]:text-[clamp(60px,17vw,86px)] max-[680px]:tracking-[0.005em] [&>span+span]:mt-7 max-[680px]:[&>span+span]:mt-[18px]"
      />
      <p className="mt-4 mb-0 text-[13px] font-light max-[680px]:mt-3.5 max-[680px]:text-[11px]">
        {portfolioContent.profession}
      </p>
    </section>
  )
}
