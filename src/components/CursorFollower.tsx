import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

const CURSOR_SIZE = 10
const FOLLOW_SPEED = 0.14
const CURSOR_OPACITY = 0.78
const DARK_THEME_COLOR = '#d8d8d8'
const LIGHT_THEME_COLOR = '#1b1b1b'

type Point = {
  x: number
  y: number
}

export function CursorFollower() {
  const followerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const canUseFollower = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )

    if (!canUseFollower.matches) return

    const target: Point = { x: 0, y: 0 }
    const current: Point = { x: 0, y: 0 }
    let hasPosition = false
    let animationFrame: number | null = null

    const render = () => {
      const follower = followerRef.current
      if (!follower) {
        animationFrame = null
        return
      }

      current.x += (target.x - current.x) * FOLLOW_SPEED
      current.y += (target.y - current.y) * FOLLOW_SPEED
      follower.style.transform = `translate3d(${current.x - CURSOR_SIZE / 2}px, ${current.y - CURSOR_SIZE / 2}px, 0)`

      const distance = Math.hypot(target.x - current.x, target.y - current.y)
      animationFrame = distance > 0.05 ? requestAnimationFrame(render) : null
    }

    const showAndMove = (event: PointerEvent) => {
      const follower = followerRef.current
      if (!follower || event.pointerType === 'touch') return

      target.x = event.clientX
      target.y = event.clientY

      if (!hasPosition) {
        current.x = event.clientX
        current.y = event.clientY
        hasPosition = true
        follower.style.transform = `translate3d(${current.x - CURSOR_SIZE / 2}px, ${current.y - CURSOR_SIZE / 2}px, 0)`
      }

      follower.style.opacity = String(CURSOR_OPACITY)
      if (animationFrame === null) animationFrame = requestAnimationFrame(render)
    }

    const hide = () => {
      const follower = followerRef.current
      if (follower) follower.style.opacity = '0'
      hasPosition = false
    }

    window.addEventListener('pointermove', showAndMove, { passive: true })
    window.addEventListener('blur', hide)
    document.documentElement.addEventListener('pointerleave', hide)

    return () => {
      window.removeEventListener('pointermove', showAndMove)
      window.removeEventListener('blur', hide)
      document.documentElement.removeEventListener('pointerleave', hide)
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
    }
  }, [])

  const followerStyle = {
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    '--cursor-dark': DARK_THEME_COLOR,
    '--cursor-light': LIGHT_THEME_COLOR,
  } as CSSProperties

  return (
    <span
      ref={followerRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-full bg-[var(--cursor-dark)] opacity-0 transition-opacity duration-200 will-change-transform [@media(hover:hover)_and_(pointer:fine)]:block [[data-theme=light]_&]:bg-[var(--cursor-light)] motion-reduce:!hidden"
      style={followerStyle}
      aria-hidden="true"
    />
  )
}
