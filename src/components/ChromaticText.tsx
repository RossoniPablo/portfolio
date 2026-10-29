import type { CSSProperties, ElementType, HTMLAttributes } from 'react'

type ChromaticTextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children: string
}

export function ChromaticText({
  as: Component = 'span',
  children,
  className = '',
  style,
  ...props
}: ChromaticTextProps) {
  const chromaticStyle = {
    ...style,
    '--chromatic-text': `'${children.replaceAll("'", "\\'")}'`,
  } as CSSProperties

  return (
    <Component
      className={`relative isolate before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:translate-x-[-2px] before:overflow-hidden before:text-transparent before:content-[attr(data-text)] before:[text-shadow:2px_0_#ff1744,4px_0_#ffd400] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:translate-x-[2px] after:overflow-hidden after:text-transparent after:content-[attr(data-text)] after:[text-shadow:-2px_0_#00e5ff] ${className}`.trim()}
      data-text={children}
      style={chromaticStyle}
      {...props}
    >
      {children}
    </Component>
  )
}
