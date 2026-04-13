export interface BoatItem {
  name: string;
  description: string;
  href: string;
  image: string;
  tag: string;
  tagColor: string;
}

export interface BoatCategory {
  title: string;
  description: string;
  href: string;
  image: string;
  boats: BoatItem[];
}

export const boatCategories: BoatCategory[] = [
  {
    title: "Healthcare Boats",
    description: "Bringing world-class clinical care to the water — diagnostics, mental health, oncology, dermatology, and vision services.",
    href: "/boats/healthcare",
    image: "/images/Primary_CareBoat.png",
    boats: [
      {
        name: "Primary Care & Diagnostics",
        description: "Full clinic with two exam rooms, chronic disease management, blood draws, EKGs, and telehealth hub.",
        href: "/boats/primary-care",
        image: "/images/Primary_CareBoat.png",
        tag: "Healthcare",
        tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
      },
      {
        name: "Mental Health Boat",
        description: "Powered by Mentavi Health. Soundproofed counseling rooms, private check-in, rooftop yoga pavilion.",
        href: "/boats/mental-health",
        image: "/images/Mental_Health.png",
        tag: "Wellness",
        tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
      },
      {
        name: "Oncology Boat",
        description: "Cancer screenings, early detection, telehealth, and low-acuity infusion care with NorthStar Healthcare.",
        href: "/boats/oncology",
        image: "/images/Oncology_Boat.png",
        tag: "Specialty Care",
        tagColor: "bg-purple-600/90 text-white shadow-purple-500/50 shadow-lg",
      },
      {
        name: "Dermatology Boat",
        description: "Skin cancer screenings on main deck, medical aesthetics and skin wellness spa on second floor.",
        href: "/boats/dermatology",
        image: "/images/Dermatology_Boat.png",
        tag: "Dual-Purpose",
        tagColor: "bg-emerald-600/90 text-white shadow-emerald-500/50 shadow-lg",
      },
      {
        name: "Vision Care Boat",
        description: "Optometry clinic with digital retinal imaging and diabetic retinopathy screening.",
        href: "/boats/vision-care",
        image: "/images/vision_Boat.png",
        tag: "Healthcare",
        tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
      },
    ],
  },
  {
    title: "Business & Lifestyle Boats",
    description: "Premium floating storefronts, dining, and investment opportunities on the waterfront.",
    href: "/boats/business",
    image: "/images/7.png",
    boats: [
      {
        name: "Vision Wear Boutique",
        description: "Curated optical boutique — prescription frames, sunglasses, readers. Rooftop deck for natural light testing.",
        href: "/boats/vision-wear-boutique",
        image: "/images/vision_Boat.png",
        tag: "Retail",
        tagColor: "bg-amber-600/90 text-black shadow-amber-400/50 shadow-lg",
      },
      {
        name: "Live-Work Boat",
        description: "Clinical practice + private waterfront residence. Ideal E-2 Treaty Investor qualifying asset.",
        href: "/boats/live-work",
        image: "/images/5.png",
        tag: "E-2 Investor",
        tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
      },
      {
        name: "Culinary Boat",
        description: "Triple-purpose: community nutrition classes, waterfront restaurant, and private Chef's Table.",
        href: "/boats/culinary",
        image: "/images/7.png",
        tag: "Lifestyle",
        tagColor: "bg-amber-600/90 text-black shadow-amber-400/50 shadow-lg",
      },
    ],
  },
  {
    title: "Studio & Innovation",
    description: "Creative spaces for visionaries, creators, and innovators on the water.",
    href: "/boats/studio-hq",
    image: "/images/studio_boat.png",
    boats: [
      {
        name: "The Innovation Boat",
        description: "Podcast studio, video production, social media workspace. Partnered with FGCU.",
        href: "/boats/studio",
        image: "/images/studio_boat.png",
        tag: "Creative",
        tagColor: "bg-pink-600/90 text-white shadow-pink-500/50 shadow-lg",
      },
    ],
  },
  {
    title: "Hotel & Wellness Retreats",
    description: "Luxury waterfront accommodations, spa treatments, and immersive wellness programming.",
    href: "/boats/hotel-retreats",
    image: "/images/boutique_hotel_final.png",
    boats: [
      {
        name: "Hotel Boat",
        description: "Waterfront resort experience managed by Lum'ais. Spa, retreats, and corporate events.",
        href: "/boats/boutique-hotel",
        image: "/images/boutique_hotel_final.png",
        tag: "Hospitality",
        tagColor: "bg-purple-600/90 text-white shadow-purple-500/50 shadow-lg",
      },
      {
        name: "Spa Boat",
        description: "Luxury spa treatments on the water — massage, hydrotherapy, steam rooms, and relaxation lounges with waterfront views.",
        href: "/boats/spa",
        image: "/images/spa_boat_interior.png",
        tag: "Wellness",
        tagColor: "bg-rose-600/90 text-white shadow-rose-500/50 shadow-lg",
      },
      {
        name: "Wellness Retreat Boat",
        description: "Immersive wellness programming — yoga, mindfulness, nutrition, and spa treatments on the water.",
        href: "/boats/wellness-retreat",
        image: "/images/Wellness_Retreat_Boat.png",
        tag: "Wellness",
        tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
      },
    ],
  },
];