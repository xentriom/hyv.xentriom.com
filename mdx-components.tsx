import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    code: ({ children, ...props }) => (
      <code className="font-mono" {...props}>
        {children}
      </code>
    ),
  };
}
