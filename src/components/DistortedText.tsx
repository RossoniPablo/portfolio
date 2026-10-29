import { Fragment, useRef } from 'react'
import type { CSSProperties, PointerEvent } from 'react'

type DistortedTextProps = {
  as?: 'h1' | 'h2'
  id?: string
  lines: string[]
  lineClassNames?: string[]
  className?: string
}

type EffectPosition = {
  x: number
  y: number
  force: number
}

const DISTORTION_RADIUS_X = '1.2em'
const DISTORTION_RADIUS_Y = '0.55em'
const BASE_FORCE = 9
const MAX_FORCE = 16
const RGB_OFFSET = 4
const YELLOW_OFFSET = 7
const FOLLOW_SPEED = 0.3

const slices = [
  { from: 0, to: 11, multiplier: 0.55 },
  { from: 12, to: 25, multiplier: -0.9 },
  { from: 27, to: 40, multiplier: 1.25 },
  { from: 42, to: 56, multiplier: -0.65 },
  { from: 58, to: 72, multiplier: 1 },
  { from: 74, to: 88, multiplier: -1.15 },
  { from: 90, to: 100, multiplier: 0.6 },
]

const copyClass =
  'pointer-events-none absolute inset-0 flex flex-col [&>span+span]:mt-7 max-[680px]:[&>span+span]:mt-[18px]'

export function DistortedText({
  as: Heading = 'h1',
  id,
  lines,
  lineClassNames = [],
  className = '',
}: DistortedTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null)
  const frameRef = useRef<number | null>(null)
  const lastPointerX = useRef<number | null>(null)
  const target = useRef<EffectPosition>({ x: 0, y: 0, force: BASE_FORCE })
  const current = useRef<EffectPosition>({ x: 0, y: 0, force: BASE_FORCE })

  const paintEffect = () => {
    const element = elementRef.current
    if (!element) {
      frameRef.current = null
      return
    }

    current.current.x += (target.current.x - current.current.x) * FOLLOW_SPEED
    current.current.y += (target.current.y - current.current.y) * FOLLOW_SPEED
    current.current.force += (target.current.force - current.current.force) * FOLLOW_SPEED

    element.style.setProperty('--pointer-x', `${current.current.x}px`)
    element.style.setProperty('--pointer-y', `${current.current.y}px`)
    slices.forEach((slice, index) => {
      element.style.setProperty(
        `--slice-${index}`,
        `${current.current.force * slice.multiplier}px`,
      )
    })

    const stillMoving =
      Math.abs(target.current.x - current.current.x) > 0.1 ||
      Math.abs(target.current.y - current.current.y) > 0.1 ||
      Math.abs(target.current.force - current.current.force) > 0.05

    frameRef.current = stillMoving ? requestAnimationFrame(paintEffect) : null
  }

  const updateTarget = (event: PointerEvent<HTMLHeadingElement>, enter = false) => {
    if (!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
      return
    }

    const element = elementRef.current
    if (!element) return

    const bounds = element.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const velocity = lastPointerX.current === null ? 0 : event.clientX - lastPointerX.current
    const centerDirection = x < bounds.width / 2 ? -1 : 1
    const direction = Math.abs(velocity) > 0.5 ? Math.sign(velocity) : centerDirection
    const force = direction * Math.min(MAX_FORCE, BASE_FORCE + Math.abs(velocity) * 0.65)

    target.current = { x, y, force }
    lastPointerX.current = event.clientX

    if (enter) {
      current.current = { x, y, force }
      element.style.setProperty('--pointer-x', `${x}px`)
      element.style.setProperty('--pointer-y', `${y}px`)
    }

    if (frameRef.current === null) frameRef.current = requestAnimationFrame(paintEffect)
  }

  const stopEffect = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = null
    lastPointerX.current = null
  }

  const initialStyles = {
    '--pointer-x': '0px',
    '--pointer-y': '0px',
    '--distortion-radius-x': DISTORTION_RADIUS_X,
    '--distortion-radius-y': DISTORTION_RADIUS_Y,
    ...Object.fromEntries(slices.map((slice, index) => [
      `--slice-${index}`,
      `${BASE_FORCE * slice.multiplier}px`,
    ])),
  } as CSSProperties

  const effectMask = {
    WebkitMaskImage:
      'radial-gradient(ellipse var(--distortion-radius-x) var(--distortion-radius-y) at var(--pointer-x) var(--pointer-y), #000 0%, rgba(0,0,0,0.94) 32%, rgba(0,0,0,0.48) 68%, transparent 100%)',
    maskImage:
      'radial-gradient(ellipse var(--distortion-radius-x) var(--distortion-radius-y) at var(--pointer-x) var(--pointer-y), #000 0%, rgba(0,0,0,0.94) 32%, rgba(0,0,0,0.48) 68%, transparent 100%)',
  } as CSSProperties

  const renderLines = () =>
    lines.map((line, index) => (
      <span className={lineClassNames[index]} key={`${index}-${line}`}>
        {line}
      </span>
    ))

  return (
    <Heading
      ref={elementRef}
      id={id}
      className={`group/name relative ${className}`.trim()}
      style={initialStyles}
      onPointerEnter={(event) => updateTarget(event, true)}
      onPointerMove={updateTarget}
      onPointerLeave={stopEffect}
    >
      {renderLines()}

      <span
        className="pointer-events-none absolute inset-0 !mt-0 overflow-hidden opacity-0 transition-opacity duration-300 ease-out [@media(hover:hover)]:group-hover/name:opacity-100 motion-reduce:!opacity-0"
        style={effectMask}
        aria-hidden="true"
      >
        {slices.map((slice, index) => {
          const sliceStyle = {
            clipPath: `inset(${slice.from}% 0 ${100 - slice.to}% 0)`,
            transform: `translateX(var(--slice-${index}))`,
          }

          return (
            <Fragment key={`${slice.from}-${slice.to}`}>
              <span
                className={`${copyClass} text-[#ff1744]`}
                style={{
                  ...sliceStyle,
                  transform: `translateX(calc(var(--slice-${index}) - ${RGB_OFFSET}px))`,
                }}
              >
                {renderLines()}
              </span>
              <span
                className={`${copyClass} text-[#00e5ff]`}
                style={{
                  ...sliceStyle,
                  transform: `translateX(calc(var(--slice-${index}) + ${RGB_OFFSET}px))`,
                }}
              >
                {renderLines()}
              </span>
              {index === 1 || index === 4 ? (
                <span
                  className={`${copyClass} text-[#ffd400]`}
                  style={{
                    ...sliceStyle,
                    transform: `translateX(calc(var(--slice-${index}) + ${YELLOW_OFFSET}px))`,
                  }}
                >
                  {renderLines()}
                </span>
              ) : null}
              <span
                className={`${copyClass} bg-[#111111] text-[#d8d8d8] [[data-theme=light]_&]:bg-[#eeeeeb] [[data-theme=light]_&]:text-[#1b1b1b]`}
                style={sliceStyle}
              >
                {renderLines()}
              </span>
            </Fragment>
          )
        })}
      </span>
    </Heading>
  )
}
