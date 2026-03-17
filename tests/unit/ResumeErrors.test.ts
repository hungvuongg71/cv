import { describe, it, expect } from 'vitest'
import { ResumeNotFoundError, NetworkError } from '../../src/domain/errors/ResumeErrors'

describe('Domain Errors', () => {
  it('ResumeNotFoundError has correct name and message', () => {
    const err = new ResumeNotFoundError()
    expect(err.name).toBe('ResumeNotFoundError')
    expect(err.message).toBe('Resume data could not be loaded.')
    expect(err).toBeInstanceOf(Error)
  })

  it('NetworkError stores the provided message', () => {
    const err = new NetworkError('Timeout after 10s')
    expect(err.name).toBe('NetworkError')
    expect(err.message).toBe('Timeout after 10s')
    expect(err).toBeInstanceOf(Error)
  })
})
