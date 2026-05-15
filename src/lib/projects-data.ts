import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "healthmetrics",
    name: "HealthMetrics Pro",
    tagline: "Clinical Quality Intelligence Dashboard",
    description:
      "HEDIS quality compliance dashboard for 500+ synthetic patients - care gap analysis, payer-level filtering, and one-click CSV export for health system reporting.",
    techStack: ["React", "FastAPI", "PostgreSQL", "Recharts", "HEDIS"],
    liveUrl: "https://healthmetrics-web.onrender.com",
    githubUrl: "https://github.com/NithyaReddyVemula/healthmetrics-pro",
    color: "#be185d",
    metrics: [
      { label: "Patients", value: "500+" },
      { label: "HEDIS Measures", value: "12" },
      { label: "API Latency", value: "<200ms" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
  {
    id: "datapulse",
    name: "DataPulse",
    tagline: "Real-Time Financial Risk Monitoring",
    description:
      "Live transaction stream via WebSocket with dual Z-score + IQR anomaly detection. Flags outliers in real time with a D3 risk gauge and flash alerts.",
    techStack: ["React", "FastAPI", "WebSockets", "D3.js", "PostgreSQL"],
    liveUrl: "https://datapulse-web.onrender.com",
    githubUrl: "https://github.com/NithyaReddyVemula/datapulse",
    color: "#7c2d6b",
    metrics: [
      { label: "TX/Second", value: "~5" },
      { label: "Detection", value: "Dual Z+IQR" },
      { label: "WS Latency", value: "<50ms" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
  {
    id: "datawatchdog",
    name: "DataWatchdog",
    tagline: "Automated Data Quality Monitoring",
    description:
      "Upload any CSV, define quality rules (null %, duplicates, range, format), schedule automated checks, and get email alerts when quality drops below threshold.",
    techStack: ["React", "FastAPI", "APScheduler", "Resend", "PostgreSQL"],
    liveUrl: "https://datawatchdog-web.onrender.com",
    githubUrl: "https://github.com/NithyaReddyVemula/datawatchdog",
    color: "#4a1340",
    metrics: [
      { label: "Check Types", value: "5" },
      { label: "Scheduling", value: "Cron" },
      { label: "Alert Speed", value: "<1s" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Dallas College",
    role: "Data Analyst",
    period: "Sep 2025 – Present",
    bullets: [
      "Built end-to-end ETL workflow for a federal DOL healthcare project integrating Power Apps, Power Automate, and SQL - reducing data entry errors by 35% across 9 partner organizations",
      "Automated WIOA/PIRL compliance validation with SQL and Python to enforce federal data governance standards for PII-sensitive data",
      "Migrated Excel reports to Tableau and Power BI dashboards; trained 70+ users achieving 70% stakeholder adoption",
    ],
    color: "#be185d",
    type: "healthcare" as const,
  },
  {
    company: "JPMorgan Chase",
    role: "Data Analyst",
    period: "Aug 2024 – Sep 2025",
    bullets: [
      "Analyzed high-volume transaction data in Snowflake and AWS Redshift to detect fraud indicators and credit-risk shifts, improving risk-review accuracy by 18%",
      "Optimized ETL pipelines in Databricks using PySpark, cutting job runtime from 2 hours to under 30 minutes",
      "Built Tableau dashboards integrating dispute KPIs and retention metrics, eliminating 6 hours of manual reporting per week",
    ],
    color: "#7c2d6b",
    type: "finance" as const,
  },
  {
    company: "George Mason University",
    role: "Assistant Data Analyst",
    period: "Aug 2023 – Aug 2024",
    bullets: [
      "Analyzed student performance and engagement data with Python and R; A/B testing reduced course churn by 15%",
      "Trained 150+ students on optimized SQL queries - cutting execution time from 30 seconds to under 5 seconds",
      "Designed Tableau dashboards with drill-down features to track enrollment KPIs for university stakeholders",
    ],
    color: "#f9a8d4",
    type: "education" as const,
  },
  {
    company: "Deloitte",
    role: "Data Analyst",
    period: "Aug 2020 – Jul 2022",
    bullets: [
      "Migrated legacy data to Azure Synapse Analytics via Azure Data Factory and Databricks (PySpark), improving integration reliability and consistency",
      "Built Power BI and Tableau executive dashboards integrating multi-source data, reducing decision turnaround time by 40%",
      "Conducted data lineage root-cause analysis across Snowflake and AWS Redshift, improving data reliability by 20%",
    ],
    color: "#4a1340",
    type: "consulting" as const,
  },
];

export const SKILLS = [
  // Analytics & Data Engineering
  { name: "SQL", cluster: "analytics" as const },
  { name: "Python", cluster: "analytics" as const },
  { name: "R", cluster: "analytics" as const },
  { name: "SAS", cluster: "analytics" as const },
  { name: "Pandas", cluster: "analytics" as const },
  { name: "NumPy", cluster: "analytics" as const },
  { name: "ETL Pipelines", cluster: "analytics" as const },
  { name: "Data Governance", cluster: "analytics" as const },
  // Visualization & Reporting
  { name: "Tableau", cluster: "visualization" as const },
  { name: "Power BI", cluster: "visualization" as const },
  { name: "Excel (Advanced)", cluster: "visualization" as const },
  { name: "Matplotlib", cluster: "visualization" as const },
  { name: "Seaborn", cluster: "visualization" as const },
  { name: "D3.js", cluster: "visualization" as const },
  // Cloud & Databases
  { name: "Snowflake", cluster: "cloud" as const },
  { name: "AWS Redshift", cluster: "cloud" as const },
  { name: "Azure Databricks", cluster: "cloud" as const },
  { name: "GCP", cluster: "cloud" as const },
  { name: "Spark (PySpark)", cluster: "cloud" as const },
  { name: "PostgreSQL", cluster: "cloud" as const },
  { name: "MongoDB", cluster: "cloud" as const },
  // Machine Learning & Tools
  { name: "Scikit-learn", cluster: "healthcare" as const },
  { name: "NLTK", cluster: "healthcare" as const },
  { name: "A/B Testing", cluster: "healthcare" as const },
  { name: "Random Forest", cluster: "healthcare" as const },
  { name: "Logistic Regression", cluster: "healthcare" as const },
  { name: "Power Apps", cluster: "healthcare" as const },
  { name: "Agile / Scrum", cluster: "healthcare" as const },
];
