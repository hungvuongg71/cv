import type { IResumeRepository } from '@domain/repositories/IResumeRepository'
import type { Resume } from '@domain/entities/Resume'

// Use-case: single responsibility – fetch and return resume data
export class GetResumeUseCase {
  constructor(private readonly resumeRepository: IResumeRepository) {}

  async execute(): Promise<Resume> {
    return this.resumeRepository.getResume()
  }
}
