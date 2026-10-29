import type { EditorialEntry } from '../data/about'
import { ChromaticText } from './ChromaticText'

type EditorialEntriesProps = {
  entries: EditorialEntry[]
  contentClassName?: string
}

export function EditorialEntries({ entries, contentClassName = 'text-[13px]' }: EditorialEntriesProps) {
  return (
    <div className="border-t border-[#494949] [[data-theme=light]_&]:border-[#ababab]">
      {entries.map((entry) => (
        <article
          className="group grid grid-cols-[180px_260px_minmax(260px,1fr)] gap-x-10 border-b border-[#494949] py-8 transition-opacity duration-300 hover:opacity-80 [[data-theme=light]_&]:border-[#ababab] max-[900px]:grid-cols-[150px_1fr] max-[900px]:gap-y-4 max-[680px]:grid-cols-1 max-[680px]:py-7"
          key={`${entry.period}-${entry.title}`}
        >
          <p className="m-0 text-[clamp(20px,2.1vw,31px)] leading-none font-extralight tracking-[0.04em]">
            {entry.chromatic ? (
              <ChromaticText as="span">{entry.period}</ChromaticText>
            ) : (
              entry.period
            )}
          </p>

          <div>
            <h4 className="m-0 text-[13px] leading-[1.45] font-normal tracking-[0.08em]">
              {entry.title}
            </h4>
            <p className="mt-2 mb-0 text-[11px] font-light tracking-[0.08em] text-[#858585] [[data-theme=light]_&]:text-[#666666]">
              {entry.institution}
            </p>
          </div>

          {(entry.description || entry.highlights || entry.website) && (
            <div
              className={`max-w-[540px] ${contentClassName} leading-[1.7] font-light tracking-[0.045em] text-[#a9a9a9] [[data-theme=light]_&]:text-[#4d4d4d] max-[900px]:col-start-2 max-[680px]:col-start-1`}
            >
              {entry.description && <p className="m-0">{entry.description}</p>}
              {entry.highlights && (
                <ul className={`${entry.description ? 'mt-4' : 'mt-0'} mb-0 space-y-2 p-0`}>
                  {entry.highlights.map((highlight) => (
                    <li
                      className="relative list-none pl-4 before:absolute before:top-[0.78em] before:left-0 before:h-px before:w-1.5 before:bg-current before:opacity-60"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              {entry.website && (
                <a
                  className="mt-4 block w-fit text-[#d8d8d8] underline decoration-[#494949] underline-offset-4 transition-opacity duration-200 hover:opacity-60 [[data-theme=light]_&]:text-[#1b1b1b]"
                  href={entry.website.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.website.label}
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
