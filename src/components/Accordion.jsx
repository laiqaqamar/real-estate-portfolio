import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * Accordion supporting either single-open or multi-open mode.
 * items: [{ id, question, answer }]
 */
export default function Accordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([])

  function toggle(id) {
    setOpenIds((cur) => {
      const isOpen = cur.includes(id)
      if (allowMultiple) {
        return isOpen ? cur.filter((x) => x !== id) : [...cur, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div className="flex flex-col divide-y divide-ink-900/10 rounded-md bg-white shadow-sm ring-1 ring-ink-900/5">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink-950">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-bronze-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-450">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
