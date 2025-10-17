export const skills = {
  programming: {
    title: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "Python", level: 95, category: "programming" },
      { name: "Java", level: 75, category: "programming" },
      { name: "C++", level: 70, category: "programming" },
      { name: "PHP", level: 80, category: "programming" },
      { name: "SQL", level: 85, category: "programming" },
      { name: "JavaScript", level: 80, category: "programming" },
    ],
  },
  mlnlp: {
    title: "ML/NLP Frameworks",
    icon: "Brain",
    items: [
      { name: "PyTorch", level: 90, category: "ml" },
      { name: "TensorFlow", level: 85, category: "ml" },
      { name: "Scikit-learn", level: 90, category: "ml" },
      { name: "Hugging Face", level: 95, category: "nlp" },
      { name: "Pandas", level: 95, category: "data" },
      { name: "NumPy", level: 95, category: "data" },
    ],
  },
  web: {
    title: "Web & Database",
    icon: "Globe",
    items: [
      { name: "HTML", level: 90, category: "web" },
      { name: "JavaScript", level: 85, category: "web" },
      { name: "React", level: 80, category: "web" },
      { name: "MySQL", level: 85, category: "database" },
      { name: "Oracle", level: 70, category: "database" },
    ],
  },
  tools: {
    title: "Software & Tools",
    icon: "Wrench",
    items: [
      { name: "Git", level: 90, category: "tools" },
      { name: "Docker", level: 75, category: "tools" },
      { name: "Weka", level: 80, category: "tools" },
      { name: "Jupyter", level: 95, category: "tools" },
      { name: "VS Code", level: 95, category: "tools" },
    ],
  },
};

export const techStack = [
  { name: "Python", logo: "/images/tech/python.svg", category: "Language" },
  { name: "PyTorch", logo: "/images/tech/pytorch.svg", category: "Framework" },
  { name: "TensorFlow", logo: "/images/tech/tensorflow.svg", category: "Framework" },
  { name: "Hugging Face", logo: "/images/tech/huggingface.svg", category: "Platform" },
  { name: "Scikit-learn", logo: "/images/tech/sklearn.svg", category: "Library" },
  { name: "React", logo: "/images/tech/react.svg", category: "Framework" },
  { name: "JavaScript", logo: "/images/tech/javascript.svg", category: "Language" },
  { name: "MySQL", logo: "/images/tech/mysql.svg", category: "Database" },
  { name: "Git", logo: "/images/tech/git.svg", category: "Tool" },
  { name: "Docker", logo: "/images/tech/docker.svg", category: "Tool" },
];

export const expertise = [
  {
    title: "Natural Language Processing",
    description: "Neural Machine Translation, Code-Switching, Text Analysis",
    level: "Expert",
  },
  {
    title: "Machine Learning",
    description: "Deep Learning, Transfer Learning, Model Fine-tuning",
    level: "Expert",
  },
  {
    title: "Data Science",
    description: "Data Analysis, Visualization, Statistical Modeling",
    level: "Advanced",
  },
  {
    title: "Full-Stack Development",
    description: "Web Applications, API Development, Database Design",
    level: "Proficient",
  },
  {
    title: "Bioinformatics",
    description: "Biological Data Analysis, Feature Selection, Classification",
    level: "Advanced",
  },
];

export const allSkills = Object.values(skills).flatMap(category => category.items);

