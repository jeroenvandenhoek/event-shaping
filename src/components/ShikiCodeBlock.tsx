import { FC } from "react";
import { codeToHtml } from "shiki";

interface Props {
  className?: string;
  children: string;
}
export const ShikiCodeBlock: FC<Props> = async ({ className, children }) => {
  const html = await codeToHtml(children, {
    lang: className?.replace(/language-/, "") || "javascript",
    theme: "dark-plus",
  });
  console.log("html");
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};
