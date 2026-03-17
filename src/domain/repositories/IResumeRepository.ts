import type { Resume } from '@domain/entities/Resume'

// Abstract interface – infrastructure implements this, domain owns it
export interface IResumeRepository {
  getResume(): Promise<Resume>
}
