// Contact & WhatsApp Configuration
// Configured via environment variable VITE_WHATSAPP_NUMBER or secure default

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "51925229293";
const CONTACT_EMAIL = "contacto@gatconsulting.tech";
const CONTACT_PHONE = "+51925229293";

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

/**
 * Builds a direct mailto URL with prefilled subject and body.
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string} mailto URL
 */
export function getEmailUrl(
  subject = "Solicitud de Asesoría Gratuita - GAT Technology Consulting",
  body = "Hola equipo de GAT Technology Consulting,\n\nMe gustaría solicitar información y agendar una asesoría para mi empresa / proyecto.\n\nNombre:\nEmpresa:\nTeléfono:\nDetalles del proyecto:"
) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const CONTACT_CONFIG = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappFormatted: "+51 925 229 293",
  whatsappLabel: "Contactar por WhatsApp",
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
};
