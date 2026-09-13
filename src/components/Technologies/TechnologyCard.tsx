import { memo, useCallback } from 'react'
import { toast } from 'react-toastify'
import type { Technology, BadgeType } from '../../types/technology'
import { useStackStore } from '../../store/stackStore'

interface TechnologyCardProps {
  tech: Technology
}

// Badge colour map — no inline styles, Tailwind classes only
const BADGE_CLASSES: Record<BadgeType, string> = {
  Popular: 'bg-orange-50 text-orange-600 border-orange-200',
  Trending: 'bg-green-50 text-green-600 border-green-200',
  Fast: 'bg-purple-50 text-purple-600 border-purple-200',
  'Top Pick': 'bg-violet-50 text-violet-600 border-violet-200',
  'Top SQL': 'bg-blue-50 text-blue-600 border-blue-200',
  Caching: 'bg-rose-50 text-rose-600 border-rose-200',
  'Addon New': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  Essential: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  Enterprise: 'bg-slate-50 text-slate-600 border-slate-200',
  Containers: 'bg-sky-50 text-sky-600 border-sky-200',
}

const CATEGORY_CLASSES: Record<string, string> = {
  Frontend: 'bg-blue-50 text-blue-600',
  Fullstack: 'bg-violet-50 text-violet-600',
  Backend: 'bg-green-50 text-green-600',
  Database: 'bg-orange-50 text-orange-600',
  Language: 'bg-yellow-50 text-yellow-700',
  Styling: 'bg-pink-50 text-pink-600',
  DevOps: 'bg-sky-50 text-sky-600',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-xs text-gray-500">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="#f59e0b"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  )
}

const TechnologyCard = memo(function TechnologyCard({
  tech,
}: TechnologyCardProps) {
  const addTechnology = useStackStore((s) => s.addTechnology)
  const isSelected = useStackStore((s) => s.isSelected(tech.id))

  const handleAdd = useCallback(() => {
    if (isSelected) {
      toast.warning(`${tech.name} is already in your stack.`, {
        position: 'bottom-right',
        autoClose: 2500,
      })
      return
    }
    addTechnology(tech)
    toast.success(`${tech.name} added to your stack.`, {
      position: 'bottom-right',
      autoClose: 2500,
    })
  }, [isSelected, addTechnology, tech])

  const badgeClass =
    BADGE_CLASSES[tech.badge] ?? 'bg-gray-50 text-gray-600 border-gray-200'
  const categoryClass = CATEGORY_CLASSES[tech.category] ?? 'bg-gray-50 text-gray-600'

  return (
    <article
      aria-label={`${tech.name} technology card`}
      className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
    >
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="w-10 h-10 object-contain"
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
        />
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-base font-bold text-gray-900 leading-tight">
        {tech.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed flex-1">
        {tech.description}
      </p>

      {/* Meta row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-md ${categoryClass}`}
        >
          {tech.category}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{tech.difficulty}</span>
          <StarRating rating={tech.rating} />
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={handleAdd}
        disabled={isSelected}
        aria-pressed={isSelected}
        aria-label={
          isSelected
            ? `${tech.name} already added to your stack`
            : `Add ${tech.name} to your stack`
        }
        className={`w-full mt-1 py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-1
          ${
            isSelected
              ? 'bg-green-50 text-green-600 border border-green-200 cursor-default'
              : 'brand-gradient-bg text-white hover:opacity-90 shadow-sm'
          }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
})

export default TechnologyCard
