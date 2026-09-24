import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { siteInfo, footerLinks } from '../data/siteData'
import { services } from '../data/services'
import { getWhatsAppLink } from '../utils/whatsapp'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
}

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-paper/70">
      <div className="container-wide grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-2xl text-paper">
            {siteInfo.logoText}
            <span className="text-bronze-400">{siteInfo.logoAccent}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{siteInfo.shortDescription}</p>
          <div className="mt-6 flex gap-3">
            {Object.entries(siteInfo.socials).map(([key, url]) => {
              const Icon = socialIcons[key]
              if (!url || !Icon) return null
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-bronze-400 hover:text-bronze-400"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-paper">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-bronze-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-paper">Services</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="transition-colors hover:text-bronze-400">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-display text-lg text-paper">Property Types</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {footerLinks.propertyCategories.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="transition-colors hover:text-bronze-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-paper">Contact</h4>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-bronze-400" />
              <a
                href={siteInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze-400"
              >
                {siteInfo.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-bronze-400" />
              <a href={`tel:${siteInfo.phone}`} className="hover:text-bronze-400">
                {siteInfo.phone}
              </a>
            </li>
            {siteInfo.email && (
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-bronze-400" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-bronze-400">
                  {siteInfo.email}
                </a>
              </li>
            )}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-bronze-500 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-bronze-400"
            >
              Chat on WhatsApp
            </a>
            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper hover:border-bronze-400 hover:text-bronze-400"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6">
        <div className="container-wide flex flex-col items-center justify-between gap-2 text-xs text-paper/40 md:flex-row">
          <p>© {new Date().getFullYear()} {siteInfo.companyName}. All rights reserved.</p>
          <p>CEO: {siteInfo.ceo}</p>
        </div>
      </div>
    </footer>
  )
}
