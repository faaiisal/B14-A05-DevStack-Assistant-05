import type { Technology } from '../../types/technology'
import TechnologyCard from './TechnologyCard'

interface TechnologyGridProps {
  technologies: Technology[]
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      aria-label="Technology cards"
    >
      {technologies.map((tech) => (
        <TechnologyCard key={tech.id} tech={tech} />
      ))}
    </div>
  )
}
