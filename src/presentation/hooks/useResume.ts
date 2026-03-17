import { useState, useEffect } from 'react'
import { GetResumeUseCase } from '@application/use-cases/GetResumeUseCase'
import { StaticResumeRepository } from '@infrastructure/repositories/StaticResumeRepository'
import type { ResumeState } from '@application/dto/ResumeDTO'

const repository = new StaticResumeRepository()
const getResumeUseCase = new GetResumeUseCase(repository)

export function useResume(): ResumeState {
  const [state, setState] = useState<ResumeState>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    getResumeUseCase
      .execute()
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err: Error) => setState({ data: null, loading: false, error: err.message }))
  }, [])

  return state
}
