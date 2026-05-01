export const personalInfo = {
  name: "Hariharan Arumugam",
  role: "Application Support Engineer",
  experience: "5+",
  location: "Chennai, India",
  email: "hariharanoutlooks@gmail.com",
  phone: "+91 97892 76074",
  linkedin: "https://linkedin.com/in/hariharan-arumugam-b27572195",
  github: "https://github.com",
  resumeUrl: "/resume/Hariharan_Arumugam_Resume_2026.pdf",
  summary:
    "Application Support Engineer with 5+ years of hands-on experience in L1/L2 production support, incident management, and enterprise application maintenance within large-scale IT environments. Proven track record of transitioning 16+ applications with zero downtime, resolving 100+ monthly tickets, and driving measurable improvements in SLA compliance, security posture, and operational efficiency.",
  summaryExtended:
    "Adept at leveraging SQL/PL/SQL, SAP reporting, and ITIL best practices to deliver robust, business-critical support across global insurance and financial domains.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Apps Transitioned", value: 16, suffix: "+" },
  { label: "Monthly Tickets Resolved", value: 100, suffix: "+" },
  { label: "Security Risk Reduction", value: 30, suffix: "%" },
  { label: "Manual Effort Saved", value: 20, suffix: "%" },
];

export const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Senior Process Executive — Application Support",
    period: "Jan 2021 — Present",
    domain: "Insurance & Financial IT",
    categories: [
      {
        label: "Production Support & Incident Management",
        color: "#64ffda",
        items: [
          "Deliver L1/L2 production support for business-critical insurance applications, maintaining high availability and minimal disruption for UK, Nordic, and Germany regions.",
          "Proactively monitor application health using Splunk dashboards and custom alerts; identify and resolve incidents within agreed SLA windows, achieving a 15% improvement in SLA compliance.",
          "Lead root cause analysis (RCA) exercises for recurring incidents, implementing permanent fixes that reduced repeat ticket volumes significantly over 12 months.",
        ],
      },
      {
        label: "Application Transitions & Change Management",
        color: "#bd93f9",
        items: [
          "Successfully transitioned 16+ insurance applications end-to-end — including Germany applications — with zero downtime and full post-transition stability.",
          "Manage release and change request pipelines via ServiceNow and Rally, coordinating with development teams to ensure smooth deployments and rollback readiness.",
        ],
      },
      {
        label: "Security, Compliance & Reporting",
        color: "#ff79c6",
        items: [
          "Reduced organizational security risk by 30% by actively utilizing vulnerability management tools — Qualys, Tanium, and Imperva — to identify, prioritize, and remediate threats.",
          "Manage SSL certificate lifecycle and ensure compliance with internal security standards and external audit requirements on a continuous basis.",
          "Automated SAP reconciliation reporting for UK and Nordic financial transactions and claims processing, reducing manual effort by 20% and improving data accuracy.",
          "Build and maintain Power BI dashboards to provide leadership with real-time visibility into application health, ticket trends, and SLA performance.",
        ],
      },
    ],
  },
];

export const skills = {
  "Support & Ops": [
    { name: "L1/L2 Production Support", level: 95 },
    { name: "Incident & Problem Management", level: 90 },
    { name: "Root Cause Analysis (RCA)", level: 85 },
    { name: "SLA Management", level: 90 },
  ],
  Technical: [
    { name: "SQL / PL/SQL", level: 85 },
    { name: "SAP Reporting", level: 80 },
    { name: "Power BI", level: 75 },
    { name: "Splunk", level: 78 },
  ],
  "Platforms & Tools": [
    { name: "ServiceNow", level: 88 },
    { name: "Qualys / Tanium / Imperva", level: 80 },
    { name: "Rally", level: 75 },
    { name: "SQL Developer", level: 82 },
  ],
  Processes: [
    { name: "ITIL Framework", level: 90 },
    { name: "Change & Release Management", level: 85 },
    { name: "Application Transitions", level: 92 },
    { name: "Audit Compliance", level: 80 },
  ],
};

export const projects = [
  {
    title: "SAP Reporting Support — UK & Nordic Regions",
    description:
      "Managed end-to-end SAP reporting for claims processing and financial transactions across UK and Nordic markets, ensuring 100% accuracy in regulatory reporting.",
    highlights: [
      "Designed and implemented automation for reconciliation reporting",
      "Reduced cycle time by 20%",
      "Enabled team to redirect effort to higher-value tasks",
      "Ensured 100% accuracy in regulatory reporting",
    ],
    tags: ["SAP", "Power BI", "Automation", "Financial Reporting"],
    icon: "chart",
  },
  {
    title: "Germany Applications Transition",
    description:
      "Led full lifecycle application transition including stakeholder coordination, documentation, knowledge transfer sessions, and go-live support.",
    highlights: [
      "Led full lifecycle transition end-to-end",
      "Zero post-transition P1 incidents during hypercare",
      "Earned commendation from client delivery manager",
      "Complete documentation and knowledge transfer",
    ],
    tags: ["ITIL", "ServiceNow", "Change Management", "Stakeholder Mgmt"],
    icon: "transfer",
  },
];

export const achievements = [
  {
    stat: "16+",
    description: "Insurance applications transitioned across Germany, UK, and Nordic regions with zero downtime",
    icon: "rocket",
  },
  {
    stat: "100+",
    description: "Monthly tickets resolved consistently, driving a 15% uplift in SLA compliance",
    icon: "ticket",
  },
  {
    stat: "20%",
    description: "Manual effort saved through SAP reconciliation workflow automation",
    icon: "automation",
  },
  {
    stat: "30%",
    description: "Security vulnerability exposure reduced through proactive monitoring and remediation",
    icon: "shield",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Sri Sankara Arts and Science College, Kumbakonam",
  period: "2017 — 2020",
};

export const certifications = [
  {
    name: "ITIL Foundation Certified",
    description: "IT Service Management best practices, incident, change, and problem management frameworks.",
  },
];

export const coreCompetencies = [
  "L1/L2 Production Support",
  "Incident & Problem Management",
  "Root Cause Analysis",
  "SLA Management",
  "SQL / PL/SQL",
  "SAP Reporting",
  "Power BI",
  "Splunk",
  "ServiceNow",
  "Rally",
  "Qualys",
  "Tanium",
  "Imperva",
  "SSL Management",
  "ITIL Framework",
  "Change & Release Management",
  "Application Transitions",
  "Audit Compliance",
  "Stakeholder Communication",
  "Cross-functional Collaboration",
];
