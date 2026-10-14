// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Digvijay Gupta",
  role: "Machine Learning Engineer",
  tagline: "I build end-to-end products — from data to deployment.",
  statement:
    "I excel at designing sophisticated machine learning solutions and I am proficient in various programming languages and DSA.",
  location: "Kanpur, India",
  email: "digvijaygworks@gmail.com",
  phone: "+91 90261 19978",
  phoneHref: "+919026119978",
};

export const links = {
  github: "https://github.com/digvijayguptaworks",
  linkedin: "https://www.linkedin.com/in/digvijaygupta29/",
  leetcode: "https://leetcode.com/u/digvijaygupta/",
};

export const stats = [
  { value: "3", label: "Projects shipped" },
  { value: "95%", label: "Model accuracy" },
  { value: "200+", label: "DSA problems solved" },
  { value: "5★", label: "HackerRank solving" },
];

export const skillGroups = [
  { title: "Machine Learning & AI", items: ["Machine Learning", "Deep Learning", "NLP (basics)"] },
  { title: "Programming Languages", items: ["Python", "Java", "PL/SQL"] },
  { title: "Data & ML Tools", items: ["Pandas", "NumPy", "Matplotlib", "Excel", "Kaggle"] },
  { title: "Web & Databases", items: ["Flask", "Streamlit", "REST APIs", "MySQL", "SQLite", "MongoDB"] },
  { title: "CS Fundamentals", items: ["Data Structures", "OOPs", "DBMS", "OS", "Software Engineering"] },
  { title: "Developer Tools", items: ["Git", "GitHub", "VS Code"] },
];

export const projects = [
  {
    slug: "mindinsight",
    title: "MindInsight",
    subtitle: "Mental Health Score Prediction API",
    date: "Oct 2026",
    accent: "wooddeep",
    repo: "https://github.com/digvijayguptaworks/MindInsight",
    demo: "https://mindinsight-1.onrender.com",
    tech: ["Python", "FastAPI", "Scikit-learn", "Pandas", "Pydantic", "Uvicorn", "Joblib", "Render"],
    points: [
      "Trained a scikit-learn Random Forest pipeline to predict an exploratory mental-health score from social-media usage, sleep, stress and lifestyle data.",
      "Packaged preprocessing and model into a single Joblib pipeline, served through a Pydantic-validated FastAPI /predict endpoint on Uvicorn.",
      "Deployed the API and a form frontend on Render — live and interactive, framed as an exploratory score rather than a clinical diagnostic tool.",
    ],
  },
  {
    slug: "aittendance",
    title: "AIttendance",
    subtitle: "AI Facial Recognition Attendance System",
    date: "Jan 2026",
    accent: "sage",
    repo: "https://github.com/digvijayguptaworks/AIttendance",
    tech: ["Python", "Flask", "MediaPipe", "OpenCV", "Scikit-learn", "SQLite", "REST APIs"],
    points: [
      "Built a face recognition model with 95%+ accuracy using MediaPipe and scikit-learn.",
      "Integrated Flask APIs and an SQLite DB for real-time attendance tracking.",
      "Improved response time to sub-second with background processing.",
    ],
  },
  {
    slug: "spamshield",
    title: "SpamShield",
    subtitle: "Intelligent Email & SMS Classifier",
    date: "May 2023",
    accent: "wood",
    repo: "https://github.com/digvijayguptaworks/SpamShield-Intelligent-Email-SMS-Classifier",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    points: [
      "Built an ML classifier (TF-IDF + Naive Bayes) with 95% accuracy.",
      "Designed a scalable end-to-end pipeline for preprocessing, training and evaluation.",
      "Deployed a real-time web app with a user-friendly interface.",
    ],
  },
];

export const education = [
  {
    date: "Dec 2022 — May 2026",
    title: "B.Tech — Computer Science & Engineering",
    place: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
    score: "CGPA 7.22 / 10",
  },
  {
    date: "2021 — 2022",
    title: "Intermediate (CBSE)",
    place: "Sri Ram Education Centre, Kanpur",
    score: "61.6%",
  },
  {
    date: "2019 — 2020",
    title: "High School (CBSE)",
    place: "Sri Ram Education Centre, Kanpur",
    score: "78.6%",
  },
];

export const certifications = [
  { title: "Crash Course on Python", issuer: "Google & Coursera", tag: "Python" },
  { title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", issuer: "Oracle", tag: "Cloud & AI" },
  { title: "SQL (Basic)", issuer: "HackerRank", tag: "Databases" },
  { title: "Databricks Accredited Generative AI Fundamentals", issuer: "Databricks Academy", tag: "Generative AI" },
];

export const achievements = [
  "Finalist, Smart PSIT Hackathon (SPH) 2025.",
  "Solved 200+ problems on LeetCode; 5-star in Problem Solving on HackerRank.",
];
