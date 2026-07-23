export type NavLinkItem = {
  title: string
  href: string
  description?: string
}

export type NavGroup = {
  title: string
  href?: string
  items?: NavLinkItem[]
}

export type NavItem =
  | { type: "link"; title: string; href: string }
  | { type: "dropdown"; title: string; items: NavLinkItem[] }
  | { type: "groups"; title: string; groups: NavGroup[] }

export const SITE_NAME = "Digi Carotene"

export const mainNav: NavItem[] = [
  { type: "link", title: "Home", href: "/" },
  {
    type: "dropdown",
    title: "About",
    items: [
      {
        title: "About Us",
        href: "/about",
        description: "Who we are and how we grow brands.",
      },
      {
        title: "Team",
        href: "/about/team",
        description: "The people behind Digi Carotene.",
      },
      {
        title: "Founder's Story",
        href: "/about/founders-story",
        description: "The origin and vision of the agency.",
      },
      {
        title: "Clients",
        href: "/about/clients",
        description: "Brands we've partnered with.",
      },
    ],
  },
  {
    type: "groups",
    title: "Services",
    groups: [
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        items: [
          { title: "Pay Per Click", href: "/services/digital-marketing/ppc" },
          {
            title: "Search Engine Optimization",
            href: "/services/digital-marketing/seo",
          },
          {
            title: "Content Marketing",
            href: "/services/digital-marketing/content",
          },
          {
            title: "Social Media Marketing",
            href: "/services/digital-marketing/social",
          },
          {
            title: "Graphic Designing",
            href: "/services/digital-marketing/graphic-design",
          },
          {
            title: "Web-Design & Development",
            href: "/services/digital-marketing/web",
          },
          {
            title: "Personal Branding",
            href: "/services/digital-marketing/personal-branding",
          },
          {
            title: "Email Marketing",
            href: "/services/digital-marketing/email",
          },
          {
            title: "Insta Shoot",
            href: "/services/digital-marketing/insta-shoot",
          },
        ],
      },
      {
        title: "Offline Marketing",
        href: "/services/offline-marketing",
        items: [
          {
            title: "Mall Activations",
            href: "/services/offline-marketing/mall-activations",
          },
          {
            title: "Residential Activations",
            href: "/services/offline-marketing/residential-activations",
          },
          {
            title: "Theatre Marketing",
            href: "/services/offline-marketing/theatre-marketing",
          },
          {
            title: "Campus Activations",
            href: "/services/offline-marketing/campus-activations",
          },
          {
            title: "Corporate Events",
            href: "/services/offline-marketing/corporate-events",
          },
          {
            title: "Festival Marketing",
            href: "/services/offline-marketing/festival-marketing",
          },
          {
            title: "Popup-stores",
            href: "/services/offline-marketing/popup-stores",
          },
          {
            title: "Influencer Campaigns",
            href: "/services/offline-marketing/influencer-campaigns",
          },
          {
            title: "Metro Branding",
            href: "/services/offline-marketing/metro-branding",
          },
        ],
      },
      {
        title: "PR Services",
        href: "/services/pr",
      },
    ],
  },
  {
    type: "dropdown",
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "/blog",
        description: "Insights on SEO, AEO, GEO, and growth.",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Results and stories from real campaigns.",
      },
    ],
  },
  {
    type: "link",
    title: "Contact Us",
    href: "/contact",
  },
]

export const contactHref = "/contact"
