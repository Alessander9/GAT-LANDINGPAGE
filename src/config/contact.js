// Contact & WhatsApp Configuration
// Configured via environment variable VITE_WHATSAPP_NUMBER or secure default

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "51925229293";

/**
 * Builds a direct WhatsApp chat URL with an optional encoded message.
 * @param {string} [text] - Optional prefilled message
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(text = '') {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}

export const CONTACT_CONFIG = {
  whatsappLabel: "Contactar por WhatsApp",
  email: "contacto@gatconsulting.com",
};
