import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp'

/**
 * Floating WhatsApp button, fixed to the bottom-right corner on every page.
 * Mounted once in App.jsx.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink('general')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  )
}
