export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  demoUrl?: string;
  repoUrl: string;
  tags: string[];
  featured: boolean;
  techStack: string[];
  problem?: string;
  solution?: string;
  lessonsLearned?: string[];
  year: number;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}
