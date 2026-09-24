// =============================================================
// SITE-WIDE CONFIGURATION — SOURCE OF TRUTH
// Every page/component pulls company info, contact details and
// the WhatsApp number from this one file. Never hardcode these
// values anywhere else — edit them here only.
// =============================================================

// --- WHATSAPP NUMBER -------------------------------------------------
// International format, digits only, no "+", no spaces.
// Local number: 0349 5702026  ->  International: 923495702026
export const WHATSAPP_NUMBER = '923495702026'

export const siteInfo = {
  companyName: 'Al Harmain Associates',
  ceo: 'Raja Abdul Rafay',
  tagline: 'Real Estate & Construction in Gulberg Greens, Islamabad',
  shortDescription:
    'Al Harmain Associates is a real estate and construction company based in Gulberg Greens, Islamabad, Pakistan.',
  logoText: 'Al Harmain', // used in Navbar/Footer until you add a logo image
  logoAccent: 'Associates',

  // Contact details — only what was actually provided.
  // No landline/email was supplied, so these stay empty until you add them;
  // components hide these rows automatically when left blank.
  phone: '0349 5702026', // same as the WhatsApp number, shown as the contact phone
  email: '', // TODO: add your business email here
  address: 'Gulberg Greens, Islamabad, Pakistan',
  googleMapsUrl: 'https://maps.app.goo.gl/qXVup8dv7RcUG3a38',
  officeHours: '', // TODO: add your office hours here, e.g. "Mon - Sat: 9:00 AM - 7:00 PM"

  // No social media links were provided - add real ones here when you have them.
  // Components only render a social icon when its URL is non-empty.
  socials: {
    instagram: '',
    youtube: '',
    linkedin: '',
    tiktok: '',
  },

  // TODO: Add real company statistics here once available (years active,
  // projects completed, clients served, etc). Leave "value: null" for any
  // stat you don't have real numbers for yet - the UI shows an editable
  // placeholder instead of an invented number.
  stats: [
    { label: 'Years of Experience', value: '5', suffix: '+' },
    { label: 'Projects Completed', value: '230', suffix: '+' },
    { label: 'Happy Clients', value: '300', suffix: '+' },

  ],

  // TODO: Replace with your company's actual mission/vision statement.
  
  mission:'To deliver high-quality real estate and construction solutions with integrity, innovation, and attention to detail, while creating spaces that meet our clients’ needs and provide lasting value for individuals, businesses, and communities.',
  vision: 'We envision a future where every property we develop reflects quality, thoughtful design, and enduring value—helping create better communities and stronger opportunities for generations to come.',
}

// Main navigation - Services and Blocks support dropdowns.
// Dropdown items pull their labels from services.js / blocks.js at render
// time in the Navbar, this array just defines top-level structure & routes.
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services', hasDropdown: true, dropdownSource: 'services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Properties', path: '/properties' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gulberg Blocks', path: '/blocks', hasDropdown: true, dropdownSource: 'blocks' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'FAQs', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
]

export const footerLinks = {
  quickLinks: [
    { label: 'About Us', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Properties', path: '/properties' },
    { label: 'Gulberg Blocks', path: '/blocks' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],
  propertyCategories: [
    { label: 'Houses', path: '/properties?type=House' },
    { label: 'Apartments', path: '/properties?type=Apartment' },
    { label: 'Farmhouses', path: '/properties?type=Farmhouse' },
    { label: 'Commercial', path: '/properties?type=Commercial' },
    { label: 'Plots', path: '/properties?type=Plot' },
  ],
}

// TODO: This process outline was drafted as general real-estate/construction
// practice, not supplied by Al Harmain Associates. Edit each step to match
// your company's actual process, or remove steps that don't apply.
export const howWeWork = [
  {
    step: '01',
    title: 'Planning & Requirements',
    description:
      'We start by understanding your goals, budget and site conditions to shape a clear project brief.',
  },
  {
    step: '02',
    title: 'Design & Approval',
    description:
      'Our architects and designers prepare drawings and concepts, refined with your feedback until approved.',
  },
  {
    step: '03',
    title: 'Construction & Quality Control',
    description:
      'Our teams execute the build with scheduled inspections at every structural milestone.',
  },
  {
    step: '04',
    title: 'Finishing & Final Handover',
    description:
      'Interiors, fixtures and finishing touches are completed before a final walkthrough and handover.',
  },
]
