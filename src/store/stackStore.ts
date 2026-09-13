import { create } from 'zustand'
import type { Technology } from '../types/technology'

interface StackState {
  selectedTechnologies: Technology[]
  addTechnology: (tech: Technology) => void
  removeTechnology: (id: string) => void
  removeAll: () => void
  isSelected: (id: string) => boolean
}

export const useStackStore = create<StackState>((set, get) => ({
  selectedTechnologies: [],

  addTechnology: (tech) => {
    const { isSelected } = get()
    if (isSelected(tech.id)) return
    set((state) => ({
      selectedTechnologies: [...state.selectedTechnologies, tech],
    }))
  },

  removeTechnology: (id) => {
    set((state) => ({
      selectedTechnologies: state.selectedTechnologies.filter(
        (t) => t.id !== id
      ),
    }))
  },

  removeAll: () => {
    set({ selectedTechnologies: [] })
  },

  isSelected: (id) => {
    return get().selectedTechnologies.some((t) => t.id === id)
  },
}))
