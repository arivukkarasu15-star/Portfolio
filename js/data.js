/**
 * =========================================================================
 * PORTFOLIO DATA (Strictly based on your resume & verified skills)
 * =========================================================================
 */

const portfolioData = {
  personalInfo: {
    name: "Arivukkarasu K",
    title: "Python Full Stack Developer",
    shortIntro: "Computer Science Engineering graduate with practical experience in Python development through internships and projects. Skilled in Python, Django, FastAPI, SQL, HTML, CSS, JavaScript, Git, and Docker, with experience building and deploying machine learning applications.",
    status: "Actively Seeking Opportunities",
    availability: "Open to Entry-Level Web Developer & Python Full Stack Roles",
    location: "Madurai, India",
    phone: "+91 8489065398",
    email: "arivukkarasu15@gmail.com",
    githubUrl: "https://github.com/arivukkarasu15-star",
    githubUser: "arivukkarasu15-star",
    linkedinUrl: "https://linkedin.com/in/arivukkarasu-star",
    linkedinUser: "arivukkarasu-star",
    resumePath: "assets/resume.pdf",
    profileImage: "assets/profile.jpg"
  },

  about: {
    paragraphs: [
      "I am a Computer Science Engineering graduate with a strong focus on Python development and building practical web applications. I work with Python, Django, FastAPI, and Flask for backend development, along with clean HTML, CSS, and JavaScript for responsive web interfaces.",
      "My project work includes developing a bilingual (English/Tamil) machine learning web application using Flask and Tesseract OCR with Docker deployment, as well as desktop productivity utilities integrating Python backends with modern web frontends.",
      "During my Data Analyst Internship at Sun Plastics, I worked with Microsoft Excel for data analysis and reporting, managed financial and transactional entries in Tally ERP, and performed data reconciliation. This analytical background helps me write structured, dependable code."
    ],
    highlights: [
      { label: "Core Backend", value: "Python, Django & FastAPI" },
      { label: "Frontend", value: "HTML, CSS & JavaScript" },
      { label: "Database", value: "PostgreSQL & SQL" },
      { label: "Internship", value: "Sun Plastics (Data Analyst Intern)" },
      { label: "Education", value: "B.E. CSE (Anna University)" }
    ]
  },

  skills: {
    backend: {
      title: "Backend Development",
      description: "Server architecture, REST APIs, and application logic",
      items: [
        { name: "Python", level: "Primary Language", focus: "OOP, Scripting, Automation" },
        { name: "Django", level: "Web Framework", focus: "MVC Architecture, ORM, Admin" },
        { name: "FastAPI", level: "Web Framework", focus: "High Performance REST APIs, Swagger" },
        { name: "Flask", level: "Micro-framework", focus: "Web Services, ML Integration" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      description: "Clean, responsive, and accessible user interfaces",
      items: [
        { name: "HTML5", level: "Semantic Markup", focus: "Page Structure, SEO, Accessibility" },
        { name: "CSS3", level: "Modern Styling", focus: "Flexbox, CSS Grid, Responsive Layouts" },
        { name: "JavaScript", level: "Client Scripting", focus: "DOM Manipulation, Events, Fetch API" }
      ]
    },
    database: {
      title: "Database & Analytics",
      description: "Relational data modeling, SQL queries, and spreadsheets",
      items: [
        { name: "PostgreSQL", level: "RDBMS", focus: "Relational Schema, Constraints" },
        { name: "SQL", level: "Query Language", focus: "Joins, Filtering, CRUD Operations" },
        { name: "Microsoft Excel", level: "Data Analytics", focus: "Formulas, Pivot Tables, Data Cleaning" },
        { name: "Tally ERP", level: "Enterprise Records", focus: "Transactions, Invoicing, Entry" }
      ]
    },
    tools: {
      title: "Tools, AI & DevOps",
      description: "Version control, containerization, and machine learning",
      items: [
        { name: "Git & GitHub", level: "Version Control", focus: "Repositories, Commits, Collaboration" },
        { name: "Docker", level: "Containerization", focus: "Dockerfile, Containers" },
        { name: "Tesseract OCR", level: "Text Recognition", focus: "Image to Text Extraction" },
        { name: "scikit-learn & Pandas", level: "Data/ML", focus: "Data Processing & Models" }
      ]
    }
  },

  projects: [
    {
      id: "fake-news-detection-using-ml",
      title: "Fake News Detection Using Machine Learning",
      subtitle: "Bilingual (English/Tamil) ML & OCR news verification web application",
      category: "AI & Machine Learning",
      badge: "Featured Project",
      description: "A bilingual (English/Tamil) fake news detection web application built with Python and Flask. Integrates machine learning classification with live news source cross-checking, an AI fallback mechanism for ambiguous predictions, and Tesseract OCR to classify news directly from uploaded article images.",
      problemSolved: "Assists in identifying potential misinformation in multilingual digital news by extracting text from article screenshots and applying machine learning classification.",
      techStack: ["Python", "Flask", "scikit-learn", "Pandas", "Tesseract OCR", "Docker"],
      features: [
        "Bilingual classification supporting English and Tamil text content",
        "Integrated Tesseract OCR to extract text directly from article images without manual typing",
        "AI-based fallback mechanism to handle uncertain or ambiguous predictions",
        "Live news source cross-checking for verification",
        "Containerized with Docker for deployment"
      ],
      githubUrl: "https://github.com/arivukkarasu15-star/Fake-News-Detection-Using-ML",
      stats: {
        languages: "English & Tamil",
        pipeline: "Flask + scikit-learn",
        container: "Dockerized"
      }
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Desktop personal expenditure management and visual analytics application",
      category: "Python Desktop App",
      badge: "Desktop Application",
      description: "A desktop expense tracker application built with Python, PyWebView, and Chart.js for logging, categorizing, and visualizing personal expenditures and budget trends.",
      problemSolved: "Provides an offline-capable tool to record daily expenses, categorize spending habits, and view financial summary charts.",
      techStack: ["Python", "PyWebView", "JavaScript", "HTML5", "CSS3"],
      features: [
        "Interactive expenditure visualization using Chart.js graphs",
        "Desktop application wrapper using PyWebView to render HTML/CSS/JS natively",
        "Category-based expense classification and date-based filtering",
        "Calculation of category totals and monthly summaries"
      ],
      githubUrl: "https://github.com/arivukkarasu15-star/Expense-Tracker",
      stats: {
        wrapper: "PyWebView",
        frontend: "HTML / CSS / JS",
        backend: "Python"
      }
    },
    {
      id: "to-do-app",
      title: "To-Do Task Management App",
      subtitle: "Offline desktop task manager and workflow tracker",
      category: "Python Web App",
      badge: "Desktop Application",
      description: "An offline task manager desktop application built with Python and Flask to organize daily tasks, manage deliverables, and update task statuses.",
      problemSolved: "Offers a lightweight offline task management tool to organize daily deliverables without requiring internet connectivity.",
      techStack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Task lifecycle state updates (Pending, In Progress, Completed)",
        "Flask backend handling local task records and state changes",
        "Responsive user interface built with HTML, CSS, and vanilla JavaScript",
        "Runs locally with zero external network dependencies"
      ],
      githubUrl: "https://github.com/arivukkarasu15-star/To-Do-App",
      stats: {
        framework: "Python Flask",
        storage: "Local Storage",
        ui: "HTML5 / CSS3 / JS"
      }
    }
  ],

  experience: [
    {
      id: "sun-plastics-intern",
      role: "Data Analyst Intern",
      company: "Sun Plastics",
      duration: "07/2025 – 10/2025",
      location: "Tamil Nadu, India",
      description: "Analyzed business datasets, maintained transactional records in Tally ERP, and prepared daily and monthly operational reports.",
      responsibilities: [
        "Analyzed and maintained business data using Microsoft Excel, including data cleaning, sorting, filtering, formulas, and pivot tables.",
        "Managed and maintained Tally ERP records, including sales, purchases, expenses, invoices, and financial transactions with accurate data entry.",
        "Prepared daily and monthly business reports and analyzed data to identify discrepancies, trends, patterns, and key business insights.",
        "Maintained accurate records and performed data validation and reconciliation to ensure consistency between Excel reports and Tally ERP data."
      ],
      skillsApplied: ["Microsoft Excel", "Tally ERP", "Data Cleaning", "Pivot Tables", "Financial Reconciliation", "Business Reporting"]
    }
  ],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Pandian Saraswathi Yadav Engineering College, Sivagangai",
      university: "Anna University",
      duration: "11/2022 – 08/2026",
      score: "CGPA: 7.69 / 10.0"
    },
    {
      degree: "HSC (Class XII) — State Board of Tamil Nadu",
      institution: "Annamalaiyaar Matric. Hr. Sec. School, Madurai",
      duration: "08/2021 – 05/2022",
      score: "Score: 84 / 100"
    },
    {
      degree: "SSLC (Class X) — State Board of Tamil Nadu",
      institution: "C.E.O.A Matric. Hr. Sec. School, Madurai",
      duration: "06/2019 – 04/2020",
      score: "Score: 91.2 / 100"
    }
  ],

  certificates: [
    {
      name: "Basics of Python",
      issuer: "Infosys Springboard"
    },
    {
      name: "Python Fundamentals",
      issuer: "Infosys Springboard"
    }
  ]
};
