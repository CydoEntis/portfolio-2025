export type Project = {
  name: string;
  description: string;
  image: string;
  codeImage?: string;
  liveUrl?: string;
  githubLinks?: { label: string; url: string }[];
  tech: string[];
};
