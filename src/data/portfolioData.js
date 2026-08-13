export const portfolioData = {
  personal: {
    name: "Kuntrapaku Mounish Kumar",
    shortName: "Mounish Kumar",
    title: "Information Science Engineering Student | AI & Full-Stack Developer",
    location: "Bangalore, Karnataka, India",
    phone: "+91 9391431325",
    email: "k.mounishkumar17@gmail.com",
    github: "https://github.com/Mounish1701",
    linkedin: "https://www.linkedin.com/in/mounishkumar17",
    resumePdf: "/assets/resume/Kuntrapaku_Mounish_Kumar_Resume.pdf",
    tagline: "Building intelligent applications with AI, RAG, LLMs, and modern web technologies.",
    bio: "Motivated Information Science Engineering student at Cambridge Institute of Technology, Bangalore. Dedicated to building production-ready AI solutions, Retrieval-Augmented Generation (RAG) architectures, and robust full-stack applications. Experienced in fine-tuning Gemma models, building offline AI healthcare applications, and working with modern web stacks.",
    careerObjective: "Motivated and detail-oriented Information Science Engineering student seeking an opportunity to apply technical knowledge in Python, SQL, AI, data handling, and production support. Eager to learn cloud technologies and DevOps practices and contribute to operational excellence in a fast-paced environment."
  },

  quickFacts: [
    { icon: "GraduationCap", label: "Education", detail: "B.E. Information Science Engineering (4th Year)" },
    { icon: "Award", label: "Academic Standing", detail: "CGPA: 8.33 / 10.0" },
    { icon: "MapPin", label: "Location", detail: "Bangalore, Karnataka" },
    { icon: "Brain", label: "Core Focus", detail: "AI, GenAI, Agentic AI & RAG" },
    { icon: "Code2", label: "Development", detail: "Full-Stack & Backend Systems" },
    { icon: "Rocket", label: "Project Status", detail: "Flagship App Deployed on Play Store (Testing)" }
  ],

  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: "Core Language" },
        { name: "Java", level: "OOP & Backend" },
        { name: "SQL", level: "Relational Queries" }
      ]
    },
    {
      name: "AI & Generative AI",
      skills: [
        { name: "LangChain", level: "AI Framework" },
        { name: "LangGraph", level: "Agent Workflow" },
        { name: "RAG", level: "Information Retrieval" },
        { name: "Output Parsers", level: "Structured AI Outputs" },
        { name: "Gemma LLM", level: "Model Fine-Tuning" },
        { name: "Hugging Face", level: "Dataset Fine-tuning" },
        { name: "Offline AI", level: "On-Device Inference" }
      ]
    },
    {
      name: "Web & Backend Technologies",
      skills: [
        { name: "HTML5 & CSS3", level: "Frontend Foundation" },
        { name: "Node.js", level: "Runtime Environment" },
        { name: "Express.js", level: "Server Framework" },
        { name: "EJS", level: "Template Engine" },
        { name: "Next.js", level: "React Framework" },
        { name: "NestJS", level: "Enterprise Backend" },
        { name: "FastAPI", level: "High-Speed Python APIs" },
        { name: "APIs & REST", level: "Service Integration" }
      ]
    },
    {
      name: "Databases & Data Management",
      skills: [
        { name: "SQLite", level: "Embedded Relational DB" },
        { name: "MySQL", level: "Relational Database" },
        { name: "PostgreSQL", level: "Advanced RDBMS" },
        { name: "CRUD Operations", level: "Data Management" }
      ]
    },
    {
      name: "Tools, Platforms & Concepts",
      skills: [
        { name: "Git & GitHub", level: "Version Control" },
        { name: "VS Code", level: "Primary IDE" },
        { name: "Linux Basics", level: "System Environment" },
        { name: "NPM", level: "Package Manager" },
        { name: "Data Processing", level: "Pipelines" },
        { name: "Debugging", level: "Troubleshooting" },
        { name: "Agile Methodology", level: "Iterative Dev" }
      ]
    }
  ],

  projects: [
    {
      id: "sehatcare",
      title: "SehatCare App",
      subtitle: "Offline AI-Powered Smart Healthcare Application",
      isFlagship: true,
      badge: "Flagship Project • Play Store Testing Phase",
      category: "AI & Healthcare",
      shortDescription: "A healthcare management platform integrated with a fine-tuned Gemma AI chatbot running fully offline on-device, featuring 20+ integrated medical and wellness tools.",
      fullDescription: "SehatCare is a groundbreaking healthcare management application integrated with an AI-powered chatbot that responds to user health-related queries, providing instant assistance through a centralized and user-friendly platform. It features a fine-tuned Gemma LLM capable of running fully offline on mobile devices without relying on an active internet connection.",
      problem: "In many areas, reliable internet access is inconsistent, making web-based medical AI assistants inaccessible. Additionally, transmitting sensitive health queries over public networks creates privacy risks.",
      solution: "SehatCare addresses this challenge by running a fine-tuned Gemma healthcare model directly on-device. This guarantees offline accessibility, zero data latency, and complete user privacy.",
      keyFeatures: [
        "Offline / On-Device AI Chatbot: Instant medical query responses without internet dependency",
        "Fine-Tuned Gemma Model: Trained using specialized healthcare datasets from Hugging Face",
        "Multilingual AI Chat & Voice Assistant: Accessibility across language barriers",
        "Prescription OCR: Digital scanning and extraction of medical prescriptions",
        "20+ Integrated Features: Symptom analysis, medicine reminders, health/vital tracking, vaccination management, first aid support, emergency assistance, family profiles, and wellness check-ins"
      ],
      techStack: ["Python", "Gemma LLM", "Hugging Face", "Offline AI", "OCR", "Node.js", "SQLite"],
      aiDetails: {
        modelName: "Gemma Healthcare Model",
        dataset: "Hugging Face Medical Datasets",
        execution: "On-Device / Offline AI Inference Engine",
        highlights: "Fine-tuned for accurate health query processing without internet dependencies"
      },
      architectureFlow: [
        { title: "Patient Interaction", detail: "Symptom input, voice query, or prescription image scan" },
        { title: "On-Device Preprocessing", detail: "Local text formatting, speech processing, and OCR text extraction" },
        { title: "Fine-Tuned Gemma LLM", detail: "Offline model processes query locally with medical contextual awareness" },
        { title: "Instant Response & Reminders", detail: "Displays multilingual diagnosis support, logs vitals, or sets medicine alerts" }
      ],
      links: {
        github: "https://github.com/Mounish1701/SehatCare-Healthcare-App",
        demo: "https://play.google.com/store/apps/details?id=YOUR_PLAYSTORE_APP_ID", // Add Play Store link when ready
        docs: "#"
      }
    },
    {
      id: "medai",
      title: "MedAI – AI Medical Assistant",
      subtitle: "Retrieval-Augmented Generation (RAG) Healthcare System",
      isFlagship: true,
      badge: "Featured Project • RAG Pipeline",
      category: "AI & Full-Stack",
      shortDescription: "An intelligent medical document Q&A assistant utilizing Retrieval-Augmented Generation (RAG), LangChain, LLMs, Next.js, NestJS, FastAPI, and PostgreSQL.",
      fullDescription: "MedAI is an advanced AI-powered medical assistant designed to provide accurate healthcare support by analyzing medical documents. It employs Retrieval-Augmented Generation (RAG) to ground LLM responses in real medical literature and records.",
      problem: "Standard LLMs can hallucinate medical advice or lack access to domain-specific clinical documents and up-to-date research papers.",
      solution: "Implemented a RAG pipeline using LangChain. Relevant document segments are retrieved from PostgreSQL vector stores and fed to the LLM to generate precise, grounded answers.",
      keyFeatures: [
        "Retrieval-Augmented Generation (RAG) with LangChain and LLMs",
        "Medical Document Question Answering with factual context anchoring",
        "High-performance FastAPI microservices for vector indexing and retrieval",
        "Scalable NestJS backend architecture with PostgreSQL database",
        "Modern, responsive Next.js frontend interface"
      ],
      techStack: ["Next.js", "NestJS", "FastAPI", "PostgreSQL", "LangChain", "RAG", "LLMs"],
      architectureFlow: [
        { title: "User Question", detail: "Patient or clinician submits query via Next.js frontend" },
        { title: "Document Retrieval", detail: "LangChain & FastAPI retrieve relevant medical context chunks" },
        { title: "Relevant Context", detail: "Context is injected alongside the prompt into the LLM" },
        { title: "LLM Processing", detail: "LLM synthesizes response based strictly on medical context" },
        { title: "Contextual Response", detail: "Delivers verified response with document citations" }
      ],
      links: {
        github: "https://github.com/Mounish1701/MedAI-Assistant",
        demo: "https://medai-demo.example.com",
        docs: "#"
      }
    },
    {
      id: "student-task-manager",
      title: "Student Task Management App",
      subtitle: "Academic Productivity & Notification System",
      isFlagship: false,
      badge: "Full-Stack Project",
      category: "Web & Productivity",
      shortDescription: "A system for creating, organizing, and tracking academic tasks and deadlines with automated time-based notifications.",
      fullDescription: "Built a comprehensive Student Task Management System designed to boost academic productivity through structured task creation, deadline reminders, and visual progress tracking.",
      problem: "Students frequently miss project deadlines or study milestones due to lack of automated alerts and poor task visualization.",
      solution: "Developed an intuitive web application with automated date- and time-based notification triggers to keep students informed of upcoming events.",
      keyFeatures: [
        "Task creation, categorization, and priority assignment",
        "Automated date- and time-based notification reminders",
        "Task scheduling calendar and deadline tracking",
        "Visual progress monitoring tools to optimize study schedules"
      ],
      techStack: ["HTML5", "CSS3", "Node.js", "Express.js", "EJS", "SQLite"],
      architectureFlow: [
        { title: "Task Entry", detail: "Student inputs assignment title, due date, and reminder time" },
        { title: "Scheduler Engine", detail: "Express backend queues automated cron notifications" },
        { title: "Progress Dashboard", detail: "Visual indicators update as tasks move from pending to complete" }
      ],
      links: {
        github: "https://github.com/Mounish1701/Student-Task-Manager",
        demo: "#"
      }
    },
    {
      id: "bus-reservation",
      title: "Bus Reservation System",
      subtitle: "Database-Backed Transit Booking System",
      isFlagship: false,
      badge: "Backend & Systems",
      category: "Backend & Database",
      shortDescription: "A transit booking engine enabling users to search buses, reserve seats, compute fares, and manage passenger records.",
      fullDescription: "Engineered a database-backed bus reservation system providing route lookup, authentication, dynamic fare calculation, and transactional booking management.",
      problem: "Manual booking methods lead to seat overlap errors, fare discrepancies, and insecure handling of passenger logs.",
      solution: "Created a robust relational database model that ensures seat allocation locking, automated fare calculation, and secure user account management.",
      keyFeatures: [
        "Bus search and route availability lookup",
        "Real-time seat allocation and booking management",
        "User authentication and profile security",
        "Dynamic fare calculation engine based on route distance and seat class",
        "Database-backed records for passenger and schedule management"
      ],
      techStack: ["Python", "Java", "SQL", "MySQL", "CRUD Operations"],
      architectureFlow: [
        { title: "Search Routes", detail: "User specifies departure, destination, and travel date" },
        { title: "Seat Map & Fare Engine", detail: "Displays real-time seat matrix and calculates total ticket price" },
        { title: "Secure Booking", detail: "Commits transactional reservation to SQL database" }
      ],
      links: {
        github: "https://github.com/Mounish1701/Bus-Reservation-System",
        demo: "#"
      }
    }
  ],

  whatIBuild: [
    {
      title: "AI-Powered Applications",
      description: "Developing intelligent web and mobile software integrating LLMs, Gemma models, fine-tuned healthcare neural engines, and natural language assistants.",
      icon: "Sparkles",
      tags: ["Gemma LLM", "Hugging Face", "Offline AI", "Voice Assistants"]
    },
    {
      title: "RAG Systems",
      description: "Building Retrieval-Augmented Generation architectures with LangChain, vector retrieval, and document context grounding for factual Q&A applications.",
      icon: "Database",
      tags: ["LangChain", "LangGraph", "Vector Stores", "Context Grounding"]
    },
    {
      title: "Backend Services & APIs",
      description: "Architecting reliable microservices, REST APIs, database schemas, and data processing workflows using Node.js, Express, FastAPI, and NestJS.",
      icon: "Server",
      tags: ["FastAPI", "NestJS", "Express.js", "SQL Databases"]
    },
    {
      title: "Full-Stack Applications",
      description: "Crafting end-to-end responsive web applications with interactive frontends, clean data models, user authentication, and automated notifications.",
      icon: "Layers",
      tags: ["React", "Next.js", "Node.js", "PostgreSQL", "SQLite"]
    }
  ],

  education: {
    institution: "Cambridge Institute of Technology, Bangalore",
    degree: "Bachelor of Engineering (B.E.)",
    branch: "Information Science and Engineering",
    period: "2023 – Present",
    currentStatus: "Currently in 4th Year",
    cgpa: "8.33 / 10.0",
    coursework: [
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Full Stack Development",
      "Principles of Data Science",
      "Artificial Intelligence",
      "Agentic AI",
      "Data Structures and Algorithms (DSA)",
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Introduction to Python",
      "Internet of Things (IoT)",
      "Microprocessors and Microcontrollers"
    ]
  },

  certifications: [
    {
      title: "Programming Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      type: "NPTEL Certification",
      description: "Demonstrated proficiency in algorithmic problem solving, computational complexity analysis, and advanced Python data structures.",
      link: "YOUR_NPTEL_CERTIFICATE_URL_HERE"
    },
    {
      title: "Agentic AI Course Completion Certificate",
      issuer: "Edureka",
      type: "Edureka Certification",
      description: "Specialized training in building autonomous AI agents, LangChain/LangGraph workflows, tool orchestration, and LLM reasoning patterns.",
      link: "YOUR_EDUREKA_CERTIFICATE_URL_HERE"
    }
  ],

  strengths: [
    {
      title: "Problem Solving & Analytical Thinking",
      desc: "Strong foundation in data structures, algorithms, and logical breakdown of complex software requirements.",
      icon: "Brain"
    },
    {
      title: "Quick Learner & Adaptable",
      desc: "Fast at adopting new frameworks, AI libraries, cloud tools, and fast-paced tech environments.",
      icon: "Zap"
    },
    {
      title: "Data & AI Production Focus",
      desc: "Passionate about Data Engineering, production support, model efficiency, and operational excellence.",
      icon: "Activity"
    },
    {
      title: "Team Collaboration & Communication",
      desc: "Effective communicator accustomed to cross-functional group work and agile development practices.",
      icon: "Users"
    }
  ],

  githubSection: {
    title: "Open Source & Repositories",
    subtitle: "Explore code bases, AI implementations, and project repositories",
    profileUrl: "https://github.com/Mounish1701",
    repos: [
      {
        name: "SehatCare-Offline-AI",
        description: "Offline AI-powered smart healthcare application with fine-tuned Gemma LLM & 20+ medical tools.",
        language: "Python",
        stars: "Featured",
        updated: "Primary Flagship",
        url: "https://github.com/Mounish1701/SehatCare-Offline-AI"
      },
      {
        name: "MedAI-RAG-Assistant",
        description: "Retrieval-Augmented Generation platform for medical document question answering with Next.js, NestJS & LangChain.",
        language: "TypeScript",
        stars: "Featured",
        updated: "Secondary Flagship",
        url: "https://github.com/Mounish1701/MedAI-RAG-Assistant"
      },
      {
        name: "Student-Task-Manager",
        description: "Academic task management app with automated time-based notifications and productivity tracking.",
        language: "JavaScript",
        stars: "Public",
        updated: "Full Stack",
        url: "https://github.com/Mounish1701/Student-Task-Manager"
      },
      {
        name: "Bus-Reservation-System",
        description: "Database-backed bus reservation and seat allocation engine with dynamic fare computation.",
        language: "SQL / Python",
        stars: "Public",
        updated: "Database System",
        url: "https://github.com/Mounish1701/Bus-Reservation-System"
      }
    ]
  }
};
