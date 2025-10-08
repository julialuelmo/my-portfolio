export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  hasThesis?: boolean;
  hasGithub?: boolean;
  pdfUrl?: string;
}
