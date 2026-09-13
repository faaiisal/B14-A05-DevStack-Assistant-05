import { memo, useCallback } from 'react'
import { toast } from 'react-toastify'
import type { Technology } from '../../types/technology'
import { useStackStore } from '../../store/stackStore'

interface StackItemProps {
  tech: Technology
}

const StackItem = memo(function StackItem({ tech }: StackItemProps) {
  const removeTechnology = useStackStore((s) => s.removeTechnology)

  const handleRemove = useCallback(() => {
    removeTechnology(tech.id)
    toast.info(`${tech.name} removed from your stack.`, {
      position: 'bottom-right',
      autoClose: 2500,
    })
  }, [removeTechnology, tech.id, tech.name])

  return (
    <li className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
      <img
        src={tech.icon}
        alt={`${tech.name} logo`}
        className="w-8 h-8 object-contain shrink-0"
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">
          {tech.name}
        </p>
        <p className="text-xs text-gray-400 truncate">{tech.category}</p>
      </div>
      <button
        type="button"
        onClick={handleRemove}
        aria-label={`Remove ${tech.name} from your stack`}
        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </li>
  )
})

export default StackItem
