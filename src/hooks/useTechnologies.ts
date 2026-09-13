import { useQuery } from '@tanstack/react-query'
import type { Technology } from '../types/technology'

/**
 * Asynchronously loads the local technologies JSON.
 * Using a dynamic import so Vite bundles the JSON and TanStack Query
 * manages the loading/error states — no raw useEffect fetch.
 */
async function fetchTechnologies(): Promise<Technology[]> {
  const module = await import('../data/technologies.json')
  return module.default as Technology[]
}

export const TECHNOLOGIES_QUERY_KEY = ['technologies'] as const

export function useTechnologies() {
  return useQuery<Technology[], Error>({
    queryKey: TECHNOLOGIES_QUERY_KEY,
    queryFn: fetchTechnologies,
    staleTime: Infinity, // Local JSON never goes stale
  })
}
