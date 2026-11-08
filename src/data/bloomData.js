/**
 * BlooM Store & Community Data
 * Exact content, curated high-resolution photography, reviews, and blog articles
 */

export const BLOOM_PLANTS_COLLECTION = [
  {
    id: "indoor-plants",
    category: "Indoor Plants",
    tagline: "Purify your space, naturally.",
    count: "48 varieties",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80", // Lush Monstera in ceramic pot
    description: "Lush tropical foliage selected to thrive in indoor light and purify your home's air.",
    featuredItems: [
      { name: "Monstera Deliciosa", price: "$48", light: "Bright Indirect", care: "Easy", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80" },
      { name: "Fiddle Leaf Fig", price: "$65", light: "Bright Filtered", care: "Moderate", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80" },
      { name: "Snake Plant Laurentii", price: "$36", light: "Any Light", care: "Very Easy", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "succulents",
    category: "Succulents",
    tagline: "Small plants, big joy.",
    count: "32 varieties",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80", // Minimalist ceramic pots with succulents
    description: "Charming, sculptural plants that store water in their fleshy leaves, requiring minimal attention.",
    featuredItems: [
      { name: "Echeveria Elegans", price: "$18", light: "Direct Sun", care: "Low", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { name: "Jade Plant (Crassula)", price: "$24", light: "Bright Light", care: "Low", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80" },
      { name: "Zebra Haworthia", price: "$16", light: "Indirect Sun", care: "Very Low", image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "low-maintenance",
    category: "Low Maintenance",
    tagline: "Beautiful, without the extra work.",
    count: "26 varieties",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80", // Sunny potted indoor plant
    description: "Hardy, resilient green companions that forgive missed waterings and thrive on neglect.",
    featuredItems: [
      { name: "ZZ Plant (Zamioculcas)", price: "$42", light: "Low to High", care: "Zero Fuss", image: "https://images.unsplash.com/photo-1632422207908-1f19614f85e5?auto=format&fit=crop&w=600&q=80" },
      { name: "Cast Iron Plant", price: "$52", light: "Deep Shade", care: "Indestructible", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80" },
      { name: "Peace Lily", price: "$34", light: "Medium Indirect", care: "Communicative", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "hanging-plants",
    category: "Hanging Plants",
    tagline: "Bring life to new heights.",
    count: "19 varieties",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80", // Hanging macrame planter
    description: "Cascading vines and trailing greenery that draw the eye upward and soften high shelves.",
    featuredItems: [
      { name: "Golden Pothos in Macrame", price: "$32", light: "Moderate", care: "Easy", image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" },
      { name: "String of Pearls", price: "$28", light: "Bright Direct", care: "Light Water", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { name: "English Ivy Trailing", price: "$26", light: "Cool Indirect", care: "Moderate", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" }
    ]
  }
];

export const BLOOM_FEATURES = [
  {
    icon: "leaf",
    title: "Curated Collection",
    desc: "Handpicked plants for every space."
  },
  {
    icon: "planter",
    title: "Stylish Planters",
    desc: "Modern designs to suit your home."
  },
  {
    icon: "book",
    title: "Expert Guidance",
    desc: "Simple tips for healthier plants."
  },
  {
    icon: "truck",
    title: "Safe Delivery",
    desc: "Carefully packed, right to your door."
  },
  {
    icon: "sprout",
    title: "A Greener Tomorrow",
    desc: "Together for a healthier planet."
  }
];

export const BLOOM_COMMUNITY_REVIEWS = [
  {
    id: 1,
    quote: "BlooM made plant care so simple! My home feels brighter and healthier already.",
    author: "Ayesha K.",
    role: "Verified Buyer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    purchased: "Monstera Deliciosa & Ceramic Stand"
  },
  {
    id: 2,
    quote: "Beautiful plants, easy ordering process, and amazing quality. Highly recommended!",
    author: "Rohan D.",
    role: "Verified Buyer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    purchased: "Low Maintenance Plant Bundle"
  },
  {
    id: 3,
    quote: "The app is a game changer! I never forget to water my plants anymore.",
    author: "Nadia S.",
    role: "Verified Buyer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    purchased: "Succulent Trio & App Subscriber"
  }
];

export const BLOOM_BLOG_ARTICLES = [
  {
    id: "easy-plants-beginners",
    title: "5 Easy Plants for Beginners",
    excerpt: "Start your green journey with these low-maintenance favorites.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    category: "Beginner Guide"
  },
  {
    id: "choose-right-planter",
    title: "How to Choose the Right Planter",
    excerpt: "Find the perfect match for your plants and your style.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    category: "Design & Style"
  },
  {
    id: "create-calm-workspace",
    title: "Create a Calm Workspace",
    excerpt: "Plants that boost focus and productivity.",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80",
    readTime: "3 min read",
    category: "Wellness"
  }
];
