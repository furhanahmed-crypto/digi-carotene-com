export type IndustryFaqItem = {
  question: string
  answer: string
}

export type IndustryFaqBlock = {
  title: string
  body: string
  items: readonly IndustryFaqItem[]
}

const healthcare: IndustryFaqBlock = {
  title: "Healthcare Marketing in Hyderabad — FAQs",
  body: "Straight answers for hospitals, clinics and doctors in Hyderabad.",
  items: [
    {
      question:
        "How do hospitals and clinics in Hyderabad get more patients online?",
      answer:
        'Most patients start with Google. We optimise your Google Business Profile for each location and doctor, build treatment-and-area pages (for example, "orthopaedic doctor in Kondapur"), run Google Search ads on high-intent searches, and use WhatsApp for appointment booking. Every campaign is tracked in appointment calls and bookings, not clicks.',
    },
    {
      question: "Is it legal for doctors and hospitals to advertise in India?",
      answer:
        "Yes, within the National Medical Commission's rules. NMC's ethical advertising guidelines (issued 6 October 2026) allow factual information on services, facilities, accreditation and fees, but prohibit patient testimonials, before-and-after photos, \"guaranteed cure\" claims, bought reviews or followers, and discounts used to induce consultations. We plan every campaign inside these rules.",
    },
    {
      question: "How do you charge for healthcare marketing?",
      answer:
        "We charge a fixed monthly fee for an agreed scope, and ad spend is paid separately to Google or Meta. We never charge per patient, per appointment or per procedure — NMC's guidelines bar agency payments linked to patient procurement, and fixed pricing keeps your practice compliant.",
    },
    {
      question:
        'How can my clinic rank on Google Maps for "near me" searches?',
      answer:
        "Complete and verify your Google Business Profile with the right category, consistent address and phone everywhere, real photos, regular posts and genuine patient reviews collected ethically. Add a page on your website for each location and specialty. Clinics usually see Maps improvements within two to three months.",
    },
    {
      question:
        "Do you run ads for specialties like dermatology, dental, IVF and orthopaedics?",
      answer:
        "Yes. Google and Meta both have their own healthcare advertising policies, including limits on targeting people by health condition and on how certain treatments can be promoted. We write ads and landing pages that meet those policies and NMC rules, so campaigns get approved and stay live.",
    },
    {
      question: "How long does healthcare marketing take to show results?",
      answer:
        "Search ads can bring appointment enquiries within the first few weeks. Google Maps visibility usually improves in two to three months, and organic rankings for competitive specialties typically take four to six months. You get a monthly report on calls, bookings and cost per appointment.",
    },
  ],
}

const restaurants: IndustryFaqBlock = {
  title: "Restaurant Marketing in Hyderabad — FAQs",
  body: "What restaurant, café and QSR owners in Hyderabad ask us most.",
  items: [
    {
      question:
        "How can restaurants in Hyderabad get more footfall and orders?",
      answer:
        "Combine four things: a strong Google Maps listing, Instagram reels of your signature dishes, Meta ads targeted to people within a few kilometres of your outlet, and WhatsApp offers to past customers. We track results through calls, direction requests, offer-code redemptions and online orders.",
    },
    {
      question: "Does Instagram marketing work for restaurants?",
      answer:
        "Yes — food is one of the most shared categories on Instagram. Reels of signature dishes, kitchen moments and happy tables, shot by our in-house studio, work best. We pair them with geo-targeted ads so the right people nearby see them, and reuse the content on Google Maps.",
    },
    {
      question:
        "Should we spend on Swiggy and Zomato ads or our own channels?",
      answer:
        "Both have a role. Aggregator ads drive delivery volume but every order carries a commission. Your own channels — Google Maps, Instagram, a WhatsApp customer list and direct ordering — build repeat customers at a lower cost per order. We help you balance the two.",
    },
    {
      question: "How do you promote a new restaurant opening in Hyderabad?",
      answer:
        "We start four to six weeks before opening: teaser content, a Google Business Profile ready on day one, a preview night with local food creators, geo-targeted launch ads and an opening offer. After launch, we push reviews and repeat-visit offers to keep momentum.",
    },
    {
      question:
        "Can you plan campaigns around Hyderabad festivals and events?",
      answer:
        "Yes. Hyderabad's calendar is a big opportunity — Ramzan and the haleem season, Bonalu, Bathukamma, Sankranti, Diwali, Christmas, New Year and big cricket nights. We plan menus, offers and content around these dates months in advance.",
    },
    {
      question: "How do you measure restaurant marketing results?",
      answer:
        "By what reaches your till: footfall from offer codes and QR scans, table reservations, online orders, Google Maps calls and direction requests, and cost per order. You get a simple monthly report showing which channel brought which customers.",
    },
  ],
}

const salons: IndustryFaqBlock = {
  title: "Salon Marketing in Hyderabad — FAQs",
  body: "Answers for salon, spa and beauty brands across Hyderabad.",
  items: [
    {
      question: "How do salons in Hyderabad get more bookings?",
      answer:
        "The fastest route is click-to-WhatsApp ads targeted to your area, backed by an Instagram feed of real transformations and a well-reviewed Google Business Profile. Visitors message you on WhatsApp, and we help your team convert those chats into confirmed appointments.",
    },
    {
      question: "Do you work with franchise salon outlets?",
      answer:
        "Yes. We run outlet-level marketing within the parent brand's guidelines: a separate Google Business Profile for each outlet, ads targeted to that outlet's neighbourhood, local offers and outlet-specific content, so each location builds its own customer base.",
    },
    {
      question: "What content works best for salons on Instagram?",
      answer:
        "Transformation reels (with client consent), stylist introductions, trend explainers, bridal looks and quick hair or skin tips perform best. We create content in Telugu and English and shoot it at your salon with our in-house studio team.",
    },
    {
      question: "How do you bring clients back for repeat visits?",
      answer:
        "Through WhatsApp reminders timed to each service, membership and package offers, birthday and anniversary messages, and rebooking prompts after each visit. Repeat clients cost far less to win than new ones, so we build this into every salon plan.",
    },
    {
      question: "How do you market for the wedding season?",
      answer:
        "We plan bridal campaigns ahead of the main Telugu wedding muhurtham dates: bridal and pre-bridal packages, portfolio shoots, Instagram ads targeted to brides-to-be and families, and WhatsApp follow-ups for trial bookings.",
    },
    {
      question: "How quickly will we see more bookings?",
      answer:
        "Click-to-WhatsApp campaigns usually start bringing enquiries in the first week or two. Google Maps and Instagram growth build over two to three months. You get monthly numbers on enquiries, bookings and cost per booking.",
    },
  ],
}

const education: IndustryFaqBlock = {
  title: "Education Marketing in Hyderabad — FAQs",
  body: "For colleges, schools and coaching institutes in Hyderabad.",
  items: [
    {
      question:
        "How can colleges and coaching institutes in Hyderabad get more admissions?",
      answer:
        "Build a clear admissions funnel: a strong page for every program, Google Search ads on course-and-city searches, Meta and YouTube campaigns for awareness, and lead forms connected to counsellors on WhatsApp. We track enquiries, counselling calls, applications and admissions.",
    },
    {
      question: "When should an admissions campaign start?",
      answer:
        "Awareness should start two to three months before decisions are made, and lead generation should peak around entrance results and counselling — for example, the TG EAPCET cycle for engineering. We map your campaign calendar to your intake dates.",
    },
    {
      question: "Do you target parents as well as students?",
      answer:
        "Yes. Students and parents look for different things, so we run separate messages and channels: Instagram and YouTube with student-focused content, and Facebook, Google and WhatsApp with fee, safety, faculty and placement information for parents.",
    },
    {
      question: "How do you improve the quality of admission leads?",
      answer:
        "We add qualifying questions to forms (course, qualification, location), send traffic to program-specific landing pages, follow up within minutes on WhatsApp and track every lead in a CRM, so counsellors spend time on serious applicants.",
    },
    {
      question: "Can you run campus and school activations?",
      answer:
        "Yes. We organise school outreach, college fest sponsorships, workshops and campus booths, and connect them to digital follow-up through QR codes and WhatsApp, so on-ground interest turns into trackable leads.",
    },
    {
      question: "Are there rules for education advertising?",
      answer:
        "Yes. Under the Advertising Standards Council of India (ASCI) code, claims such as placement records, rankings or results must be truthful and backed by evidence. We help you present achievements accurately so ads stay compliant and build trust with parents.",
    },
  ],
}

const realEstate: IndustryFaqBlock = {
  title: "Real Estate & Furniture Marketing in Hyderabad — FAQs",
  body: "For developers, brokers and furniture showrooms in Hyderabad.",
  items: [
    {
      question:
        "How do real estate developers in Hyderabad generate quality leads?",
      answer:
        "We combine Google Search ads on project and locality searches (such as Kokapet, Tellapur or Kompally), Meta lead ads with qualifying questions, a landing page for each project and fast WhatsApp follow-up to book site visits. We report on site visits and bookings, not just form fills.",
    },
    {
      question: "Do real estate ads in Telangana need a RERA number?",
      answer:
        "Yes. Ads for a project must carry its TG RERA registration number, and marketing an unregistered project is not allowed. TG RERA has fined developers for both. We add the registration number and required details to every ad, landing page and brochure.",
    },
    {
      question: "How do you reduce fake or low-quality property leads?",
      answer:
        "We use higher-intent forms with budget and timeline questions, phone verification, retargeting of people who already engaged, and quick qualification calls or WhatsApp chats. This cuts junk leads and lowers your cost per site visit.",
    },
    {
      question: "How can furniture showrooms in Hyderabad get more walk-ins?",
      answer:
        "A strong Google Maps listing, Instagram reels and product shoots of your best pieces, ads targeted to nearby homeowners and new apartment communities, and a WhatsApp catalogue for quick enquiries. Offer codes help us measure which ads bring people into the showroom.",
    },
    {
      question: "Do you shoot property walkthroughs and product videos?",
      answer:
        "Yes. Our in-house studio shoots property walkthroughs, show flats, amenities and furniture collections, and edits them into reels, ads and website videos.",
    },
    {
      question: "Can you reach NRI buyers outside India?",
      answer:
        "Yes. We run campaigns targeting Hyderabad's diaspora in the US, UK, Gulf and other markets, with landing pages, video tours and follow-ups timed for their time zones.",
    },
  ],
}

const d2c: IndustryFaqBlock = {
  title: "D2C & Retail Marketing in Hyderabad — FAQs",
  body: "For product brands, home-grown labels and retail stores.",
  items: [
    {
      question: "How can a Hyderabad D2C brand grow online sales?",
      answer:
        "With a conversion-ready store, Meta ads and Google Shopping or Performance Max campaigns, steady creative testing, and retention through WhatsApp and email. We measure revenue, return on ad spend and repeat purchase rate — not just traffic.",
    },
    {
      question: "Should we build on Shopify or WooCommerce?",
      answer:
        "Both work. Shopify is quicker to launch and easier to manage; WooCommerce offers more control and suits brands already on WordPress. We recommend one after looking at your catalogue, budget and team, and we build on both.",
    },
    {
      question: "Should we sell on marketplaces or our own website?",
      answer:
        "Usually both. Marketplaces like Amazon and Flipkart bring volume and trust; your own website keeps customer data, better margins and repeat buyers. We help you price and promote across both without them competing.",
    },
    {
      question: "How do you lower customer acquisition cost?",
      answer:
        "By testing creatives and offers every week, retargeting visitors who didn't buy, improving the checkout, and bringing first-time buyers back through WhatsApp and email. Each repeat purchase lowers your average cost to win a customer.",
    },
    {
      question: "Do you also market physical retail stores?",
      answer:
        "Yes. For stores we focus on Google Maps, ads targeted to nearby shoppers, in-store offers tracked with codes, and pop-ups or mall activations that drive footfall.",
    },
    {
      question: "Do you do product photography and videos?",
      answer:
        "Yes. Our in-house studio shoots product photos, lifestyle images and reels for your website, marketplaces and ads.",
    },
  ],
}

const b2b: IndustryFaqBlock = {
  title: "B2B & Technology Marketing — FAQs",
  body: "For SaaS, IT services and B2B companies in Hyderabad and worldwide.",
  items: [
    {
      question: "How do B2B and tech companies generate qualified leads?",
      answer:
        "By reaching the right decision-makers repeatedly: LinkedIn ads and outreach to specific roles and companies, SEO and content that answers buyers' questions, email nurture sequences, and Google Search ads on solution keywords. We report on sales-qualified leads and pipeline, not impressions.",
    },
    {
      question: "Does LinkedIn marketing work for B2B companies?",
      answer:
        "Yes, when it's targeted. We combine founder and company content, LinkedIn ads aimed at job titles and industries, and personalised outreach. This builds familiarity first, so sales conversations start warmer.",
    },
    {
      question: "Do you work with B2B companies outside India?",
      answer:
        "Yes. We work with technology and services companies in the US and Europe — including SAP services and SaaS firms — from our Hyderabad team, with overlap hours in your time zone. See our Global Client Stories.",
    },
    {
      question: "How do you measure B2B marketing results?",
      answer:
        "We track the whole funnel: leads, marketing-qualified leads, sales-qualified leads, meetings booked and pipeline value, connected to your CRM where possible. That shows which channels create revenue, not just traffic.",
    },
    {
      question:
        "Can you get our company recommended by ChatGPT and other AI tools?",
      answer:
        "We improve your chances. AI tools recommend vendors they can verify across many trusted sources, so we publish clear, factual content about what you do, earn mentions on industry sites and keep your company details consistent everywhere.",
    },
    {
      question: "Do you redesign B2B websites and sales decks?",
      answer:
        "Yes. We build fast, clear websites designed to turn visitors into enquiries, and sales decks your team can use in pitches. Both are written to explain complex offerings simply.",
    },
  ],
}

export const industryHubFaqs: IndustryFaqBlock = {
  title: "Industry Marketing FAQs",
  body: "How we work across sectors in Hyderabad and worldwide.",
  items: [
    {
      question: "Which industries does Digi Carotene work with?",
      answer:
        "We work with healthcare, restaurants and QSR, salons and beauty, education, real estate and furniture, D2C and retail, B2B and technology, and more — for businesses in Hyderabad, across India and abroad.",
    },
    {
      question: "Do you have fixed packages for each industry?",
      answer:
        "No. We first study your business model — who buys, how they decide and what a customer is worth — then choose the services that will grow it fastest, from performance and growth marketing to social, SEO, web and offline activations.",
    },
    {
      question: "My industry isn't listed. Can you still help?",
      answer:
        "Yes. The same approach works across sectors. Tell us about your business in a free growth audit and we'll show you where growth is leaking and what we'd do first.",
    },
    {
      question: "Do you understand industry rules for advertising?",
      answer:
        "Yes. We plan campaigns within the rules that apply to your sector — such as NMC guidelines for healthcare, TG RERA requirements for real estate and ASCI's code for all advertisers — along with Google's and Meta's own ad policies.",
    },
    {
      question: "How do we get started?",
      answer:
        "Request a free growth audit. We review your website, social channels and ads, then share the three fastest wins for your business.",
    },
  ],
}

export const industryFaqsBySlug: Record<string, IndustryFaqBlock> = {
  healthcare,
  restaurants,
  salons,
  education,
  "real-estate-furniture": realEstate,
  "d2c-retail": d2c,
  "b2b-technology": b2b,
}
