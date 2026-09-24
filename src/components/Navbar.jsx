import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { navLinks, siteInfo } from '../data/siteData'
import { services } from '../data/services'
import { blockNavTree } from '../data/blocks'
import { getWhatsAppLink } from '../utils/whatsapp'
import SmartImage from './SmartImage'

// Flat (single-level) dropdown source: Services
// Nested source (supports one level of "children" flyout): Blocks
const dropdownSources = {
  services: services.map((s) => ({ label: s.name, path: `/services/${s.id}` })),
  blocks: blockNavTree,
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)
  const [mobileNestedOpen, setMobileNestedOpen] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMobileSubOpen(null)
    setMobileNestedOpen(null)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container-wide pt-4">
        <div className="flex items-center justify-between gap-4 rounded-full bg-white/95 px-7 py-5 shadow-soft backdrop-blur">
          <Link to="/" className="shrink-0">
            <SmartImage
              src="/src/assets/images/brand/logo.png"
              alt={siteInfo.companyName}
              className="h-14 w-auto object-contain md:h-11"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-extrabold transition-colors ${
                      isActive ? 'text-slate-450' : 'text-ink-950 hover:bg-paper hover:text-bronze-600'
                    }`
                  }
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </NavLink>

                {link.hasDropdown && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[240px] rounded-md border border-ink-900/10 bg-white p-2 shadow-soft">
                      {dropdownSources[link.dropdownSource].map((item) =>
                        item.children ? (
                          <div key={item.label} className="group/nested relative">
                            <div className="flex items-center justify-between rounded px-3 py-2 text-sm font-semibold text-ink-900 hover:bg-paper hover:text-bronze-600">
                              {item.label}
                              <ChevronRight size={14} />
                            </div>
                            <div className="invisible absolute left-full top-0 pl-2 opacity-0 transition-all duration-200 group-hover/nested:visible group-hover/nested:opacity-100">
                              <div className="min-w-[260px] rounded-md border border-ink-900/10 bg-white p-2 shadow-soft">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className="block rounded px-3 py-2 text-sm text-ink-900 hover:bg-paper hover:text-bronze-600"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block rounded px-3 py-2 text-sm text-ink-900 hover:bg-paper hover:text-bronze-600"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-ink-800 lg:flex"
          >
            Get In Touch
          </a>

          <button
            className="text-ink-950 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto p-4">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex-1 py-3 font-bold ${isActive ? 'text-slate-450' : 'text-ink-950'}`
                        }
                      >
                        {link.label}
                      </NavLink>
                      {link.hasDropdown && (
                        <button
                          onClick={() =>
                            setMobileSubOpen((cur) => (cur === link.path ? null : link.path))
                          }
                          className="p-3 text-ink-700"
                          aria-label={`Toggle ${link.label} submenu`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              mobileSubOpen === link.path ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {link.hasDropdown && (
                      <AnimatePresence>
                        {mobileSubOpen === link.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col"
                          >
                            {dropdownSources[link.dropdownSource].map((item) =>
                              item.children ? (
                                <div key={item.label}>
                                  <button
                                    onClick={() =>
                                      setMobileNestedOpen((cur) =>
                                        cur === item.label ? null : item.label
                                      )
                                    }
                                    className="flex w-full items-center justify-between py-2 text-sm font-semibold text-ink-900"
                                  >
                                    {item.label}
                                    <ChevronDown
                                      size={14}
                                      className={`transition-transform ${
                                        mobileNestedOpen === item.label ? 'rotate-180' : ''
                                      }`}
                                    />
                                  </button>
                                  <AnimatePresence>
                                    {mobileNestedOpen === item.label && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden pl-4 flex flex-col"
                                      >
                                        {item.children.map((child) => (
                                          <Link
                                            key={child.path}
                                            to={child.path}
                                            className="py-2 text-sm text-slate-450"
                                          >
                                            {child.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="py-2 text-sm text-slate-450"
                                >
                                  {item.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-bold text-paper"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
