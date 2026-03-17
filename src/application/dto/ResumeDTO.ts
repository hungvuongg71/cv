import type { Resume } from '@domain/entities/Resume'

// DTO: shape passed between application → presentation
export type ResumeDTO = Resume

export interface ResumeState {
  data: ResumeDTO | null
  loading: boolean
  error: string | null
}
