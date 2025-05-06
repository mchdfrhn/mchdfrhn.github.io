export const SITE_NAME = "Mochammad Farhan Ali";
export const SITE_URL = "https://farhanali.dev";
export const SITE_DESCRIPTION = "DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and automation solutions.";
export const SOCIAL_LINKS = {
  github: "https://github.com/farhanali",
  linkedin: "https://linkedin.com/in/farhanali",
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const SKILLS = {
  devOps: [
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "Jenkins", level: 80 },
    { name: "GitLab CI", level: 85 },
    { name: "GitHub Actions", level: 90 },
    { name: "Terraform", level: 75 },
    { name: "Ansible", level: 80 },
  ],
  cloud: [
    { name: "AWS", level: 85 },
    { name: "Google Cloud", level: 75 },
    { name: "Azure", level: 70 },
    { name: "DigitalOcean", level: 80 },
  ],
  programming: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Bash", level: 90 },
    { name: "Go", level: 65 },
  ],
  other: [
    { name: "Linux", level: 95 },
    { name: "Networking", level: 80 },
    { name: "Security", level: 75 },
    { name: "Monitoring", level: 85 },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Cloud Infrastructure Automation",
    description: "A comprehensive solution for automating AWS infrastructure deployment using Terraform and Ansible.",
    tags: ["AWS", "Terraform", "Ansible", "CI/CD"],
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Kubernetes Cluster Management Tool",
    description: "A tool for simplifying Kubernetes cluster management and deployment monitoring across multiple cloud providers.",
    tags: ["Kubernetes", "Go", "Docker", "Prometheus"],
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Kubernetes",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Orchestrator",
    description: "An orchestration system for managing complex CI/CD pipelines across multiple repositories and environments.",
    tags: ["GitLab CI", "Jenkins", "Python", "Docker"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "CI/CD",
  },
  {
    id: 4,
    title: "Infrastructure Monitoring Dashboard",
    description: "A centralized dashboard for monitoring infrastructure health, performance metrics, and alert management.",
    tags: ["Grafana", "Prometheus", "ELK Stack", "AWS"],
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Monitoring",
  },
  {
    id: 5,
    title: "Security Compliance Tool",
    description: "An automated tool for checking security compliance across cloud infrastructure and containerized applications.",
    tags: ["Python", "AWS", "Docker", "Security"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Security",
  },
  {
    id: 6,
    title: "Automated Database Backup System",
    description: "A system for automating database backups, testing, and restoration across multiple environments.",
    tags: ["Python", "PostgreSQL", "AWS S3", "Bash"],
    image: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Database",
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Best Practices for CI/CD Pipeline Security",
    excerpt: "Learn how to secure your CI/CD pipelines from common vulnerabilities and threats.",
    date: "2023-06-15",
    readingTime: "8 min read",
    category: "Security",
    featured: true,
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "ci-cd-pipeline-security",
  },
  {
    id: 2,
    title: "Kubernetes vs. Docker Swarm: Which One to Choose?",
    excerpt: "A comprehensive comparison of Kubernetes and Docker Swarm for container orchestration.",
    date: "2023-04-22",
    readingTime: "12 min read",
    category: "Containers",
    featured: false,
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "kubernetes-vs-docker-swarm",
  },
  {
    id: 3,
    title: "Infrastructure as Code: Terraform vs. CloudFormation",
    excerpt: "A detailed comparison of Terraform and AWS CloudFormation for infrastructure automation.",
    date: "2023-03-10",
    readingTime: "10 min read",
    category: "Infrastructure",
    featured: true,
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "terraform-vs-cloudformation",
  },
  {
    id: 4,
    title: "Monitoring Microservices: The Complete Guide",
    excerpt: "Learn how to effectively monitor microservices architecture with modern tooling.",
    date: "2023-02-05",
    readingTime: "15 min read",
    category: "Monitoring",
    featured: false,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "monitoring-microservices",
  },
  {
    id: 5,
    title: "Automating AWS Infrastructure with Terraform",
    excerpt: "A step-by-step guide to automate your AWS infrastructure using Terraform.",
    date: "2023-01-18",
    readingTime: "11 min read",
    category: "AWS",
    featured: false,
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "aws-terraform-automation",
  },
  {
    id: 6,
    title: "Implementing GitOps with ArgoCD",
    excerpt: "Learn how to implement GitOps workflows using ArgoCD for Kubernetes deployments.",
    date: "2022-12-07",
    readingTime: "9 min read",
    category: "GitOps",
    featured: false,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "gitops-with-argocd",
  }
];