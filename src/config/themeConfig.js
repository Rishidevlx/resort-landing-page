export const themeConfig = {
  brand: {
    name: "RIHA",
    subName: "PALACE",
    fullName: "RIHA PALACE",
    tagline: "Resort & Retreat",
  },

  colors: {
    primaryBg: "#141212",
    secondaryBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#E9E9E9",
    textMuted: "#A3A3A3",
    borderSubtle: "rgba(255, 255, 255, 0.15)",
    borderStrong: "rgba(255, 255, 255, 0.35)",
    accentGold: "#D4AF37",
  },

  fonts: {
    heading: "'Gilda Display', serif",
    subHeading: "'Barlow', sans-serif",
    body: "'Barlow', sans-serif",
  },

  fontWeights: {
    heading: 400,
    subHeading: 500,
    body: 400,
    semiBold: 600,
    bold: 700,
  },

  fontSizes: {
    heroTitle: "clamp(2.75rem, 6.5vw, 4.25rem)",
    heading: "61.44px",
    subHeading: "20px",
    body: "15px",
    navItem: "13px",
  },

  buttons: {
    primary: {
      background: "transparent",
      color: "#FFFFFF",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      hoverBackground: "#FFFFFF",
      hoverColor: "#141212",
    },
  },

  navigation: {
    links: [
      { label: "HIGHLIGHTS", href: "#highlights" },
      { label: "AMENITIES", href: "#amenities" },
      { label: "GALLERY", href: "#gallery" },
      { label: "CONTACT", href: "#contact" },
    ],
    cta: {
      label: "ENQUIRE",
      href: "#enquire",
    },
  },

  hero: {
    welcomeBadge: "WELCOME TO THE SANCTUARY",
    headlineLines: [
      "THE",
      "HAVE-IT-ALL",
      "HABITAT."
    ],
    subHeadline: "RIHA PALACE",
    tagline: "WHERE TIMELESS ELEGANCE MEETS NATURAL TRANQUILITY",
  },

  about: {
    badge: "ABOUT RIHA PALACE",
    expandTitle: "THE SANCTUARY UNFOLDS",
    scrollHint: "SCROLL TO EXPLORE",
    heading: "A HAVEN OF TIMELESS TRANQUILITY",
    description:
      "Tucked away in untouched nature, Riha Palace is an architectural sanctuary designed for those who seek unhurried living. Where heritage craftsmanship meets contemporary elegance, every sunset and morning mist is an invitation to reconnect.",
    stats: [
      { target: 80, suffix: "+", label: "Acres of Sanctuary" },
      { target: 100, suffix: "%", label: "Private Nature Retreat" },
      { target: 5, suffix: "-Star", label: "Holistic Wellness & Spa" },
    ],
    cta: "EXPLORE THE SANCTUARY",
  },

  highlights: {
    badge: "RIHA PALACE EXPERIENCES",
    heading: "Our Sanctuary Highlights",
    subHeading: "WHERE ARCHITECTURAL MASTERY MEETS NATURAL WONDER",
    autoplayInterval: 3000,
    cards: [
      {
        id: 1,
        tag: "OVERWATER STUDIO",
        title: "Coral Breath Studio",
        description:
          "Perched gracefully above the turquoise waters, offering panoramic sunrise views and private open-air sundecks.",
      },
      {
        id: 2,
        tag: "PRIVATE POOL VILLA",
        title: "Azure Lagoon Pavilion",
        description:
          "An expansive private pool villa surrounded by tropical greenery, designed for serene seclusion and starlit swims.",
      },
      {
        id: 3,
        tag: "WELLNESS RETREAT",
        title: "Aura Hydrotherapy Sanctuary",
        description:
          "A restorative wellness haven with mineral vitality pools and bespoke Ayurvedic therapies nestled in nature.",
      },
      {
        id: 4,
        tag: "OCEANFRONT LIVING",
        title: "Mirage Sunset Residence",
        description:
          "An exclusive ocean-facing estate capturing breathtaking golden sunsets, crafted for unforgettable luxury escapes.",
      },
    ],
  },

  amenities: {
    badge: "WORLD-CLASS LUXURY",
    heading: "Crafted For The Extraordinary",
    subHeading: "SPACES OF WELLNESS, GASTRONOMY & ADVENTURE",
    description:
      "Every amenity at Riha Palace is thoughtfully curated to immerse you in holistic rejuvenation, culinary artistry, and untouched coastal landscapes.",
    items: [
      {
        id: 1,
        tag: "AQUATIC SERENITY",
        title: "Celestial Horizon Pool",
        description:
          "A multi-tiered heated freshwater pool seamlessly merging with the azure horizon, featuring sunken daybeds and sunset cocktail cabanas.",
      },
      {
        id: 2,
        tag: "HOLISTIC HEALING",
        title: "Aura Ayurvedic Spa",
        description:
          "Ancient eastern healing traditions blended with modern hydrotherapy, botanical elixir baths, and private wellness pavilions.",
      },
      {
        id: 3,
        tag: "FINE GASTRONOMY",
        title: "The Starlit Pavilion",
        description:
          "Bespoke ocean-edge gastronomy celebrating coastal harvests and Michelin-crafted tasting menus beneath the canopy of stars.",
      },
      {
        id: 4,
        tag: "COASTAL ADVENTURE",
        title: "Private Marine Expeditions",
        description:
          "Charter our private luxury catamaran for secluded reef diving, dolphin safaris, and romantic champagne sandbank cruises.",
      },
    ],
  },

  gallery: {
    badge: "VISUAL ODYSSEY",
    heading: "CAPTURED MOMENTS",
    subHeading: "GLIMPSES INTO TIMELESS REFINEMENT",
    description:
      "Wander through curated snapshots of Riha Palace — from sunlit private overwater villas to moonlit ocean gastronomy.",
    items: [
      {
        id: 1,
        title: "OCEAN VILLA",
        description:
          "An architectural marvel suspended above calm turquoise waters, featuring expansive sun decks and seamless ocean access.",
        alt: "Overwater luxury ocean villa at Riha Palace",
      },
      {
        id: 2,
        title: "SEASIDE DINING",
        description:
          "Intimate seaside dining celebrating fresh coastal harvests paired with world-class vintage cellar collections.",
        alt: "Fine seaside dining at Riha Palace",
      },
      {
        id: 3,
        title: "INFINITY POOL",
        description:
          "A multi-tiered heated freshwater infinity pool merging effortlessly into the endless azure horizon.",
        alt: "Infinity vitality swimming pool overlooking ocean",
      },
      {
        id: 4,
        title: "CORAL VISTA",
        description:
          "Breathtaking vistas of coral reefs and golden hour tranquility across untouched tropical coastlines.",
        alt: "Panoramic coral ocean vista",
      },
      {
        id: 5,
        title: "ATOLL SANCTUARY",
        description:
          "Immerse yourself in 80+ acres of preserved private sanctuary, designed for complete seclusion.",
        alt: "Pristine tropical atoll sanctuary",
      },
      {
        id: 6,
        title: "WELLNESS SPA",
        description:
          "Holistic healing sanctuaries nestled in tropical gardens, offering bespoke restorative herbal therapies.",
        alt: "Holistic wellness spa pavilion",
      },
      {
        id: 7,
        title: "YACHT CHARTER",
        description:
          "Exclusive catamaran charters to secluded sandbanks, vibrant coral diving, and champagne sunset cruises.",
        alt: "Luxury ocean yacht sailing through turquoise waters",
      },
      {
        id: 8,
        title: "AZURE SUITE",
        description:
          "An expansive presidential suite surrounded by tropical lushness, designed for serene ocean seclusion.",
        alt: "Azure lagoon presidential suite interior",
      },
      {
        id: 9,
        title: "STARLIT LOUNGE",
        description:
          "Bespoke ocean-edge gastronomy beneath the starlit canopy, with artisanal cocktails and soft acoustic music.",
        alt: "Starlit lounge and open-air beach pavilion",
      },
      {
        id: 10,
        title: "HORIZON DECK",
        description:
          "Cascading sundecks offering sunken loungers, heated dip pools, and sunset champagne service.",
        alt: "Horizon sundeck overlooking the tropical sea",
      },
      {
        id: 11,
        title: "SUNSET COVE",
        description:
          "An exclusive west-facing beach cove capturing breathtaking golden sunsets across the lagoon.",
        alt: "Sunset beach cove with golden hour reflection",
      },
      {
        id: 12,
        title: "PRIVATE REEF",
        description:
          "Charter private diving expeditions to protected house reefs teeming with colorful marine life.",
        alt: "Private coral house reef and crystal-clear water",
      },
    ],
  },

  contact: {
    badge: "BESPOKE INQUIRIES",
    heading: "BEGIN YOUR JOURNEY",
    subHeading: "YOUR PRIVATE SANCTUARY AWAITS",
    description:
      "Whether reserving an overwater pavilion, chartering private marine expeditions, or orchestrating an intimate celebration, our dedicated island concierge is at your service 24/7.",
    details: {
      conciergeEmail: "concierge@rihapalace.com",
      reservationsEmail: "reservations@rihapalace.com",
      phone: "+960 664 8800",
      whatsapp: "+960 799 1234",
      address: "Atoll Sanctuary 04, North Malé Atoll, Republic of Maldives",
      hours: "24 Hours Dedicated Concierge Service",
    },
    velocityTexts: [
      "RIHA PALACE • TIMELESS SANCTUARY • BESPOKE LUXURY • UNTOUCHED NATURE",
      "RESERVE YOUR RETREAT • 24/7 PRIVATE CONCIERGE • CONNECT WITH US",
    ],
  },
};

export default themeConfig;
