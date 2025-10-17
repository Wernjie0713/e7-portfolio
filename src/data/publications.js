export const publications = [
  {
    id: 1,
    title: "A Conceptual Framework for Malay-English Code-Switched Neural Machine Translation",
    authors: "Wong, Y.K., Huspi, S.H.",
    venue: "Advances in Intelligent Computing Techniques and Applications. IRICT 2023",
    publisher: "Lecture Notes on Data Engineering and Communications Technologies, vol 211. Springer, Cham",
    year: 2024,
    type: "Conference Paper",
    doi: "10.1007/978-3-031-59707-7_5",
    indexed: "Scopus Indexed",
    url: "https://doi.org/10.1007/978-3-031-59707-7_5",
    category: "NLP",
    featured: true,
  },
  {
    id: 2,
    title: "Multi-stage Feature Selection in Identifying Potential Biomarkers for Cancer Classification",
    authors: "Y. K. Wong, W. H. Chan, H. W. Nies and K. A. -L. Moorthy",
    venue: "2022 2nd International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA)",
    location: "Bandung, Indonesia",
    year: 2022,
    type: "Conference Paper",
    pages: "6-11",
    doi: "10.1109/ICICyTA57421.2022.10037807",
    url: "https://doi.org/10.1109/ICICyTA57421.2022.10037807",
    category: "Bioinformatics",
    featured: true,
  },
  {
    id: 3,
    title: "Classification of Gastrointestinal Diseases Using Deep Transfer Learning",
    authors: "W. N. Wong, Y. K. Wong and W. H. Chan",
    venue: "2022 2nd International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA)",
    location: "Bandung, Indonesia",
    year: 2022,
    type: "Conference Paper",
    pages: "156-161",
    doi: "10.1109/ICICyTA57421.2022.10038047",
    url: "https://doi.org/10.1109/ICICyTA57421.2022.10038047",
    category: "Deep Learning",
    featured: false,
  },
  {
    id: 4,
    title: "Comparative Study of Neural Network-based Methods in Classification of ECG",
    authors: "I. T. C. Wong, N. A. A. Kadir, Y. K. Wong, F. K. C. Harun and W. H. Chan",
    venue: "2022 2nd International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA)",
    location: "Bandung, Indonesia",
    year: 2022,
    type: "Conference Paper",
    pages: "17-22",
    doi: "10.1109/ICICyTA57421.2022.10038090",
    url: "https://doi.org/10.1109/ICICyTA57421.2022.10038090",
    category: "Neural Networks",
    featured: false,
  },
];

export const featuredPublications = publications.filter(p => p.featured);

export const publicationsByCategory = publications.reduce((acc, pub) => {
  if (!acc[pub.category]) {
    acc[pub.category] = [];
  }
  acc[pub.category].push(pub);
  return acc;
}, {});

