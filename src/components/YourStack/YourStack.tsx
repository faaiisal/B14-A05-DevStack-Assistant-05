import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useStackStore } from '../../store/stackStore'
import StackItem from './StackItem'

export default function YourStack() {
  const selectedTechnologies = useStackStore((s) => s.selectedTechnologies)
  const removeAll = useStackStore((s) => s.removeAll)

  const count = selectedTechnologies.length

  const handleRemoveAll = useCallback(() => {
    if (count === 0) return
    removeAll()
    toast.info('All technologies removed from your stack.', {
      position: 'bottom-right',
      autoClose: 3000,
    })
  }, [removeAll, count])

  const selectedLabel =
    count === 0
      ? 'No technologies selected yet.'
      : count === 1
        ? '1 Technology Selected'
        : `${count} Technologies Selected`

  return (
    <aside
      aria-label="Your Stack"
      className="bg-gray-50 border border-gray-200 rounded-2xl p-5 h-fit lg:sticky lg:top-20"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Your Stack</h2>
        {count > 0 && (
          <button
            type="button"
            onClick={handleRemoveAll}
            className="text-xs font-medium text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Count badge */}
      <p className="text-xs font-medium text-gray-400 mb-3" aria-live="polite">
        {selectedLabel}
      </p>

      {/* Empty state */}
      {count === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400">
            No technologies selected yet.
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Click &ldquo;Add to Stack&rdquo; on any card below.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-2" aria-label="Selected technologies">
          {selectedTechnologies.map((tech) => (
            <StackItem key={tech.id} tech={tech} />
          ))}
        </ul>
      )}
    </aside>
  )
}
