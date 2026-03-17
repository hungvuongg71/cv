export type Theme = 'light' | 'dark'

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}
