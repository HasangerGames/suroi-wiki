import MarkdownIt from "markdown-it";

export const CONFIG: Config = {
  port: 3000,
  markdownOptions: {
    linkify: true,
    typographer: true,
    html: true,
  }
};

export type Config = {
  port: number;
  markdownOptions: MarkdownIt.Options
};
