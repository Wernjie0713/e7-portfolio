export const projects = [
  {
    id: 1,
    title: "Neural Machine Translation for Malay-English Code-Switching",
    category: "Doctoral Research",
    period: "Oct 2022 - Present",
    description: "Developing robust Neural Machine Translation (NMT) models for languages with limited data, with a special focus on handling informal text and linguistic phenomena like code-switching.",
    highlights: [
      "Curated and pre-processed a specialised corpus of over 100,000 sentences from Malaysian social media",
      "Investigating how pre-trained language models can be adapted to understand and process mixed-language data",
      "Exploring and developing novel neural network architectures, particularly RNN based models",
    ],
    technologies: ["Python", "PyTorch", "Pandas", "Transformers", "NLP"],
    status: "ongoing",
    featured: true,
    image: "/images/projects/nmt-research.jpg", // Placeholder
  },
  {
    id: 2,
    title: "PayNet Cashless Campus 3.0 & 4.0",
    category: "Fintech Innovation",
    period: "2023 - 2024",
    description: "Co-developed and pitched comprehensive solutions for campus-wide digital payment ecosystems, recognized for technical innovation, business viability, and user-centric design.",
    highlights: [
      "Secured RM 50,000 prize as 1st Runner Up in PayNet Cashless Campus 3.0 (2024)",
      "Awarded RM 85,000 Shark Seed Fund for Cashless Campus 3.0",
      "Awarded RM 65,000 Shark Seed Fund for Cashless Campus 4.0",
      "Designed innovative campus digital payment solutions with high commercial potential",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Payment Gateway APIs"],
    status: "completed",
    featured: true,
    awards: [
      "1st Runner Up - PayNet Cashless Campus 3.0 (RM 50,000)",
      "Shark Seed Fund 3.0 (RM 85,000)",
      "Shark Seed Fund 4.0 (RM 65,000)",
    ],
    image: "/images/projects/paynet-campus.jpg", // Placeholder
  },
  {
    id: 3,
    title: "Smart Digital Community",
    category: "Research Project",
    period: "Aug 2022 - Oct 2022",
    description: "Developed a Python-based API to automate data extraction and establish seamless connections between disparate research databases, significantly improving data accessibility.",
    highlights: [
      "Automated data extraction between disparate research databases",
      "Performed quantitative bibliometric analysis using R (biblioshiny)",
      "Conducted in-depth analysis of learning analytic systems",
      "Summarised and compared underlying technologies and data architectures",
    ],
    technologies: ["Python", "R", "API Development", "Data Analysis"],
    status: "completed",
    featured: false,
    image: "/images/projects/smart-community.jpg", // Placeholder
  },
  {
    id: 4,
    title: "Multi-stage Feature Selection for Cancer Classification",
    category: "Bioinformatics Research",
    period: "2021 - 2022",
    description: "Developed novel solution demonstrating technical complexity and creativity for identifying potential biomarkers in cancer classification.",
    highlights: [
      "3rd Prize Winner at TheGreatLab Grand Design Challenge (2022)",
      "Competed at national-level challenge focused on innovative engineering and technology design",
      "Applied machine learning techniques to biological data analysis",
    ],
    technologies: ["Python", "Machine Learning", "Bioinformatics", "Feature Selection"],
    status: "completed",
    featured: true,
    awards: ["3rd Prize - TheGreatLab Grand Design Challenge (2022)"],
    image: "/images/projects/cancer-classification.jpg", // Placeholder
  },
];

export const featuredProjects = projects.filter(p => p.featured);

