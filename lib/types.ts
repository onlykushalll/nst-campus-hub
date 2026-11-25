export type Student = {
  username: string;
  name: string;
  program: string;
  year: number;
  bio: string;
  skills: string[];
  demo: boolean;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  author: string;
  tags: string[];
  url?: string;
  demo: boolean;
};

export type CampusEvent = {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: "Hackathon" | "Workshop" | "Deadline" | "Club session";
  location: string;
  demo: boolean;
};

export const resourceTopics = ["Git", "React", "Next.js", "Open Source", "DSA"] as const;
export type ResourceTopic = (typeof resourceTopics)[number];

export type Resource = {
  slug: string;
  title: string;
  description: string;
  topic: ResourceTopic;
  url: string;
};
