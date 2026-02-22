export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  githubLinks?: { label: string; url: string }[];
  liveUrl?: string;
};
