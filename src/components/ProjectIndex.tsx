import { projects } from '../data/projects'

export function ProjectIndex() {
  return (
    <div className="mx-auto max-w-[1600px] pr-14 pb-44 pl-[250px] max-[1050px]:pl-[210px] max-[680px]:px-[22px] max-[680px]:pt-28 max-[680px]:pb-32">
      <header className="flex items-end justify-between gap-8 pb-8">
        <h3 className="m-0 text-[15px] font-light tracking-[0.08em] uppercase">
          Projetos selecionados
        </h3>
        <p className="m-0 text-[10px] font-light tracking-[0.14em] text-[#858585] uppercase [[data-theme=light]_&]:text-[#666666]">
          {projects.length.toString().padStart(2, '0')} {projects.length === 1 ? 'projeto' : 'projetos'}
        </p>
      </header>

      <div className="isolate border-t border-[#494949] [[data-theme=light]_&]:border-[#ababab]">
        {projects.map((project, index) => (
          <div
            className="relative min-[1024px]:min-h-[48svh]"
            key={project.id}
          >
            <article
              className="group grid grid-cols-[72px_minmax(0,1fr)_130px] gap-x-10 border-b border-[#494949] bg-[#111111] py-[clamp(48px,6vw,86px)] transition-colors duration-300 hover:border-[#858585] focus-within:border-[#858585] [[data-theme=light]_&]:border-[#ababab] [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:hover:border-[#666666] [[data-theme=light]_&]:focus-within:border-[#666666] min-[1024px]:sticky min-[1024px]:top-[120px] max-[780px]:grid-cols-[48px_minmax(0,1fr)] max-[780px]:gap-x-5 max-[680px]:grid-cols-1"
              style={{ zIndex: index + 1 }}
            >
              <p className="m-0 pt-2 text-[11px] font-light tracking-[0.14em] text-[#858585] transition-colors duration-300 group-hover:text-[#d8d8d8] group-focus-within:text-[#d8d8d8] [[data-theme=light]_&]:text-[#666666] [[data-theme=light]_&]:group-hover:text-[#1b1b1b] [[data-theme=light]_&]:group-focus-within:text-[#1b1b1b] max-[680px]:flex max-[680px]:items-center max-[680px]:justify-between max-[680px]:pt-0">
                <span>{project.number}</span>
                <span className="hidden max-[680px]:inline">{project.year}</span>
              </p>

              <div className="max-[680px]:mt-7">
                {project.githubUrl ? (
                  <a
                    className="group/link block w-fit focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[8px]"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${project.name} no GitHub em uma nova aba`}
                  >
                    <h4 className="m-0 text-[clamp(40px,5vw,78px)] leading-[0.95] font-extralight tracking-[0.025em] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-white group-focus-within:translate-x-1 group-focus-within:text-white [[data-theme=light]_&]:group-hover:text-black [[data-theme=light]_&]:group-focus-within:text-black max-[680px]:text-[clamp(36px,12vw,58px)]">
                      {project.name}
                    </h4>
                  </a>
                ) : (
                  <h4 className="m-0 text-[clamp(40px,5vw,78px)] leading-[0.95] font-extralight tracking-[0.025em] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-white group-focus-within:translate-x-1 group-focus-within:text-white [[data-theme=light]_&]:group-hover:text-black [[data-theme=light]_&]:group-focus-within:text-black max-[680px]:text-[clamp(36px,12vw,58px)]">
                    {project.name}
                  </h4>
                )}

                {project.status && (
                  <p className="mt-5 mb-0 w-fit border border-[#858585] px-3 py-1 text-[10px] font-light tracking-[0.14em] text-[#a9a9a9] uppercase [[data-theme=light]_&]:text-[#4d4d4d]">
                    {project.status}
                  </p>
                )}

                <p className="mt-7 mb-0 max-w-[650px] text-[16px] leading-[1.65] font-light tracking-[0.045em] text-[#a9a9a9] [[data-theme=light]_&]:text-[#4d4d4d]">
                  {project.description}
                </p>

                <p className="mt-6 mb-0 text-[10px] leading-[1.7] font-bold tracking-[0.12em] text-[#858585] uppercase [[data-theme=light]_&]:text-[#666666]">
                  {project.technologies.join(' / ')}
                </p>
              </div>

              <div className="flex flex-col items-end justify-between max-[780px]:col-start-2 max-[780px]:mt-8 max-[780px]:flex-row max-[780px]:items-center max-[680px]:col-start-1">
                <p className="m-0 text-[11px] font-light tracking-[0.12em] max-[680px]:hidden">
                  {project.year}
                </p>
                {project.githubUrl && (
                  <a
                    className="flex items-center gap-2 text-[10px] font-light tracking-[0.12em] uppercase transition-opacity duration-300 hover:opacity-60 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[6px]"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub do projeto ${project.name}, abre em uma nova aba`}
                  >
                    GitHub
                    <span
                      className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-within:translate-x-1 group-focus-within:-translate-y-1"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
