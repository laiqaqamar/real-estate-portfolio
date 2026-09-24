// =============================================================
// WHATSAPP HELPER
// Every "Contact / Inquire / Get Estimate" button in the site
// should call getWhatsAppLink() so the number only ever needs
// to be changed in src/data/siteData.js
// =============================================================

import { WHATSAPP_NUMBER, siteInfo } from '../data/siteData'

/**
 * Build a wa.me link with an encoded, context-aware message.
 * @param {'general'|'property'|'project'|'block'|'service'|'estimate'|'custom'} type
 * @param {string} [name] - property/project/block/service name (not needed for other types)
 * @param {string} [customMessage] - used when type === 'custom'
 */
export function getWhatsAppLink(type = 'general', name = '', customMessage = '') {
  let message = `Hello, I am interested in ${siteInfo.companyName}. Please provide me with more information.`

  switch (type) {
    case 'property':
      message = `Hello, I am interested in ${name}. Please provide me with more details.`
      break
    case 'project':
      message = `Hello, I am interested in ${name}. Please provide me with more details.`
      break
    case 'block':
      message = `Hello, I am interested in ${name}. Please provide me with more details.`
      break
    case 'service':
      message = `Hello, I am interested in ${name} offered by ${siteInfo.companyName}. Please provide me with more information.`
      break
    case 'estimate':
      message = `Hello, I would like to get a property/construction estimate from ${siteInfo.companyName}. Please provide me with more information.`
      break
    case 'custom':
      message = customMessage || message
      break
    default:
      break
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(type, name, customMessage) {
  window.open(getWhatsAppLink(type, name, customMessage), '_blank', 'noopener,noreferrer')
}
