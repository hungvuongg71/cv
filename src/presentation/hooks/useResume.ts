import { useState } from 'react'
import { resumeData } from '@infrastructure/repositories/staticResumeData'
import type { ResumeState } from '@application/dto/ResumeDTO'

export function useResume(): ResumeState {
  const [state] = useState<ResumeState>({
    data: resumeData,
    loading: false,
    error: null,
  })

  return state
}
