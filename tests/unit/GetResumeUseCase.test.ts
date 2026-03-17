import { describe, it, expect, vi } from 'vitest'
import { GetResumeUseCase } from '../../src/application/use-cases/GetResumeUseCase'
import type { IResumeRepository } from '../../src/domain/repositories/IResumeRepository'
import type { Resume } from '../../src/domain/entities/Resume'

const mockResume: Resume = {
  name: 'Hung Vuong',
  nameVi: 'Vương Hùng',
  title: 'Software Engineer',
  summary: 'Test summary',
  contact: {
    city: 'HCMC',
    email: 'test@test.com',
    linkedin: 'linkedin/test',
    linkedinUrl: 'https://linkedin.com/in/test',
  },
  workExperiences: [],
  freelanceProjects: [],
  education: [],
  skillGroups: [],
  languages: [],
}

describe('GetResumeUseCase', () => {
  it('should return resume from repository', async () => {
    const mockRepo: IResumeRepository = {
      getResume: vi.fn().mockResolvedValue(mockResume),
    }

    const useCase = new GetResumeUseCase(mockRepo)
    const result = await useCase.execute()

    expect(result).toEqual(mockResume)
    expect(mockRepo.getResume).toHaveBeenCalledOnce()
  })

  it('should propagate repository errors', async () => {
    const mockRepo: IResumeRepository = {
      getResume: vi.fn().mockRejectedValue(new Error('Network error')),
    }

    const useCase = new GetResumeUseCase(mockRepo)

    await expect(useCase.execute()).rejects.toThrow('Network error')
  })
})
