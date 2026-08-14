export const homeContent = {
  hero: {
    eyebrow: "Digital marketing & branding · Hyderabad",
    headlineBefore: "You've outgrown random marketing. You need ",
    headlineAccent: "one team.",
    body: "Digi Carotene is the marketing partner for restaurants, clinics, schools, salons, and growing brands that are done stitching together freelancers and vendors. Strategy, creative, performance, and execution — owned by one accountable team.",
    primaryCta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "How we work", href: "#approach" },
  },
  capabilities: {
    eyebrow: "What we do",
    headline:
      "Strategy, then creative, then performance, then the work of actually running it.",
    body: "Four pillars. One plan. Not eleven disconnected services competing for your attention.",
    pillars: [
      {
        id: "strategy",
        number: "01",
        title: "Strategy",
        summary:
          "Diagnose how the business actually grows. Then choose the few moves that will matter this year.",
        items: ["Marketing strategy", "Content strategy"],
      },
      {
        id: "creative",
        number: "02",
        title: "Brand & Creative",
        summary:
          "The look, the language, the assets — made to work in the market, not just in a deck.",
        items: ["Branding", "Creative design", "Video production", "Content"],
      },
      {
        id: "performance",
        number: "03",
        title: "Performance",
        summary:
          "Spend with a hypothesis. Measure against the business, not against a vanity dashboard.",
        items: [
          "Social media marketing",
          "Meta Ads",
          "Google Ads",
          "Lead generation",
        ],
      },
      {
        id: "presence",
        number: "04",
        title: "Presence",
        summary:
          "The place people land, and the local signals that get them there.",
        items: ["Website development", "Local marketing"],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    headline: "We get this business. Not a generic version of it.",
    body: "Same craft, different realities. A restaurant does not need a clinic's marketing, and a school does not need a salon's.",
    items: [
      {
        id: "restaurants-hospitality",
        title: "Restaurants & Hospitality",
        body: "Footfall, delivery, reviews, and a brand that feels as considered as the room. Menus, offers, and ads talking to the same guest.",
      },
      {
        id: "healthcare",
        title: "Healthcare",
        body: "Trust first. Then appointments. Local search, clear messaging, and campaigns that don't make a clinic sound like a startup.",
      },
      {
        id: "education",
        title: "Education",
        body: "Admissions seasons are real deadlines. Reputation, parent communication, and a presence that matches the institution — not a template.",
      },
      {
        id: "salons-beauty",
        title: "Salons & Beauty",
        body: "The work is visual. The problem is usually bookings and retention. Brand, content, and local ads that fill the chair.",
      },
      {
        id: "local-service",
        title: "Local & Service Businesses",
        body: "Leads, maps, and a reputation you can actually manage. Less posting for the sake of it. More calls and enquiries.",
      },
      {
        id: "growing-brands",
        title: "Growing Brands",
        body: "You've outgrown DIY. Identity, campaigns, and performance under one plan — so the next stage isn't a jumble of vendors.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    headline: "Real case studies will live here. Not invented ones.",
    body: "Until names, outcomes, and assets are confirmed, this section stays honest. Short and empty beats long and padded.",
    placeholders: [
      {
        id: "case-1",
        label: "[[Client / project name — to confirm]]",
        meta: "[[Industry — to confirm]]",
        summary: "[[Outcome in one sentence — to confirm]]",
      },
      {
        id: "case-2",
        label: "[[Client / project name — to confirm]]",
        meta: "[[Industry — to confirm]]",
        summary: "[[Outcome in one sentence — to confirm]]",
      },
      {
        id: "case-3",
        label: "[[Client / project name — to confirm]]",
        meta: "[[Industry — to confirm]]",
        summary: "[[Outcome in one sentence — to confirm]]",
      },
    ],
  },
  approach: {
    eyebrow: "How we work",
    headline: "A process that starts with the business, not a channel menu.",
    steps: [
      {
        number: "01",
        title: "Listen to the business",
        body: "How you make money, who you serve, and where marketing is leaking. We start there — not with a package.",
      },
      {
        number: "02",
        title: "Set the strategy",
        body: "One plan. Priorities, audiences, offers, and what we will not do. This is what keeps later work honest.",
      },
      {
        number: "03",
        title: "Make the work",
        body: "Brand, content, website, campaigns — built to the plan, by one team, so the pieces fit.",
      },
      {
        number: "04",
        title: "Run and tighten",
        body: "Performance isn't a launch. We watch what the market does and adjust. You get one account, not four status emails.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Digi Carotene",
    headline:
      "Not another agency that 'does social.' A partner that owns the system.",
    points: [
      {
        title: "One accountable team",
        body: "You shouldn't have to be the project manager between a designer, an ads person, and a website vendor.",
      },
      {
        title: "We talk about your business, not our channels",
        body: "A restaurant is not a clinic. The work starts with that difference.",
      },
      {
        title: "Strategy before spend",
        body: "Ads without a plan are expensive noise. We'd rather do fewer things that compound.",
      },
      {
        title: "Hyderabad, on purpose",
        body: "Local businesses, local competition, local search. We don't treat this market as a generic India brief.",
      },
    ],
  },
} as const
