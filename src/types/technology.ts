export type TechnologyCategory =
  | 'Frontend'
  | 'Fullstack'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'

export type DifficultyLevel = 'Beginner-Friendly' | 'Intermediate' | 'Advanced'

export type BadgeType =
  | 'Popular'
  | 'Trending'
  | 'Fast'
  | 'Top Pick'
  | 'Top SQL'
  | 'Caching'
  | 'Addon New'
  | 'Essential'
  | 'Enterprise'
  | 'Containers'

export interface Technology {
  id: string
  name: string
  category: TechnologyCategory
  description: string
  icon: string
  rating: number
  difficulty: DifficultyLevel
  badge: BadgeType
}
