import { useTechnologies } from '../../hooks/useTechnologies'
import TechnologyGrid from './TechnologyGrid'
import YourStack from '../YourStack/YourStack'

function LoadingState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-4"
      role="status"
      aria-live="polite"
    >
      <div
        className="w-10 h-10 border-4 border-gray-200 border-t-violet-500 rounded-full animate-spin"
        aria-hidden="true"
      />
      <p className="text-sm text-gray-500 font-medium">
        Loading technologies&hellip;
      </p>
    </div>
  )
}

interface ErrorStateProps {
  onRetry: () => void
  message: string
}

function ErrorState({ onRetry, message }: ErrorStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-4"
      role="alert"
    >
      <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" />
          <path
            d="M12 8v4m0 4h.01"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="text-sm text-gray-600 font-medium">
        Unable to load technologies. Please try again.
      </p>
      <p className="text-xs text-gray-400 max-w-xs text-center">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        Try Again
      </button>
    </div>
  )
}

export default function TechnologiesSection() {
  const { data: technologies, isLoading, isError, error, refetch } = useTechnologies()

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      {/* Section Header */}
      <div className="mb-8">
        <h2
          id="technologies-heading"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
        >
          Explore the{' '}
          <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Loading */}
      {isLoading && <LoadingState />}

      {/* Error */}
      {isError && (
        <ErrorState
          onRetry={() => void refetch()}
          message={error?.message ?? 'An unexpected error occurred.'}
        />
      )}

      {/* Content: Grid + Sidebar */}
      {technologies && (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Technology Grid */}
          <div className="flex-1 min-w-0">
            <TechnologyGrid technologies={technologies} />
          </div>

          {/* Your Stack Sidebar */}
          <div className="w-full lg:w-72 xl:w-80 shrink-0">
            <YourStack />
          </div>
        </div>
      )}
    </section>
  )
}
