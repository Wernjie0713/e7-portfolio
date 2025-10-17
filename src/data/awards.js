export const awards = [
  {
    id: 1,
    title: "1st Runner Up - PayNet Cashless Campus 3.0",
    organization: "PayNet (National Level)",
    year: 2024,
    prize: "RM 50,000",
    category: "Fintech Innovation",
    description: "Secured second place in a national fintech challenge by Paynet for designing an innovative campus digital payment solution. Co-developed and pitched a comprehensive solution for a campus-wide digital payment ecosystem, which was recognised for its technical innovation, business viability, and user-centric design. Awarded a team cash prize of RM 50,000 for the project's high commercial potential and innovation.",
    featured: true,
    image: "/images/awards/paynet-runner-up.jpg", // Placeholder
  },
  {
    id: 2,
    title: "Second Prize - China International College Students' Innovation Competition (Southeast Asia Division)",
    organization: "China International College Students' Innovation Competition",
    year: 2025,
    prize: "RM 5,000",
    category: "International Innovation",
    description: "Awarded second place in the Southeast Asia finals of a major international innovation challenge for a project utilizing advanced technology. Secured a RM 5,000 prize in recognition of the project's creativity and practical application.",
    featured: true,
    image: "/images/awards/china-innovation.jpg", // Placeholder
  },
  {
    id: 3,
    title: "3rd Prize Winner - TheGreatLab Grand Design Challenge",
    organization: "TheGreatLab",
    year: 2022,
    prize: null,
    category: "Engineering & Technology",
    description: "Competed against numerous teams in a national-level challenge focused on innovative engineering and technology design. Awarded for developing a novel solution that demonstrated technical complexity, creativity, and practical application.",
    featured: true,
    image: "/images/awards/greatlab.jpg", // Placeholder
  },
  {
    id: 4,
    title: "Dean's Award",
    organization: "Universiti Teknologi Malaysia (UTM)",
    year: 2022,
    prize: null,
    category: "Academic Excellence",
    description: "Conferred upon graduation for achieving consistent academic excellence and maintaining a position in the top percentile of the faculty.",
    featured: true,
    image: "/images/awards/deans-award.jpg", // Placeholder
  },
];

export const researchGrants = [
  {
    id: 1,
    title: "PayNet Shark Seed Fund - Cashless Campus 3.0",
    organization: "PayNet (National Level)",
    amount: "RM 85,000",
    role: "Team Leader",
    year: 2023,
    status: "Awarded",
  },
  {
    id: 2,
    title: "PayNet Shark Seed Fund - Cashless Campus 4.0",
    organization: "PayNet (National Level)",
    amount: "RM 65,000",
    role: "Team Leader",
    year: 2024,
    status: "Awarded",
  },
];

export const totalGrantAmount = researchGrants.reduce((sum, grant) => {
  const amount = parseInt(grant.amount.replace(/[^\d]/g, ''));
  return sum + amount;
}, 0);

export const featuredAwards = awards.filter(a => a.featured);

