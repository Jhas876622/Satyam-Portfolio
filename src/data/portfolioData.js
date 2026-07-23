import {
  Rocket, Activity, TrendingUp, GraduationCap, Zap,
  Code2, Database, Layers, LineChart, Wrench, Trophy, Award
} from 'lucide-react';

import PHOTO from '../profile.jpg';
import pisaImg from '../assets/projects/pisa.png';
import adCampaignImg from '../assets/projects/ad-campaign.png';
import edaImg from '../assets/projects/eda.png';
import maskDetectionImg from '../assets/projects/mask-detection.png';

export const PROFILE = {
  name: 'Satyam Kumar Jha',
  greeting: "Hello, I'm",
  bio: [
    "I'm Satyam, a data and ML enthusiast in my final year of BTech (IT) at Bhagwan Parshuram Institute of Technology, New Delhi.",
    "I got into tech because I liked solving problems, and stayed because I realized you can actually ship solutions, not just study them. Every project I've built is deployed and live.",
  ],
  location: 'New Delhi, India',
  email: 'jha876622@gmail.com',
  linkedin: 'https://www.linkedin.com/in/satyam-kumar-jha-27545a288/',
  github: 'https://github.com/Jhas876622',
  resumeUrl: '/resume.pdf',
  photoUrl: PHOTO,
};

export const ROLES = ['Data & Business Analyst'];

export const STATS = [
  { value: 4, suffix: '+', decimals: 0, label: 'Live, deployed projects', icon: Rocket },
  { value: 99.48, suffix: '%', decimals: 2, label: 'CV model accuracy', icon: Activity },
  { value: 2.9, suffix: '×', decimals: 1, label: 'ROAS uplift surfaced', icon: TrendingUp },
  { value: 8.4, suffix: '', decimals: 1, label: 'CGPA / 10', icon: GraduationCap },
];

export const HERO_CHIPS = [
  { text: '99.48% accuracy', icon: Activity, pos: 'top-2 -left-6 md:-left-10' },
  { text: '2.9× ROAS found', icon: TrendingUp, pos: 'top-1/3 -right-8 md:-right-12' },
  { text: '4+ apps shipped', icon: Zap, pos: 'bottom-16 -left-8 md:-left-14' },
];

export const QUICK_FACTS = [
  { label: 'Degree', value: 'BTech, Information Technology' },
  { label: 'Institution', value: 'BPIT · GGSIPU, New Delhi' },
  { label: 'Batch', value: '2023 - 2027' },
  { label: 'CGPA', value: '8.4 / 10' },
  { label: 'Focus', value: 'Data Analytics · ML · Product' },
];

export const SKILLS = [
  { title: 'Languages', icon: Code2, items: ['Python', 'Java', 'SQL', 'C'] },
  { title: 'Data & ML', icon: Database, items: ['pandas', 'NumPy', 'DuckDB', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV'] },
  { title: 'Web & API', icon: Layers, items: ['Flask', 'FastAPI', 'REST APIs'] },
  { title: 'BI & Visualization', icon: LineChart, items: ['Power BI', 'Tableau', 'Plotly Dash', 'Streamlit', 'Matplotlib', 'Seaborn'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'Excel (Advanced)'] },
  { title: 'Deployment', icon: Rocket, items: ['Render', 'Streamlit Cloud'] },
];

export const ALL_TOOLS = ['Python', 'SQL', 'pandas', 'Power BI', 'Tableau', 'Scikit-learn', 'TensorFlow', 'Streamlit', 'Plotly Dash', 'DuckDB', 'FastAPI', 'Flask', 'OpenCV', 'NumPy', 'Keras', 'Git', 'Excel'];

export const EXPERIENCE = [
  {
    role: 'Data Analytics Intern',
    org: 'LearnToUpgrade',
    period: 'Jun 2025 - Aug 2025',
    mode: 'Hybrid · New Delhi',
    points: [
      'Built an interactive data-exploration platform in Streamlit letting non-technical users upload datasets, generate synthetic data, and run EDA without writing code.',
      'Shipped a responsive, production-ready UI with advanced visualizations, which was the primary deliverable of the internship.',
    ],
  },
];

export const COMMUNITY_LEADERSHIP = [
  {
    role: 'Treasurer',
    org: 'Drishti Rotaract Club',
    period: 'Oct 2023 - Present',
    mode: 'Leadership · BPIT',
    points: [
      'Manage club finances, budgets, and reimbursements across all events and outreach drives.',
      'Maintain transparent accounting for the executive board and coordinate with vendors.',
    ],
  },
  {
    role: 'Sponsorship Head',
    org: 'BPIT Cultural Committee',
    period: '2024 - 2025',
    mode: 'Leadership · College Fest',
    points: [
      'Led sponsorship outreach for the annual cultural fest; secured brand partnerships across verticals.',
      'Built pitch decks, negotiated deliverables, and closed sponsorship deals end-to-end.',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'PISA (Predictive Inventory & Spoilage Alert System)',
    tagline: 'AI supply-chain intelligence inspired by Zomato Hyperpure',
    description:
      'Two-model ML pipeline (Gradient Boosting for demand forecasting and Random Forest for spoilage-risk classification) using time, weather, festival, and inventory-age features to drive procurement decisions. An optimization engine balances overstocking vs. understocking cost to recommend purchase quantities.',
    stack: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly', 'Gradient Boosting', 'Random Forest'],
    live: 'https://hyperpure-pisa.streamlit.app',
    github: 'https://github.com/Jhas876622/Zomato-Hyperpure_PISA',
    image: pisaImg,
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Ad Campaign Analytics Platform',
    tagline: 'A/B testing that surfaced a 2.9× ROAS finding',
    description:
      "End-to-end analytics platform running Welch's t-test on campaign variants, with DuckDB-powered aggregations and an interactive Plotly Dash frontend. Statistically validated the winning variant and quantified lift.",
    stack: ['Python', 'SQL', 'DuckDB', 'Plotly Dash', 'A/B Testing'],
    live: 'https://ad-campaign-analytics.onrender.com',
    github: 'https://github.com/Jhas876622/Ad-Campaign-Analytics',
    image: adCampaignImg,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Advanced EDA Visualizer',
    tagline: 'Codeless exploratory analysis, an internship deliverable',
    description:
      'Interactive EDA tool that lets users upload datasets, explore built-in samples, and generate synthetic data. Built for beginners and analysts alike, wrapping pandas + Plotly behind a clean Streamlit UI.',
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'NumPy'],
    live: 'https://enhanced-data-visualization-app.streamlit.app',
    github: 'https://github.com/Jhas876622/Enhanced-Data-visualization-streamlit-app',
    image: edaImg,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Real-Time Face Mask Detection',
    tagline: '99.48% accuracy on a live webcam feed',
    description:
      'Real-time computer-vision system built on MobileNetV2 fine-tuned for mask classification, served through a Flask backend with OpenCV video capture. Deployed and reachable from a browser.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV', 'MobileNetV2'],
    live: 'https://real-time-face-mask-detection.onrender.com',
    github: 'https://github.com/Jhas876622/Real-Time-Face-Mask-Detection',
    image: maskDetectionImg,
    accent: 'from-purple-500 to-indigo-500',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
    icon: Trophy,
    description: 'Practical business data analysis, data cleansing, and insight generation simulation.',
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft · LinkedIn',
    icon: Award,
    description: 'Foundational data analysis methodology, data querying, and visualization principles.',
  },
  {
    title: 'Get Started with Microsoft Data Analytics',
    issuer: 'Microsoft',
    icon: Award,
    description: 'Data ingestion, modeling, and analytical report generation with Microsoft BI stack.',
  },
  {
    title: 'Data Science',
    issuer: 'GeeksforGeeks',
    icon: Award,
    description: 'Hands-on machine learning algorithms, model evaluation, and Python data pipelines.',
  },
  {
    title: 'Power BI Workshop',
    issuer: 'Workshop Certificate',
    icon: LineChart,
    description: 'Building interactive dashboards, DAX queries, and KPI reporting graphics.',
  },
  {
    title: 'CGPA 8.4 / 10',
    issuer: 'Through Semester 6 · BPIT',
    icon: GraduationCap,
    description: 'Consistently high academic standing in BTech Information Technology curriculum.',
  },
];

export const NAV_ITEMS = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'experience', label: 'Experience', num: '03' },
  { id: 'leadership', label: 'Leadership', num: '04' },
  { id: 'projects', label: 'Projects', num: '05' },
  { id: 'certifications', label: 'Awards', num: '06' },
  { id: 'contact', label: 'Contact', num: '07' },
];
