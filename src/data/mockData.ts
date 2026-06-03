export interface Program {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  duration: string;
  trainer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  benefits: string[];
  schedule: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  certifications: string[];
  rating: number;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ScheduleClass {
  id: string;
  className: string;
  trainerName: string;
  time: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  category: 'strength' | 'cardio' | 'yoga' | 'crossfit' | 'hiit';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'interior' | 'workout' | 'equipment' | 'trainers';
  size: 'small' | 'tall' | 'wide';
}

// ----------------------------------------------------
// Mock Data Implementation
// ----------------------------------------------------

export const STATS = [
  { value: 5000, label: "Active Members", suffix: "+" },
  { value: 25, label: "Certified Trainers", suffix: "+" },
  { value: 1200000, label: "Calories Burned", suffix: "M+" },
  { value: 98, label: "Success Stories", suffix: "%" }
];

export const PROGRAMS: Program[] = [
  {
    id: "weight-training",
    title: "Weight Training",
    shortDesc: "Sculpt your physique, build lean muscle mass, and increase absolute strength under professional guidance.",
    longDesc: "Our progressive overload bodybuilding and strength training focus on absolute form correctness, customized set/rep schemes, and recovery strategies. Learn compound lift mechanics and target lagging muscle groups with isolated variations.",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600",
    duration: "60 mins",
    trainer: "Marcus Vance",
    difficulty: "Intermediate",
    benefits: [
      "Accelerated muscular hypertrophy",
      "Enhanced absolute physical strength",
      "Optimized bone density and posture",
      "Boosted basal metabolic rate"
    ],
    schedule: "Mon, Wed, Fri - 08:00 AM & 06:00 PM"
  },
  {
    id: "fat-loss",
    title: "Fat Loss & Shred",
    shortDesc: "High-intensity metabolic conditioning designed to incinerate calories and reveal high definition.",
    longDesc: "A hybrid combination of resistance intervals, cardiovascular circuits, and active recovery intervals designed to elevate your heart rate and trigger the post-workout afterburn effect (EPOC).",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
    duration: "45 mins",
    trainer: "Sarah Jenkins",
    difficulty: "Beginner",
    benefits: [
      "High caloric expenditure during & post workout",
      "Preservation of lean muscle tissue",
      "Enhanced cardiovascular efficiency",
      "Accelerated visceral fat reduction"
    ],
    schedule: "Tue, Thu, Sat - 07:00 AM & 07:00 PM"
  },
  {
    id: "cardio",
    title: "Cardio Conditioning",
    shortDesc: "Build exceptional stamina and cardiovascular health through dynamic zone-based endurance sessions.",
    longDesc: "Incorporate specialized rowing, cycling, running, and bodyweight drills focused on aerobic capacity (Vo2 Max) and anaerobic threshold training. Great for building stamina and cardiac health.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=600",
    duration: "50 mins",
    trainer: "Elena Rostova",
    difficulty: "Beginner",
    benefits: [
      "Increased maximum oxygen uptake (VO2 Max)",
      "Strengthened heart and respiratory muscles",
      "Improved endurance and stamina levels",
      "Stress reduction and mood elevation"
    ],
    schedule: "Mon, Wed, Thu - 09:00 AM & 05:00 PM"
  },
  {
    id: "crossfit",
    title: "CrossFit / HYROX",
    shortDesc: "Constantly varied, high-intensity functional movements designed to build elite athletic capacity.",
    longDesc: "Train like a competitive athlete. Combining elements of Olympic weightlifting, gymnastics, and high-intensity conditioning, our CrossFit zone challenges mental grit, functional mobility, and explosive raw power.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
    duration: "60 mins",
    trainer: "Coach Jaxson Reed",
    difficulty: "Advanced",
    benefits: [
      "Elite level functional conditioning",
      "Olympic weightlifting technique mastery",
      "Agility, flexibility, and speed enhancement",
      "Unmatched mental fortitude"
    ],
    schedule: "Mon, Tue, Thu, Fri - 06:00 AM & 08:00 PM"
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    shortDesc: "Restore spinal alignment, improve deep core flexibility, and achieve optimal mental clarity.",
    longDesc: "A structured flow combining Vinyasa, Hatha, and deep restorative stretching techniques. Focus on pranayama (breathwork), mental clarity, core stabilization, and muscular release.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
    duration: "75 mins",
    trainer: "Elena Rostova",
    difficulty: "Beginner",
    benefits: [
      "Significantly improved joint mobility",
      "Deep core stabilization and alignment",
      "Accelerated recovery of fatigued muscles",
      "Stress relief and autonomic nervous system regulation"
    ],
    schedule: "Tue, Thu, Sun - 08:00 AM & 06:00 PM"
  },
  {
    id: "personal-training",
    title: "Elite Personal Training",
    shortDesc: "1-on-1 performance coaching, nutritional mapping, and bespoke workout programming.",
    longDesc: "Work directly with an elite level specialist. This includes full biomechanical movement screens, custom nutritional plans, lifestyle tracking, and highly tailored coaching sessions optimized for your unique goals.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600",
    duration: "Flexible",
    trainer: "All Master Trainers",
    difficulty: "Intermediate",
    benefits: [
      "Bespoke routine mapping & biomechanics check",
      "Personalized macro & micro nutrition guidelines",
      "Maximum accountability and guidance",
      "Flexible booking and custom schedule planning"
    ],
    schedule: "By Appointment Only"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    specialty: "Bodybuilding & Strength",
    experience: "8+ Years",
    certifications: ["NASM-PES", "IKFF Kettlebell Master L2", "USAW Weightlifting L1"],
    rating: 4.9,
    bio: "Former professional natural bodybuilder specializing in biomechanics, muscle hypertrophy, and heavy barbell lifts.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    }
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    specialty: "Fat Loss & HIIT",
    experience: "6 Years",
    certifications: ["ISSA CFT", "FMS Functional Movement Screen", "Precision Nutrition L1"],
    rating: 4.8,
    bio: "Passionate about high-intensity functional circuits, metabolic nutrition plans, and habit coaching to transform lifestyles.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "jaxson-reed",
    name: "Jaxson Reed",
    specialty: "CrossFit & Athletics",
    experience: "10 Years",
    certifications: ["CrossFit Level 3 Certified", "Gymnastics Specialist", "WOD Design Master"],
    rating: 5.0,
    bio: "Elite athlete, competitive CrossFit coach, and specialist in agility drills, gymnastics power, and metabolic resilience.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    specialty: "Yoga & Flexibility",
    experience: "7+ Years",
    certifications: ["RYT-500 Advanced Yoga Alliance", "Functional Range Conditioning (FRC)", "Mindfulness Coach"],
    rating: 4.9,
    bio: "Integrates breathing mechanics, mobility sequencing, and core activation patterns to optimize recovery and flexibility.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 29,
    priceYearly: 279,
    description: "Essential access for individuals focused on independent workout routines.",
    features: [
      "Access to premium gym floor & equipment",
      "Full locker room, shower, & sauna access",
      "1x Complimentary biomechanical assessment",
      "High-speed club Wi-Fi and parking access",
      "Gym open 24/7"
    ],
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 59,
    priceYearly: 569,
    description: "The ultimate standard. Perfect for combining classes and independent training.",
    features: [
      "All features of the Basic Plan",
      "Unlimited access to group classes (CrossFit, Yoga, HIIT)",
      "2x Monthly 1-on-1 personal training sessions",
      "Precision Nutrition macro-nutrient custom plan",
      "10% Discount at the Titan Fuel Smoothie Bar",
      "Guest pass allowed (1 guest per week)"
    ],
    isPopular: true,
    ctaText: "Join Pro"
  },
  {
    id: "elite",
    name: "Elite",
    priceMonthly: 99,
    priceYearly: 959,
    description: "All-inclusive VIP membership with absolute access to master coaches.",
    features: [
      "All features of the Pro Plan",
      "Unlimited 1-on-1 elite coaching (2 sessions/week)",
      "Daily complimentary protein shake from Fuel Bar",
      "Hyperice recovery lounge & massage bed access",
      "Monthly body composition (InBody) analysis",
      "Priority booking for premium masterclasses",
      "Private keycard locker and laundry service"
    ],
    isPopular: false,
    ctaText: "Go Elite"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Christian Bale",
    role: "Member since 2024",
    rating: 5,
    review: "The equipment is outstanding—top-tier hammer strength machines and clean lifting platforms. The trainers here understand periodization and custom bio-programming, which is rare. Titan is a luxury lifting sanctuary.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
  },
  {
    id: "review-2",
    name: "Jessica Chastain",
    role: "Member since 2023",
    rating: 5,
    review: "Transitioned from standard gyms to the Titan Elite plan, and my conditioning has skyrocketed. Having a coach who programs my nutrition and holds me accountable has helped me shred 8% body fat while keeping energy high.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
  },
  {
    id: "review-3",
    name: "Aidan Gallagher",
    role: "Member since 2025",
    rating: 5,
    review: "The community at the morning CrossFit class keeps me motivated. The coaches correct my clean & jerk mechanics on every set. Plus, the cold plunge and steam room recovery facility is absolute heaven post-wod.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What are the operating hours of Titan Fitness Club?",
    answer: "We are open 24/7 for all active members. Staffed hours and trainers are available from 6:00 AM to 10:00 PM on weekdays, and 8:00 AM to 8:00 PM on weekends."
  },
  {
    id: "faq-2",
    question: "Can I try out the gym before purchasing a membership?",
    answer: "Absolutely! We offer a one-day complimentary VIP pass that includes full gym floor access, participation in any scheduled class, and a 15-minute consultation with a trainer. Simply click 'Book Free Trial' on our homepage."
  },
  {
    id: "faq-3",
    question: "Is there a contract lock-in period for memberships?",
    answer: "No. Our monthly plans are billed month-to-month and can be canceled anytime with a 7-day notice before your billing date. Yearly memberships are paid upfront at a heavily discounted rate and cannot be partially refunded."
  },
  {
    id: "faq-4",
    question: "Does the membership include access to the recovery lounge?",
    answer: "The recovery lounge (containing hot saunas, steam rooms, cold plunges, and compression gear) is fully open to Pro and Elite members. Basic members can purchase day passes to the recovery zone at a discount."
  },
  {
    id: "faq-5",
    question: "Do you provide custom diet and meal plans?",
    answer: "Yes, our certified nutritionists work with Pro and Elite members to formulate personalized macro-nutrient targets, hydration guidelines, and grocery lists tailored to bodybuilding, fat loss, or endurance."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
    title: "Premium Gym Floor",
    category: "interior",
    size: "wide"
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    title: "Deadlift Zone",
    category: "workout",
    size: "tall"
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800",
    title: "Hammer Strength Dumbbells",
    category: "equipment",
    size: "small"
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    title: "Yoga Sanctuary",
    category: "interior",
    size: "small"
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800",
    title: "Marcus Vance Coaching",
    category: "trainers",
    size: "tall"
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=800",
    title: "Rogue Cardio Rigs",
    category: "equipment",
    size: "wide"
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800",
    title: "Olympic Lifting Platforms",
    category: "equipment",
    size: "tall"
  },
  {
    id: "gal-8",
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800",
    title: "Sarah Jenkins HIIT Session",
    category: "trainers",
    size: "small"
  }
];

export const SCHEDULE_CLASSES: ScheduleClass[] = [
  // Monday
  { id: "sch-1", className: "Olympic Weightlifting", trainerName: "Marcus Vance", time: "06:00 AM - 07:00 AM", day: "Monday", category: "strength", difficulty: "Advanced" },
  { id: "sch-2", className: "Fat Incineration HIIT", trainerName: "Sarah Jenkins", time: "08:00 AM - 09:00 AM", day: "Monday", category: "hiit", difficulty: "Intermediate" },
  { id: "sch-3", className: "Vinyasa Flow Yoga", trainerName: "Elena Rostova", time: "10:00 AM - 11:15 AM", day: "Monday", category: "yoga", difficulty: "Beginner" },
  { id: "sch-4", className: "Cardio Zone Stamina", trainerName: "Elena Rostova", time: "05:00 PM - 05:50 PM", day: "Monday", category: "cardio", difficulty: "Beginner" },
  { id: "sch-5", className: "CrossFit WOD", trainerName: "Jaxson Reed", time: "07:00 PM - 08:00 PM", day: "Monday", category: "crossfit", difficulty: "Advanced" },

  // Tuesday
  { id: "sch-6", className: "Powerlifting Compound Mechanics", trainerName: "Marcus Vance", time: "07:00 AM - 08:00 AM", day: "Tuesday", category: "strength", difficulty: "Intermediate" },
  { id: "sch-7", className: "Cardio Cycling Endurance", trainerName: "Sarah Jenkins", time: "09:00 AM - 10:00 AM", day: "Tuesday", category: "cardio", difficulty: "Beginner" },
  { id: "sch-8", className: "Hatha Restorative", trainerName: "Elena Rostova", time: "04:30 PM - 05:45 PM", day: "Tuesday", category: "yoga", difficulty: "Beginner" },
  { id: "sch-9", className: "CrossFit Foundations", trainerName: "Jaxson Reed", time: "06:00 PM - 07:00 PM", day: "Tuesday", category: "crossfit", difficulty: "Intermediate" },

  // Wednesday
  { id: "sch-10", className: "Hypertrophy Chest & Arms", trainerName: "Marcus Vance", time: "08:00 AM - 09:00 AM", day: "Wednesday", category: "strength", difficulty: "Intermediate" },
  { id: "sch-11", className: "Metabolic Shred Circuit", trainerName: "Sarah Jenkins", time: "11:00 AM - 12:00 PM", day: "Wednesday", category: "hiit", difficulty: "Intermediate" },
  { id: "sch-12", className: "Core & Balance Flow", trainerName: "Elena Rostova", time: "05:00 PM - 06:00 PM", day: "Wednesday", category: "yoga", difficulty: "Beginner" },
  { id: "sch-13", className: "CrossFit WOD Hero", trainerName: "Jaxson Reed", time: "07:00 PM - 08:00 PM", day: "Wednesday", category: "crossfit", difficulty: "Advanced" },

  // Thursday
  { id: "sch-14", className: "Glute & Leg Hypertrophy", trainerName: "Sarah Jenkins", time: "07:00 AM - 08:00 AM", day: "Thursday", category: "strength", difficulty: "Intermediate" },
  { id: "sch-15", className: "VO2 Max Rower Cardio", trainerName: "Elena Rostova", time: "09:00 AM - 10:00 AM", day: "Thursday", category: "cardio", difficulty: "Beginner" },
  { id: "sch-16", className: "Hot Vinyasa Flow", trainerName: "Elena Rostova", time: "05:30 PM - 06:45 PM", day: "Thursday", category: "yoga", difficulty: "Intermediate" },
  { id: "sch-17", className: "CrossFit Gymnastics Power", trainerName: "Jaxson Reed", time: "08:00 PM - 09:00 PM", day: "Thursday", category: "crossfit", difficulty: "Advanced" },

  // Friday
  { id: "sch-18", className: "Olympic Pulls & Squats", trainerName: "Marcus Vance", time: "06:00 AM - 07:00 AM", day: "Friday", category: "strength", difficulty: "Advanced" },
  { id: "sch-19", className: "Full Body Shred Tabata", trainerName: "Sarah Jenkins", time: "08:00 AM - 09:00 AM", day: "Friday", category: "hiit", difficulty: "Intermediate" },
  { id: "sch-20", className: "Pranayama Yoga Stretch", trainerName: "Elena Rostova", time: "10:00 AM - 11:00 AM", day: "Friday", category: "yoga", difficulty: "Beginner" },
  { id: "sch-21", className: "CrossFit Partner WOD", trainerName: "Jaxson Reed", time: "06:00 PM - 07:00 PM", day: "Friday", category: "crossfit", difficulty: "Advanced" },

  // Saturday
  { id: "sch-22", className: "Heavy Deadlift Compound", trainerName: "Marcus Vance", time: "09:00 AM - 10:30 AM", day: "Saturday", category: "strength", difficulty: "Advanced" },
  { id: "sch-23", className: "Weekend Warrior Kettlebells", trainerName: "Sarah Jenkins", time: "11:00 AM - 12:00 PM", day: "Saturday", category: "hiit", difficulty: "Intermediate" },
  { id: "sch-24", className: "Yoga Recovery Flow", trainerName: "Elena Rostova", time: "04:00 PM - 05:15 PM", day: "Saturday", category: "yoga", difficulty: "Beginner" }
];
