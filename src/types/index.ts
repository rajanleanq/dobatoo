export interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  company: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'analytics';
  demoUrl?: string;
  githubUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}