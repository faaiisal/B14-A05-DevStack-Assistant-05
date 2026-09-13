import type { FC } from 'react'

interface NavLink {
  readonly label: string
  readonly href: string
}

interface MobileMenuProps {
  isOpen: boolean
  links: readonly NavLink[]
  onClose: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, links, onClose }) => {
  if (!isOpen) return null

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-label="Mobile navigation menu"
      className="md:hidden bg-white border-b border-gray-100 shadow-lg z-40"
    >
      <nav aria-label="Mobile navigation" className="px-4 pt-2 pb-4">
        <ul className="flex flex-col gap-1" role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onClose}
                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
