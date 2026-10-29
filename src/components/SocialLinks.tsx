import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioContent, socialLinks } from '../content'

const links = [
  { label: 'LinkedIn', href: socialLinks.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: socialLinks.github, Icon: Github },
  { label: 'Email', href: `mailto:${portfolioContent.email}`, Icon: Mail },
]

export function SocialLinks() {
  return (
    <div
      className="mt-[38px] flex flex-col gap-[22px] max-[680px]:mt-[30px] max-[680px]:flex-row max-[680px]:gap-[28px]"
      aria-label="Redes sociais"
    >
      {links.map(({ label, href, Icon }) => (
        <a
          href={href}
          key={label}
          aria-label={label}
          title={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="grid size-[19px] place-items-center opacity-90 transition-[opacity,transform] duration-180 hover:translate-x-0.5 hover:opacity-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[5px] [&_svg]:size-[18px]"
        >
          <Icon aria-hidden="true" strokeWidth={1.65} />
        </a>
      ))}
    </div>
  )
}
