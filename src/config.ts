export const siteConfig = {
  name: "Venkata Sampath Yelchuri",
  title: "Computer Science Graduate Student | Software Engineering & AI/ML",
  description:
    "MS Computer Science student at the University of Michigan–Flint passionate about building scalable software systems, AI/ML applications, and real-time data pipelines.",
  accentColor: "#2563eb",

  social: {
    email: "yelchuri@umich.edu",
    linkedin: "https://www.linkedin.com/in/venkata-sampath-yelchuri/",
    github: "https://github.com/iAmsAm02",
  },

  aboutMe:
    "I am a Computer Science graduate student at the University of Michigan–Flint with experience in software engineering, machine learning, and distributed systems. I enjoy building scalable backend systems, real-time streaming pipelines, and AI-powered applications. My interests include machine learning, cloud computing, and intelligent software systems.",

  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "Kafka",
    "Docker",
    "AWS",
    "SQL",
    "REST APIs",
  ],

  projects: [
    {
      name: "SentinelStream",
      description:
        "Real-time telemetry pipeline processing thousands of events across microservices using Kafka-compatible streaming and anomaly detection with IsolationForest and adaptive baselines.",
      link: "https://github.com/iAmsAm02",
      skills: ["Python", "Kafka", "Docker", "Prometheus"],
    },
    {
      name: "RAG-Based Notes Chatbot",
      description:
        "Retrieval-Augmented Generation chatbot built using LangChain, HuggingFace embeddings, FAISS vector search, and Mistral-7B for intelligent document-based question answering.",
      link: "https://github.com/iAmsAm02",
      skills: ["Python", "LangChain", "FAISS", "LLMs"],
    },
    {
      name: "SPE Backlog Simulator",
      description:
        "Agile workflow simulator modeling backlog prioritization, sprint planning, cross-team dependencies, and release management for software product engineering workflows.",
      link: "https://github.com/iAmsAm02/spe-backlog-simulator",
      skills: ["JavaScript", "HTML", "CSS", "Agile"],
    },
  ],

  experience: [
    {
      company: "Infyni",
      title: "Software Engineering Intern – AI/ML",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "Designed and developed a GPT-based NLP system using transformer architecture and deployed it following the full software development lifecycle.",
        "Collaborated with senior engineers in an agile environment to improve model performance and optimize token efficiency.",
        "Presented technical progress during weekly standups and translated complex NLP concepts for cross-functional stakeholders.",
        "Debugged and resolved issues in NLP pipelines to ensure reliable and scalable AI system performance.",
      ],
    },
    {
      company: "Infyni",
      title: "Software Engineering Intern – Machine Learning",
      dateRange: "Nov 2021 - Feb 2022",
      bullets: [
        "Implemented supervised learning algorithms including Decision Trees, KNN, and Logistic Regression in Python using object-oriented design.",
        "Preprocessed datasets and validated model outputs while collaborating with engineering teams to deliver ML experiments.",
        "Supported team members by explaining preprocessing techniques and algorithm fundamentals.",
      ],
    },
  ],

  education: [
    {
      school: "University of Michigan – Flint",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2024 - May 2026",
      achievements: [
        "Coursework: Machine Learning, Deep Learning, Advanced Software Engineering",
        "Additional Coursework: Algorithms & Data Structures, Advanced Computer Networks, Database Design",
      ],
    },
  ],
};
