export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link?: string;
  request_demo?: boolean;
  complexity: "Beginner" | "Intermediate" | "Advanced";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ContactInfo {
  name: string;
  title: string;
  paragraph1: string;
  paragraph2?: string;
  email: string;
  linkedin: string;
  github: string;
  address: string;
}
