export class ResumeNotFoundError extends Error {
  constructor() {
    super('Resume data could not be loaded.')
    this.name = 'ResumeNotFoundError'
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NetworkError'
  }
}
