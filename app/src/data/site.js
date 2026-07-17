// Central site configuration — single source of truth for contact details,
// social links, legal information, partner references and the contact-form
// service list. Update a value here and it propagates to every page, the
// footer and both contact forms.

export const CONTACT = {
  email: 'contact@dfb.digital',
  // Display and machine-readable variants of the single company phone number.
  phoneDisplay: '+33 (0)6 35 33 06 69',
  phoneHref: 'tel:+33635330669',
  address: {
    line1: '61 Boulevard Haussmann',
    line2: '75008 Paris, France',
  },
}

// Official social profiles — used in the footer and the contact page.
export const SOCIALS = [
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dfb.digital/' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61555372443088' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/dfb-digital/' },
]

// DFB offices (À Propos / Davney page).
export const OFFICES = ['Paris', 'Ormesson-sur-Marne', 'New York', 'Brazzaville', 'Le Cap']

// Options for the "Service souhaité" dropdown on the contact form. Mirrors the
// six services showcased on the home page.
export const SERVICES = [
  'Conseil Stratégique',
  'Web Design',
  'Activation Marketing',
  'Social Media',
  'Data Marketing',
  'Social Selling',
]

// Partner references — shown in the "Ils nous font confiance" marquee on the
// home page and the references page.
export const REFERENCES = [
  'A7 EMAILING',
  'ACCOR HOTELS',
  'ASSIFEP',
  'BURGER KING',
  'DHL',
  'DIESEL',
  'DIUSAPET',
  'ETRAELEC',
  'FINOPIA',
  'FRENCHFARM',
  'GALIPET',
  'INXPRESS',
  'JULES DECO',
  'JRG LOGISTICS',
  'KOBI',
  'META SALES CONSULTING',
  'MINERVA',
  'NEUTRAL',
  'OBARYK',
  'PAIMMO',
  'SALESLYDR',
  'SUGARLAND',
  'TOTAL ENERGIES',
  'TRUFFAUT',
  'VIRGINIE FOUCAULT',
]

// Legal / corporate identity — used in the CGU "Mentions Légales" section and
// on the dedicated Mentions Légales page.
export const LEGAL = {
  companyName: 'Digital For Business (DFB)',
  capital: '2000 euros',
  rcs: '881 602 692 R.C.S. Créteil',
  address: '113 Rue de Normandie, 94700 Maisons-Alfort',
  publicationDirector: 'DFB',
  // Site is deployed on GitHub Pages — the legal host is GitHub, Inc.
  host: {
    name: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
    contact: 'https://support.github.com',
  },
}

// Web3Forms access key — free static-site form-to-email service.
// 1. Create a free account/key at https://web3forms.com using contact@dfb.digital
// 2. Paste the access key below (it is a public key, safe to commit).
// Until a real key is set, the contact forms gracefully fall back to opening
// the visitor's mail client (mailto:) so nothing is ever lost.
export const WEB3FORMS_ACCESS_KEY = '1ec19f35-6387-40fc-b6d1-efab49ff7273'

// hCaptcha spam protection. This is Web3Forms' shared free site key (works on
// any domain); replace it with your own hCaptcha site key if you create an
// hCaptcha account. Also enable hCaptcha for the form in the Web3Forms dashboard.
export const HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'
