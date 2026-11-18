// ---------------------------------------------------------------------------
// CONȚINUTUL SITE-ULUI — toate textele, prețurile, linkurile și imaginile.
// Textele sunt preluate de pe reflectiontalks.my.canva.site (cu greșelile de
// tipar evidente corectate). Nu este nevoie să atingi vreo componentă.
// ---------------------------------------------------------------------------

// Imaginile sunt încă servite de pe site-ul Canva. Pentru producție, descarcă-le
// în public/images/ și schimbă ASSETS în '/images/'.
const ASSETS = 'https://reflectiontalks.my.canva.site/_assets/media/'

// focus = punctul din poză care rămâne în centrul cadrului (object-position),
// zoom = cât de mult mărim poza în cadru (decupajul din Canva).
export type Photo = { src: string; alt: string; focus?: string; zoom?: number }

export const images = {
  hero: {
    src: `${ASSETS}acde6a2699e1f02d686dcf1b8a124d8d.jpg`,
    alt: 'Portrait of Sabina Oulham',
    focus: '38% 62%',
    zoom: 1.7,
  },
  banner: {
    src: `${ASSETS}5206cb3ca8b49031f356eecc8d966eed.jpg`,
    alt: 'Sabina Oulham smiling, hand in her hair',
    focus: '50% 57%',
  },
  gifts: {
    src: `${ASSETS}5206cb3ca8b49031f356eecc8d966eed.jpg`,
    alt: 'Sabina Oulham smiling softly',
    focus: '53% 62%',
    zoom: 1.5,
  },
  destiny: {
    src: `${ASSETS}1a319c0553d9d2a10e45ae4114a73436.jpg`,
    alt: 'Sabina Oulham blowing a kiss',
    focus: '53% 68%',
    zoom: 1.6,
  },
  community: {
    src: `${ASSETS}7d91db92f51b13428350471f56ef9943.jpg`,
    alt: 'Close-up portrait of Sabina Oulham',
    focus: '33% 62%',
    zoom: 1.6,
  },
  podcast: {
    src: `${ASSETS}ac4e73f4497cf0be422935a6468fdbc6.jpg`,
    alt: 'Sabina Oulham, podcast host',
    focus: '53% 62%',
    zoom: 1.5,
  },
  contact: {
    src: `${ASSETS}69dead92ca53deebd9c60bdf5baed820.jpg`,
    alt: 'Sabina Oulham looking into the camera',
    focus: '18% 54%',
    zoom: 1.4,
  },
  signature: `${ASSETS}28353acc1061a564242074c6c78b57a1.png`,
  family: [
    {
      src: `${ASSETS}e192498bc37f7ee92f7cda6b88f04fc7.jpg`,
      alt: 'Sabina smiling, sitting in the grass',
      focus: '50% 30%',
    },
    {
      src: `${ASSETS}ef7ff1b12027486b45845d4583343e38.jpg`,
      alt: 'One of Sabina’s children in profile',
      focus: '42% 35%',
    },
    {
      src: `${ASSETS}294cd802fceeeea0e64e0562c256b1ad.jpg`,
      alt: 'One of Sabina’s children smiling outdoors',
      focus: '67% 22%',
    },
    {
      src: `${ASSETS}f23d3ad51fdbbbe46a39ea60123721c8.jpg`,
      alt: 'One of Sabina’s children in a dark jacket',
      focus: '45% 35%',
    },
    {
      src: `${ASSETS}7a36611264f70dbc7c7ad7d8b95351c8.jpg`,
      alt: 'Sabina’s children together, making peace signs',
      focus: '55% 45%',
    },
  ] satisfies Photo[],
} satisfies Record<string, Photo | Photo[] | string>

export const brand = {
  name: 'ReflectionTalks',
  person: 'Sabina Oulham',
  quote: 'Just one glimpse in an honest Reflection is needed to open up the Gateway to our natural Self.',
}

export const contact = {
  bookingEmail: 'talkswithreflection@gmail.com',
  personalEmail: 'sabinaoulham@gmail.com',
  instagram: 'https://www.instagram.com/sabinaoulham',
  instagramHandle: '@sabinaoulham',
}

export const mailto = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`

export const links = {
  checkIn: mailto(contact.bookingEmail, 'Free Check-in Call'),
  community: mailto(contact.personalEmail, 'Join the Monthly Community'),
  destiny: mailto(contact.bookingEmail, 'Your Next Destiny Program'),
  newsletter: mailto(contact.personalEmail, 'Monthly newsletter sign-up'),
  team: mailto(contact.personalEmail, 'Request for the ReflectionTalks team'),
}

export const nav = [
  { to: '/', label: 'Welcome' },
  { to: '/gifts', label: 'My Gifts to You' },
  { to: '/destiny', label: 'Your Next Destiny' },
  { to: '/community', label: 'Monthly Community' },
  { to: '/podcast', label: 'PodcastTalks' },
  { to: '/contact', label: 'Get in Touch' },
]

// ---------------------------------------------------------------------------
// WELCOME
// ---------------------------------------------------------------------------

export const welcome = {
  intro: [
    'A place I created especially for you to experience and to deepen your inner calmness and peace.',
    'I believe we all desire this same ‘thing’. It’s like a natural pull back to your Self. A sense of feeling Home, Alive and Free again.',
    'I designed this place to serve you to the best of my ability. Different angles, perspectives and forms will be shared to find your perfect match in recognising and elevating your Lifepath — directly, and by bringing this Gift into the world.',
    'So, let’s do this. You are ready. For sure! See you on the inside.',
  ],
  offers: [
    {
      to: '/gifts',
      eyebrow: '1:1 guidance',
      title: 'My Gifts to You',
      text: 'Personal trajectories — from a single talk to nine weeks side by side.',
    },
    {
      to: '/destiny',
      eyebrow: '6-week group program',
      title: 'Your Next Destiny',
      text: 'Bring your future desires and dreams to the Here and Now.',
    },
    {
      to: '/community',
      eyebrow: 'Membership',
      title: 'Monthly Community',
      text: 'MasterTalks, live Q&A and daily inspiration with like-minded people.',
    },
  ],
}

export const lifepath = {
  greeting: 'Hey Sweet ♡ Friends,',
  intro:
    'I would love to share a bit of my personal Lifepath, my personal growth & development areas, and how this brought me to my Lifework. My Lifepath has been formed around mainly three pillars.',
  pillars: [
    {
      number: 'I',
      title: 'Woman',
      text: [
        'The first one is being a Woman — figuring out what it means to be a woman at all, and following her intuition despite the contrast embedded in society. Yes, I tended to be and act differently.',
        'And yet also, most of the time I acted out of fear, confronted with my survival mechanisms, where controlling and trying too hard seemed to be the solution instead of just feeling and calming down my nervous system. This mirrored strongly in the type of relationships I attracted around me.',
      ],
    },
    {
      number: 'II',
      title: 'Motherhood',
      text: [
        'My second pillar has its exclusive focus on Motherhood. When stepping into motherhood my journey accelerated immensely. I became aware of my behaviour more sharply. I decided to go all in — and in the meantime held all lines of responsibility at the same time.',
        'An undoable job, which eventually led to more precise decisions and a higher level of self-care. Knowing deeply that this would have the necessary consequences, mostly for the ones closest to me.',
        'In 2018 I received my call into the Dark, also known as restoring the connection with my Inner Feminine Wisdom — not knowing I was pregnant with my fifth child, yet fully informed by him clearly. From then on I followed more sharply than ever and stepped into my Mission: the call to support Humanity.',
      ],
    },
    {
      number: 'III',
      title: 'Creativity',
      text: [
        'The last couple of years my focus has intensified on the teachings of the Direct Path of Awakening. Learning and remembering what it means to be Me, how to keep opening up and freeing myself, and aligning to the best of my ability with the Higher Intelligence, so to say.',
        'And that’s where my third pillar comes in: bringing in Creativity to the max. I love to sing, create songs in the moment, guide family concerts, inspire and support groups of people — and be creative in how to solve all kinds of things. Yup, that’s Me!',
      ],
    },
  ],
  closing: [
    'I hope I could inspire you with my experience so far. Looking forward to what comes next, and to be of support to You to make life a smoother, chiller and the most Loving event.',
    'As it’s meant to be.',
  ],
}

// ---------------------------------------------------------------------------
// MY GIFTS TO YOU
// ---------------------------------------------------------------------------

export const gifts = {
  lead: 'One of the most precious gifts we can give ourselves in life is to bring all of our attention inward, and to have someone at your side who supports you in the ‘right’ direction.',
  body: [
    'My guidance is aimed at tracking, together with you, what your highest and brightest beneficial pathway is.',
    'You can expect directness, honesty, clarity and a lot of laughter while we deconstruct and unravel the layers to uncover your true Self as smoothly and instantly as possible.',
  ],
  forWhom:
    'For the eternal beginner and the advanced practitioner. For everyone who feels the call, is committed to go all in, and is open to experience new levels in her/himself.',
  checkIn:
    'During this 20-minute call we get to know each other. We explore where you are at, and which possibility would be the perfect match for you if you feel like getting on board with me.',
  topicsIntro:
    'The main thread is the recognition of Self. From this centrepoint we make clear which topics are yours, and which are your Gifts the world is waiting for.',
  topics: [
    'Intuitive and Emotional Awareness',
    'Deconstructing Family / Lineage Patterns',
    'Natural Parenting',
    'Integrity',
    'Trigger Awareness',
    'Emotional Maturity',
    'Clear and Connected Communication',
    'True and Honest Living',
    'Nervous System Regulation',
    'Physical Awareness — German New Medicine Perspective',
    'Instant healing / dissolving thoughts',
    'Self-authority',
    'Following the Highest Excitement',
  ],
  forms: [
    'Dialogue',
    'Awareness exercises, clarity-of-mind training',
    'Dissolving triggers',
    'Breathing exercises',
    'Reframe / Rewiring / Reprogramming mind techniques like EFT',
    'Guided meditations',
  ],
  trajectoriesIntro:
    'Three types of trajectories — each very powerful on its own, yet different in approach and timespan. Pick the one you connect with most. Uncertain? Book the Free Check-in Call first, then decide what fits you best.',
  trajectories: [
    {
      title: 'The ONE Talk',
      duration: '1 session · 1.5 hours',
      text: 'Share your desire or theme upfront. During the session I tune in on where you are at, and we dive into whatever wants to be touched upon. Very helpful when you feel ‘stuck’ or need an instant reflection on a situation. Afterwards you receive the recording, and we close via email to distil the ‘golden nuggets’.',
      includes: [
        'One session of 1.5 hours',
        'Recording of the session',
        'Email closure',
        '50% off your first month of the Monthly Community',
      ],
      price: 110,
      launchPrice: 85,
      subject: 'Booking: The ONE Talk',
    },
    {
      title: 'Three Days ~ Three Waves',
      duration: '3 sessions · 1.5 hours each',
      text: 'Three moments in a row where we unravel and deconstruct specific themes or patterns you bring up — three powerful cleansing waves. After the first two sessions you receive a clear message to work with, as we build momentum towards the last one. Expect great clarity that will change your life for the better.',
      includes: [
        'Three sessions of 1.5 hours',
        'Practices and exercises',
        'Recorded sessions',
        'One month of free access to the Monthly Community',
      ],
      price: 250,
      launchPrice: 150,
      subject: 'Booking: Three Days ~ Three Waves',
      featured: true,
    },
    {
      title: 'Your Lifepath, YOUR Gift',
      duration: '9 weeks · 9 sessions',
      text: 'For a more fundamental transformation. For nine weeks I walk by your side, with in-the-moment check-ins between sessions. Your day-to-day baseline will be fully cleared out. This asks commitment and courage — and once you find the rhythm, your lifepath will support you, big time.',
      includes: [
        'Nine sessions of one hour',
        'Full support in between sessions',
        'Practices and exercises',
        'Recorded sessions',
        'Three months of free access to the Monthly Community',
      ],
      price: 1250,
      launchPrice: 555,
      subject: 'Booking: Your Lifepath, YOUR Gift',
    },
  ],
}

// ---------------------------------------------------------------------------
// YOUR NEXT DESTINY PROGRAM
// ---------------------------------------------------------------------------

export const destiny = {
  questions: [
    'What if your Destiny is not a place somewhere in the future?',
    'What if you were able to bring your future desires and dreams to the Here and Now?',
    'What if you were able to instantly live your Life to its fullest potential?',
  ],
  lead: 'Your Next Destiny is a program that guides you directly to your highest potential available. Within six weeks you go through the phases to rearrange your inner processes — to realise the Future is Now, and only Now.',
  expect: [
    'Receive clarity on your Future Vision',
    'Learn how to hold your Expansion',
    'Navigate from your higher potential',
    'Take back your Ownership fully',
    'Raise your Awareness to the most epic level',
    'Let go of your small ‘personal’ self',
    'Live from it daily, in every aspect of your life',
  ],
  motto: 'No more setbacks. Simple. Joyful. Clear. Direct.',
  forWhom: 'For the Ones ready to take this gentle — and most powerful — leap ever.',
  format: [
    'Six weeks, with six weekly group sessions',
    'Unlimited coaching by the ReflectionTalks team',
    'Reflections, activations, practices & exercises',
    'Private group space',
    'ReflectionFriends',
  ],
  start: 'We take off in January.',
  seats: 8,
  price: 450,
  earlyPrice: 297,
  earlyUntil: '1 December',
}

// ---------------------------------------------------------------------------
// MONTHLY COMMUNITY
// ---------------------------------------------------------------------------

export const community = {
  lead: 'The power behind a like-minded community is incredible. It’s in our innate being that we want to connect with others.',
  motto: 'We feel it. We know it. We simply need it.',
  body: [
    'If we consciously all want the same, for ourselves and for the other, something magical starts to happen — at quite an accelerated pace, if we like. More Intelligence comes through while aimed sharply on Integrity, and embodiment is immediate when we hold each other accountable.',
    'In our Monthly Community we gather, make new friendships, respect, hold and support each other. Most of all, we encourage each other to step into that higher version of ourselves. What you don’t see, others will mirror back. It’s in the Reflection that true power hides. Use it wisely!',
  ],
  themeNote:
    'Every month is designed around a specific theme — our focus point, which we activate and deepen while exploring different angles and perspectives.',
  includes: [
    'MasterTalk designed around the theme',
    'Live Q & A session',
    'Unlimited coaching in the Community Space',
    'Practices and exercises',
    'Daily inspirations & activations',
    'Community Space with like-minded people',
    'Extra bonus discounts on personal coaching',
  ],
  price: 25,
  bundles: [
    { months: 3, price: 55, normal: 75 },
    { months: 6, price: 111, normal: 150 },
  ],
}

// ---------------------------------------------------------------------------
// PODCAST
// ---------------------------------------------------------------------------

export const podcast = {
  lead: 'Natural human experiences cover it all.',
  body: [
    'It’s in our daily lives we meet ourselves and face the challenges.',
    'It’s in our shared true stories we recognise, lift each other up and simply thrive.',
    'It’s in our connection with each other we become unstoppable.',
  ],
  episodes: [
    {
      number: 1,
      title: 'What does it mean to be ‘carried’ by life?',
      subtitle: 'The collective wound of ‘trying too hard’',
    },
    {
      number: 2,
      title: 'The Power of Receiving',
      subtitle: 'The hidden power of our feminine aspect',
    },
    {
      number: 3,
      title: 'The Gift of a Physical Catalyst',
      subtitle: 'The truth behind diseases',
    },
  ],
}
