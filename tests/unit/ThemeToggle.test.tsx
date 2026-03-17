import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../../src/presentation/components/ui/ThemeToggle'

describe('ThemeToggle', () => {
  it('renders with light theme and shows moon icon label', () => {
    render(<ThemeToggle theme="light" onToggle={vi.fn()} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('renders with dark theme and shows sun icon label', () => {
    render(<ThemeToggle theme="dark" onToggle={vi.fn()} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('aria-label', 'Switch to light mode')
  })

  it('calls onToggle when clicked', () => {
    const onToggle = vi.fn()
    render(<ThemeToggle theme="light" onToggle={onToggle} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledOnce()
  })
})
