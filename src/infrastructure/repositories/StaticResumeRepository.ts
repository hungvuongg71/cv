import type { IResumeRepository } from '@domain/repositories/IResumeRepository'
import type { Resume } from '@domain/entities/Resume'
import { resumeData } from './staticResumeData'

// Concrete implementation – returns static data (SSG-friendly)
// To switch to API: replace the body of getResume() with an axios call
export class StaticResumeRepository implements IResumeRepository {
  async getResume(): Promise<Resume> {
    // Simulate async (swap with: return apiClient.get<Resume>('/resume'))
    return Promise.resolve(resumeData)
  }
}
