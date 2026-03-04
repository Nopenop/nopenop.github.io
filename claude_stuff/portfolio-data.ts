export type Chip = { label: string; color?: 'green' | 'blue' | 'pink' };

export type CardData = {
  tag: string;
  tagColor?: 'green' | 'blue' | 'pink' | 'purple';
  title: string;
  bullets?: string[];
  body?: string;
  date?: string;
};

export type SkillSection = {
  heading: string;
  chips: Chip[];
};

export const heroData = {
  eyebrow: 'Available May 2026',
  line1: 'Software',
  line2: 'Engineer.',
  description:
    'CS student at Florida Polytechnic University specialising in cloud-native infrastructure, Kubernetes, Rust, and AI/ML. Currently interning at Applied Research Associates building production systems.',
  stats: [
    { num: '3.95', label: 'GPA' },
    { num: '2yr', label: 'Industry Exp' },
    { num: 'CKAD', label: 'Certified' },
  ],
};

export const experienceCards: CardData[] = [
  {
    tag: 'Full-time Intern · Hybrid',
    tagColor: 'green',
    title: 'Software Engineer Intern — Applied Research Associates',
    bullets: [
      'Implemented Publish-Subscribe communication over NATS data layer in Rust',
      'Created and deployed Kubernetes cluster apps with load balancing, gateway routing & dynamic scaling',
      'Developed Rust applications compiled into OCI containers via Docker CLI',
      'Wrote GitLab CI/CD pipelines using YAML manifests & bash scripting',
      'Documented service architecture with Jira Wiki Pages and README.md',
    ],
    date: 'May 2024 — Present · Orlando, FL',
  },
  {
    tag: 'Leadership · Part-time',
    tagColor: 'blue',
    title: 'Vice Chair — IEEE Computer Society @ Florida Poly',
    bullets: [
      'Organised general meetings with 20+ members, coordinating with IEEE professionals',
      'Created and managed the society GitHub organisation',
      'Developed programming workshops with open-source code for students',
    ],
    date: 'May 2025 — Present · Lakeland, FL',
  },
  {
    tag: 'Community',
    tagColor: 'pink',
    title: 'Rotaract Member — Florida Polytechnic University',
    body: 'Volunteered in community and school events, building leadership and civic engagement skills.',
    date: 'October 2023 — Present',
  },
  {
    tag: 'Education',
    tagColor: 'purple',
    title: 'Teaching Assistant',
    body: 'Tutored undergraduate students in fundamentals of C programming language.',
    date: 'January 2023 - May 2024',
  },
];

export const cloudCards: CardData[] = [
  {
    tag: 'CI/CD Pipeline',
    tagColor: 'green',
    title: 'GitLab CI/CD Rust Linting & Docker Compose Jobs',
    bullets: [
      'Automated linting & image builds across pipeline stages for 60+ team members',
      'Built Docker-in-Docker and Rust linting images for job execution',
    ],
    date: 'August 2025',
  },
  {
    tag: 'Kubernetes',
    tagColor: 'green',
    title: 'Local Kubernetes Cluster Administration',
    bullets: [
      'Built cluster via kubeadm on QEMU VMs with High Availability',
      'Deployed Calico CNI, managed ETCD, configured Gateway API',
      'Managed CPU/memory via Taints, Tolerations & Quotas',
      'Scaled persistent storage with StorageClass',
    ],
    date: 'July 2025',
  },
  {
    tag: 'Rust · NATS',
    tagColor: 'green',
    title: 'NATS Data Layer HTTP Bridge Interface',
    bullets: [
      'HTTP server endpoints mapping NATS pub/sub for integration testing',
      'Streaming for NATS Object Store using Tokio async runtime',
      'OCI images with Docker and Helm chart manifests',
    ],
    date: 'July 2025',
  },
  {
    tag: 'Django · GCP',
    tagColor: 'blue',
    title: 'RESTful Django HTTP Server Monitor',
    bullets: [
      'Deployed RESTful API to Google Cloud App Engine',
      'Spawned daemon threads on POST to monitor HTTP endpoints',
      'Emailed server admin on failure via SMTP',
    ],
    date: 'March 2025',
  },
];

export const mlCards: CardData[] = [
  {
    tag: 'LangChain · FastAPI',
    tagColor: 'pink',
    title: 'LangChain RAG Contractor Outreach Agent Platform',
    bullets: [
      'Designed agentic AI orchestration platform (client-server, B2B SaaS)',
      'Built RAG agents using LangChain Python API for dynamic runtime reasoning',
      'Deployed backend with FastAPI to Google Cloud App Engine',
    ],
    date: 'January 2025',
  },
  {
    tag: 'TensorFlow · Keras',
    tagColor: 'pink',
    title: 'ML for Edge Devices Workshop',
    bullets: [
      'Hands-on workshop: TensorFlow & Keras model creation, training, export',
      'Presented to 15+ attendees; covered ML and time series data',
      'Quantised & compiled RNN to run efficiently on Raspberry Pi 5',
    ],
    date: 'January 2025',
  },
];

export const skillSections: SkillSection[] = [
  {
    heading: 'Cloud & Infrastructure',
    chips: [
      { label: 'Kubernetes' }, { label: 'Docker' }, { label: 'GCP' },
      { label: 'GitLab CI/CD' }, { label: 'NATS' }, { label: 'Helm' },
      { label: 'Bash' }, { label: 'Linux' },
    ],
  },
  {
    heading: 'Languages & Frameworks',
    chips: [
      { label: 'Rust', color: 'blue' }, { label: 'Python', color: 'blue' },
      { label: 'FastAPI', color: 'blue' }, { label: 'Django', color: 'blue' },
      { label: 'C / C++', color: 'blue' }, { label: 'JavaScript', color: 'blue' },
      { label: 'HTML / CSS', color: 'blue' },
    ],
  },
  {
    heading: 'AI / ML',
    chips: [
      { label: 'TensorFlow', color: 'pink' }, { label: 'Keras', color: 'pink' },
      { label: 'NumPy', color: 'pink' }, { label: 'Matplotlib', color: 'pink' },
      { label: 'Hugging Face', color: 'pink' }, { label: 'LangChain', color: 'pink' },
      { label: 'RAG', color: 'pink' },
    ],
  },
  {
    heading: 'Databases & Tools',
    chips: [
      { label: 'MariaDB' }, { label: 'MySQL' }, { label: 'Jira' },
      { label: 'Git' }, { label: 'ROS2' }, { label: 'Raspberry Pi' },
    ],
  },
];

export const awards = [
  { label: '✦ Certified Kubernetes Application Developer — Dec 2025', color: 'green' as const },
  { label: '✦ Eagle Scout Award — June 2022', color: 'green' as const },
  { label: '★ President\'s List — Fall 2022', color: 'blue' as const },
  { label: '★ President\'s List — Spring 2023', color: 'blue' as const },
  { label: '★ President\'s List — Fall 2023', color: 'blue' as const },
];
