import { useState, useCallback } from 'react'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* ── Desktop Navbar ─────────────────────── */}
          <div className="hidden md:flex items-center justify-between h-16">
            {/* Left: Logo */}
            <a
              href="#"
              className="flex items-center gap-2 shrink-0"
              aria-label="Dev Stack home"
            >
              <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            {/* Center: Nav Links */}
            <ul className="flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md px-2 py-1"
              >
                Sign In
              </a>
              <a
                href="#"
                className="brand-gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* ── Mobile Navbar ──────────────────────── */}
          <div className="flex md:hidden items-center justify-between h-14">
            {/* Left: Hamburger */}
            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {mobileOpen ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            {/* Center: Logo */}
            <a
              href="#"
              className="flex items-center gap-1.5"
              aria-label="Dev Stack home"
            >
              <div className="w-7 h-7 rounded-lg brand-gradient-bg flex items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-base text-gray-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
              >
                Sign In
              </a>
              <a
                href="#"
                className="brand-gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-down Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        links={NAV_LINKS}
        onClose={closeMobile}
      />
    </>
  )
}
